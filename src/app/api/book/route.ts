import { getSupabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEEKDAY_SLOTS = ["2:30 PM"];
const WEEKEND_SLOTS = ["10:00 AM"];

export async function GET(req: Request) {
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

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, service, vehicle, location, date, timeSlot, notes } = body;

  if (!name || !phone || !date || !timeSlot) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

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
    phone,
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
    console.log("CAL_EMAIL:", process.env.GOOGLE_CLIENT_EMAIL ?? "MISSING");
    console.log("CAL_KEY_SET:", !!process.env.GOOGLE_PRIVATE_KEY);
    console.log("CAL_ID:", process.env.GOOGLE_CALENDAR_ID ?? "MISSING");
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });
    const calendar = google.calendar({ version: "v3", auth });

    // Parse date + time slot into start/end datetimes
    const [time, period] = timeSlot.split(" ");
    const [rawHour, rawMin] = time.split(":").map(Number);
    let hour = rawHour;
    if (period === "PM" && rawHour !== 12) hour += 12;
    if (period === "AM" && rawHour === 12) hour = 0;

    const startDate = new Date(`${date}T${String(hour).padStart(2, "0")}:${String(rawMin).padStart(2, "0")}:00`);
    const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000); // 3-hour block

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
        start: { dateTime: startDate.toISOString(), timeZone: "America/New_York" },
        end: { dateTime: endDate.toISOString(), timeZone: "America/New_York" },
      },
    });
    console.log("CAL_EVENT_ID:", calResult.data.id, "CAL_LINK:", calResult.data.htmlLink);
  } catch (calErr: unknown) {
    console.error("CAL_ERR_FULL:", String(calErr));
    if (calErr instanceof Error) {
      console.error("CAL_ERR_MSG:", calErr.message);
      console.error("CAL_ERR_STACK:", calErr.stack?.slice(0, 300));
    }
  }

  return NextResponse.json({ success: true });
}
