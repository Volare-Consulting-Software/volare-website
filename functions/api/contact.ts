// Cloudflare Pages Function — POST /api/contact
//
// Accepts JSON {name, email, company?, message}, sends an email via Resend
// (https://resend.com) to CONTACT_TO. The recipient address never appears in
// client code.
//
// Required env vars (set in Cloudflare Pages dashboard → Settings → Environment variables):
//   RESEND_API_KEY  — secret API key from resend.com
//   CONTACT_TO      — recipient email (e.g. slongietti@gmail.com)
//   CONTACT_FROM    — verified sender (e.g. "Volare <hello@go-volare.com>")
//                     Until go-volare.com is verified with Resend, use "onboarding@resend.dev"

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM?: string;
}

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

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (!env.RESEND_API_KEY || !env.CONTACT_TO) {
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

  const subjectCompany = companyField ? ` (${companyField})` : "";
  const subject = `New engagement inquiry: ${name}${subjectCompany}`;

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

  const resendBody = {
    from: env.CONTACT_FROM ?? "onboarding@resend.dev",
    to: [env.CONTACT_TO],
    reply_to: email,
    subject,
    text,
  };

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resendBody),
  });

  if (!resp.ok) {
    const detail = await resp.text().catch(() => "");
    console.error("Resend error", resp.status, detail);
    return json({ error: "Mail provider rejected the message." }, 502);
  }

  return json({ ok: true });
};

// Reject anything that isn't POST.
export const onRequest: PagesFunction<Env> = async (context) => {
  if (context.request.method === "POST") {
    return onRequestPost(context);
  }
  return new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" },
  });
};
