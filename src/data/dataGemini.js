export const CV_DATA = {
  personal: {
    nombre: "TU NOMBRE COMPLETO",
    puesto: "Gestor de Proyectos IT",
    ubicacion: "Valencia, España",
    contacto: "danielcuberomimbiela@gmail.com",
    resumen: "Transformo ideas complejas en experiencias digitales fluidas. Especializado en arquitectura de aplicaciones modernas.",
  },
  formacion: {
    universitaria: [
      { titulo: "Título1", centro: "Universidad 1", año: "2022 - 2023", tipo: "universitaria" },
      { titulo: "Título 2", centro: "Universidad Politécnica de Valencia", año: "2014-2018", tipo: "universitaria" },
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
    { cargo: "Cargo 1", empresa: "Empresa 1", periodo: "2022 - Actualidad", logros: "", detalle: "Había una vez..." },
    { cargo: "Cargo 2", empresa: "Empresa 2", periodo: "2021-2022", logros: "", long_desc:"" },
    { cargo: "Cargo 3", empresa: "Empresa 3", periodo: "2018-2020", logros: "", long_desc:"" }
  ],
    proyectos: {
    europeos: [
      { id: 1, nombre: "Ejemplo 1", desc: "Descripción 1", tech: "Next.js, Python", long_desc: "" },
      { id: 1, nombre: "Ejemplo 2", desc: "Descripción 2", tech: "Next.js, Python", long_desc: "" },
      { id: 1, nombre: "Ejemplo 3", desc: "", tech: "Ingeniería Mecánica", long_desc: "" },

    ],
    programacion: [
      { id: 2, nombre: "Ejemplo 1", desc: "DDl", tech: "Unity, #C, Python",long_desc: ""  },
      { id: 2, nombre: "Ejemplo 2", desc: "DD2", tech: "Unity, #C, Python",long_desc: ""  },
      { id: 2, nombre: "Ejemplo 3", desc: "DD3", tech: "React, JS",long_desc: "LD1" },
      { id: 3, nombre: "Mentoria Tech", desc: "Mentor voluntario para nuevos desarrolladores.", tech: "Liderazgo", long_desc: ""  },
    ]
  }
};

export default CV_DATA