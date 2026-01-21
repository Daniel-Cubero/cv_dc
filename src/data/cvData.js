export const CV_DATA = {
  personal: {
    nombre: "María Gargallo",
    puesto: "Especialista Medioambiental",
    ubicacion: "Valencia, España",
    contacto: "garguis83@hotmail.com",
    resumen: "El correcto seguimiento y monitorización de los datos medioambientales será un factor clave de desarrollo y crecimiento de las organizaciones, permitiendo la implantación de acciones de mejora e innovaciones  que posicionen estratégicamente a la compañía.  Con más de 15 años de experiencia en el ámbito medioambiental, garantizando el cumplimiento de estándares medioambientales y añadiendo rigor a las decisiones en este importante ámbito.",
  },
  formacion: {
    universitaria: [
      { titulo: "Máster en Prevención de Riesgos Laborales", centro: "Valencian International University", año: "2022 - 2023", tipo: "universitaria" },
      { titulo: "Licenciatura en Ciencias Medioambientales", centro: "Universidad de Valencia", año: "2014-2018", tipo: "curso" },
    ],
    cursos: {
      MedioAmbiente: [
      {titulo: "Estrategia y Sostenibilidad", centro: "Coursera", año:"2025"},
      {titulo: "Legislación Medioambiental: residuos, suelo y atmósfera", centro: "", año:"2022"},
      {titulo: "Sostenibilidad Medioambiental en el Negocio", centro: "Colegio de Ambientólogos", año:"2021"},
      {titulo: "Programación, Comunicaciones y Medidas de Seguridad de Aplicaciones Robóticas para Automatizaciónd de procesos", centro: "Coursera", año:"2021"},
      {titulo: "Teledetección aplicada al Medio Ambiente", centro: "Coursera", año:"2020"}
    ],
      management: [
        {titulo: "Certificado Profesional de Gestión de Proyectos", centro: "Colegio de Ambientólogos", año:"2021"}
    ],
      auditoria: [
        {titulo: "Implementación de Sistemas para la Gestión de Seguridad y Salud bajo ISO 45001:2018", centro: "Coursera", año:"2021"}
      ]}
    },

  experiencia: [ 
    { cargo: "Profesional de Gestión Medioambiental", empresa: "Siemens Gamesa", periodo: "2020 - Actualidad", logros: "Departamento Sostenibilidad", long_desc: "" },
    { cargo: "Técnico de Preveción y Medio Ambiente", empresa: "Siemens Gamesa", periodo: "2016 - 2020", logros: "Departamento Estrategia", long_desc: "" },
    { cargo: "Planificadora-Supervisora", empresa: "Siemens Gamesa", periodo: "2012 - 2016", logros: "Departamento....", long_desc: "" },
    { cargo: "Técnico de Calidad y Medioambient", empresa: "Siemens Gamesa", periodo: "2010 - 2012", logros: "Departamento: Servicios", long_desc: "" },
    { cargo: "Técnico de Calidad y Medioambiente", empresa: "TORRESCÁMARA", periodo: "2006-2010", logros: "Oficina Técnica", long_desc:"" }
  ],

  proyectos: {
    medioambiente: [
      { id: 1, nombre: "Estrategias Descarbonización", desc: "Gestión de la estrategia de decarbonización...", tech: "decarbonización, 0emisiones", long_desc: "" }
    ],
    prevencion: [
      { id: 2, nombre: "Implantación de ...", desc: "Desarrollo de un entorno virtual, simulando un Hospital Real", tech: "ISO 9001",long_desc: ""  }
    ],
    otros: [
      { id: 3, nombre: "Mentoria Tech", desc: "Mentor voluntario para nuevos desarrolladores.", tech: "Liderazgo", long_desc: ""  }
    ]
  }
};

export default CV_DATA