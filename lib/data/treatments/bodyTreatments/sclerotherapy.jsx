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
    startingPrice: { en: "Based on consultation", es: "Basado en consulta" },
    startingPriceCurrency: "",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Any Corporal Zone",
          es: "Cualquier Zona Corporal"
        },
        optionPrice: { en: "Based on consultation", es: "Basado en consulta" },
        optionCurrency: "",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [],
      },
    ].sort(
      (a, b) =>
        parseFloat(
          (typeof a.optionPrice === "object" ? a.optionPrice.en : a.optionPrice).replace(
            /[^0-9.]/g,
            ""
          )
        ) -
        parseFloat(
          (typeof b.optionPrice === "object" ? b.optionPrice.en : b.optionPrice).replace(
            /[^0-9.]/g,
            ""
          )
        )
    ),
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
      treatmentSlug: "hydrafacial",
      optionName: {
        en: "Hydrafacial MD - Face",
        es: "Hydrafacial MD - Rostro"
      }
    },
    {
      treatmentSlug: "wrinkle-reducers-botox",
      optionName: {
        en: "Botox - Any Zone",
        es: "Botox - Cualquier Zona"
      }
    },
    {
      treatmentSlug: "wrinkle-reducers-dermawrinkle",
      optionName: {
        en: "Dermawrinkle - Any Zone",
        es: "Dermawrinkle - Cualquier Zona"
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
      treatmentSlug: "swedish-massage",
      optionName: {
        en: "Relaxing Swedish Massage - Full Body",
        es: "Masaje Sueco Relajante - Cuerpo Completo"
      }
    },
    {
      treatmentSlug: "cupping",
      optionName: {
        en: "Cupping Add‑On",
        es: "Complemento de Ventosas"
      }
    },
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid aspirin, NSAIDs, and alcohol for 48 hours if medically permitted; skip moisturizers or oils on legs the day of treatment.",
        es: "Evite aspirina, antiinflamatorios y alcohol por 48 horas si su médico lo permite; no use cremas u aceites en las piernas el día del tratamiento."
      },
      {
        en: "Bring or wear compression stockings as instructed; avoid shaving or waxing legs 24 hours prior.",
        es: "Traiga o use medias de compresión según se le indique; evite rasurar o depilar las piernas 24 horas antes."
      }
    ],
    duringTreatment: [
      {
        en: "You’ll feel small needle pricks and brief stinging or cramping as the solution enters the vein.",
        es: "Sentirá pequeños piquetes y un ardor o calambre breve mientras la solución entra en la vena."
      },
      {
        en: "Leg elevation and immediate compression are applied; walking soon after the procedure is encouraged.",
        es: "Se eleva la pierna y se aplica compresión de inmediato; se recomienda caminar poco después del procedimiento."
      }
    ],
    postTreatment: [
      {
        en: "Wear compression stockings as directed (often 5–7 days during waking hours) and walk 10–20 minutes daily.",
        es: "Use las medias de compresión según se indique (a menudo 5–7 días durante las horas de vigilia) y camine 10–20 minutos al día."
      },
      {
        en: "Avoid hot baths, saunas, intense sun, and high-impact exercise for 7 days; avoid heavy lifting for 48 hours.",
        es: "Evite baños calientes, saunas, sol intenso y ejercicio de alto impacto por 7 días; evite levantar peso por 48 horas."
      },
      {
        en: "Mild bruising, itching, or lumps along the vein can occur and usually resolve over weeks; contact us for severe calf pain, swelling, or redness.",
        es: "Moretones leves, comezón o nódulos a lo largo de la vena pueden ocurrir y suelen resolverse en semanas; contáctenos si presenta dolor de pantorrilla intenso, hinchazón o enrojecimiento."
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
