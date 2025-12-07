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
      treatmentSlug: "hydrafacial",
      optionName: {
        en: "Hydrafacial MD - Face",
        es: "Hydrafacial MD - Rostro"
      }
    },
    {
      treatmentSlug: "casmara-retinol-proage",
      optionName: {
        en: "Casmara - Retinol Pro‑Age Facial",
        es: "Casmara - Facial Retinol Pro‑Age"
      }
    },
    {
      treatmentSlug: "microneedling",
      optionName: {
        en: "Sylfirm X - RF Microneedling - Face",
        es: "Sylfirm X - Microagujas RF - Rostro"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid alcohol, NSAIDs/aspirin, and blood-thinning supplements for 24–48 hours if medically permitted.",
        es: "Evite alcohol, AINE/aspirina y suplementos anticoagulantes durante 24–48 horas si su médico lo permite."
      },
      {
        en: "Arrive with clean skin, no makeup; pause retinoids/acids for 3–5 days; reschedule if active infection or cold sore.",
        es: "Llegue con la piel limpia, sin maquillaje; suspenda retinoides/ácidos por 3–5 días; reprograme si hay infección activa o herpes."
      }
    ],
    duringTreatment: [
      {
        en: "Topical numbing is applied; you’ll feel quick pinches or pressure with each microinjection.",
        es: "Se aplica anestesia tópica; sentirá pequeños pinchazos o presión con cada microinyección."
      },
      {
        en: "Small blebs or papules are expected initially and flatten within hours to a day.",
        es: "Es normal que se formen pequeñas pápulas o elevaciones iniciales que se aplanan en horas hasta un día."
      }
    ],
    postTreatment: [
      {
        en: "Mild redness or small bumps can last 24–72 hours; avoid rubbing the area.",
        es: "El enrojecimiento o pequeñas pápulas pueden durar 24–72 horas; evite frotar la zona."
      },
      {
        en: "Avoid sun, sweating, pools, and makeup for 24 hours; cleanse gently with mild soap and water.",
        es: "Evite sol, sudor, albercas y maquillaje durante 24 horas; limpie suavemente con agua y jabón suave."
      },
      {
        en: "Do not exfoliate or use retinoids/acids for 5–7 days; apply broad-spectrum SPF 30+ once you resume daytime products.",
        es: "No exfolie ni use retinoides/ácidos por 5–7 días; aplique FPS 30+ al reanudar productos diurnos."
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
