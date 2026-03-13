import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, service, vehicle, location, preferredDate, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "M&C Luxury Detailing <noreply@mandcluxurydetailing.com>",
    to: "mandcluxurydetailing@gmail.com",
    replyTo: email,
    subject: `New Booking Request — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111;">
        <h2 style="background:#060606;color:#c9a84c;padding:1.5rem 2rem;margin:0;">New Booking Request</h2>
        <div style="padding:2rem;border:1px solid #e5e5e5;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;width:40%;font-size:0.85rem;">Name</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Phone</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;font-weight:600;">${phone}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Email</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;">${email}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Service</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;">${service || "Not specified"}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Vehicle</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;">${vehicle || "Not specified"}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Location</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;">${location || "Not specified"}</td></tr>
            <tr><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:0.85rem;">Preferred Date</td><td style="padding:0.6rem 0;border-bottom:1px solid #f0f0f0;">${preferredDate || "Not specified"}</td></tr>
          </table>
          ${message ? `<div style="margin-top:1.5rem;"><div style="color:#888;font-size:0.85rem;margin-bottom:0.5rem;">Additional Notes</div><div style="background:#f9f9f9;padding:1rem;border-left:3px solid #c9a84c;">${message}</div></div>` : ""}
          <div style="margin-top:2rem;padding-top:1rem;border-top:1px solid #e5e5e5;font-size:0.8rem;color:#aaa;">
            Sent from M&C Luxury Detailing website contact form
          </div>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
