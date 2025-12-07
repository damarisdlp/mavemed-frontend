export const co2Laser = {
  urlSlug: "co2-laser",
  category: "laser-resurfacing",
  categoryDisplayName: {
    en: "Laser Treatments & Skin Resurfacing",
    es: "Tratamientos Láser y Resurfacing Cutáneo"
  },
  serviceDisplayName: {
    en: "CO₂ Laser Resurfacing (AcuPulse)",
    es: "Resurfacing Láser CO₂ (AcuPulse)"
  },
  isPopular: true,
  isPromoEligible: false,
  images: {
    primary: "/laser-co2.jpg",
    secondary: "/laser-co2-2.jpg"
  },

  description: {
    en: "Deep fractional CO₂ laser therapy to repair damaged skin, reduce wrinkles, and renew overall texture and tone.",
    es: "Terapia láser fraccionada de CO₂ para reparar piel dañada, reducir arrugas y renovar la textura y el tono general de la piel."
  },

  details: {
    en: "CO₂ laser delivers fractional ablative energy to stimulate deep skin regeneration. It vaporizes microcolumns of tissue, triggering collagen production and promoting smoother, healthier skin. Ideal for acne scars, wrinkles, sun damage, and dull skin tone.",
    es: "El láser de CO₂ emite energía ablativa fraccionada para estimular la regeneración profunda de la piel. Vaporiza microcolumnas de tejido que activan la producción de colágeno y promueven una piel más lisa y saludable. Ideal para cicatrices de acné, arrugas, daño solar y textura opaca."
  },

  notes: [
    {
      en: "Requires consultation for clearance and prep",
      es: "Requiere consulta previa para evaluación y preparación"
    },
    {
      en: "Downtime ranges from 3–7 days depending on intensity",
      es: "El tiempo de recuperación varía entre 3 y 7 días según la intensidad"
    },
    {
      en: "Most patients need 1–3 sessions spaced 2+ months apart",
      es: "La mayoría de los pacientes requieren 1–3 sesiones separadas por 2 meses o más"
    }
  ],

  pricing: {
    startingPrice: { en: "$250", es: "$250" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",

    options: [
      // Face / Neck
      {
        optionName: { en: "Under Eye", es: "Ojeras" },
        isPromoEligible: false,
        optionPrice: { en: "$250", es: "$250" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Neck", es: "Cuello" },
        isPromoEligible: false,
        optionPrice: { en: "$385", es: "$385" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Face", es: "Rostro" },
        isPromoEligible: false,
        optionPrice: { en: "$550", es: "$550" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Face + Neck", es: "Rostro + Cuello" },
        isPromoEligible: false,
        optionPrice: { en: "$650", es: "$650" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Face + Neck + Décolleté", es: "Rostro + Cuello + Escote" },
        isPromoEligible: false,
        optionPrice: { en: "$850", es: "$850" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Face + Neck + Décolleté + Chest", es: "Rostro + Cuello + Escote + Pecho" },
        isPromoEligible: false,
        optionPrice: { en: "$950", es: "$950" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },

      // Chest / Décolleté
      {
        optionName: { en: "Décolleté", es: "Escote" },
        isPromoEligible: false,
        optionPrice: { en: "$315", es: "$315" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Chest", es: "Pecho" },
        isPromoEligible: false,
        optionPrice: { en: "$400", es: "$400" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },

      // Zone sizes
      {
        optionName: { en: "Small Zone", es: "Zona Pequeña" },
        isPromoEligible: false,
        optionPrice: { en: "$325", es: "$325" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Area total [103 cm² - 413 cm²]. Approximately one to two palms — similar to a credit card up to half a sheet of paper.",
            es: "Área total [103 cm² - 413 cm²]. Aproximadamente de una a dos palmas de la mano, similar al tamaño de una tarjeta de crédito hasta media hoja de papel."
          }
        ]
      },
      {
        optionName: { en: "Medium Zone", es: "Zona Mediana" },
        isPromoEligible: false,
        optionPrice: { en: "$675", es: "$675" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Area total [523 cm² - 1080.3 cm²]. Four to six palms — roughly the size of a full sheet of paper.",
            es: "Área total [523 cm² - 1080.3 cm²]. De cuatro a seis palmas de la mano, aproximadamente del tamaño de una hoja completa de papel."
          }
        ]
      },
      {
        optionName: { en: "Large Zone", es: "Zona Grande" },
        isPromoEligible: false,
        optionPrice: { en: "$1,275", es: "$1,275" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Area total [1264 cm² - 2090 cm²]. Eight to twelve palms — about the size of a square pillow or large square.",
            es: "Área total [1264 cm² - 2090 cm²]. De ocho a doce palmas de la mano, aproximadamente del tamaño de un cojín cuadrado o un cuadrado grande."
          }
        ]
      },

      // Other areas
      {
        optionName: { en: "Hands", es: "Manos" },
        isPromoEligible: false,
        optionPrice: { en: "$300", es: "$300" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      }
    ]
  },

  goals: [
    {
      en: "Fade deep wrinkles and lines",
      es: "Atenuar arrugas profundas y líneas finas"
    },
    {
      en: "Smooth acne scars and uneven skin",
      es: "Suavizar cicatrices de acné y textura irregular"
    },
    {
      en: "Brighten tone and rejuvenate texture",
      es: "Mejorar el tono y rejuvenecer la textura de la piel"
    }
  ],

  treatableAreas: [
    {
      en: "Perioral Lines (Smoker’s Lines)",
      es: "Líneas Periorales"
    },
    {
      en: "Under-Eyes",
      es: "Debajo de los Ojos"
    },
    {
      en: "Full Face",
      es: "Cara Completa"
    },
    {
      en: "Neck",
      es: "Cuello"
    },
    {
      en: "Décolleté",
      es: "Escote"
    },
    {
      en: "Stretch Marks",
      es: "Estrías"
    },
    {
      en: "Scars",
      es: "Cicatrices"
    },
    {
      en: "Hands",
      es: "Manos"
    },
    {
      en: "Other zones available upon request",
      es: "Otras zonas disponibles bajo solicitud"
    }
  ],

  addOns: [
    {
      treatmentSlug: "serum-add-ons",
      optionName: {
        en: "Serum Add-On - PRP (Face)",
        es: "Complemento de Suero - PRP (Rostro)"
      }
    },
    {
      treatmentSlug: "serum-add-ons",
      optionName: {
        en: "Serum Add-On - PN (Face)",
        es: "Complemento de Suero - PN (Rostro)"
      }
    }
  ],

  expectations: {
    preTreatment: [
      {
        en: "Avoid sun exposure, retinoids, and acids for 7 days before treatment.",
        es: "Evita exposición solar, retinoides y ácidos durante 7 días antes del tratamiento."
      },
      {
        en: "Discontinue exfoliating treatments or harsh products before your laser session.",
        es: "Suspende exfoliantes y productos irritantes antes de tu sesión láser."
      }
    ],
    postTreatment: [
      {
        en: "Redness, swelling, and peeling are normal parts of the healing process.",
        es: "El enrojecimiento, la hinchazón y la descamación son normales durante la recuperación."
      },
      {
        en: "Keep skin moisturized and avoid direct sun until fully healed.",
        es: "Mantén la piel hidratada y evita el sol directo hasta que la piel haya sanado."
      },
      {
        en: "Use only provider-recommended skincare during recovery.",
        es: "Usa únicamente los productos recomendados por tu proveedor."
      },
      {
        en: "Makeup can be used after 5–7 days once the skin has re-epithelialized.",
        es: "El maquillaje puede usarse después de 5 a 7 días, cuando la piel haya cicatrizado."
      }
    ]
  },

  faq: [
    {
      question: {
        en: "Is CO₂ laser painful?",
        es: "¿El láser de CO₂ duele?"
      },
      answer: {
        en: "Topical anesthetic is applied beforehand. Patients usually describe warmth with occasional sharp zaps. Mild discomfort may last 1–2 days.",
        es: "Se aplica anestesia tópica antes del tratamiento. Los pacientes suelen describir una sensación de calor con pequeños destellos. Puede haber molestia leve durante 1 a 2 días."
      }
    },
    {
      question: {
        en: "How long is recovery?",
        es: "¿Cuánto dura la recuperación?"
      },
      answer: {
        en: "Expect 5–7 days of visible healing depending on intensity. Redness may last longer but can be covered with makeup after peeling stops.",
        es: "La recuperación visible dura entre 5 y 7 días según la intensidad. El enrojecimiento puede durar más, pero se puede cubrir con maquillaje cuando finaliza la descamación."
      }
    },
    {
      question: {
        en: "Can I combine this with PRP or other treatments?",
        es: "¿Puedo combinarlo con PRP u otros tratamientos?"
      },
      answer: {
        en: "Yes. PRP accelerates healing and enhances results. Other treatments must be timed appropriately based on provider recommendation.",
        es: "Sí. El PRP acelera la recuperación y mejora los resultados. Otros tratamientos deben programarse estratégicamente según indicación del proveedor."
      }
    },
    {
      question: {
        en: "How many sessions do I need?",
        es: "¿Cuántas sesiones necesito?"
      },
      answer: {
        en: "Many patients see dramatic improvement after one session, but deeper scars or more advanced aging may require 2–3 sessions.",
        es: "Muchos pacientes ven una mejora notable después de una sesión, aunque cicatrices más profundas o envejecimiento avanzado pueden requerir 2 o 3 sesiones."
      }
    }
  ]
};
