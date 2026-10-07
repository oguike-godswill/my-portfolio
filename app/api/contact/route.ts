import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimit(key: string) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) return false;
  entry.count += 1;
  return true;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const honeypot = typeof data.website === "string" ? data.website : "";

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please write at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please fix the highlighted fields.", fields: errors }, { status: 400 });
  }

  const payload = {
    name: name.slice(0, 120),
    email: email.slice(0, 200),
    message: message.slice(0, 5000),
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
    } catch {
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please email me directly." },
        { status: 502 },
      );
    }
  } else {
    console.info("[contact] message received:", {
      name: payload.name,
      email: payload.email,
      length: payload.message.length,
    });
  }

  return NextResponse.json({ ok: true });
}
