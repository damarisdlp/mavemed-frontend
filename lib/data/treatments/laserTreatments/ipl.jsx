export const ipl = {
  urlSlug: "ipl",
  category: "laser-resurfacing",
  categoryDisplayName: {
    en: "Laser Treatments & Skin Resurfacing",
    es: "Tratamientos Láser y Resurfacing Cutáneo"
  },
  serviceDisplayName: {
    en: "IPL Photofacial (Harmony XL)",
    es: "Fotofacial IPL (Harmony XL)"
  },
  isPopular: true,
  images: {
    primary: "/ipl.jpg",
    secondary: "/ipl2.jpg"
  },
  description: {
    en: "Light based therapy to reduce sun damage, pigmentation, redness, and boost overall skin clarity.",
    es: "Terapia basada en luz para reducir daño solar, manchas, enrojecimiento y mejorar la claridad general de la piel."
  },
  details: {
    en: "IPL (Intense Pulsed Light) uses broad spectrum light to target pigment, sun spots, redness, and broken capillaries. It gently revitalizes the skin and improves tone without damaging the surface.",
    es: "IPL (Luz Pulsada Intensa) utiliza luz de amplio espectro para tratar pigmento, manchas solares, enrojecimiento y vasitos rotos. Revitaliza la piel de manera suave y mejora el tono sin dañar la superficie."
  },
  notes: [
    {
      en: "Requires photo evaluation for clearance",
      es: "Requiere evaluación con fotografía previa para autorización"
    },
    {
      en: "No active tan or self tanner before session",
      es: "No debe haber bronceado activo ni autobronceador antes de la sesión"
    }
  ],
  pricing: {
    startingPrice: "$650",
    startingPriceCurrency: "MXN",
    promoPrice: "",
    promoPriceCurrency: "MXN",
    options: [
      // Face / Neck combos
      {
        optionName: { en: "Face", es: "Rostro" },
        optionPrice: { en: "$700", es: "$700" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },
      {
        optionName: { en: "Neck", es: "Cuello" },
        optionPrice: { en: "$700", es: "$700" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },
      {
        optionName: { en: "Face + Neck", es: "Rostro + Cuello" },
        optionPrice: { en: "$1,400", es: "$1,400" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },
      {
        optionName: { en: "Face + Neck + Décolleté", es: "Rostro + Cuello + Escote" },
        optionPrice: { en: "$2,100", es: "$2,100" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },
      {
        optionName: { en: "Face + Neck + Décolleté + Chest", es: "Rostro + Cuello + Escote + Pecho" },
        optionPrice: { en: "$2,800", es: "$2,800" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },

      // Chest / Décolleté
      {
        optionName: { en: "Décolleté", es: "Escote" },
        optionPrice: { en: "$700", es: "$700" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },
      {
        optionName: { en: "Chest", es: "Pecho" },
        optionPrice: { en: "$700", es: "$700" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },

      // Zones
      {
        optionName: { en: "Small Zone", es: "Zona Pequeña" },
        optionPrice: { en: "$675", es: "$675" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: [
          {
            en: "Area total [103 cm² - 413 cm²]. Approximately one to two palms — similar to a credit card up to half a sheet of paper.",
            es: "Área total [103 cm² - 413 cm²]. Aproximadamente de una a dos palmas de la mano, similar al tamaño de una tarjeta de crédito hasta media hoja de papel."
          }
        ]
      },
      {
        optionName: { en: "Medium Zone", es: "Zona Mediana" },
        optionPrice: { en: "$1,565", es: "$1,565" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: [
          {
            en: "Area total [523 cm² - 1080.3 cm²]. Four to six palms — roughly the size of a full sheet of paper.",
            es: "Área total [523 cm² - 1080.3 cm²]. De cuatro a seis palmas de la mano, aproximadamente del tamaño de una hoja completa de papel."
          }
        ]
      },
      {
        optionName: { en: "Large Zone", es: "Zona Grande" },
        optionPrice: { en: "$3,450", es: "$3,450" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: [
          {
            en: "Area total [196 in² - 324 in²]. Eight to twelve palms — about the size of a square pillow or large square.",
            es: "Área total [1264 cm² - 2090 cm²]. De ocho a doce palmas de la mano, aproximadamente del tamaño de un cojín cuadrado o un cuadrado grande."
          }
        ]
      },

      // Other areas
      {
        optionName: { en: "Hands", es: "Manos" },
        optionPrice: { en: "$650", es: "$650" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },
      {
        optionName: { en: "Legs", es: "Piernas" },
        optionPrice: { en: "$3,450", es: "$3,450" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },
      {
        optionName: { en: "Hands + Legs", es: "Manos + Piernas" },
        optionPrice: { en: "$4,100", es: "$4,100" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      }
    ]
  },
  goals: [
    {
      en: "Reduce pigmentation and age spots",
      es: "Reducir pigmentación y manchas de la edad"
    },
    {
      en: "Minimize redness and rosacea",
      es: "Minimizar enrojecimiento y rosácea"
    },
    {
      en: "Brighten dull skin and improve tone",
      es: "Aportar luminosidad a la piel opaca y mejorar el tono"
    }
  ],
  treatableAreas: [
    {
      en: "Face",
      es: "Rostro"
    },
    {
      en: "Neck",
      es: "Cuello"
    },
    {
      en: "Chest",
      es: "Pecho"
    },
    {
      en: "Hands",
      es: "Manos"
    },
    {
      en: "Shoulders",
      es: "Hombros"
    },
    {
      en: "Arms",
      es: "Brazos"
    },
    {
      en: "Other zones available upon request",
      es: "Otras zonas disponibles bajo solicitud"
    }
  ],
  addOns: [
    {
      treatmentSlug: "rf-microneedling",
      optionName: {
        en: "Sylfirm X - RF Microneedling - Face + Neck + Décolleté",
        es: "Sylfirm X - Microagujas RF - Rostro + Cuello + Escote"
      }
    },
    {
      treatmentSlug: "hydrafacial",
      optionName: {
        en: "Hydrafacial MD - Face",
        es: "Hydrafacial MD - Rostro"
      }
    },
    {
      treatmentSlug: "casmara-purifying",
      optionName: {
        en: "Casmara - Purifying Algae Facial",
        es: "Casmara - Facial Purificante de Algas"
      }
    },
    {
      treatmentSlug: "microneedling",
      optionName: {
        en: "Microneedling - PRP - Platelet Rich Plasma",
        es: "Microneedling - PRP - Plasma Rico en Plaquetas"
      }
    },
    {
      treatmentSlug: "microneedling",
      optionName: {
        en: "Microneedling - PN - Polynucleotide",
        es: "Microneedling - PN - Polinucleótido"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid sun exposure, tanning beds and self tanners for 2 weeks before treatment.",
        es: "Evite la exposición solar intensa, camas de bronceado y autobronceadores durante 2 semanas antes del tratamiento."
      },
      {
        en: "Discontinue retinoids, acids, and exfoliation 5–7 days prior; arrive with clean skin, no makeup.",
        es: "Suspenda retinoides, ácidos y exfoliación 5–7 días antes; acuda con la piel limpia y sin maquillaje."
      },
      {
        en: "Avoid photosensitizing meds (per provider guidance) and inform us of any antibiotics or recent sunburn.",
        es: "Evite medicamentos fotosensibilizantes (según indicación) e infórmenos sobre antibióticos recientes o quemadura solar."
      }
    ],
    duringTreatment: [
      {
        en: "Expect a warm, quick snap sensation; cooling gel and chilled tip help comfort.",
        es: "Espere una sensación de chasquido cálido y rápido; el gel frío y la punta refrigerada ayudan a la comodidad."
      },
      {
        en: "Mild redness or darkening of spots can occur immediately as pigment absorbs the light.",
        es: "Puede presentarse enrojecimiento leve u oscurecimiento inmediato de las manchas al absorber la luz."
      }
    ],
    postTreatment: [
      {
        en: "Pigmented spots may darken and flake off over 5–7 days; avoid picking.",
        es: "Las manchas pigmentadas pueden oscurecerse y descamarse en 5–7 días; evite manipularlas."
      },
      {
        en: "Use SPF 30+ daily, avoid sun/heat for 72 hours, and pause active skincare for 3–5 days.",
        es: "Use FPS 30+ a diario, evite sol/calor por 72 horas y suspenda activos de cuidado de la piel por 3–5 días."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How many sessions will I need?",
        es: "¿Cuántas sesiones voy a necesitar?"
      },
      answer: {
        en: "Most patients need 3–5 sessions spaced 3–4 weeks apart for best results.",
        es: "La mayoría de los pacientes requiere de 3 a 5 sesiones, separadas cada 3 a 4 semanas, para obtener los mejores resultados."
      }
    },
    {
      question: {
        en: "Is there downtime?",
        es: "¿Hay tiempo de recuperación?"
      },
      answer: {
        en: "There is no formal downtime, but pigmented areas may darken or flake for a few days after treatment.",
        es: "No hay un tiempo de recuperación estricto, aunque las áreas pigmentadas pueden oscurecerse o descamarse durante algunos días después del tratamiento."
      }
    },
    {
      question: {
        en: "Can I wear makeup after IPL?",
        es: "¿Puedo usar maquillaje después de un tratamiento IPL?"
      },
      answer: {
        en: "Yes, makeup can usually be worn immediately, unless your provider gives you different instructions.",
        es: "Sí, normalmente puede usar maquillaje de inmediato, a menos que su especialista le indique lo contrario."
      }
    },
    {
      question: {
        en: "Does IPL hurt?",
        es: "¿Duele el tratamiento con IPL?"
      },
      answer: {
        en: "Most patients describe the sensation as a warm snap, similar to a quick rubber band on the skin. It is brief and well tolerated.",
        es: "La mayoría de los pacientes describe la sensación como un chasquido cálido, similar a una ligera liga sobre la piel. Es rápido y bien tolerado."
      }
    }
  ]
};
