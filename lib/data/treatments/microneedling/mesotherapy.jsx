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
    en: "Mesotherapy is a minimally invasive treatment that delivers skin-boosting compounds directly into the dermis via microinjections. Actives include PRP/PRFM from your blood, polynucleotides for regeneration, niacinamide and hyaluronic acid boosters for hydration and glow, antioxidant cocktails for revitalization, and FDA-cleared HA microdroplets for cheek smoothness and luminosity.",
    es: "La mesoterapia es un tratamiento mínimamente invasivo que introduce compuestos revitalizantes directamente en la dermis mediante microinyecciones. Los activos incluyen PRP/PRFM de tu propia sangre, polinucleótidos para regeneración, potenciadores con niacinamida y ácido hialurónico para hidratación y luminosidad, cócteles antioxidantes para revitalización y microgotas de AH aprobadas por la FDA para suavizar y dar luminosidad a las mejillas."
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
    startingPrice: { en: "$155", es: "$155" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      // PRP
      { optionName: { en: "PRP - Platelet Rich Plasma", es: "PRP - Plasma Rico en Plaquetas" }, isPromoEligible: false, optionPrice: { en: "$155", es: "$155" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "Benefits: Boosts collagen, healing, and overall skin renewal.", es: "Estimula colágeno, cicatrización y renovación global de la piel." }] },
      { optionName: { en: "PRP - Platelet Rich Plasma", es: "PRP - Plasma Rico en Plaquetas" }, isPromoEligible: false, optionPrice: { en: "$170", es: "$170" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck", es: "Zonas: Rostro + Cuello" }, { en: "Benefits: Boosts collagen, healing, and overall skin renewal.", es: "Estimula colágeno, cicatrización y renovación global de la piel." }] },
      { optionName: { en: "PRP - Platelet Rich Plasma", es: "PRP - Plasma Rico en Plaquetas" }, isPromoEligible: false, optionPrice: { en: "$185", es: "$185" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck + Décolleté", es: "Zonas: Rostro + Cuello + Escote" }, { en: "Benefits: Boosts collagen, healing, and overall skin renewal.", es: "Estimula colágeno, cicatrización y renovación global de la piel." }] },

      // PN - Rejuran
      { optionName: { en: "PN - Polynucleotide", es: "PN - Polinucleótido" }, isPromoEligible: false, optionPrice: { en: "$290", es: "$290" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "Benefits: Supports collagen, firmness, and smoother texture.", es: "Favorece colágeno, firmeza y una textura más suave." }] },
      { optionName: { en: "PN - Polynucleotide", es: "PN - Polinucleótido" }, isPromoEligible: false, optionPrice: { en: "$405", es: "$405" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck", es: "Zonas: Rostro + Cuello" }, { en: "Benefits: Supports collagen, firmness, and smoother texture.", es: "Favorece colágeno, firmeza y una textura más suave." }] },
      { optionName: { en: "PN - Polynucleotide", es: "PN - Polinucleótido" }, isPromoEligible: false, optionPrice: { en: "$520", es: "$520" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck + Décolleté", es: "Zonas: Rostro + Cuello + Escote" }, { en: "Benefits: Supports collagen, firmness, and smoother texture.", es: "Favorece colágeno, firmeza y una textura más suave." }] },

      // PDRN - Kiara Reju
      { optionName: { en: "PDRN - Polydeoxyribonucleotide", es: "PDRN - Polidesoxirribonucleótido" }, isPromoEligible: false, optionPrice: { en: "$180", es: "$180" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "PDRN + HA + Niacinamide", es: "PDRN + AH + Niacinamida" }, { en: "Benefits: Hydrates, boosts elasticity, and enhances glow.", es: "Hidrata, mejora la elasticidad y aporta luminosidad." }] },
      { optionName: { en: "PDRN - Polydeoxyribonucleotide", es: "PDRN - Polidesoxirribonucleótido" }, isPromoEligible: false, optionPrice: { en: "$265", es: "$265" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck", es: "Zonas: Rostro + Cuello" }, { en: "PDRN + HA + Niacinamide", es: "PDRN + AH + Niacinamida" }, { en: "Benefits: Hydrates, boosts elasticity, and enhances glow.", es: "Hidrata, mejora la elasticidad y aporta luminosidad." }] },
      { optionName: { en: "PDRN - Polydeoxyribonucleotide", es: "PDRN - Polidesoxirribonucleótido" }, isPromoEligible: false, optionPrice: { en: "$305", es: "$305" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck + Décolleté", es: "Zonas: Rostro + Cuello + Escote" }, { en: "PDRN + HA + Niacinamide", es: "PDRN + AH + Niacinamida" }, { en: "Benefits: Hydrates, boosts elasticity, and enhances glow.", es: "Hidrata, mejora la elasticidad y aporta luminosidad." }] },

      // SkinVive
      { optionName: { en: "SkinVive", es: "SkinVive" }, isPromoEligible: false, optionPrice: { en: "$525", es: "$525" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "Benefits: HA microdroplets to smooth and hydrate for lasting glow.", es: "Microgotas de AH que suavizan e hidratan para una luminosidad duradera." }] }
    ]
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
    },
    {
      en: "Other zones available upon request after medical evaluation",
      es: "Otras zonas disponibles bajo solicitud tras evaluación médica"
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
