"use client";

import { useEffect, useState } from "react";
import { profile, about, experience, education, skills, projects, pitchSegments, type Project } from "@/lib/content";
import ContactForm from "./ContactForm";

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "formacion", label: "Formación académica" },
  { id: "contacto", label: "Contacto" },
] as const;
type Id = (typeof NAV)[number]["id"];

const isPending = (s: string) => s.startsWith("PENDIENTE");

// Muestra un texto; si empieza con PENDIENTE lo resalta para que se note que falta llenarlo
function T({ children }: { children: string }) {
  return isPending(children) ? (
    <span className="inline-block rounded-lg border border-dashed border-wine/50 bg-blush px-2 py-1 text-sm text-wine">{children}</span>
  ) : (
    <>{children}</>
  );
}

function Chip({ children }: { children: string }) {
  return <span className={`rounded-full px-3 py-1 text-sm ${isPending(children) ? "border border-dashed border-wine/50 bg-white text-wine" : "bg-blush text-wine"}`}>{children}</span>;
}

function Title({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wine">{kicker}</p>
      <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-wine" />
    </header>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-line bg-white p-6 ${className}`}>{children}</div>;
}

export default function Portfolio() {
  const [active, setActive] = useState<Id>("inicio");
  const [project, setProject] = useState<Project | null>(null);
  const [menu, setMenu] = useState(false);

  const go = (id: Id) => {
    setActive(id);
    setProject(null);
    setMenu(false);
    window.scrollTo(0, 0);
  };

  // Atajo extra: flechas ← → para pasar de sección como si fueran diapositivas
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      const i = NAV.findIndex((n) => n.id === active);
      if (e.key === "ArrowRight" && i < NAV.length - 1) go(NAV[i + 1].id);
      if (e.key === "ArrowLeft" && i > 0) go(NAV[i - 1].id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const navButton = (n: (typeof NAV)[number], i: number) => (
    <button
      key={n.id}
      onClick={() => go(n.id)}
      aria-current={active === n.id ? "page" : undefined}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
        active === n.id ? "bg-wine text-white" : "text-white/70 hover:bg-coal hover:text-white"
      }`}
    >
      <span className="font-display text-xs opacity-60">0{i + 1}</span>
      {n.label}
    </button>
  );

  return (
    <div className="min-h-screen lg:flex">
      {/* Menú lateral (computadora) */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col bg-obsidian p-6 text-white lg:flex">
        <button onClick={() => go("inicio")} className="mb-8 text-left" aria-label="Volver al inicio">
          <span className="font-display text-2xl font-bold">A<span className="text-wine-hover">.</span>A</span>
          <span className="block text-xs text-white/50">Portafolio digital</span>
        </button>
        <nav className="flex flex-col gap-1">{NAV.map(navButton)}</nav>
        <p className="mt-auto text-xs text-white/40">Tip: usa las flechas ← → del teclado para navegar.</p>
      </aside>

      {/* Barra compacta (celular y tablet) */}
      <header className="sticky top-0 z-30 bg-obsidian text-white lg:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <button onClick={() => go("inicio")} className="font-display text-lg font-bold">{profile.short}</button>
          <button onClick={() => setMenu(!menu)} aria-expanded={menu} className="rounded-lg bg-wine px-4 py-2 text-sm font-medium">
            {menu ? "Cerrar" : "Menú"}
          </button>
        </div>
        {menu && <nav className="grid gap-1 border-t border-coal p-3">{NAV.map(navButton)}</nav>}
      </header>

      <main className="min-h-screen flex-1 lg:ml-64">
        <div key={active + (project?.id ?? "")} className="fade mx-auto max-w-5xl px-5 py-8 md:px-10 md:py-12">
          {active === "inicio" && <Home go={go} />}
          {active === "sobre" && <About />}
          {active === "experiencia" && <Experience />}
          {active === "proyectos" && (project ? <ProjectDetail p={project} back={() => setProject(null)} /> : <ProjectList open={setProject} />)}
          {active === "habilidades" && <Skills />}
          {active === "formacion" && <Education />}
          {active === "contacto" && <Contact />}
        </div>
      </main>
      <PitchTimer />
    </div>
  );
}

function Home({ go }: { go: (id: Id) => void }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-obsidian p-8 text-white md:p-14">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-wine/50" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-coal" />
      <div className="relative grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Portafolio digital · 2026</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-lg text-white/80">{profile.career} · {profile.school}</p>
          <p className="mt-6 max-w-md border-l-2 border-wine-hover pl-4 font-display text-xl italic text-white/90">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => go("proyectos")} className="rounded-full bg-wine px-6 py-3 font-medium transition hover:bg-wine-hover">Ver proyectos</button>
            <button onClick={() => go("sobre")} className="rounded-full border border-white/30 px-6 py-3 font-medium transition hover:bg-white/10">Sobre mí</button>
            <button onClick={() => go("contacto")} className="rounded-full border border-white/30 px-6 py-3 font-medium transition hover:bg-white/10">Contacto</button>
          </div>
          <div className="mt-6 flex gap-5 text-sm text-white/70">
            <a className="underline-offset-4 hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="underline-offset-4 hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="relative mx-auto w-64 md:w-72">
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-b-3xl rounded-t-[999px] bg-wine" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/foto.jpg" alt={`Foto de ${profile.short}`} className="relative h-[24rem] w-full rounded-b-3xl rounded-t-[999px] object-cover object-top" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section>
      <Title kicker="Sobre mí" title="Quién soy" />
      <div className="grid gap-5 md:grid-cols-2">
        <Card className="md:col-span-2"><p className="leading-relaxed text-mute"><T>{about.who}</T></p><p className="mt-3 text-mute">{about.studying}</p></Card>
        <Card><h3 className="font-display text-xl font-bold">Intereses</h3><p className="mt-2 text-mute"><T>{about.interests}</T></p></Card>
        <Card><h3 className="font-display text-xl font-bold">Objetivos</h3><p className="mt-2 text-mute">{about.goals}</p></Card>
        <Card className="md:col-span-2">
          <h3 className="font-display text-xl font-bold">Fortalezas</h3>
          <div className="mt-3 flex flex-wrap gap-2">{about.strengths.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </Card>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section>
      <Title kicker="Experiencia" title="Participación y voluntariado" />
      <p className="mb-6 text-mute">Aún no tengo experiencia laboral formal; esto es lo que he vivido en lo académico y en el servicio.</p>
      <div className="relative space-y-5 border-l-2 border-line pl-6">
        {experience.map((e) => (
          <div key={e.title} className="relative">
            <span className="absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-bone bg-wine" />
            <Card>
              <span className="text-xs font-semibold uppercase tracking-wider text-wine">{e.type}</span>
              <h3 className="mt-1 font-display text-2xl font-bold">{e.title}</h3>
              <p className="text-sm text-mute">{e.org}</p>
              <p className="mt-3 text-mute"><T>{e.text}</T></p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectList({ open }: { open: (p: Project) => void }) {
  return (
    <section>
      <Title kicker="Proyectos" title="Lo que he construido" />
      <p className="mb-6 text-mute">Toca un proyecto para ver el problema, el proceso, los resultados y el código.</p>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <button key={p.id} onClick={() => open(p)} className="group rounded-3xl border border-line bg-white p-6 text-left transition hover:-translate-y-1 hover:border-wine hover:shadow-lg">
            <span className="text-xs font-semibold uppercase tracking-wider text-wine">{p.tag}</span>
            <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-mute">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">{p.tech.slice(0, 4).map((t) => <Chip key={t}>{t}</Chip>)}</div>
            <span className="mt-5 inline-block text-sm font-semibold text-wine transition group-hover:translate-x-1">Abrir proyecto →</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ProjectDetail({ p, back }: { p: Project; back: () => void }) {
  const block = (title: string, body: React.ReactNode) => (
    <Card><h3 className="font-display text-xl font-bold">{title}</h3><div className="mt-2 text-mute">{body}</div></Card>
  );
  const list = (items: string[]) => <ul className="list-disc space-y-2 pl-5">{items.map((i) => <li key={i}><T>{i}</T></li>)}</ul>;
  return (
    <section>
      <button onClick={back} className="mb-6 rounded-full border border-wine px-5 py-2 text-sm font-medium text-wine transition hover:bg-wine hover:text-white">← Volver a proyectos</button>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wine">{p.tag}</p>
      <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">{p.title}</h2>
      <p className="mt-3 max-w-2xl text-lg text-mute">{p.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {block("Problema", <T>{p.problem}</T>)}
        {block("Objetivo", <T>{p.goal}</T>)}
        {block("Mi rol", <T>{p.role}</T>)}
        {block("Aprendizajes", <T>{p.learnings}</T>)}
        <div className="md:col-span-2">{block("Proceso y solución", list(p.process))}</div>
        <div className="md:col-span-2">{block("Resultados", list(p.results))}</div>
        <div className="md:col-span-2">
          {block("Código y archivos", p.files.length ? (
            <div className="flex flex-wrap gap-3">{p.files.map((f) => (
              <a key={f.href} href={f.href} {...(f.href.startsWith("/") ? { download: true } : { target: "_blank", rel: "noreferrer" })} className="rounded-full bg-wine px-5 py-2 text-sm font-medium text-white transition hover:bg-wine-hover">{f.label}</a>
            ))}</div>
          ) : <T>PENDIENTE: sube tu código a public/code y agrégalo en lib/content.ts.</T>)}
        </div>
        <div className="md:col-span-2">
          {block("Capturas y evidencias", p.images.length ? (
            <div className="grid gap-3 sm:grid-cols-2">{p.images.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={`Evidencia de ${p.title}`} className="rounded-2xl border border-line" />
            ))}</div>
          ) : <T>PENDIENTE: agrega capturas en public/evidencias y escribe sus rutas en lib/content.ts (campo images).</T>)}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section>
      <Title kicker="Habilidades" title="Lo que sé hacer" />
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((s) => (
          <Card key={s.cat}><h3 className="font-display text-xl font-bold">{s.cat}</h3><div className="mt-3 flex flex-wrap gap-2">{s.items.map((i) => <Chip key={i}>{i}</Chip>)}</div></Card>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const row = (name: string, year: string, org?: string) => (
    <li key={name + year} className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-0">
      <span><span className="font-medium">{name}</span>{org && <span className="block text-sm text-mute">{org}</span>}</span>
      <span className="shrink-0 text-sm font-semibold text-wine">{year}</span>
    </li>
  );
  return (
    <section>
      <Title kicker="Formación académica" title="Dónde he aprendido" />
      <div className="grid gap-5 md:grid-cols-2">
        <Card className="md:col-span-2">
          <h3 className="font-display text-xl font-bold">Estudios</h3>
          {education.studies.map((s) => (
            <p key={s.school} className="mt-2 text-mute"><b className="text-ink">{s.degree}</b> · {s.school} · {s.period} · {s.status}</p>
          ))}
        </Card>
        <Card><h3 className="font-display text-xl font-bold">Cursos y formación complementaria</h3><ul className="mt-2">{education.courses.map((c) => row(c.name, c.year, c.org))}</ul></Card>
        <Card><h3 className="font-display text-xl font-bold">Certificaciones</h3><ul className="mt-2">{education.certs.map((c) => row(c.name, c.year, c.org))}</ul></Card>
        <Card className="md:col-span-2"><h3 className="font-display text-xl font-bold">Reconocimientos</h3><ul className="mt-2">{education.awards.map((a) => row(a.name, a.year))}</ul></Card>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <Title kicker="Contacto" title="Hablemos" />
      <div className="grid gap-5 md:grid-cols-[1fr_1.4fr]">
        <Card>
          <h3 className="font-display text-xl font-bold">Encuéntrame en</h3>
          <ul className="mt-3 space-y-3 text-mute">
            <li><a className="font-medium text-wine hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a className="font-medium text-wine hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="font-medium text-wine hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </Card>
        <Card><ContactForm /></Card>
      </div>
    </section>
  );
}

// Función extra: cronómetro de 2 minutos con las partes del elevator pitch que pidió el profesor
function PitchTimer() {
  const [open, setOpen] = useState(false);
  const [run, setRun] = useState(false);
  const [s, setS] = useState(0);

  useEffect(() => {
    if (!run) return;
    const t = setInterval(() => setS((x) => (x >= 119 ? (setRun(false), 120) : x + 1)), 1000);
    return () => clearInterval(t);
  }, [run]);

  const seg = pitchSegments.find((p) => s >= p.from && s < p.to) ?? pitchSegments[pitchSegments.length - 1];
  const time = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {open && (
        <div className="fade mb-3 w-64 rounded-2xl bg-obsidian p-5 text-white shadow-xl">
          <p className="text-xs uppercase tracking-widest text-white/50">Modo pitch · 2:00</p>
          <p className="mt-1 font-display text-5xl font-bold">{time}</p>
          <p className="mt-2 min-h-10 text-sm text-white/80">{s >= 120 ? "¡Tiempo!" : seg.label}</p>
          <div className="mt-2 h-1.5 rounded-full bg-coal"><div className="h-full rounded-full bg-wine-hover transition-all" style={{ width: `${(s / 120) * 100}%` }} /></div>
          <div className="mt-4 flex gap-2">
            <button onClick={() => setRun(!run)} className="flex-1 rounded-lg bg-wine py-2 text-sm font-medium hover:bg-wine-hover">{run ? "Pausar" : "Iniciar"}</button>
            <button onClick={() => { setRun(false); setS(0); }} className="rounded-lg border border-white/30 px-3 py-2 text-sm">Reiniciar</button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="rounded-full bg-wine px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-wine-hover" aria-expanded={open}>
        ⏱ Pitch
      </button>
    </div>
  );
}
