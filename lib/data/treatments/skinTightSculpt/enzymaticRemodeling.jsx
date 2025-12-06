export const enzymaticTherapy = {
  urlSlug: "enzymatic-therapy",
  category: "skin-tightening",
  categoryDisplayName: {
    en: "Skin Tightening & Sculpting",
    es: "Reafirmación y Esculpido Corporal"
  },
  serviceDisplayName: {
    en: "Enzymatic Remodeling Therapy",
    es: "Terapia de Remodelación Enzimática"
  },
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/enzymatic.jpg",
    secondary: "/enzymatic2.jpg"
  },
  description: {
    en: "Localized fat reduction and fibrosis breakdown using targeted enzyme therapy for smoother contour and improved skin texture.",
    es: "Reducción localizada de grasa y ruptura de fibrosis mediante terapia enzimática dirigida para lograr un contorno más uniforme y mejorar la textura de la piel."
  },
  details: {
    en: "Enzymatic therapy involves injecting lipolytic and anti-fibrotic enzymes into specific areas to break down dense tissue, improve circulation, and support localized fat metabolism. It is especially effective for post-liposuction fibrosis, stubborn fat pockets, and skin tone irregularities. Results build progressively with multiple sessions and are enhanced when combined with drainage or radiofrequency therapy.",
    es: "La terapia enzimática consiste en inyectar enzimas lipolíticas y antifibróticas en zonas específicas para romper tejido denso, mejorar la circulación y apoyar el metabolismo de grasa localizada. Es especialmente efectiva para fibrosis post-liposucción, acúmulos grasos rebeldes y alteraciones en la textura de la piel. Los resultados se construyen progresivamente con varias sesiones y se potencian cuando se combina con drenaje o radiofrecuencia."
  },
  notes: [
    {
      en: "Non-surgical injectable fat reduction treatment",
      es: "Tratamiento inyectable no quirúrgico para reducir grasa localizada"
    },
    {
      en: "Targets fibrosis, localized fat, and texture irregularities",
      es: "Dirigido a fibrosis, grasa localizada y alteraciones en la textura"
    },
    {
      en: "Most effective in a series of 4–6 sessions",
      es: "Más efectivo en una serie de 4 a 6 sesiones"
    },
    {
      en: "Most effective when combined with radiofrequency treatments",
      es: "Más efectiva cuando se combina con tratamientos de radiofrecuencia."
    }
  ],
  pricing: {
    startingPrice: { en: "$60", es: "$60" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "PB Serum Slim+ - Lipase PB500",
          es: "PB Serum Slim+ - Lipasa PB500"
        },
        isPromoEligible: false,
        optionPrice: { en: "$60", es: "$60" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Single vial; commonly paired with drainage.",
            es: "Vial único; comúnmente combinado con drenaje."
          }
        ]
      },
      {
        optionName: {
          en: "PB Serum Drain+ - Hyaluronidase PB3000",
          es: "PB Serum Drain+ - Hialuronidasa PB3000"
        },
        isPromoEligible: false,
        optionPrice: { en: "$60", es: "$60" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Single vial; used for edema and fibrosis.",
            es: "Vial único; usado para edema y fibrosis."
          }
        ]
      },
      {
        optionName: {
          en: "PB Serum Smooth+ - Collagenase GH PB220",
          es: "PB Serum Smooth+ - Colagenasa GH PB220"
        },
        isPromoEligible: false,
        optionPrice: { en: "$60", es: "$60" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Single vial; targets fibrotic tissue.",
            es: "Vial único; dirigido a tejido fibrótico."
          }
        ]
      },
      {
        optionName: {
          en: "PB Serum+ (Kit)",
          es: "PB Serum+ (Kit)"
        },
        isPromoEligible: false,
        optionPrice: { en: "$180", es: "$180" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Kit includes 1 vial of each enzyme; ratios may be adjusted case by case, which can require additional vials.",
            es: "El kit incluye 1 vial de cada enzima; las proporciones pueden ajustarse caso por caso, lo que puede requerir viales adicionales."
          }
        ]
      }
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
    )
  },
  goals: [
    {
      en: "Break down post-lipo fibrosis",
      es: "Romper la fibrosis post-liposucción"
    },
    {
      en: "Reduce stubborn localized fat",
      es: "Reducir grasa localizada rebelde"
    },
    {
      en: "Smooth and even skin texture",
      es: "Suavizar y uniformar la textura de la piel"
    }
  ],
  treatableAreas: [
    {
      en: "Abdomen",
      es: "Abdomen"
    },
    {
      en: "Arms",
      es: "Brazos"
    },
    {
      en: "Thighs",
      es: "Muslos"
    },
    {
      en: "Back",
      es: "Espalda"
    },
    {
      en: "Flanks",
      es: "Flancos"
    },
    {
      en: "Under Chin (Submental)",
      es: "Debajo del mentón (submental)"
    }
  ],
  addOns: [
    {
      treatmentSlug: "venus-freeze",
      optionName: {
        en: "Express Body Glow",
        es: "Brillo Corporal Exprés"
      },
      displayName: {
        en: "RF Body Sculpting",
        es: "Esculpido Corporal con RF"
      },
      link: "/treatments/enzymaticRemodeling"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid alcohol and anti-inflammatory medications for 24 hours prior to reduce bruising risk.",
        es: "Evite el alcohol y medicamentos antiinflamatorios 24 horas antes para reducir el riesgo de moretones."
      },
      {
        en: "Drink plenty of water to support post-treatment lymphatic drainage.",
        es: "Beba suficiente agua para apoyar el drenaje linfático después del tratamiento."
      }
    ],
    postTreatment: [
      {
        en: "Expect soreness, swelling, or bruising for 2–5 days.",
        es: "Espere sensibilidad, hinchazón o moretones por 2 a 5 días."
      },
      {
        en: "Wear compression garments if recommended.",
        es: "Use prendas de compresión si se le indica."
      },
      {
        en: "Engage in gentle movement or lymphatic massage to accelerate enzyme clearance.",
        es: "Realice movimiento suave o masaje linfático para acelerar la eliminación de enzimas."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "Is this the same as mesotherapy?",
        es: "¿Es lo mismo que la mesoterapia?"
      },
      answer: {
        en: "Not exactly. Enzymatic therapy uses specific enzymes for fibrosis and post-lipo remodeling, while mesotherapy uses general lipolytic cocktails.",
        es: "No exactamente. La terapia enzimática utiliza enzimas específicas para fibrosis y remodelación post-lipo, mientras que la mesoterapia usa cócteles lipolíticos generales."
      }
    },
    {
      question: {
        en: "How many sessions are needed?",
        es: "¿Cuántas sesiones se necesitan?"
      },
      answer: {
        en: "Most patients benefit from 4–6 sessions spaced 1–2 weeks apart.",
        es: "La mayoría de los pacientes requieren 4 a 6 sesiones, espaciadas de 1 a 2 semanas."
      }
    },
    {
      question: {
        en: "Does the treatment hurt?",
        es: "¿Duele el tratamiento?"
      },
      answer: {
        en: "You may feel mild stinging during injections and tenderness after. Discomfort is temporary.",
        es: "Puede sentir ardor leve durante las inyecciones y sensibilidad después. El malestar es temporal."
      }
    },
    {
      question: {
        en: "When will I see results?",
        es: "¿Cuándo veré resultados?"
      },
      answer: {
        en: "Some smoothing appears within 1–2 weeks. More dramatic changes build across sessions.",
        es: "Puede ver suavidad inicial en 1 a 2 semanas. Cambios más notorios se construyen con sesiones sucesivas."
      }
    },
    {
      question: {
        en: "Can I combine this with other treatments?",
        es: "¿Puedo combinarlo con otros tratamientos?"
      },
      answer: {
        en: "Yes, pairing enzymatic therapy with RF sculpting or lymphatic massage improves results.",
        es: "Sí, combinar la terapia enzimática con radiofrecuencia o masaje linfático mejora los resultados."
      }
    }
  ]
};
