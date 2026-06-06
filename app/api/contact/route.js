import { NextResponse } from "next/server";

function validatePayload(payload) {
  if (!payload?.email || !payload?.message) {
    return "Email and message are required.";
  }
  return null;
}

async function sendViaResend(payload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured.");

  const toEmail = process.env.CONTACT_TO_EMAIL || "sales@invergodesign.com";

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:24px;border-radius:8px;">
      <div style="background:#0f1c46;padding:16px 24px;border-radius:6px;margin-bottom:24px;">
        <h2 style="color:#fff;margin:0;font-size:18px;">New Inquiry — InverGo Design</h2>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#555;width:160px;"><strong>Name</strong></td><td style="padding:8px 0;color:#111;">${payload.name || 'Not provided'}</td></tr>
        <tr><td style="padding:8px 0;color:#555;"><strong>Email</strong></td><td style="padding:8px 0;color:#111;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#555;"><strong>Phone</strong></td><td style="padding:8px 0;color:#111;">${payload.phone || 'Not provided'}</td></tr>
        <tr><td style="padding:8px 0;color:#555;"><strong>Services</strong></td><td style="padding:8px 0;color:#111;">${payload.services || 'Not specified'}</td></tr>
        <tr><td style="padding:8px 0;color:#555;"><strong>Best Time to Call</strong></td><td style="padding:8px 0;color:#111;">${payload.bestTime || 'Not specified'}</td></tr>
        <tr><td style="padding:8px 0;color:#555;"><strong>Source</strong></td><td style="padding:8px 0;color:#111;">${payload.source || 'Website'}</td></tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#fff;border-left:4px solid #018abd;border-radius:4px;">
        <strong style="color:#555;">Message:</strong>
        <p style="color:#111;margin:8px 0 0;">${payload.message}</p>
      </div>
      <p style="margin-top:24px;font-size:12px;color:#999;">Sent from invergodesign.com contact form</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "InverGo Design <onboarding@resend.dev>",
      to: [toEmail],
      subject: `New Inquiry from ${payload.name || payload.email} — ${payload.services || 'Website'}`,
      html,
      reply_to: payload.email,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Resend failed: ${err}`);
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    await sendViaResend(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to process the contact request." },
      { status: 500 }
    );
  }
}
