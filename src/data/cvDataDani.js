export const CV_DATA = {
  personal: {
    nombre: "DANIEL CUBERO MIMBIELA",
    puesto: "Gestor de Proyectos IT",
    ubicacion: "Valencia, España",
    contacto: "danielcuberomimbiela@gmail.com",
    resumen: "Transformo ideas complejas en experiencias digitales fluidas. Especializado en arquitectura de aplicaciones modernas.",
  },
  formacion: {
    universitaria: [
      { titulo: "Master en Gestión y Administración de Empresas (MBA)", centro: "Valencian International University", año: "2022 - 2023", tipo: "universitaria"},
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
        {titulo: "Tecnologías Transformadoras", centro: "EAE Business School", año:"2026"},
        {titulo: "Management 3.0.", centro: "EAE Business School", año:"2024"},
        {titulo: "Certificado Profesional de Gestión de Proyectos", centro: "Google", año:"2021"},
        {titulo: "Agile Management", centro: "EDEM - Escuela de Empresarios", año:"2022"},
        {titulo: "Programa Especializado - Gestión de Proyectos de Ingeniería", centro: "Coursera", año:"2021"}
    ],
      liderazgo: [
        {titulo: "Agile Leadership", centro: "Coursera", año:"2022"},
        {titulo: "Mejorando las habilidades de Comunicación", centro: "Coursera", año:"2021"},
        {titulo: "A Hands-On Introduction to Engineering Simulations", centro: "Coursera", año:"2018"}
      ]}
    },
  experiencia: [ 
    { cargo: "Gestor de Proyectos", empresa: "Valencian International University", periodo: "2022 - Actualidad", logros: "Vicerrectorado de Tecnología y Transformación Digital", detalle: "Coordino y desarrollo proyectos tecnológicos innovadores aplicados a la Educación Digital, integrando Realidad Virtual, automatización de procesos y desarrollo de software para mejorar la formación práctica y optimizar la eficiencia operativa de la institución. \n\nGestión de un equipo multidisciplinar de 3 personas, liderando la planificación, priorización de tareas, revisiones de código y entrega de proyectos con altos estándares técnicos." },
    { cargo: "Gestor de Proyectos de Innovación", empresa: "FACTOR Ingeniería y Decoletaje", periodo: "2021-2022", logros: "Departamento de Innovación", long_desc:"Junto con el CEO, establecí la Estrategia de Innovación de la empresa bajo los marcos de Desarrollo Empresarial e Industria 4.0.\n\n Gestor de Proyecto de la UE:  \n\n•i4Q Industrial Data Services for Quality Control in Smart Manufacturing \n• Distributed Platform for data mining and data processing based on Edge Computing \n\n Adquisición financiera de Proyecto de la UE: \n\n• TALON - AI Orchestrator for a Greener Industry 4.0." },
    { cargo: "Ingeniero de Proyecto", empresa: "DIPC - Donostia International Physics Center", periodo: "2018-2020", logros: "Departamento Ingeniería Proyecto PETALO", long_desc:"Ingeniero en el desarrollo del Proyecto Europeo PETALO (GA ID 757829). Diseño mecánico del primer prototipo del proyecto, el cuál consistía en elementos soportadores de temperaturas criogénicas y presiones tanto elevadas como de ultra-vacío, cuyas especificaciones suponen un gran reto. \n\nAdemás: \n• Gestión de compras y portfolio de adquisiciones. \n• Comunicaciones internas y externas. \n\nObjetivos cumplidos: \ndesarrollo del primer prototipo del proyecto." }
  ],
    proyectos: {
    europeos: [
      { id: 101, nombre: "i4Q - Industrial Data Services for Quality Control in Smart Manufacturing", desc: "Desarrollo de soluciones RIDS basadas en IoT e IA para optimizar el ciclo de datos industriales y lograr una fabricación cero-defectos.", tech: "Python, IA, Industria 4.0.", long_desc: "Participación estratégica como piloto en el desarrollo de las soliciones RIDS del proyecto i4Q, un ecosistema avanzado de servicios de datos industriales diseñado para la Industria 4.0. El proyecto se centró en garantizar la fiabilidad y calidad de datos masivos procedentes de dispositivos IoT en entornos de fabricación inteligente. Mi labor contribuyó en facilitar la integración de las soluciones en un entorno industrial." },
      { id: 102, nombre: "TALON . Autonomous and Self-organized Artificial Intelligent Orchestrator for a Greener Industry 4.0", desc: "Liderazgo en la redacción y captación de fondos para el proyecto consistente en el desarrollo de un orquestrador basado en Inteligencia Artificial y Gemelos Digitales.", tech: "Python, IA", long_desc: "Responsable de la elaboración de la propuesta técnica como empresa participante par ala adquisición de la financiación del proyecto europeo TALON. Definí la visión de la implementación un orquestador de IA para la Industria 5.0, enfocado en la optimización de recursos Edge/Cloud y la integración de inteligencia en sistemas embebidos. Mi labor fue clave para asegurar los fondos del proyecto, integrando soluciones de vanguardia como Blockchain para seguridad e-to-e y Digital Twins, posicionando la arquitectura como un referente en eficiencia y escalabilidad industrial." },
      { id: 103, nombre: "PETALO", desc: "Ingeniero Mecánico en el desarrollo del prototipo del proyecto PETALO, un capto", tech: "Ingeniería Mecánica, SolidWorks, Ansys", long_desc: "Participante como Ingeniero Mecánico en el diseño y la puesta en marcha del primer prototipo funcional para una nueva tecnología de tomografía por emisión de positrones (PET), basada en un prototipo de celdas de xenón líquido y sensores SiPM. Mi contribución se comprendió en el diseño mecánico de los distintos componentes a presión y a temperaturas criogénicas y a Ultra Alto Vacío (UHV), usando SolidWorks y Ansys, principalmente" },
    ],
    programacion: [
      { id: 201, nombre: "Hospital Virtual VIU", desc: "Desarrollo de un entorno virtual usando Unity, simulando un Hospital Real", tech: "Unity, #C, Python",long_desc: "Desarrollo con Unity del Hospital Virtual de VIU. En él, los alumnos pueden navegar por distintias estancias, acceder a software específico, y acceder a actividades virtuales desarrolladas por el profesor. Este desarrollo fue íntegramente hecho internamente, e incluyó el desarrollo de otras aplicaciones de infrastructura del hospital, hechas principalmente con Python, como la gestión de usuarios o lectura de notas de actividades."  },
      { id: 202, nombre: "vTriaje", desc: "Plataforma Virtual de Triaje Hospitalario", tech: "Unity, #C, Python",long_desc: "Desarrollo con Unity de una simulación virtual de Triaje, en la que el alumno evaluado recibe los casos de pacientes y se simula la conversación, para que este asigne prioridades y diagnósticos, evaluando la rapidez y el buen criterio del alumno. El desarrollo fue hecho con Unity."  },
      { id: 203, nombre: "SIM COMP VIU", desc: "Herramienta transversal para el desarrollo y evaluación de competencias profesionales basada en simulación virtual de casos clínicos", tech: "React, JS",long_desc: "Desarrollo de la herramienta tecnológica (SIM-COMP-VIU). Esta herramienta se basa en una interfaz en la que se muestra al alumno la actividad de forma digital. El desarrollo consistión en la lectura de un arbol de decisión que elaboraba el profesor y la creación, a partir de esta lectura, de una interfaz en la que se muestra la actividad al alumno,. Se empleó React para el desarrollo del Front End."  },
      { id: 203, nombre: "NORMA - Tu Asistente Legal Virtual", desc: "Asistente Virtual, consistente en un chatbot que resuelve dudas a alumnos de asignaturas con terminología legal", tech: "Python, JS, THREE.JS",long_desc: "Desarrollo de un chatbot, haciendo uso de la API de ChatGPT (empleando Python) para la creación de un asistente con la terminología a consultar y la librería THREE.JS para la integración del avatar en la interfaz."  },
    ]
  },
  habilidades: {
    programacion: [
      { nombre: "Python", nivel: "Avanzado" },
      { nombre: "#C", nivel: "Avanzado" },
      { nombre: "Unity", nivel: "Avanzado" },
      { nombre: "React", nivel: "Intermedio" },
      { nombre: "JavaScript", nivel: "Intermedio" }

    ],
    idiomas: [
      { nombre: "Español", nivel: "Nativo" },
      { nombre: "Inglés", nivel: "C1 - Avanzado" }
    ]
  }
};

export default CV_DATA