import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

// POST /api/contact  ->  { ok: true, message } | { ok: false, error, errors? }
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "La solicitud no es un JSON válido." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 80) errors.name = "El nombre debe tener entre 2 y 80 caracteres.";
  if (!EMAIL.test(email) || email.length > 120) errors.email = "El correo no tiene un formato válido.";
  if (message.length < 10 || message.length > 2000) errors.message = "El mensaje debe tener entre 10 y 2000 caracteres.";
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, error: "Revisa los campos marcados.", errors }, { status: 422 });

  // Las credenciales viven en variables de entorno (.env.local y Vercel), nunca en el código
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    return NextResponse.json({ ok: false, error: "El envío de correos aún no está configurado en el servidor. Tu mensaje no fue enviado." }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portafolio <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `Nuevo mensaje de ${name}`,
        html: `<p><b>${escapeHtml(name)}</b> (${escapeHtml(email)})</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
    if (!res.ok) return NextResponse.json({ ok: false, error: "El servicio de correo rechazó el envío. Inténtalo más tarde." }, { status: 502 });
    return NextResponse.json({ ok: true, message: "¡Gracias! Tu mensaje fue enviado." });
  } catch {
    return NextResponse.json({ ok: false, error: "No se pudo conectar con el servicio de correo." }, { status: 502 });
  }
}
