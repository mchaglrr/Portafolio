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
  who: "Soy Adriana, estudiante de bachillerato en El Salvador. Me gusta entender cómo funcionan las cosas, desde la ciencia y la tecnología hasta la historia y la literatura de mi país. En este curso descubrí que la programación y el Machine Learning me ayudan a entender datos y a resolver problemas reales.",
  studying: "Estudiante de Bachillerato General en el Instituto Emiliani (2025-2026).",
  interests: "La historia y la cultura salvadoreña, la literatura, la ciencia, la tecnología y el aprendizaje del inglés.",
  goals: "Estudiar Relaciones Internacionales en la universidad y desarrollarme profesionalmente viajando por el mundo, usando el inglés y la tecnología como herramientas.",
  strengths: ["Liderazgo y trabajo en equipo", "Comunicación al exponer", "Constancia y organización"],
};

export const experience = [
  { title: "Expotécnicas tecnológicas", org: "Centro Súperate · Fundación Frech", type: "Participación académica", text: "Participé en las expotécnicas tecnológicas de Súperate. En una de ellas lideré a mi equipo con una catapulta dentro de un volcán a escala: coordiné las tareas, verifiqué los cálculos y dirigí los ensayos de la exposición. Aprendí a presentar un proyecto científico ante personas de todas las edades." },
  { title: "Colectas", org: "TECHO", type: "Voluntariado", text: "Participé como voluntaria en las colectas de TECHO, que reúnen fondos para apoyar a familias que viven en asentamientos precarios. Aprendí a trabajar en equipo por una causa común y a comunicarme con el público." },
  { title: "Liderazgo y logros", org: "—", type: "Pendiente", text: "Lideré el equipo de mi Expotécnica y coordiné a mis compañeros durante todo el proyecto. Entre mis logros están las certificaciones TOEIC (con reconocimiento GOLD en 2024 y 2025) y MOS Excel Specialist (2025)." },
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
  { cat: "Bases de datos", items: ["Tablas de datos con pandas", "Hojas de cálculo en Excel"] },
  { cat: "Herramientas tecnológicas", items: ["Git y GitHub", "Vercel", "Google Colab", "Folium"] },
  { cat: "Inteligencia artificial y Machine Learning", items: ["scikit-learn", "Regresión lineal", "K-Means", "KNN"] },
  { cat: "Idiomas", items: ["Inglés (TOEIC Gold 2024 y 2025)"] },
  { cat: "Habilidades personales", items: ["Liderazgo", "Trabajo en equipo", "Comunicación oral", "Organización", "Pensamiento analítico"] },
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
    role: "Desarrollé la actividad en Google Colab: preparé los datos, entrené el modelo, analicé las métricas y probé predicciones con distintos valores.",
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
    learnings: "Aprendí que una regresión lineal encuentra la recta que mejor resume la relación entre dos variables, y a interpretar la pendiente, el intercepto, R² y MSE para saber qué tan bueno es el modelo.",
    files: [{ label: "regresionl.py", href: "/code/regresionl.py" }],
    images: ["public/evidencias/grafica.jpg"],
  },
  {
    id: "laberinto", title: "Laberinto", tag: "Actividad 2 · Semana 4",
    summary: "Juego de laberinto en Python (tkinter): un algoritmo de decisiones con retroceso genera un laberinto distinto en cada nivel.",
    problem: "¿Cómo generar un laberinto distinto en cada ejecución que siempre tenga solución, y cómo recorrerlo con el teclado?",
    goal: "Programar un juego de laberinto en Python que use un algoritmo de decisiones y retroceso para construir el laberinto y permita resolverlo por niveles.",
    role: "Programé el juego en Python: el generador del laberinto, el movimiento del jugador y los niveles con colores.",
    process: [
      "El laberinto se guarda como una cuadrícula de 25 × 19 celdas: 1 es pared y 0 es camino.",
      "Se usa backtracking (búsqueda en profundidad): el algoritmo empieza en una celda al azar y, desde cada celda, elige una dirección al azar. Si la celda de destino todavía es pared, rompe la pared intermedia y avanza.",
      "Cada celda funciona como un punto de decisión: las direcciones posibles son las ramas de un árbol. Cuando una celda ya no tiene salidas nuevas, el algoritmo retrocede a la bifurcación anterior usando una pila.",
      "El jugador se mueve con las flechas o con W A S D y solo avanza si la celda siguiente es camino. El juego cuenta los pasos y marca el rastro recorrido.",
      "Al llegar a la meta se completa el nivel; con Enter se genera otro laberinto con una paleta de colores distinta.",
    ],
    tech: ["Python", "tkinter", "Backtracking (DFS)"],
    results: [
      "Cada ejecución genera un laberinto distinto y siempre tiene solución entre la entrada y la meta.",
      "El juego tiene niveles: al llegar a la meta muestra los pasos usados y permite pasar al siguiente nivel.",
      "Cada nivel usa una de 8 paletas de colores (Océano, Bosque, Atardecer, Neón, Desierto, Dulce, Hielo y Lava).",
    ],
    learnings: "Aprendí que un laberinto puede verse como un árbol de decisiones: en cada bifurcación se elige un camino y, si no hay salida, se retrocede. También aprendí a usar listas anidadas, una pila y la biblioteca tkinter para dibujar y controlar un juego con el teclado.",
    files: [{ label: "laberinto.py", href: "/code/laberinto.py" }],
    images: ["/evidencias/laberinto.png"],
  },
  {
    id: "kmeans-knn", title: "AI Challenge: K-Means y KNN", tag: "Actividad 3",
    summary: "Sistema de Machine Learning con 500 estudiantes simulados: K-Means los agrupa por hábitos y KNN predice si aprobarán.",
    problem: "Entender qué tipos de estudiantes existen según sus hábitos y anticipar si un estudiante nuevo aprobará o reprobará.",
    goal: "Comparar un algoritmo no supervisado (K-Means) con uno supervisado (KNN) usando los mismos datos.",
    role: "Actividad en equipo: construí el cuaderno de Google Colab junto a mis compañeros, y durante la revisión expliqué y modifiqué una parte del código.",
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
    images: ["/evidencias/kmeans.jpg"],
  },
  {
    id: "hotspots", title: "Hotspots Comerciales: VIDRI en La Paz", tag: "Actividad 4",
    summary: "Análisis de hotspots de VIDRI y comercios relacionados en el departamento de La Paz con datos de OpenStreetMap.",
    problem: "¿Qué zonas de La Paz concentran establecimientos de vidrio y cómo analizar una ubicación nueva con Machine Learning?",
    goal: "Agrupar los puntos con K-Means, clasificar una ubicación propuesta con KNN y mostrarlo todo en un mapa interactivo.",
    role: "Trabajo en equipo con Samuel Aguirre, Joel Alvarado y Kevin Rivera. Participé en el análisis con K-Means y KNN y en la presentación del proyecto ante la clase.",
    process: [
      "Se descargaron los datos de OpenStreetMap con la API Overpass y se limpiaron (coordenadas, duplicados, rango geográfico).",
      "Las coordenadas se proyectaron a UTM 16N para medir distancias reales en kilómetros.",
      "K-Means agrupó los puntos; el número de grupos se eligió con coeficiente de silueta y método del codo.",
      "KNN (k elegido con validación leave-one-out) clasificó una ubicación propuesta según el tipo de comercio de sus vecinos.",
      "Se generó un mapa interactivo con Folium.",
    ],
    tech: ["Python", "pandas", "scikit-learn", "Folium", "pyproj", "OpenStreetMap / Overpass", "Google Colab"],
    results: [
      "K-Means agrupó los comercios de vidrio y materiales de La Paz en zonas, y KNN permitió clasificar una ubicación propuesta según el tipo de comercio de sus vecinos más cercanos, todo visible en un mapa interactivo.",
      "El cuaderno concluye que una ubicación «prometedora» es solo una hipótesis: faltan datos de población, tráfico, competencia y costos.",
    ],
    learnings: "Aprendí a trabajar con datos reales de OpenStreetMap, a limpiarlos y a combinar K-Means, KNN y un mapa. También entendí que los resultados son hipótesis: para decidir hacen falta datos de población, tráfico, competencia y costos.",
    files: [{ label: "hotspots_vidri_la_paz.py", href: "/code/hotspots_vidri_la_paz.py" }],
    images: ["/evidencias/mapa.jpg"],
  },
  {
    id: "portafolio", title: "Este portafolio: Next.js y API REST", tag: "Desarrollo web · Backend",
    summary: "Este mismo sitio: aplicación Next.js con navegación por botones y una API REST para el formulario de contacto.",
    problem: "Presentar mi trabajo de forma original, sin una página larga, y recibir mensajes de contacto de forma segura.",
    goal: "Construir y publicar un portafolio con React, Next.js, TypeScript, Tailwind CSS, GitHub y Vercel.",
    role: "Definí la identidad visual (paleta borgoña y rosa), organicé el contenido y publiqué el sitio con GitHub y Vercel. Usé asistentes de IA para generar código y entiendo cómo está organizado: la interfaz en components, los datos en lib/content.ts y la API de contacto en app/api/contact.",
    process: [
      "Estructura Next.js (App Router): app/ contiene la página y la API, components/ la interfaz en React y lib/content.ts los datos.",
      "La interfaz usa estado de React para cambiar de sección sin recorrer una página larga; Tailwind CSS aporta el diseño.",
      "Backend: POST /api/contact valida nombre, correo y mensaje y responde en JSON con éxito o error.",
      "El envío del correo usa Resend con variables de entorno (.env.local y Vercel). Sin ellas el servidor responde que el envío no está configurado.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"],
    results: ["Sitio publicado en Vercel con las siete secciones, una vista de detalle para cada proyecto y un formulario de contacto conectado a la API REST POST /api/contact."],
    learnings: "Aprendí a organizar un proyecto con Next.js y React, a usar Git y GitHub para guardar cambios, a publicar en Vercel y a leer los errores de compilación para corregirlos.",
    files: [{ label: "Repositorio en GitHub", href: "https://github.com/mchaglrr/portafolio" }],
    images: ["/evidencias/portafolio.jpg"],
  },
  {
    id: "catapulta", title: "Expotécnica: catapulta en un volcán", tag: "Proyecto escolar",
    summary: "Catapulta construida dentro de una maqueta de volcán para mostrar trayectorias parabólicas de proyectiles.",
    problem: "Las fórmulas del movimiento parabólico parecen abstractas, pero comunidades cerca de volcanes como el Chaparrastique necesitan saber hasta dónde pueden caer las bombas volcánicas.",
    goal: "Demostrar, con una catapulta en un volcán a escala, que la fórmula del libro es la que usa el MARN para definir zonas de evacuación.",
    role: "Fui la líder del equipo: coordiné al equipo, repartí las tareas, verifiqué los cálculos de v₀ y θ y dirigí los ensayos de la exposición.",
    process: [],
    tech: ["Arduino"],
    results: [],
    learnings: "Que el ángulo y la velocidad inicial determinan el alcance, y que probar y ajustar es clave para que la teoría coincida con la práctica. Asimismo, aprendí a liderar un grupo de personas y coordinarnos como equipo.",
    files: [], images: ["/public/evidencias/expo1.jpeg", "../evidencias/expo2.jpeg"],
  },
];

// Distribución de tiempo sugerida por el profesor para el elevator pitch (2 minutos)
export const pitchSegments = [
  { from: 0, to: 20, label: "Presentación personal" },
  { from: 20, to: 50, label: "Recorrido por el portafolio y proyectos" },
  { from: 50, to: 90, label: "Cómo lo desarrollé y qué tecnologías usé" },
  { from: 90, to: 120, label: "Lo que más me gustó y aprendí" },
];
