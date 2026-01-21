export const wartRemoval = {
  urlSlug: "wart-removal",
  category: "body-medical-treatments",
  categoryDisplayName: {
    en: "Body & Medical Treatments",
    es: "Tratamientos Corporales y Médicos"
  },
  serviceDisplayName: {
    en: "Wart Removal",
    es: "Eliminación de Verrugas"
  },
  isPopular: false,
  images: {
    primary: "/wart.jpg",
    secondary: "/wart2.jpg",
  },
  description: {
    en: "Safe and effective removal of warts using advanced medical techniques for clear, wart-free skin.",
    es: "Eliminación segura y efectiva de verrugas utilizando técnicas médicas avanzadas para piel clara y libre de verrugas."
  },
  details: {
    en: "Wart removal treatments utilize cryotherapy, chemical peels, or minor surgical procedures to eliminate warts caused by the HPV virus. Each method is selected based on wart type, location, and patient needs for optimal results.",
    es: "Los tratamientos de eliminación de verrugas utilizan crioterapia, peeling químicos o procedimientos quirúrgicos menores para eliminar verrugas causadas por el virus del VPH. Cada método se selecciona según el tipo de verruga, ubicación y necesidades del paciente para resultados óptimos."
  },
  notes: [
    {
      en: "Treatment may require multiple sessions",
      es: "El tratamiento puede requerir múltiples sesiones"
    },
    {
      en: "Performed by licensed medical professionals",
      es: "Realizado por profesionales médicos licenciados"
    },
    {
      en: "Results may vary based on wart type and size",
      es: "Los resultados pueden variar según el tipo y tamaño de verruga"
    }
  ],
  pricing: {
    startingPrice: { en: "$50", es: "$50" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Per Zone",
          es: "Por Zona"
        },
        optionPrice: { en: "$50", es: "$50" },
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
      en: "Eliminate warts safely and effectively",
      es: "Eliminar verrugas de manera segura y efectiva"
    },
    {
      en: "Prevent spread to surrounding areas",
      es: "Prevenir propagación a áreas circundantes"
    },
    {
      en: "Improve skin appearance and confidence",
      es: "Mejorar apariencia de la piel y confianza"
    }
  ],
  treatableAreas: [
    {
      en: "Hands",
      es: "Manos"
    },
    {
      en: "Feet",
      es: "Pies"
    },
    {
      en: "Face",
      es: "Cara"
    },
    {
      en: "Any area with warts",
      es: "Cualquier área con verrugas"
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
      treatmentSlug: "casmara-purifying",
      optionName: {
        en: "Casmara - Purifying Algae Facial",
        es: "Casmara - Facial Purificante de Algas"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Keep the area clean and avoid topical acids/retinoids for 3–5 days before your visit.",
        es: "Mantenga el área limpia y evite ácidos o retinoides tópicos durante 3–5 días antes de su visita."
      },
      {
        en: "Do not shave, wax, or pick the wart; cover if it tends to rub against clothing.",
        es: "No afeite, depile ni manipule la verruga; cúbrala si roza con la ropa."
      },
      {
        en: "Tell your provider about pregnancy, diabetes, immune conditions, anticoagulants, or poor circulation.",
        es: "Informe a su especialista sobre embarazo, diabetes, problemas inmunológicos, anticoagulantes o mala circulación."
      }
    ],
    duringTreatment: [
      {
        en: "You may feel brief stinging, cold, or pressure depending on the method (cryotherapy, chemical, or excision).",
        es: "Puede sentir ardor breve, frío o presión según el método (crioterapia, químico o escisión)."
      },
      {
        en: "A white halo or mild blanching is expected during cryotherapy; a local anesthetic may be used for sensitivity.",
        es: "En crioterapia es normal un halo blanco o blanqueamiento leve; se puede usar anestesia local si hay sensibilidad."
      }
    ],
    postTreatment: [
      {
        en: "A blister or crust can form and typically resolves in 7–14 days; keep it clean and dry for the first 24 hours.",
        es: "Puede formarse una ampolla o costra que suele resolverse en 7–14 días; manténgala limpia y seca las primeras 24 horas."
      },
      {
        en: "After 24 hours, cleanse gently with mild soap and water; apply prescribed ointment or dressing as directed.",
        es: "Después de 24 horas, limpie suavemente con agua y jabón suave; aplique el ungüento o vendaje indicado."
      },
      {
        en: "Avoid pools, hot tubs, or soaking until the skin has healed; do not pick the crust.",
        es: "Evite albercas, tinas calientes o remojar el área hasta que la piel haya sanado; no retire la costra."
      },
      {
        en: "Contact us for increasing redness, pus, severe pain, or if the wart enlarges.",
        es: "Contáctenos si presenta enrojecimiento creciente, pus, dolor intenso o si la verruga aumenta de tamaño."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How long does it take to remove a wart?",
        es: "¿Cuánto tiempo toma eliminar una verruga?"
      },
      answer: {
        en: "Removal time varies by method and wart size. Small warts may clear in 1-2 sessions, while larger or stubborn warts can take several weeks.",
        es: "El tiempo de eliminación varía según el método y tamaño de verruga. Las verrugas pequeñas pueden aclararse en 1-2 sesiones, mientras que las más grandes o testarudas pueden tomar varias semanas."
      }
    },
    {
      question: {
        en: "Will the wart come back?",
        es: "¿Volverá la verruga?"
      },
      answer: {
        en: "While we aim for complete removal, warts can recur if the virus remains. Following post-treatment care instructions helps minimize this risk.",
        es: "Aunque apuntamos a la eliminación completa, las verrugas pueden recurrir si el virus permanece. Seguir las instrucciones de cuidado post-tratamiento ayuda a minimizar este riesgo."
      }
    },
    {
      question: {
        en: "Does wart removal hurt?",
        es: "¿Duele la eliminación de verrugas?"
      },
      answer: {
        en: "Discomfort varies by method. Cryotherapy may cause a burning sensation, while other methods are generally well-tolerated with minimal discomfort.",
        es: "El malestar varía según el método. La crioterapia puede causar una sensación de ardor, mientras que otros métodos generalmente se toleran bien con incomodidad mínima."
      }
    }
  ]
};
