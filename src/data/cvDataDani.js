export const CV_DATA = {
  personal: {
    nombre: "TU NOMBRE COMPLETO",
    puesto: "Desarrollador Full Stack & Project Manager",
    ubicacion: "Madrid, España",
    contacto: "tuemail@ejemplo.com",
    resumen: "Transformo ideas complejas en experiencias digitales fluidas. Especializado en arquitectura de aplicaciones modernas.",
  },
  formacion: {
    universitaria: [
      { titulo: "Master en Gestión y Administración de Empresas (MBA)", centro: "Valencian International University", año: "2022 - 2023", tipo: "universitaria" },
      { titulo: "Grado en Ingeniería Mecánica", centro: "Universidad Politécnica de Valencia", año: "2014-2018", tipo: "curso" },
    ],
    cursos: {
      programacion: [
      {titulo: "React Basics", centro: "Coursera", año:"2025"},
      {titulo: "Programación de IA usando Python", centro: "", año:"2022"},
      {titulo: "Programación de PLC's", centro: "AIDIMME", año:"2021"},
      {titulo: "Programación, Comunicaciones y Medidas de Seguridad de Aplicaciones Robóticas para Automatizaciónd de procesos", centro: "FEMEVAL", año:"2021"},
      {titulo: "Introducción a la Programación con MATLAB", centro: "Coursera", año:"2020"}
    ],
      management: [
        {titulo: "Certificado Profesional de Gestión de Proyectos", centro: "Google", año:"2021"},
        {titulo: "Agile Management", centro: "EDEM - Escuela de Empresarios", año:"2022"},
        {titulo: "Agile Leadership", centro: "Coursera", año:"2022"},
        {titulo: "Programa Especializado - Gestión de Proyectos de Ingeniería", centro: "Coursera", año:"2021"}
    ],
      liderazgo: [
        {titulo: "Mejorando las habilidades de Comunicación", centro: "Coursera", año:"2021"},
        {titulo: "A Hands-On Introduction to Engineering Simulations", centro: "Coursera", año:"2018"}
      ]}
    },
  experiencia: [ 
    { cargo: "Gestor de Proyectos", empresa: "Valencian International University", periodo: "2022 - Actualidad", logros: "Vicerrectorado de Tecnología y Transformación Digital", long_desc: "" },
    { cargo: "Gestor de Proyectos de Innovación", empresa: "FACTOR Ingeniería y Decoletaje", periodo: "2021-2022", logros: "Desarrollo de MVPs rápidos.", long_desc:"" },
    { cargo: "Ingeniero de Proyecto", empresa: "DIPC - Donostia International Physics Center", periodo: "2018-2020", logros: "Desarrollo de MVPs rápidos.", long_desc:"" }
  ],
    proyectos: {
    europeos: [
      { id: 1, nombre: "i4Q - Industrial Data Services for Quality Control in Smart Manufacturing", desc: "Plataforma de intercambio de datos médicos.", tech: "Next.js, Python", long_desc: "" },
      { id: 1, nombre: "", desc: "Plataforma de intercambio de datos médicos.", tech: "Next.js, Python", long_desc: "" },
      { id: 1, nombre: "", desc: "Plataforma de intercambio de datos médicos.", tech: "Next.js, Python", long_desc: "" },

    ],
    programacion: [
      { id: 2, nombre: "Hospital Virtual VIU", desc: "Desarrollo de un entorno virtual, simulando un Hospital Real", tech: "Unity, #C, Python",long_desc: ""  },
    ],
    otros: [
      { id: 3, nombre: "Mentoria Tech", desc: "Mentor voluntario para nuevos desarrolladores.", tech: "Liderazgo", long_desc: ""  },
    ]
  }
};

export default CV_DATA