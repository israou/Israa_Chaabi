import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message) {
  return NextResponse.json({ ok: false, message }, { status: 400 });
}

function extractProviderMessage(rawText) {
  if (!rawText) {
    return "";
  }

  try {
    const parsed = JSON.parse(rawText);
    return (
      parsed?.message ||
      parsed?.error ||
      parsed?.errors?.[0]?.message ||
      rawText
    );
  } catch {
    return rawText;
  }
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return badRequest("Invalid JSON payload.");
  }

  const name = String(payload?.name ?? "").trim();
  const email = String(payload?.email ?? "").trim();
  const message = String(payload?.message ?? "").trim();

  if (!name || !email || !message) {
    return badRequest("Name, email, and message are required.");
  }

  if (!EMAIL_REGEX.test(email)) {
    return badRequest("Invalid email format.");
  }

  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return badRequest("Input is too long.");
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "israachaabi4@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!resendApiKey) {
    return NextResponse.json(
      { ok: false, message: "Server email provider is not configured." },
      { status: 500 },
    );
  }

  const subject = `Portfolio contact from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!resendResponse.ok) {
    const errorPayload = await resendResponse.text();
    const providerMessage = extractProviderMessage(errorPayload);
    const normalized = providerMessage.toLowerCase();

    if (
      normalized.includes("verify a domain") ||
      normalized.includes("domain is not verified") ||
      normalized.includes("sender") ||
      normalized.includes("from address")
    ) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Sender not verified. Use CONTACT_FROM_EMAIL=onboarding@resend.dev for quick test, or verify israa.engineer in Resend.",
          providerError: providerMessage,
        },
        { status: 400 },
      );
    }

    if (
      normalized.includes("testing emails") ||
      normalized.includes("test emails") ||
      normalized.includes("only send")
    ) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Resend test mode is active. Set CONTACT_TO_EMAIL to your Resend account email, or verify your domain to send to any address.",
          providerError: providerMessage,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        message: "Unable to send your message right now.",
        providerError: providerMessage,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, message: "Message sent successfully." });
}
