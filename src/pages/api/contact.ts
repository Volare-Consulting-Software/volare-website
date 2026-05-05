import type { APIRoute } from "astro";

export const prerender = false;

interface Payload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const sanitize = (s: string) => s.replace(/[<>]/g, "").trim();

export const POST: APIRoute = async ({ request, locals }) => {
  const env = (locals as { runtime?: { env: Record<string, string | undefined> } }).runtime?.env ?? {};
  const RESEND_API_KEY = env.RESEND_API_KEY;
  const CONTACT_TO = env.CONTACT_TO;
  const CONTACT_FROM = env.CONTACT_FROM ?? "onboarding@resend.dev";

  if (!RESEND_API_KEY || !CONTACT_TO) {
    return json({ error: "Server is not configured." }, 500);
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return json({ error: "Invalid JSON." }, 400);
  }

  const name = sanitize(body.name ?? "");
  const email = sanitize(body.email ?? "");
  const companyField = sanitize(body.company ?? "");
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return json({ error: "Name, email, and message are required." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Please provide a valid email." }, 400);
  }
  if (message.length > 5000 || name.length > 200 || companyField.length > 200) {
    return json({ error: "Submission too large." }, 413);
  }

  const subject = `New engagement inquiry: ${name}${companyField ? ` (${companyField})` : ""}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    companyField ? `Company: ${companyField}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!resp.ok) {
    const detail = await resp.text().catch(() => "");
    console.error("Resend error", resp.status, detail);
    return json({ error: "Mail provider rejected the message." }, 502);
  }

  return json({ ok: true });
};

export const ALL: APIRoute = () =>
  new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" },
  });
