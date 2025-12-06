export const harmonyca = {
  urlSlug: "harmonyca",
  category: "biostimulatory-fillers",
  categoryDisplayName: {
    en: "Collagen Biostimulators",
    es: "Biostimuladores de Colágeno"
  },
  serviceDisplayName: {
    en: "HarmonyCa® (HA + Calcium Hydroxyapatite)",
    es: "HarmonyCa® (AH + Hidroxiapatita de Calcio)"
  },
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/harmonyca.jpg",
    secondary: "/harmonyca2.jpg",
  },
  description: {
    en: "HarmonyCa® is a next-generation biostimulatory filler that combines hyaluronic acid (HA) for immediate facial volume with calcium hydroxyapatite (CaHA) for long-term collagen stimulation. This hybrid injectable enhances facial contour, skin quality, and structural lift in a single treatment.",
    es: "HarmonyCa® es un relleno biostimulador de nueva generación que combina ácido hialurónico (HA) para volumen facial inmediato con hidroxiapatita de calcio (CaHA) para estimulación de colágeno a largo plazo. Este inyectable híbrido mejora el contorno facial, la calidad de la piel y el levantamiento estructural en un solo tratamiento."
  },
  details: {
    en: "HarmonyCa® is a dual-phase injectable combining hyaluronic acid for immediate hydration and volume, with CaHA microspheres to boost collagen production over time. This advanced formula is ideal for enhancing cheekbones, defining the jawline, and restoring firmness in the lower face. Its bioregenerative effect helps improve skin density and elasticity, making it a top choice for long-lasting, natural-looking rejuvenation without heaviness or puffiness.",
    es: "HarmonyCa® es un inyectable bifásico que combina ácido hialurónico para hidratación y volumen inmediato, con microesferas de CaHA para aumentar la producción de colágeno con el tiempo. Esta fórmula avanzada es ideal para realzar los pómulos, definir la línea mandibular y restaurar la firmeza en la cara inferior. Su efecto bioregenerativo ayuda a mejorar la densidad y elasticidad de la piel, convirtiéndolo en una opción principal para un rejuvenecimiento duradero, natural y sin pesadez ni hinchazón."
  },
  notes: [
    {
      en: "Treatment includes 2 syringes (1.25 mL each)",
      es: "El tratamiento incluye 2 jeringas (1.25 mL cada una)"
    },
    {
      en: "Clinically effective for rejuvenating midface, jawline, and lower face",
      es: "Efectivo clínicamente para rejuvenecer la media cara, línea mandibular y cara inferior"
    },
    {
      en: "Recommended for patients seeking natural yet structural results",
      es: "Recomendado para pacientes que buscan resultados naturales pero estructurales"
    }
  ],
  pricing: {
    startingPrice: { en: "$15,750", es: "$15,750" },
    startingPriceCurrency: "MXN",
    promoPrice: "",
    promoPriceCurrency: "MXN",
    options: [
      {
        optionName: {
          en: "Per Treatment - 2 x 1.25 mL Syringes Total",
          es: "Por Tratamiento - 2 x 1.25 mL Jeringas Total"
        },
        isPromoEligible: false,
        optionPrice: { en: "$15,750", es: "$15,750" },
        optionCurrency: "MXN",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "MXN",
        notes: [],
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
    ),
  },
  goals: [
    {
      en: "Lift and contour midface and lower face",
      es: "Elevar y contornear la media cara y cara inferior"
    },
    {
      en: "Stimulate collagen and improve skin architecture",
      es: "Estimular el colágeno y mejorar la arquitectura de la piel"
    },
    {
      en: "Restore volume while enhancing skin density and elasticity",
      es: "Restaurar el volumen mientras se mejora la densidad y elasticidad de la piel"
    }
  ],
  treatableAreas: [
    {
      en: "Cheeks",
      es: "Mejillas"
    },
    {
      en: "Jawline",
      es: "Línea Mandibular"
    },
    {
      en: "Chin",
      es: "Barbilla"
    },
    {
      en: "Lower Face",
      es: "Cara Inferior"
    },
    {
      en: "Preauricular Hollow",
      es: "Hundimiento Preauricular"
    }
  ],
  addOns: [
    {
      treatmentSlug: "hydrafacial",
      optionName: {
        en: "Hydrafacial MD - Face",
        es: "Hydrafacial MD - Rostro"
      },
      displayName: {
        en: "HydraFacial MD - Face",
        es: "HydraFacial MD - Rostro"
      },
      link:          "/treatments/hydrafacial"
    },
    {
      treatmentSlug: "casmara-purifying",
      optionName: {
        en: "Casmara Purifying Algae Facial",
        es: "Facial Purificante de Algas Casmara"
      },
      displayName: {
        en: "Casmara Purifying Algae Facial",
        es: "Facial Purificante de Algas Casmara"
      },
      link:          "/treatments/casmara-purifying"
    },
    {
      treatmentSlug: "microneedling",
      optionName: {
        en: "PDRN - Polydeoxyribonucleotide",
        es: "PDRN - Polidesoxirribonucleótido"
      },
      displayName: {
        en: "Microneedling Skin Renewal - Rejuran - Full Face",
        es: "Renovación de Piel con Microneedling - Rejuran - Rostro Completo"
      },
      link: "/treatments/microneedling"
    },
    {
      treatmentSlug: "rf-microneedling",
      optionName: {
        en: "Face",
        es: "Rostro"
      },
      displayName: {
        en: "Scarlet S RF Microneedling - Face",
        es: "Microneedling RF Scarlet S - Rostro"
      },
      link:          "/treatments/rf-microneedling"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid alcohol, NSAIDs, and blood-thinning supplements (fish oil, garlic, ginkgo) for at least 24–48 hours.",
        es: "Evite alcohol, AINE y suplementos anticoagulantes (aceite de pescado, ajo, ginkgo) durante al menos 24-48 horas."
      },
      {
        en: "Inform your provider of recent dental procedures, vaccinations, or laser treatments.",
        es: "Informe a su proveedor de procedimientos dentales recientes, vacunaciones o tratamientos láser."
      }
    ],
    postTreatment: [
      {
        en: "Expect mild swelling or redness for 1–2 days.",
        es: "Espere hinchazón leve o enrojecimiento durante 1-2 días."
      },
      {
        en: "Avoid facial massage, hot environments, or strenuous activity for 48 hours.",
        es: "Evite masaje facial, ambientes calientes o actividad extenuante durante 48 horas."
      },
      {
        en: "Visible lift is immediate; collagen-stimulating effects continue developing over 6–8 weeks.",
        es: "El levantamiento visible es inmediato; los efectos estimuladores de colágeno continúan desarrollándose durante 6-8 semanas."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How is HarmonyCa® different from traditional dermal fillers?",
        es: "¿En qué se diferencia HarmonyCa® de los rellenos dérmicos tradicionales?"
      },
      answer: {
        en: "HarmonyCa® combines the immediate volume of HA with the collagen-boosting power of CaHA, providing both instant lift and long-term skin regeneration.",
        es: "HarmonyCa® combina el volumen inmediato del HA con el poder estimulador de colágeno del CaHA, proporcionando levantamiento instantáneo y regeneración de la piel a largo plazo."
      }
    },
    {
      question: {
        en: "Which areas respond best to HarmonyCa®?",
        es: "¿Qué áreas responden mejor a HarmonyCa®?"
      },
      answer: {
        en: "Cheeks, jawline, chin, and the lower face benefit most, especially for patients with mild-to-moderate volume loss or skin laxity.",
        es: "Las mejillas, línea mandibular, barbilla y la cara inferior se benefician más, especialmente para pacientes con pérdida de volumen leve a moderada o laxitud de la piel."
      }
    },
    {
      question: {
        en: "How long do HarmonyCa® results last?",
        es: "¿Cuánto duran los resultados de HarmonyCa®?"
      },
      answer: {
        en: "Most patients enjoy results that last 12–18 months, depending on their age, skin type, and lifestyle habits.",
        es: "La mayoría de los pacientes disfrutan resultados que duran 12-18 meses, dependiendo de su edad, tipo de piel y hábitos de vida."
      }
    },
    {
      question: {
        en: "Is HarmonyCa® approved and safe?",
        es: "¿Está HarmonyCa® aprobado y es seguro?"
      },
      answer: {
        en: "Yes. HarmonyCa® is CE-certified and used widely across Europe. At Mave, it's administered exclusively by licensed medical providers.",
        es: "Sí. HarmonyCa® está certificado CE y se usa ampliamente en Europa. En Mave, es administrado exclusivamente por proveedores médicos licenciados."
      }
    },
    {
      question: {
        en: "Can I combine HarmonyCa® with other procedures?",
        es: "¿Puedo combinar HarmonyCa® con otros procedimientos?"
      },
      answer: {
        en: "Absolutely. It pairs well with treatments like Ultraformer, RF microneedling, and skin boosters like Rejuran for comprehensive facial rejuvenation.",
        es: "Absolutamente. Se combina bien con tratamientos como Ultraformer, microneedling RF y potenciadores de piel como Rejuran para rejuvenecimiento facial completo."
      }
    }
  ]
};
