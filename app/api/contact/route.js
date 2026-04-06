import { NextResponse } from "next/server";

function validatePayload(payload) {
  if (!payload?.email || !payload?.message) {
    return "Email and message are required.";
  }

  return null;
}

async function postToWebhook(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Webhook delivery failed.");
  }
}

async function postToEmailJs(payload) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Contact form is not configured. Add EMAILJS_* variables or CONTACT_WEBHOOK_URL.");
  }

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        message: payload.message,
        source: payload.source,
      },
    }),
  });

  if (!response.ok) {
    throw new Error("EmailJS delivery failed.");
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    if (process.env.CONTACT_WEBHOOK_URL) {
      await postToWebhook(process.env.CONTACT_WEBHOOK_URL, payload);
    } else {
      await postToEmailJs(payload);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message || "Unable to process the contact request.",
      },
      { status: 500 },
    );
  }
}
