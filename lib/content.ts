// TODO el contenido del portafolio vive aquí. Cualquier texto que empiece con "PENDIENTE"
// se muestra con un recuadro rosa punteado: reemplázalo por tu texto real y el recuadro desaparece.

export const profile = {
  name: "Adriana Michelle Aguilar Romero",
  short: "Adriana Aguilar",
  career: "Bachillerato General",
  school: "Instituto Emiliani",
  period: "2025-2026",
  tagline: "Aprendiendo a convertir datos, código e ideas en proyectos reales.",
  email: "adrianaromeroo2009@gmail.com",
  github: "https://github.com/mchaglrr",
  linkedin: "https://www.linkedin.com/in/adriana-aguilar-829b24307/",
};

export const about = {
  who: "PENDIENTE: escribe quién eres, qué te interesa y qué te gusta hacer (3 o 4 líneas).",
  studying: "Estudiante de Bachillerato General en el Instituto Emiliani (2025-2026).",
  interests: "PENDIENTE: tus intereses personales.",
  goals: "Estudiar Relaciones Internacionales y desarrollarme profesionalmente viajando por el mundo y marcando la diferencia en donde sea que esté.",
  strengths: ["PENDIENTE: tu primera fortaleza", "PENDIENTE: tu segunda fortaleza", "PENDIENTE: tu tercera fortaleza"],
};

export const experience = [
  { title: "Expotécnicas tecnológicas", org: "Centro Súperate · Fundación Frech", type: "Participación académica", text: "Participación en las expotécnicas tecnológicas del programa Súperate en las cuales aprendí a trabajar con tecnologías nuevas en equipo cada año." },
  { title: "Colectas", org: "TECHO", type: "Voluntariado", text: "Voluntariado en colectas de TECHO durante 2024" },
];

export const education = {
  studies: [{ school: "Instituto Emiliani", degree: "Bachillerato General", period: "2025-2026", status: "Finalizado" }],
  courses: [
    { name: "Hackathon", year: "2024", org: "Centro Súperate · Fundación Frech" },
    { name: "Expo de logros", year: "2025", org: "Centro Súperate · Fundación Frech" },
    { name: "Expotech", year: "2026", org: "Centro Súperate · Fundación Frech" },
    { name: "Diplomado en inglés, valores e informática", year: "2024-2026", org: "Centro Súperate · Fundación Frech" },
  ],
  certs: [
    { name: "TOEIC Listening and Reading", year: "2026", org: "ITCCI" },
    { name: "TOEIC Speaking and Writing", year: "2026", org: "ITCCI" },
    { name: "MOS Excel Specialist", year: "2025", org: "Microsoft" },
  ],
  awards: [{ name: "GOLD TOEIC", year: "2024" }, { name: "GOLD TOEIC", year: "2025" }],
};

// Solo habilidades respaldadas por tus actividades y certificaciones. Sin porcentajes.
export const skills: { cat: string; items: string[] }[] = [
  { cat: "Lenguajes de programación", items: ["Python", "TypeScript (básico)"] },
  { cat: "Desarrollo web", items: ["React", "Next.js", "Tailwind CSS", "API REST"] },
  { cat: "Análisis de datos", items: ["pandas", "NumPy", "matplotlib", "Excel (MOS)"] },
  { cat: "Bases de datos", items: ["PENDIENTE: agrega solo si las has usado"] },
  { cat: "Herramientas tecnológicas", items: ["Git y GitHub", "Vercel", "Google Colab", "Folium"] },
  { cat: "Inteligencia artificial y Machine Learning", items: ["scikit-learn", "Regresión lineal", "K-Means", "KNN"] },
  { cat: "Idiomas", items: ["Inglés (TOEIC Gold 2024 y 2025)"] },
  { cat: "Habilidades personales", items: ["PENDIENTE: elige las que de verdad te describen"] },
];

export type Project = {
  id: string; title: string; tag: string; summary: string; problem: string; goal: string; role: string;
  process: string[]; tech: string[]; results: string[]; learnings: string;
  files: { label: string; href: string }[]; images: string[];
};

export const projects: Project[] = [
  {
    id: "regresion", title: "Regresión lineal", tag: "Actividad 1 · Semana 3",
    summary: "Modelo que predice el score de un estudiante a partir de sus horas de estudio.",
    problem: "¿Cómo se relacionan las horas de estudio con el resultado obtenido, y se puede predecir el score de alguien nuevo?",
    goal: "Ajustar una regresión lineal simple, medir qué tan bien se ajusta y visualizarla.",
    role: "PENDIENTE: describe tu participación.",
    process: [
      "Se creó una tabla con pandas: 10 pares (horas de estudio, score).",
      "Se entrenó LinearRegression de scikit-learn con las horas como entrada y el score como salida.",
      "Se calcularon pendiente, intercepto, R² y MSE.",
      "El programa pide las horas por teclado y predice el score.",
      "Se dibujaron los puntos y la recta con matplotlib.",
    ],
    tech: ["Python", "pandas", "scikit-learn", "matplotlib", "Google Colab"],
    results: [
      "Con los 10 datos del ejercicio la recta tiene pendiente ≈ 0.85 e intercepto ≈ 1.4: cada hora extra de estudio suma cerca de 0.85 puntos. R² ≈ 0.99 y MSE ≈ 0.065, un ajuste muy bueno (son datos de práctica muy ordenados).", "PENDIENTE: agrega la captura de la gráfica y de la predicción que hiciste.",
    ],
    learnings: "PENDIENTE: escribe con tus palabras qué aprendiste.",
    files: [{ label: "regresionl.py", href: "/code/regresionl.py" }],
    images: [],
  },
  {
    id: "laberinto", title: "Laberinto", tag: "Actividad 2 · Semana 4",
    summary: "Actividad de la Semana 4 sobre árboles de decisión aplicados a un laberinto.",
    problem: "PENDIENTE: describe el problema del laberinto.",
    goal: "PENDIENTE: objetivo del ejercicio.",
    role: "PENDIENTE: describe tu participación.",
    process: ["PENDIENTE: explica cómo funciona tu solución con árboles de decisión."],
    tech: ["PENDIENTE"],
    results: ["PENDIENTE: resultados y capturas del laberinto."],
    learnings: "PENDIENTE: qué aprendiste.",
    files: [],
    images: [],
  },
  {
    id: "kmeans-knn", title: "AI Challenge: K-Means y KNN", tag: "Actividad 3",
    summary: "Sistema de Machine Learning con 500 estudiantes simulados: K-Means los agrupa por hábitos y KNN predice si aprobarán.",
    problem: "Entender qué tipos de estudiantes existen según sus hábitos y anticipar si un estudiante nuevo aprobará o reprobará.",
    goal: "Comparar un algoritmo no supervisado (K-Means) con uno supervisado (KNN) usando los mismos datos.",
    role: "PENDIENTE: describe tu participación (actividad grupal).",
    process: [
      "Se simularon 500 estudiantes con horas de estudio, asistencia, tareas entregadas y nota (aprueba con 6 o más).",
      "K-Means, con datos normalizados y sin usar la nota, se probó con K = 3 y K = 4 comparando inercia y silueta.",
      "KNN se entrenó con el 75 % de los datos y se evaluó con el 25 %, probando k = 1, 3, 5, 7, 11, 15 y 21, con y sin normalizar.",
      "Desafío final: predecir a un estudiante con 4 horas de estudio, 55 % de asistencia y 50 % de tareas.",
    ],
    tech: ["Python", "NumPy", "pandas", "scikit-learn", "matplotlib", "Google Colab"],
    results: [
      "K-Means: K = 3 resultó mejor que K = 4 (mayor silueta) y formó grupos de bajo, medio y alto compromiso.",
      "KNN: entre 83 % y 87 % de exactitud en prueba; el mejor fue k = 21 con 87.2 %. Con k = 1 hubo sobreajuste (100 % en entrenamiento, 84 % en prueba).",
      "Normalizar mejoró la exactitud promedio (85.6 % frente a 83.7 %).",
      "El estudiante del desafío fue clasificado como «reprobará». El cuaderno aclara que los datos son simulados y que es solo una herramienta de apoyo.",
    ],
    learnings: "K-Means descubre grupos sin etiquetas y KNN necesita etiquetas para predecir. Ambos usan distancias, por eso conviene normalizar los datos.",
    files: [{ label: "ai_challenge_kmeans_knn.py", href: "/code/ai_challenge_kmeans_knn.py" }],
    images: [],
  },
  {
    id: "hotspots", title: "Hotspots Comerciales: VIDRI en La Paz", tag: "Actividad 4",
    summary: "Análisis de hotspots de VIDRI y comercios relacionados en el departamento de La Paz con datos de OpenStreetMap.",
    problem: "¿Qué zonas de La Paz concentran establecimientos de vidrio y cómo analizar una ubicación nueva con Machine Learning?",
    goal: "Agrupar los puntos con K-Means, clasificar una ubicación propuesta con KNN y mostrarlo todo en un mapa interactivo.",
    role: "Trabajo en equipo con Samuel Aguirre, Joel Alvarado y Kevin Rivera. PENDIENTE: tu parte.",
    process: [
      "Se descargaron los datos de OpenStreetMap con la API Overpass y se limpiaron (coordenadas, duplicados, rango geográfico).",
      "Las coordenadas se proyectaron a UTM 16N para medir distancias reales en kilómetros.",
      "K-Means agrupó los puntos; el número de grupos se eligió con coeficiente de silueta y método del codo.",
      "KNN (k elegido con validación leave-one-out) clasificó una ubicación propuesta según el tipo de comercio de sus vecinos.",
      "Se generó un mapa interactivo con Folium.",
    ],
    tech: ["Python", "pandas", "scikit-learn", "Folium", "pyproj", "OpenStreetMap / Overpass", "Google Colab"],
    results: [
      "PENDIENTE: pega los números que salieron al ejecutar el notebook (puntos finales, K elegido, exactitud) y una captura del mapa.",
      "El cuaderno concluye que una ubicación «prometedora» es solo una hipótesis: faltan datos de población, tráfico, competencia y costos.",
    ],
    learnings: "PENDIENTE: qué aprendiste.",
    files: [{ label: "hotspots_vidri_la_paz.py", href: "/code/hotspots_vidri_la_paz.py" }],
    images: [],
  },
  {
    id: "portafolio", title: "Este portafolio: Next.js y API REST", tag: "Desarrollo web · Backend",
    summary: "Este mismo sitio: aplicación Next.js con navegación por botones y una API REST para el formulario de contacto.",
    problem: "Presentar mi trabajo de forma original, sin una página larga, y recibir mensajes de contacto de forma segura.",
    goal: "Construir y publicar un portafolio con React, Next.js, TypeScript, Tailwind CSS, GitHub y Vercel.",
    role: "PENDIENTE: describe qué diseñaste, qué cambiaste y qué entiendes de cada parte.",
    process: [
      "Estructura Next.js (App Router): app/ contiene la página y la API, components/ la interfaz en React y lib/content.ts los datos.",
      "La interfaz usa estado de React para cambiar de sección sin recorrer una página larga; Tailwind CSS aporta el diseño.",
      "Backend: POST /api/contact valida nombre, correo y mensaje y responde en JSON con éxito o error.",
      "El envío del correo usa Resend con variables de entorno (.env.local y Vercel). Sin ellas el servidor responde que el envío no está configurado.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"],
    results: ["PENDIENTE: enlace al sitio publicado en Vercel y captura de pantalla."],
    learnings: "PENDIENTE: qué aprendiste construyéndolo.",
    files: [{ label: "Repositorio en GitHub", href: "https://github.com/mchaglrr/portafolio" }],
    images: [],
  },
  {
    id: "catapulta", title: "Expotécnica: catapulta en un volcán", tag: "Proyecto escolar",
    summary: "Catapulta construida dentro de una maqueta de volcán para mostrar trayectorias parabólicas de proyectiles.",
    problem: "Las fórmulas del movimiento parabólico parecen abstractas, pero comunidades cerca de volcanes como el Chaparrastique necesitan saber hasta dónde pueden caer las bombas volcánicas.",
    goal: "Demostrar, con una catapulta en un volcán a escala, que la fórmula del libro es la que usa el MARN para definir zonas de evacuación.", 
    role: "Mi rol como líder, Coordiné al equipo, repartí las tareas, verifiqué los cálculos de v₀ y θ y dirigí los ensayos de la exposición.",
   tech: ["Arduino 1"],
  learnings: "Que el ángulo y la velocidad inicial determinan el alcance, y que probar y ajustar es clave para que la teoría coincida con la práctica. Asimismo, aprendí a liderar un grupo de personas y coordinarnos como equipo",
    files: [], images: [],
  },
];

// Distribución de tiempo sugerida por el profesor para el elevator pitch (2 minutos)
export const pitchSegments = [
  { from: 0, to: 20, label: "Presentación personal" },
  { from: 20, to: 50, label: "Recorrido por el portafolio y proyectos" },
  { from: 50, to: 90, label: "Cómo lo desarrollé y qué tecnologías usé" },
  { from: 90, to: 120, label: "Lo que más me gustó y aprendí" },
];
