# Portafolio digital · Adriana Aguilar

Portafolio profesional de **Adriana Michelle Aguilar Romero** (Bachillerato General, Instituto Emiliani), construido como proyecto final del curso de 10 semanas de IA y desarrollo web de Súperate. En lugar de una página larga, funciona como una presentación interactiva: un menú de botones cambia el contenido de la pantalla.

(/evidencias/portafolio.jpg)

**Portafolio publicado:** (https://portafolio-git-main-adri-53de.vercel.app/)

## Tecnologías
React · Next.js (App Router) · TypeScript · Tailwind CSS · Git y GitHub · Vercel

## Funciones
- Siete secciones: Inicio, Sobre mí, Experiencia, Proyectos, Habilidades, Formación académica y Contacto.
- Vista de detalle por proyecto con problema, proceso, resultados, código descargable y evidencias.
- Formulario de contacto con validaciones conectado a `POST /api/contact`.
- Extra: flechas ← → para pasar de sección y un cronómetro de 2 minutos para practicar el elevator pitch.

## Estructura
```
app/            página principal, layout, estilos y API (app/api/contact/route.ts)
components/     Portfolio.tsx (interfaz) y ContactForm.tsx (formulario)
lib/content.ts  todos los textos y proyectos (aquí se edita el contenido)
public/         foto.jpg, code/ (archivos .py) y evidencias/ (capturas)
```

## Instalación y ejecución
```bash
npm install
cp .env.example .env.local   # y llena los valores
npm run dev                  # abre http://localhost:3000
```

## Variables de entorno
| Variable | Para qué sirve |
|---|---|
| `RESEND_API_KEY` | Clave de [Resend](https://resend.com) para enviar el correo |
| `CONTACT_TO_EMAIL` | Correo donde llegan los mensajes |
| `CONTACT_FROM_EMAIL` | (Opcional) remitente; por defecto el de pruebas de Resend |

Sin estas variables la API valida los datos pero responde que el envío no está configurado; no finge enviar correos. Nunca subas `.env.local` a GitHub.

## Lo que aprendí
PENDIENTE: escribe 3 o 4 líneas con tus palabras.

## Topics sugeridos para el repositorio
`portfolio` `nextjs` `react` `typescript` `tailwindcss` `vercel` `machine-learning` `student-project`
