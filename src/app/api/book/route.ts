import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { getBookingRateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const US_PHONE_RE = /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
  const { success } = await getBookingRateLimit().limit(ip);
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait and try again." },
      { status: 429 }
    );
  }

  const body = await req.json();
  const { name, phone, service, notes } = body;

  if (!name || !phone || !service) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!US_PHONE_RE.test(phone.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid US phone number." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "M&C Luxury Detailing <onboarding@resend.dev>",
    to: "mandcluxurydetailing@gmail.com",
    subject: `New Booking Request — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111;">
        <h2 style="background:#060606;color:#c9a84c;padding:1.5rem 2rem;margin:0;">New Booking Request</h2>
        <div style="padding:2rem;border:1px solid #e5e5e5;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;width:40%;font-size:0.85rem;">Name</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Phone</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;font-weight:600;">${phone}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Service</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;">${service}</td></tr>
          </table>
          ${notes ? `<div style="margin-top:1.5rem;"><div style="color:#888;font-size:0.85rem;margin-bottom:0.5rem;">Comments</div><div style="background:#f9f9f9;padding:1rem;border-left:3px solid #c9a84c;">${notes}</div></div>` : ""}
        </div>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
