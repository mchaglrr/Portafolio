import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adriana Aguilar · Portafolio digital",
  description: "Portafolio digital de Adriana Michelle Aguilar Romero: proyectos de Machine Learning, desarrollo web y formación académica.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body className="bg-bone font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
