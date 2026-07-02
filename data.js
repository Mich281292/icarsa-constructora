// Datos de proyectos con múltiples imágenes para carrusel
const projectsData = [
    {
        id: 1,
        title: "Urbanización de Terracerías",
        shortDescription: "Movimiento de tierras, pavimentación, obras de drenaje y señalización vial.",
        fullDescription: "Proyecto integral de urbanización de terracerías que incluye ampliación de áreas de trabajo, pavimentación de superficies, construcción de obras de drenaje y señalización vial completa. Este proyecto fue ejecutado con altos estándares de calidad y seguridad.",
        mainImage: "Modernizacion de terracerias/modernizacion1.jpeg",
        features: [
            "Movimiento de tierras",
            "Pavimentación de superficies",
            "Construcción de obras de drenaje",
            "Señalización vial completa"
        ],
        galleryImages: ["Modernizacion de terracerias/modernizacion1.jpeg", "Modernizacion de terracerias/modernizacion2.jpeg", "Modernizacion de terracerias/modernizacion3.jpeg", "Modernizacion de terracerias/modernizacion4.jpeg", "Modernizacion de terracerias/modernizacion5.jpeg"]
    },
    {
        id: 2,
        title: "Sistema de Control de Agua Pluvial",
        shortDescription: "Excavaciones, movimiento de materiales, estabilización, concretos lanzados y obras de control.",
        fullDescription: "Sistema especializado para el control y manejo de agua pluvial. Incluye excavaciones profundas, movimiento de materiales, estabilización del terreno, aplicación de concretos lanzados y obras de control hidráulico para prevenir inundaciones.",
        mainImage: "pluvial1.png",
        features: [
            "Excavaciones profundas",
            "Movimiento de materiales",
            "Estabilización del terreno",
            "Aplicación de concretos lanzados",
            "Obras de control hidráulico"
        ],
        galleryImages: ["pluvial1.png", "Sistema de control/sistema1.jpeg", "Sistema de control/sistema2.jpeg", "Sistema de control/sistema3.jpeg", "Sistema de control/sistema4.jpeg"]
    },
    {
        id: 3,
        title: "Vialidades y Plataformas",
        shortDescription: "Cortes de terreno, estabilización, rellenos, líneas de alcantarillado y agua potable.",
        fullDescription: "Proyecto de infraestructura vial que incluye cortes de terreno, estabilización de suelo, rellenos compactados, instalación de líneas de alcantarillado y agua potable. Diseñado para soportar tráfico pesado y garantizar durabilidad.",
        mainImage: "vialidades1.png",
        features: [
            "Cortes de terreno",
            "Estabilización de suelo",
            "Rellenos compactados",
            "Instalación de líneas de alcantarillado",
            "Agua potable"
        ],
        galleryImages: ["vialidades1.png", "Vialidades y plataformas/vialidades1.jpeg", "Vialidades y plataformas/vialidades2.jpeg", "Vialidades y plataformas/vialidades3.jpeg", "Vialidades y plataformas/vialidades4.jpeg"]
    },
    {
        id: 4,
        title: "Edificios Comerciales",
        shortDescription: "Construcción de edificios comerciales y de servicios de múltiples niveles.",
        fullDescription: "Construcción de modernos edificios comerciales y de servicios con múltiples niveles. Incluye estructuras de concreto armado, sistemas eléctricos completos, sanitarios y especializados para uso comercial.",
        mainImage: "edificio2.png",
        features: [
            "Estructuras de concreto armado",
            "Sistemas eléctricos completos",
            "Sanitarios especializados",
            "Sistemas de climatización"
        ],
        galleryImages: ["edificio2.png", "Edificios comerciales/edificios1.jpeg", "Edificios comerciales/edificios2.jpeg", "Edificios comerciales/edificios3.jpeg", "Edificios comerciales/edificios4.jpeg"]
    },
    {
        id: 5,
        title: "Red Eléctrica, Voz y Datos",
        shortDescription: "Instalación y tendido de redes eléctricas, sistemas de voz y datos para infraestructura moderna.",
        fullDescription: "Instalación completa de infraestructura de telecomunicaciones incluyendo redes eléctricas de alta y baja tensión, sistemas de voz IP y redes de datos de alta velocidad. Tecnología de punta para conectividad moderna.",
        mainImage: "Red electrica voz y datos/redelectrica7.jpeg",
        features: [
            "Redes eléctricas de alta y baja tensión",
            "Sistemas de voz IP",
            "Redes de datos de alta velocidad"
        ],
        galleryImages: ["Red electrica voz y datos/redelectrica7.jpeg", "Red electrica voz y datos/redelectrica1.jpeg", "Red electrica voz y datos/redelectrica2.jpeg", "Red electrica voz y datos/redelectrica3.jpeg", "Red electrica voz y datos/redelectrica4.jpeg", "Red electrica voz y datos/redelectrica5.jpeg", "Red electrica voz y datos/redelectrica6.jpeg", "Red electrica voz y datos/redelectrica7.jpeg", "Red electrica voz y datos/redelectrica8.jpeg"]
    },
    {
        id: 6,
        title: "Construcción de Casa y Departamentos Muestra",
        shortDescription: "Desarrollo y construcción de casas y departamentos modelo para proyectos residenciales.",
        fullDescription: "Construcción de viviendas modelo de alta calidad para proyectos residenciales. Incluye diseño arquitectónico moderno, acabados de lujo y sistemas inteligentes para el hogar.",
        mainImage: "Construccion de casas/casas1.jpeg",
        features: [
            "Diseño arquitectónico moderno",
            "Acabados de lujo",
            "Sistemas inteligentes para el hogar"
        ],
        galleryImages: ["Construccion de casas/casas1.jpeg", "Construccion de casas/casas2.jpeg", "Construccion de casas/casas3.jpeg", "Construccion de casas/casas4.jpeg", "Construccion de casas/casas5.jpeg"]
    },
    {
        id: 7,
        title: "Redes Condominales",
        shortDescription: "Instalación y desarrollo de redes de servicios para complejos condominales y residenciales.",
        fullDescription: "Instalación de redes completas de servicios para complejos condominales incluyendo agua potable, drenaje sanitario, electricidad y telecomunicaciones. Diseñadas para eficiencia y sostenibilidad.",
        mainImage: "redes1.png",
        features: [
            "Instalación de redes de agua potable",
            "Drenaje sanitario completo",
            "Electricidad para uso residencial",
            "Telecomunicaciones modernas"
        ],
        galleryImages: ["redes1.png", "Redes condominales/condominios1.jpeg", "Redes Condominales/condominios2.jpeg", "Redes condominales/condominios3.jpeg", "Redes condominales/condominios4.jpeg"]
    },
    {
        id: 8,
        title: "Construcción de Nave Industrial y Edificio de Oficinas",
        shortDescription: "Construcción de nave industrial y edificio de oficinas para agencia de autos Alemania.",
        fullDescription: "Proyecto integral para agencia de autos Alemania que incluye una nave industrial para servicios y un edificio de oficinas administrativas de múltiples pisos con acabados profesionales.",
        mainImage: "nave1.png",
        features: [
            "Estructuras de concreto armado",
            "Sistemas eléctricos completos",
            "Sanitarios especializados",
            "Sistemas de climatización"
        ],
        galleryImages: ["nave1.png", "Construcción de Nave Industrial y Edificio de Oficinas/nave2.png", "Construcción de Nave Industrial y Edificio de Oficinas/nave3.png"]
    },
    {
        id: 9,
        title: "Construcción de Parque Central de Fraccionamiento",
        shortDescription: "Desarrollo y construcción de parque central con áreas verdes y recreativas para fraccionamiento.",
        fullDescription: "Desarrollo integral de parque central para fraccionamiento incluyendo áreas verdes, espacios recreativos, juegos infantiles, áreas deportivas y senderos peatonales arbolados.",
        mainImage: "fraccionamiento1.png",
        features: [
            "Áreas verdes",
            "Espacios recreativos",
            "Juegos infantiles",
            "Áreas deportivas",
            "Senderos peatonales arbolados"
        ],
        galleryImages: ["fraccionamiento1.png", "Construccion de parque central/parque1.jpeg", "Construccion de parque central/parque2.jpeg", "Construccion de parque central/parque3.jpeg", "Construccion de parque central/parque4.jpeg"]
    },
    {
        id: 10,
        title: "Cimentaciones",
        shortDescription: "Diseño y construcción de cimentaciones especializadas para todo tipo de estructuras y edificaciones.",
        fullDescription: "Servicios especializados de diseño y construcción de cimentaciones para diversos tipos de estructuras. Incluye análisis geotécnico, pilotes, zapatas y otras soluciones según los requerimientos.",
        mainImage: "cimentaciones1.png",
        features: [
            "Análisis geotécnico",
            "Pilotes",
            "Zapatas",
            "Otras soluciones según requerimientos"
        ],
        galleryImages: ["cimentaciones1.png", "Cimentaciones/cimentaciones1.jpeg", "Cimentaciones/cimentaciones2.jpeg", "Cimentaciones/cimentaciones3.jpeg", "Cimentaciones/cimentaciones4.jpeg"]
    }
];

// Función para obtener un proyecto por ID
function getProjectById(id) {
    return projectsData.find(project => project.id === parseInt(id));
}

// Función para obtener todos los proyectos
function getAllProjects() {
    return projectsData;
}

// Datos de servicios
const servicesData = [
    {
        id: 1,
        title: "Renta de Maquinaria",
        shortDescription: "Maquinaria profesional para todo tipo de proyectos.",
        fullDescription: "Contamos con una amplia flota de maquinaria pesada moderna y bien mantenida para satisfacer todas tus necesidades de construcción. Desde excavadoras hasta grúas, ofrecemos equipos de alta calidad a precios competitivos.",
        icon: "fa-truck-monster",
        galleryImages: ["Modernizacion de terracerias/modernizacion2.jpeg", "Modernizacion de terracerias/modernizacion7.jpeg", "condominios1.jpeg"],
        features: [
            "Equipos modernos y bien mantenidos",
            "Disponibilidad de maquinaria pesada variada",
            "Operadores especializados disponibles",
            "Precios competitivos",
            "Entrega y recolección a domicilio"
        ]
    },
    {
        id: 2,
        title: "Renta de Equipo y Herramienta",
        shortDescription: "Equipo y herramientas profesionales de última generación.",
        fullDescription: "Disponemos de herramientas profesionales de última generación para facilitar el trabajo en cualquier tipo de proyecto. Contamos con un inventario completo y actualizado de equipos de calidad.",
        icon: "fa-tools",
        galleryImages: ["equipo1.png", "equipo2.png", "equipo3.png"],
        features: [
            "Herramientas profesionales de última generación",
            "Inventario completo y actualizado",
            "Asesoramiento en el uso de herramientas",
            "Mantenimiento regular de equipos",
            "Flexibilidad en períodos de renta"
        ]
    },
    {
        id: 3,
        title: "Mantenimiento Industrial",
        shortDescription: "Servicios especializados de mantenimiento para instalaciones industriales.",
        fullDescription: "Ofrecemos servicios integrales de mantenimiento preventivo y correctivo para instalaciones industriales. Nuestro equipo especializado garantiza el funcionamiento óptimo de tus operaciones.",
        icon: "fa-industry",
        galleryImages: ["mantenimiento1.png", "mantenimiento2.png", "mantenimiento3.png"],
        features: [
            "Mantenimiento preventivo y correctivo",
            "Equipo especializado de técnicos",
            "Respuesta rápida a emergencias",
            "Minimización de tiempos de inactividad",
            "Informes detallados de trabajo"
        ]
    },
    {
        id: 4,
        title: "Presupuestos de Obra",
        shortDescription: "Elaboración de presupuestos detallados y competitivos para todo tipo de proyectos.",
        fullDescription: "Nos especializamos en la elaboración de presupuestos detallados, competitivos y transparentes. Contamos con profesionales experimentados que analizan cada aspecto de tu proyecto.",
        icon: "fa-calculator",
        galleryImages: ["presupuesto1.png", "presupuesto2.png", "presupuesto3.png"],
        features: [
            "Análisis detallado de proyectos",
            "Presupuestos competitivos",
            "Transparencia total en costos",
            "Revisión de documentos técnicos",
            "Asesoramiento en optimización de costos"
        ]
    },
    {
        id: 5,
        title: "Construcciones, Instalaciones y Remodelaciones",
        shortDescription: "Servicio integral de construcción, instalaciones especializadas y remodelaciones.",
        fullDescription: "Brindamos servicios integrales de construcción desde la planificación hasta la ejecución final. Especializados en instalaciones eléctricas, sanitarias y remodelaciones de espacios.",
        icon: "fa-hammer",
        galleryImages: ["construccion1.png", "construccion2.png", "construccion3.png"],
        features: [
            "Construcción desde cero",
            "Instalaciones especializadas",
            "Remodelaciones profesionales",
            "Materiales de calidad",
            "Cumplimiento de normas y estándares"
        ]
    },
    {
        id: 6,
        title: "Ejecución y Dirección de Obras Hidráulicas",
        shortDescription: "Gestión y construcción de proyectos hidráulicos especializados.",
        fullDescription: "Contamos con expertos en obras hidráulicas que gestionan y ejecutan proyectos complejos de infraestructura hídrica con estándares internacionales de calidad.",
        icon: "fa-water",
        galleryImages: ["hidraulica1.png", "hidraulica2.png", "hidraulica3.png"],
        features: [
            "Experiencia en proyectos hidráulicos complejos",
            "Dirección técnica especializada",
            "Cumplimiento de normas ambientales",
            "Infraestructura moderna",
            "Garantía integral del proyecto"
        ]
    },
    {
        id: 7,
        title: "Pavimentos",
        shortDescription: "Construcción y mantenimiento de pavimentos asfálticos y de concreto.",
        fullDescription: "Realizamos la construcción, reparación y mantenimiento de pavimentos asfálticos y de concreto. Contamos con equipos modernos y personal especializado para garantizar durabilidad.",
        icon: "fa-road",
        galleryImages: ["pavimento1.png", "pavimento2.png", "pavimento3.png"],
        features: [
            "Pavimentos asfálticos de calidad",
            "Construcción de concreto duradero",
            "Mantenimiento preventivo",
            "Equipos especializados",
            "Diseño según especificaciones técnicas"
        ]
    },
    {
        id: 8,
        title: "Urbanizaciones",
        shortDescription: "Desarrollo completo de proyectos de urbanización y fraccionamientos.",
        fullDescription: "Gestionamos proyectos integrales de urbanización desde la planificación hasta la entrega. Contamos con experiencia en desarrollo de fraccionamientos residenciales y comerciales.",
        icon: "fa-city",
        galleryImages: ["urbanizacion1.png", "urbanizacion2.png", "urbanizacion3.png"],
        features: [
            "Planificación integral de proyectos",
            "Desarrollo residencial y comercial",
            "Infraestructura completa",
            "Espacios verdes y recreativos",
            "Cumplimiento normativo y legal"
        ]
    }
];

// Función para obtener un servicio por ID
function getServiceById(id) {
    return servicesData.find(service => service.id === parseInt(id));
}

// Función para obtener todos los servicios
function getAllServices() {
    return servicesData;
}
