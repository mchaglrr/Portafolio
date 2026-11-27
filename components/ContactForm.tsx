"use client";

import { useState } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
type Errors = { name?: string; email?: string; message?: string };

export default function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  // Validación en el navegador (el servidor repite las mismas reglas)
  const validate = (): Errors => {
    const e: Errors = {};
    if (data.name.trim().length < 2) e.name = "Escribe tu nombre (mínimo 2 letras).";
    if (!data.email.trim()) e.email = "El correo es obligatorio.";
    else if (!EMAIL.test(data.email.trim())) e.email = "Ese correo no tiene un formato válido.";
    if (data.message.trim().length < 10) e.message = "El mensaje debe tener al menos 10 caracteres.";
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("ok");
        setFeedback(json.message);
        setData({ name: "", email: "", message: "" });
      } else {
        setErrors(json.errors ?? {});
        setStatus("error");
        setFeedback(json.error ?? "No se pudo enviar el mensaje.");
      }
    } catch {
      setStatus("error");
      setFeedback("No hay conexión con el servidor. Inténtalo de nuevo.");
    }
  };

  const field = "mt-1 w-full rounded-xl border border-line bg-bone px-4 py-3 outline-none transition focus:border-wine focus:ring-2 focus:ring-wine/20";
  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setData({ ...data, [k]: e.target.value });

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <h3 className="font-display text-xl font-bold">Envíame un mensaje</h3>
      <label className="block text-sm font-medium">Nombre
        <input className={field} value={data.name} onChange={set("name")} autoComplete="name" />
        {errors.name && <span className="text-sm text-wine">{errors.name}</span>}
      </label>
      <label className="block text-sm font-medium">Correo electrónico
        <input className={field} type="email" value={data.email} onChange={set("email")} autoComplete="email" />
        {errors.email && <span className="text-sm text-wine">{errors.email}</span>}
      </label>
      <label className="block text-sm font-medium">Mensaje
        <textarea className={field} rows={5} value={data.message} onChange={set("message")} />
        {errors.message && <span className="text-sm text-wine">{errors.message}</span>}
      </label>
      <button disabled={status === "loading"} className="rounded-full bg-wine px-6 py-3 font-medium text-white transition hover:bg-wine-hover disabled:opacity-60">
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>
      {status === "ok" && <p role="status" className="rounded-xl bg-blush p-3 text-sm text-wine">{feedback}</p>}
      {status === "error" && <p role="alert" className="rounded-xl border border-wine p-3 text-sm text-wine">{feedback}</p>}
    </form>
  );
}
