export const mesotherapy = {
  urlSlug: "mesotherapy-infusions",
  category: "microneedling & mesotherapy",
  categoryDisplayName: {
    en: "Microneedling & Mesotherapy",
    es: "Microneedling y Mesoterapia"
  },
  serviceDisplayName: {
    en: "Mesotherapy Skin Boosters",
    es: "Mesoterapia Skin Boosters"
  },
  isPopular: true,
  isPromoEligible: true,
  images: {
    primary: "/mesotherapy.jpg",
    secondary: "/mesotherapy2.jpg"
  },
  description: {
    en: "Targeted microinjections of skin-rejuvenating substances like PRP, PDRN, hyaluronic acid, and vitamins to deeply hydrate, heal, and restore radiance.",
    es: "Microinyecciones dirigidas de sustancias rejuvenecedoras como PRP, PDRN, ácido hialurónico y vitaminas para hidratar profundamente, reparar y devolver luminosidad a la piel."
  },
  details: {
    en: "Mesotherapy is a minimally invasive treatment that delivers skin-boosting compounds directly into the dermis via microinjections. Common actives include PRP/PRFM (from your blood), polynucleotides (Rejuran), niacinamide boosters (Kiara Reju), and antioxidant-rich cocktails like TKN HA-3. SkinVive by Juvéderm is also offered for FDA-approved cheek hydration and glow.",
    es: "La mesoterapia es un tratamiento mínimamente invasivo que introduce compuestos revitalizantes directamente en la dermis mediante microinyecciones. Los activos comunes incluyen PRP/PRFM (de tu propia sangre), polinucleótidos como Rejuran, boosters de niacinamida como Kiara Reju y cócteles antioxidantes como TKN HA-3. También ofrecemos SkinVive de Juvéderm para hidratación y luminosidad aprobada por la FDA en mejillas."
  },
  notes: [
    {
      en: "Customized per patient’s skin goals and needs",
      es: "Tratamiento personalizado según las necesidades y objetivos de la piel del paciente"
    },
    {
      en: "Most options require 2–3 sessions for full results",
      es: "La mayoría de los tratamientos requieren 2–3 sesiones para resultados completos"
    },
    {
      en: "Minimal downtime — mild redness or swelling may occur",
      es: "Mínimo tiempo de recuperación — puede presentarse leve enrojecimiento o inflamación"
    }
  ],
  pricing: {
    startingPrice: { en: "$100", es: "$100" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "PRP or PRFM – 1 Zone",
          es: "PRP o PRFM – 1 Zona"
        },
        isPromoEligible: true,
        optionPrice: { en: "$180", es: "$180" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Uses your own plasma or fibrin for natural regeneration",
            es: "Utiliza tu propio plasma o fibrina para una regeneración natural"
          }
        ]
      },
      {
        optionName: {
          en: "Kiara Reju – 1 Zone",
          es: "Kiara Reju – 1 Zona"
        },
        isPromoEligible: true,
        optionPrice: { en: "$180", es: "$180" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "PN + HA + Niacinamide for glow and elasticity",
            es: "PN + AH + Niacinamida para luminosidad y elasticidad"
          }
        ]
      },
      {
        optionName: {
          en: "Rejuran – Full Face",
          es: "Rejuran – Rostro Completo"
        },
        isPromoEligible: false,
        optionPrice: { en: "$300", es: "$300" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Salmon DNA-based cellular repair and collagen support",
            es: "Reparación celular basada en ADN de salmón y apoyo al colágeno"
          }
        ]
      },
      {
        optionName: {
          en: "SkinVive by Juvéderm – Cheeks",
          es: "SkinVive de Juvéderm – Mejillas"
        },
        isPromoEligible: true,
        optionPrice: { en: "$250", es: "$250" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "FDA-approved HA microdroplets for glow and smoothness",
            es: "Microgotas de AH aprobadas por la FDA para luminosidad y suavidad"
          }
        ]
      },
      {
        optionName: {
          en: "TKN HA-3 – Full Face",
          es: "TKN HA-3 – Rostro Completo"
        },
        isPromoEligible: true,
        optionPrice: { en: "$155", es: "$155" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Hydration + antioxidant meso-cocktail ideal for tired or sun-damaged skin",
            es: "Cóctel hidratante y antioxidante ideal para piel cansada o dañada por el sol"
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
      en: "Deeply hydrate and brighten skin",
      es: "Hidratar profundamente y dar luminosidad a la piel"
    },
    {
      en: "Support collagen regeneration",
      es: "Apoyar la regeneración del colágeno"
    },
    {
      en: "Improve texture, tone and elasticity",
      es: "Mejorar la textura, el tono y la elasticidad"
    }
  ],
  treatableAreas: [
    {
      en: "Full Face",
      es: "Rostro Completo"
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
      en: "Back of Hands",
      es: "Dorso de manos"
    },
    {
      en: "Cheeks",
      es: "Mejillas"
    },
    {
      en: "Under Eyes",
      es: "Bajo los ojos"
    },
    {
      en: "Scalp (Hair)",
      es: "Cuero cabelludo (Cabello)"
    },
    {
      en: "Stretch marks",
      es: "Estrías"
    }
  ],
  addOns: [
    {
      serviceParent: "HydraFacial MD",
      serviceChild: "Hydrafacial MD - Face",
      displayName: {
        en: "HydraFacial MD – Face",
        es: "HydraFacial MD – Rostro"
      },
      link: "/treatments/hydrafacial"
    },
    {
      serviceParent: "PDO Thread Lift – Non-Surgical Facial Rejuvenation",
      serviceChild: "Signature Lower Face Lift",
      displayName: {
        en: "PDO Thread Lift – Signature Lower Face Lift",
        es: "Hilos PDO – Lifting Facial Inferior Signature"
      },
      link: "/treatments/pdo-threads"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid alcohol, aspirin, anti-inflammatories and blood thinners 24–48 hours before your session.",
        es: "Evite alcohol, aspirina, antiinflamatorios y anticoagulantes 24–48 horas antes del tratamiento."
      },
      {
        en: "Arrive with clean skin — no makeup or active skincare on the day of treatment.",
        es: "Acuda con la piel limpia — sin maquillaje ni productos activos el día del tratamiento."
      }
    ],
    postTreatment: [
      {
        en: "Mild redness or small bumps may occur and typically resolve within 24–72 hours.",
        es: "Puede aparecer enrojecimiento leve o pequeñas pápulas que suelen desaparecer en 24–72 horas."
      },
      {
        en: "Avoid sun exposure, sweating and makeup for 24 hours.",
        es: "Evite el sol directo, el sudor y el uso de maquillaje durante 24 horas."
      },
      {
        en: "Do not exfoliate or use retinoids/acids for 3 days post-treatment.",
        es: "No exfolie ni utilice retinoides o ácidos durante 3 días después del tratamiento."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "What’s the difference between PRP, Rejuran and Kiara Reju?",
        es: "¿Cuál es la diferencia entre PRP, Rejuran y Kiara Reju?"
      },
      answer: {
        en: "PRP/PRFM uses your own plasma for natural regeneration. Rejuran repairs with salmon DNA (PDRN), and Kiara Reju enhances glow with niacinamide and hyaluronic acid.",
        es: "PRP/PRFM utiliza tu propio plasma para una regeneración natural. Rejuran repara con ADN de salmón (PDRN), y Kiara Reju aporta luminosidad gracias a la niacinamida y al ácido hialurónico."
      }
    },
    {
      question: {
        en: "Is this a filler?",
        es: "¿Esto es un relleno?"
      },
      answer: {
        en: "No. Most mesotherapy treatments do not add volume — instead, they improve skin quality, hydration and radiance without changing facial shape.",
        es: "No. La mayoría de los tratamientos de mesoterapia no aportan volumen — mejoran la calidad, hidratación y luminosidad de la piel sin modificar la forma del rostro."
      }
    },
    {
      question: {
        en: "How long do results last?",
        es: "¿Cuánto duran los resultados?"
      },
      answer: {
        en: "Depending on the product and concern, results last 4–6 months or longer with proper maintenance.",
        es: "Dependiendo del producto y la condición a tratar, los resultados duran entre 4 y 6 meses o más con un buen mantenimiento."
      }
    },
    {
      question: {
        en: "Does it hurt?",
        es: "¿Duele?"
      },
      answer: {
        en: "We use numbing cream and ultra-fine needles. Most patients find it very tolerable, and treatments like SkinVive are nearly painless.",
        es: "Utilizamos crema anestésica y agujas ultrafinas. La mayoría de los pacientes lo consideran muy tolerable, y tratamientos como SkinVive son prácticamente indoloros."
      }
    },
    {
      question: {
        en: "How many sessions will I need?",
        es: "¿Cuántas sesiones voy a necesitar?"
      },
      answer: {
        en: "Most protocols involve 2–3 sessions spaced 3–4 weeks apart, with results building progressively.",
        es: "La mayoría de los protocolos requieren 2–3 sesiones espaciadas cada 3–4 semanas, con resultados progresivos."
      }
    }
  ]
};
