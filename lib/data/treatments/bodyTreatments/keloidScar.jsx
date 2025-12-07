export const keloidInjection = {
  urlSlug: "keloid-injection",
  category: "body-medical-treatments",
  categoryDisplayName: {
    en: "Body & Medical Treatments",
    es: "Tratamientos Corporales y Médicos"
  },
  serviceDisplayName: {
    en: "Keloid Scar Injection",
    es: "Inyección para Cicatriz Queloides"
  },
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/keloid.jpg",
    secondary: "/keloid2.jpg",
  },
  description: {
    en: "Targeted corticosteroid or anti-fibrotic injections to flatten and soften raised keloid scars.",
    es: "Inyecciones específicas de corticosteroides o anti-fibróticos para aplanar y suavizar cicatrices queloides elevadas."
  },
  details: {
    en: "This medical treatment involves injecting corticosteroids or specialized anti-fibrotic agents directly into keloid tissue. It helps reduce inflammation, pain, and scar thickness while improving cosmetic appearance over time.",
    es: "Este tratamiento médico implica inyectar corticosteroides o agentes anti-fibróticos especializados directamente en el tejido queloide. Ayuda a reducir la inflamación, dolor y grosor de la cicatriz mientras mejora la apariencia cosmética con el tiempo."
  },
  notes: [
    {
      en: "Multiple sessions may be required depending on size and response",
      es: "Pueden ser requeridas múltiples sesiones dependiendo del tamaño y respuesta"
    },
    {
      en: "Performed only under medical supervision",
      es: "Realizado solo bajo supervisión médica"
    },
    {
      en: "Available for cosmetic or symptomatic relief",
      es: "Disponible para alivio cosmético o sintomático"
    }
  ],
  pricing: {
    startingPrice: { en: "Based on consultation", es: "Basado en consulta" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Single Injection Area",
          es: "Área Única de Inyección"
        },
        isPromoEligible: false,
        optionPrice: { en: "Based on consultation", es: "Basado en consulta" },
        optionCurrency: "USD",
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
      en: "Reduce raised scar thickness",
      es: "Reducir el grosor de cicatriz elevada"
    },
    {
      en: "Improve scar appearance",
      es: "Mejorar apariencia de cicatriz"
    },
    {
      en: "Relieve itching or discomfort",
      es: "Aliviar picazón o incomodidad"
    }
  ],
  treatableAreas: [
    {
      en: "Ears",
      es: "Orejas"
    },
    {
      en: "Chest",
      es: "Pecho"
    },
    {
      en: "Shoulders",
      es: "Hombros"
    },
    {
      en: "Back",
      es: "Espalda"
    },
    {
      en: "Jawline",
      es: "Línea Mandibular"
    },
    {
      en: "Any area with a keloid scar",
      es: "Cualquier área con cicatriz queloide"
    }
  ],
  addOns: [
    {
      treatmentSlug: "venus-freeze",
      optionName: {
        en: "RF Body Sculpting - Abdomen Firming",
        es: "Escultura Corporal RF - Abdomen Firme"
      }
    },
    {
      treatmentSlug: "rf-microneedling",
      optionName: {
        en: "Sylfirm X - RF Microneedling - Medium Zone",
        es: "Sylfirm X - Microagujas RF - Zona Mediana"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "No special preparation needed unless otherwise directed by the doctor.",
        es: "No se necesita preparación especial a menos que el médico lo indique de otra manera."
      }
    ],
    postTreatment: [
      {
        en: "Expect mild tenderness or redness. Avoid sun exposure and picking the area. Results may take several sessions.",
        es: "Espere ternura leve o enrojecimiento. Evite exposición al sol y tocar el área. Los resultados pueden tomar varias sesiones."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How many sessions are needed?",
        es: "¿Cuántas sesiones se necesitan?"
      },
      answer: {
        en: "It depends on the scar. Some keloids flatten in 2–3 sessions, while others may need 4 or more spaced over several weeks.",
        es: "Depende de la cicatriz. Algunas queloides se aplanan en 2-3 sesiones, mientras que otras pueden necesitar 4 o más espaciadas en varias semanas."
      }
    },
    {
      question: {
        en: "Are results permanent?",
        es: "¿Los resultados son permanentes?"
      },
      answer: {
        en: "Improvement is usually long-lasting, though recurrence can happen. We monitor each case and adjust treatment as needed.",
        es: "La mejora generalmente es duradera, aunque puede haber recurrencia. Monitoreamos cada caso y ajustamos el tratamiento según sea necesario."
      }
    }
  ]
};
