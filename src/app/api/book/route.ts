import { getSupabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { getBookingRateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEEKDAY_SLOTS = ["2:30 PM"];
const WEEKEND_SLOTS = ["10:00 AM"];

// Accepts common US phone formats: (781) 632-5193, 781-632-5193, +17816325193, etc.
const US_PHONE_RE = /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");
  if (!date) return NextResponse.json({ error: "Date required" }, { status: 400 });

  const dayOfWeek = new Date(date + "T00:00:00").getDay();
  if (dayOfWeek === 0) return NextResponse.json({ slots: [] });

  const allSlots = dayOfWeek === 6 ? WEEKEND_SLOTS : WEEKDAY_SLOTS;

  const supabase = getSupabaseAdmin();
  const { data: bookings } = await supabase
    .from("bookings")
    .select("time_slot")
    .eq("date", date)
    .eq("status", "confirmed");

  const booked = new Set((bookings ?? []).map((b: { time_slot: string }) => b.time_slot));
  const available = allSlots.filter((s) => !booked.has(s));

  return NextResponse.json({ slots: available });
}

export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
  const { success } = await getBookingRateLimit().limit(ip);
  if (!success) {
    return NextResponse.json(
      { error: "Too many booking attempts. Please wait and try again." },
      { status: 429 }
    );
  }

  const body = await req.json();
  const { name, phone, email, service, vehicle, location, date, timeSlot, notes } = body;

  if (!name || !phone || !date || !timeSlot) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Phone format validation
  if (!US_PHONE_RE.test(phone.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid US phone number." },
      { status: 400 }
    );
  }

  // Date must be today or future
  const bookingDate = new Date(date + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (bookingDate < today) {
    return NextResponse.json({ error: "Booking date must be in the future." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  // Max 1 booking per phone number per day
  const { count: phoneCount } = await supabase
    .from("bookings")
    .select("*", { count: "exact", head: true })
    .eq("date", date)
    .eq("phone", phone.trim())
    .eq("status", "confirmed");

  if ((phoneCount ?? 0) > 0) {
    return NextResponse.json(
      { error: "A booking for this phone number already exists on that date." },
      { status: 409 }
    );
  }

  // Race-condition guard: check slot is still open
  const { count } = await supabase
    .from("bookings")
    .select("*", { count: "exact", head: true })
    .eq("date", date)
    .eq("time_slot", timeSlot)
    .eq("status", "confirmed");

  if ((count ?? 0) > 0) {
    return NextResponse.json(
      { error: "That time slot was just taken. Please pick another." },
      { status: 409 }
    );
  }

  const { error: insertError } = await supabase.from("bookings").insert({
    date,
    time_slot: timeSlot,
    service: service || null,
    name,
    phone: phone.trim(),
    email: email || null,
    vehicle: vehicle || null,
    location: location || null,
    notes: notes || null,
    status: "confirmed",
  });

  if (insertError) {
    return NextResponse.json({ error: "Failed to save booking." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const formattedDate = new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Notify the business
  await resend.emails.send({
    from: "M&C Luxury Detailing <onboarding@resend.dev>",
    to: "mandcluxurydetailing@gmail.com",
    replyTo: email || undefined,
    subject: `New Booking — ${name} · ${formattedDate} @ ${timeSlot}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111;">
        <h2 style="background:#060606;color:#c9a84c;padding:1.5rem 2rem;margin:0;">New Booking</h2>
        <div style="padding:2rem;border:1px solid #e5e5e5;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;width:40%;font-size:0.85rem;">Name</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Phone</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;font-weight:600;">${phone}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Email</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;">${email || "Not provided"}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;color:#c9a84c;font-weight:700;">Date</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#c9a84c;font-weight:700;">${formattedDate}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;color:#c9a84c;font-weight:700;">Time</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#c9a84c;font-weight:700;">${timeSlot}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Service</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;">${service || "Not specified"}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Vehicle</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;">${vehicle || "Not specified"}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Location</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;">${location || "Not specified"}</td></tr>
          </table>
          ${notes ? `<div style="margin-top:1.5rem;"><div style="color:#888;font-size:0.85rem;margin-bottom:0.5rem;">Notes</div><div style="background:#f9f9f9;padding:1rem;border-left:3px solid #c9a84c;">${notes}</div></div>` : ""}
        </div>
      </div>
    `,
  });

  // Send confirmation to client
  if (email) {
    await resend.emails.send({
      from: "M&C Luxury Detailing <onboarding@resend.dev>",
      to: email,
      subject: `Booking Confirmed — ${formattedDate}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111;">
          <h2 style="background:#060606;color:#c9a84c;padding:1.5rem 2rem;margin:0;">Booking Confirmed</h2>
          <div style="padding:2rem;border:1px solid #e5e5e5;">
            <p style="margin:0 0 1rem;font-size:1rem;">Hi ${name},</p>
            <p style="margin:0 0 1.5rem;color:#555;">Your detail is booked. We'll reach out to confirm your address before the appointment.</p>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;width:40%;font-size:0.85rem;">Date</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;font-weight:700;">${formattedDate}</td></tr>
              <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Time</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;font-weight:700;">${timeSlot}</td></tr>
              <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Service</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;">${service || "TBD"}</td></tr>
            </table>
            <p style="margin:1.5rem 0 0;color:#555;font-size:0.9rem;">Questions? Call us at <strong>(781) 632-5193</strong> or reply to this email.</p>
            <p style="margin:0.75rem 0 0;color:#aaa;font-size:0.8rem;">— M&amp;C Luxury Detailing · North Shore, MA</p>
          </div>
        </div>
      `,
    });
  }

  // Add to Google Calendar
  try {
    const rawKey = process.env.GOOGLE_PRIVATE_KEY ?? "";
    const privateKey = rawKey.includes("\\n") ? rawKey.replace(/\\n/g, "\n") : rawKey;
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });
    const calendar = google.calendar({ version: "v3", auth });

    const [time, period] = timeSlot.split(" ");
    const [rawHour, rawMin] = time.split(":").map(Number);
    let hour = rawHour;
    if (period === "PM" && rawHour !== 12) hour += 12;
    if (period === "AM" && rawHour === 12) hour = 0;

    const pad = (n: number) => String(n).padStart(2, "0");
    const endHour = hour + 3;
    const startStr = `${date}T${pad(hour)}:${pad(rawMin)}:00`;
    const endStr = `${date}T${pad(endHour)}:${pad(rawMin)}:00`;

    const calResult = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      requestBody: {
        summary: `Detail — ${name}`,
        description: [
          `Service: ${service || "Not specified"}`,
          `Vehicle: ${vehicle || "Not specified"}`,
          `Location: ${location || "Not specified"}`,
          `Phone: ${phone}`,
          email ? `Email: ${email}` : null,
          notes ? `Notes: ${notes}` : null,
        ].filter(Boolean).join("\n"),
        location: location || undefined,
        start: { dateTime: startStr, timeZone: "America/New_York" },
        end: { dateTime: endStr, timeZone: "America/New_York" },
      },
    });
    console.log(JSON.stringify({ cal: "ok", id: calResult.data.id, link: calResult.data.htmlLink }));
  } catch (calErr: unknown) {
    const msg = calErr instanceof Error ? calErr.message : String(calErr);
    const keyPreview = (process.env.GOOGLE_PRIVATE_KEY ?? "").slice(0, 60);
    console.error(JSON.stringify({ cal: "err", msg, env_email: process.env.GOOGLE_CLIENT_EMAIL ?? "MISSING", env_id: process.env.GOOGLE_CALENDAR_ID ?? "MISSING", key_preview: keyPreview }));
  }

  return NextResponse.json({ success: true });
}
