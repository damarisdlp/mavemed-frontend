export const sclerotherapy = {
  urlSlug: "sclerotherapy",
  category: "body-medical-treatments",
  categoryDisplayName: {
    en: "Body & Medical Treatments",
    es: "Tratamientos Corporales y Médicos"
  },
  serviceDisplayName: {
    en: "Sclerotherapy for Vein Removal",
    es: "Escleroterapia para Eliminación de Venas"
  },
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/sclerotherapy.jpg",
    secondary: "/sclerotherapy2.jpg",
  },
  description: {
    en: "Minimally invasive injection treatment to eliminate spider veins and improve leg appearance.",
    es: "Tratamiento mínimamente invasivo de inyecciones para eliminar venas de araña y mejorar la apariencia de las piernas."
  },
  details: {
    en: "Sclerotherapy involves injecting a sclerosing agent into small superficial veins, causing them to collapse and fade from view. It is commonly used to treat spider veins and small varicose veins on the legs.",
    es: "La escleroterapia implica inyectar un agente esclerotizante en venas superficiales pequeñas, causando que colapsen y se desvanezcan de la vista. Se usa comúnmente para tratar venas de araña y venas varicosas pequeñas en las piernas."
  },
  notes: [
    {
      en: "Multiple sessions may be needed for optimal results",
      es: "Pueden ser necesarias múltiples sesiones para resultados óptimos"
    },
    {
      en: "Compression stockings required post-treatment",
      es: "Medias de compresión requeridas después del tratamiento"
    },
    {
      en: "Ideal for non-varicose surface veins",
      es: "Ideal para venas superficiales no varicosas"
    }
  ],
  pricing: {
    startingPrice: "Based on consultation",
    startingPriceCurrency: "",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Any Corporal Zone",
          es: "Cualquier Zona Corporal"
        },
        isPromoEligible: false,
        optionPrice: "Based on consultation",
        optionCurrency: "",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null,
      },
    ],
  },
  goals: [
    {
      en: "Reduce visibility of spider veins",
      es: "Reducir visibilidad de venas de araña"
    },
    {
      en: "Improve leg aesthetics",
      es: "Mejorar estética de piernas"
    },
    {
      en: "Prevent worsening of vascular issues",
      es: "Prevenir empeoramiento de problemas vasculares"
    }
  ],
  treatableAreas: [
    {
      en: "Thighs",
      es: "Muslos"
    },
    {
      en: "Calves",
      es: "Pantorrillas"
    },
    {
      en: "Ankles",
      es: "Tobillos"
    }
  ],
  addOns: [
    {
      serviceParent: "Relaxing Swedish Massage",
      serviceChild:  "Full Body",
      displayName: {
        en: "Relaxing Swedish Massage - Full Body",
        es: "Masaje Sueco Relajante - Cuerpo Completo"
      },
      link:          "/treatments/swedish-massage"
    },
    {
      serviceParent: "Cupping Therapy - Add‑On",
      serviceChild:  "Cupping Therapy - Add‑On",
      displayName: {
        en: "Cupping Therapy - Add‑On",
        es: "Terapia de Ventosas - Complemento"
      },
      link:          "/treatments/cupping"
    },
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid aspirin, ibuprofen, or alcohol 24 hours prior. Wear loose clothing.",
        es: "Evite aspirina, ibuprofeno o alcohol 24 horas antes. Vista ropa holgada."
      }
    ],
    postTreatment: [
      {
        en: "Wear compression stockings for 5–7 days. Avoid sun exposure and high-impact activity.",
        es: "Vista medias de compresión durante 5-7 días. Evite exposición al sol y actividad de alto impacto."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How long before I see results?",
        es: "¿Cuánto tiempo antes de ver resultados?"
      },
      answer: {
        en: "Veins typically fade over 3–6 weeks. Larger veins may take longer or require more sessions.",
        es: "Las venas generalmente se desvanecen en 3-6 semanas. Las venas más grandes pueden tomar más tiempo o requerir más sesiones."
      }
    },
    {
      question: {
        en: "Is the procedure painful?",
        es: "¿El procedimiento es doloroso?"
      },
      answer: {
        en: "There may be a slight stinging or cramping sensation, but most patients tolerate it well.",
        es: "Puede haber una ligera sensación de picazón o calambres, pero la mayoría de los pacientes lo toleran bien."
      }
    }
  ]
};