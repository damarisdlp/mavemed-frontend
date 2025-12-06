export const hydrafacial = {
  urlSlug: "hydrafacial",
  category: "facials",
  categoryDisplayName: {
    en: "Facials",
    es: "Faciales"
  },
  serviceDisplayName: {
    en: "HydraFacial MD",
    es: "HydraFacial MD"
  },
  isPopular: true,
  isPromoEligible: false,
  images: {
    primary: "/hydrafacial.jpg",
    secondary: "/hydrafacial2.jpg"
  },
  description: {
    en: "Experience a medical-grade HydraFacial in Tijuana featuring patented Vortex-Fusion® technology for deep pore cleansing, painless extractions, and intense skin hydration. Perfect for acne-prone, dry, or congested skin.",
    es: "Vive un HydraFacial de grado médico en Tijuana con la tecnología patentada Vortex-Fusion® para limpiar poros en profundidad, realizar extracciones indoloras e hidratar intensamente. Perfecto para piel con acné, seca o congestionada."
  },
  details: {
    en: "HydraFacial MD is a multi-step, medical-grade facial that uses patented Vortex-Fusion® technology to deeply cleanse, exfoliate, and infuse hydrating serums into the skin. It’s ideal for clients with acne-prone, dull, or congested complexions seeking clearer, more radiant skin.",
    es: "HydraFacial MD es un facial de varios pasos y grado médico que utiliza la tecnología patentada Vortex-Fusion® para limpiar, exfoliar y perfundir sueros hidratantes en la piel. Es ideal para piel con tendencia a acné, opaca o congestionada que busca mayor claridad y luminosidad."
  },
  notes: [
    {
      en: "No downtime — makeup can be applied the same day",
      es: "Sin tiempo de recuperación; puedes maquillarte el mismo día"
    },
    {
      en: "Safe for all skin tones and sensitive skin types",
      es: "Seguro para todos los tonos de piel y pieles sensibles"
    },
    {
      en: "Includes optional manual extractions when needed",
      es: "Incluye extracciones manuales opcionales según necesidad"
    }
  ],
  pricing: {
    startingPrice: { en: "$95", es: "$95" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Hydrafacial MD - Face",
          es: "Hydrafacial MD - Rostro"
        },
        isPromoEligible: false,
        optionPrice: { en: "$95", es: "$95" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: {
          en: "Hydrafacial MD - Shoulders",
          es: "Hydrafacial MD - Hombros"
        },
        isPromoEligible: false,
        optionPrice: { en: "$130", es: "$130" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: {
          en: "Hydrafacial MD - Upper Back",
          es: "Hydrafacial MD - Upper Back"
        },
        isPromoEligible: false,
        optionPrice: { en: "$150", es: "$150" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      }
    ]
  },
  goals: [
    {
      en: "Deeply cleanse and exfoliate the skin",
      es: "Limpiar y exfoliar profundamente la piel"
    },
    {
      en: "Unclog pores and remove blackheads",
      es: "Desobstruir poros y eliminar puntos negros"
    },
    {
      en: "Hydrate and brighten dull or uneven skin",
      es: "Hidratar e iluminar la piel apagada o con tono desigual"
    }
  ],
  treatableAreas: [
    {
      en: "Face",
      es: "Rostro"
    },
    {
      en: "Shoulders",
      es: "Hombros"
    },
    {
      en: "Upper Back",
      es: "Espalda alta"
    }
  ],
  addOns: [
    {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild: "Any Zone",
      displayName: {
        en: "Wrinkle Reducer - Botox",
        es: "Wrinkle Reducer - Botox"
      },
      link: "/treatments/wrinkle-reducers-botox"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid using retinol, acids, and exfoliants 48 hours before treatment.",
        es: "Evita usar retinol, ácidos y exfoliantes 48 horas antes del tratamiento."
      }
    ],
    postTreatment: [
      {
        en: "Enjoy immediate glow and hydration.",
        es: "Disfruta de luminosidad e hidratación inmediatas."
      },
      {
        en: "Avoid harsh skincare products for 24 hours and apply sunscreen.",
        es: "Evita productos agresivos durante 24 horas y aplica protector solar."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How often should I get a HydraFacial?",
        es: "¿Con qué frecuencia debo hacerme un HydraFacial?"
      },
      answer: {
        en: "For optimal results, we recommend a HydraFacial every 4 weeks to maintain clear, glowing skin.",
        es: "Para obtener mejores resultados, recomendamos un HydraFacial cada 4 semanas para mantener la piel clara y luminosa."
      }
    },
    {
      question: {
        en: "Is HydraFacial good for acne?",
        es: "¿El HydraFacial es bueno para el acné?"
      },
      answer: {
        en: "Yes. HydraFacial gently removes impurities, clears pores, and delivers acne-fighting serums for smoother skin.",
        es: "Sí. HydraFacial elimina impurezas, limpia poros y aplica sueros que combaten el acné para lograr una piel más suave."
      }
    },
    {
      question: {
        en: "Can I wear makeup after a HydraFacial?",
        es: "¿Puedo usar maquillaje después de un HydraFacial?"
      },
      answer: {
        en: "Yes. Makeup can be applied the same day, but many patients prefer to enjoy the natural post-treatment glow.",
        es: "Sí. Puedes maquillarte el mismo día, aunque muchos pacientes prefieren lucir el brillo natural posterior al tratamiento."
      }
    }
  ]
};
