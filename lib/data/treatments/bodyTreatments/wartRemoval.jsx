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
  isPromoEligible: false,
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
        isPromoEligible: false,
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
        en: "Clean the area thoroughly before treatment.",
        es: "Limpie el área a fondo antes del tratamiento."
      },
      {
        en: "Avoid picking or scratching the wart.",
        es: "Evite hurgar o rascar la verruga."
      },
      {
        en: "Inform your provider of any medical conditions or medications.",
        es: "Informe a su proveedor sobre cualquier condición médica o medicamentos."
      }
    ],
    postTreatment: [
      {
        en: "Keep the area clean and dry.",
        es: "Mantenga el área limpia y seca."
      },
      {
        en: "Apply any prescribed ointment as directed.",
        es: "Aplique cualquier ungüento prescrito según se indique."
      },
      {
        en: "Avoid swimming or soaking the area until healed.",
        es: "Evite nadar o remojar el área hasta que sane."
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
