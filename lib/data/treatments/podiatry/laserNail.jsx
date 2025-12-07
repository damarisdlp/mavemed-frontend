export const nailFungusLaser = {
  urlSlug: "nail-fungus-laser",
  category: "podiatry",
  categoryDisplayName: {
    en: "Medical Podiatry Services",
    es: "Servicios de Podología Médica"
  },
  serviceDisplayName: {
    en: "Laser Nail Fungus Treatment",
    es: "Tratamiento Láser para Hongos en las Uñas"
  },
  isPopular: false,
  isPromoEligible: true,
  images: {
    primary: "/podiatry.jpg",
    secondary: "/podiatry2.jpg"
  },
  description: {
    en: "Non-invasive laser therapy to eliminate toenail fungus and restore nail clarity without pain or medication.",
    es: "Terapia láser no invasiva para eliminar hongos en las uñas y mejorar la claridad de la uña sin dolor ni medicamentos."
  },
  details: {
    en: "Laser nail fungus treatment uses targeted light energy (K-Laser Blue Derma) to penetrate the nail and destroy fungal infections at the root without harming surrounding tissue. The treatment is safe, effective, and requires no downtime. A typical protocol includes 6–8 sessions spaced 2–3 weeks apart for optimal results.",
    es: "El tratamiento láser para hongos utiliza energía lumínica dirigida (K-Laser Blue Derma) que penetra la uña y destruye la infección fúngica desde la raíz sin dañar el tejido circundante. Es un tratamiento seguro, eficaz y sin tiempo de recuperación. El protocolo típico incluye de 6 a 8 sesiones cada 2 a 3 semanas."
  },
  notes: [
    {
      en: "Ideal for mild to moderate onychomycosis",
      es: "Ideal para onicomicosis leve a moderada"
    },
    {
      en: "Painless, non-invasive, and drug-free",
      es: "Indoloro, no invasivo y libre de medicamentos"
    },
    {
      en: "Full results may take months as healthy nail regrows",
      es: "Los resultados completos pueden tardar meses mientras la uña sana vuelve a crecer"
    }
  ],
  pricing: {
    startingPrice: {
      en: "$600",
      es: "$600"
    },
    startingPriceCurrency: "MXN",
    promoPrice: "",
    promoPriceCurrency: "MXN",
    options: [
      {
        optionName: {
          en: "1 Nail",
          es: "1 Uña"
        },
        isPromoEligible: false,
        optionPrice: {
          en: "$600",
          es: "$600"
        },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },
      {
        optionName: {
          en: "2 Nails",
          es: "2 Uñas"
        },
        isPromoEligible: false,
        optionPrice: {
          en: "$800",
          es: "$800"
        },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },
      {
        optionName: {
          en: "3 - 5 Nails",
          es: "3 - 5 Uñas"
        },
        isPromoEligible: false,
        optionPrice: {
          en: "$1,000",
          es: "$1,000"
        },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },
      {
        optionName: {
          en: "6 - 8 Nails",
          es: "6 - 8 Uñas"
        },
        isPromoEligible: false,
        optionPrice: {
          en: "$1,200",
          es: "$1,200"
        },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      },
      {
        optionName: {
          en: "9 - 10 Nails",
          es: "9 - 10 Uñas"
        },
        isPromoEligible: false,
        optionPrice: {
          en: "$1,500",
          es: "$1,500"
        },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: []
      }
    ]
  },
  goals: [
    {
      en: "Eliminate fungal infection from nail bed",
      es: "Eliminar la infección fúngica del lecho ungueal"
    },
    {
      en: "Improve nail clarity and texture",
      es: "Mejorar la claridad y la textura de la uña"
    },
    {
      en: "Prevent future recurrence of infection",
      es: "Prevenir recurrencias futuras de infección"
    }
  ],
  treatableAreas: [
    {
      en: "Toenails",
      es: "Uñas de los pies"
    },
    {
      en: "Fingernails (case-by-case)",
      es: "Uñas de las manos (según evaluación)"
    }
  ],
  addOns: [
    {
      treatmentSlug: "hydrafacial",
      optionName: { en: "Hydrafacial MD - Face", es: "Hydrafacial MD - Rostro" }
    },
    {
      treatmentSlug: "casmara-retinol-proage",
      optionName: { en: "Casmara - Retinol Pro‑Age Facial", es: "Casmara - Facial Retinol Pro‑Age" }
    },
    {
      treatmentSlug: "swedish-massage",
      optionName: { en: "Relaxing Swedish Massage - Full Body", es: "Masaje Sueco Relajante - Cuerpo Completo" }
    },
    {
      treatmentSlug: "cupping",
      optionName: { en: "Cupping Add‑On", es: "Complemento de Ventosas" }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Wash feet thoroughly before arrival. Remove any nail polish or artificial nails.",
        es: "Lave bien los pies antes de su cita. Retire esmalte de uñas o uñas artificiales."
      },
      {
        en: "Notify your provider if you’ve recently taken oral or topical antifungal medications.",
        es: "Informe a su proveedor si ha usado medicamentos antifúngicos orales o tópicos recientemente."
      }
    ],
    postTreatment: [
      {
        en: "Keep nails dry and clean to prevent reinfection.",
        es: "Mantenga las uñas secas y limpias para evitar la reinfección."
      },
      {
        en: "Disinfect shoes and change socks daily. Avoid barefoot walking in public areas.",
        es: "Desinfecte el calzado y cambie los calcetines diariamente. Evite andar descalzo en áreas públicas."
      },
      {
        en: "Nail appearance improves gradually as the nail grows out over several months.",
        es: "La apariencia de la uña mejora gradualmente conforme crece la uña sana durante varios meses."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "Does laser nail fungus treatment hurt?",
        es: "¿Duele el tratamiento láser para hongos en las uñas?"
      },
      answer: {
        en: "No. Most patients describe a gentle warmth or tingling. There is no pain or downtime.",
        es: "No. La mayoría describe una sensación de calor suave o cosquilleo. No causa dolor ni requiere recuperación."
      }
    },
    {
      question: {
        en: "When will I start to see clear nails?",
        es: "¿Cuándo comenzaré a ver las uñas más claras?"
      },
      answer: {
        en: "Visible improvement may start within weeks, but full clarity can take several months as healthy nail grows in.",
        es: "La mejoría puede verse en semanas, pero la claridad total puede tardar varios meses mientras crece la uña sana."
      }
    },
    {
      question: {
        en: "How many sessions do I need?",
        es: "¿Cuántas sesiones necesito?"
      },
      answer: {
        en: "A standard protocol involves 6–8 sessions spaced 2–3 weeks apart. Severe cases may require additional follow-up.",
        es: "El protocolo estándar incluye de 6 a 8 sesiones cada 2 o 3 semanas. Casos severos pueden necesitar sesiones adicionales."
      }
    },
    {
      question: {
        en: "Can the fungus come back?",
        es: "¿Puede regresar el hongo?"
      },
      answer: {
        en: "Yes, reinfection is possible if shoes, socks, or tools remain contaminated. Proper hygiene is essential.",
        es: "Sí, la reinfección es posible si los zapatos, calcetines o herramientas siguen contaminados. Una buena higiene es esencial."
      }
    }
  ]
};
