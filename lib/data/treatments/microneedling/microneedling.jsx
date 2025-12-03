export const microneedling = {
  urlSlug: "microneedling",
  category: "microneedling & mesotherapy",
  categoryDisplayName: {
    en: "Microneedling & Mesotherapy",
    es: "Microneedling y Mesoterapia"
  },
  serviceDisplayName: {
    en: "Microneedling Skin Renewal",
    es: "Renovación de piel con microneedling"
  },
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/microneedling.jpg",
    secondary: "/microneedling2.jpg"
  },
  description: {
    en: "Refine texture, shrink pores, and stimulate collagen through precision microneedling using fine sterile needles. Enhance results with powerful infusion options like PRP/PRFM, Rejuran, or Kiara Reju.",
    es: "Mejora la textura, reduce la apariencia de poros y estimula el colágeno mediante microneedling de precisión con agujas estériles finas. Potencia los resultados con opciones de infusión como PRP/PRFM, Rejuran o Kiara Reju."
  },
  details: {
    en: "Microneedling uses fine needles to create micro-channels in the skin, triggering the body’s natural healing response and promoting collagen, elastin, and skin cell regeneration. It improves texture, firmness, and reduces scarring over time. Options like PRP, Rejuran, and Kiara Reju can be infused for deeper regenerative benefits.",
    es: "El microneedling utiliza agujas finas para crear microcanales en la piel, activando la respuesta natural de reparación del cuerpo y promoviendo la producción de colágeno, elastina y la regeneración celular. Con el tiempo mejora la textura, la firmeza y disminuye cicatrices. Opciones como PRP, Rejuran y Kiara Reju pueden infundirse para beneficios regenerativos más profundos."
  },
  notes: [
    {
      en: "3–6 sessions recommended for optimal results",
      es: "Se recomiendan de 3 a 6 sesiones para resultados óptimos"
    },
    {
      en: "Safe for most skin types",
      es: "Seguro para la mayoría de los tipos de piel"
    },
    {
      en: "Downtime: 1–3 days of redness possible",
      es: "Tiempo de recuperación: puede haber de 1 a 3 días de enrojecimiento"
    }
  ],
  pricing: {
    startingPrice: "$140",
    startingPriceCurrency: "USD",
    promoPrice: "$120",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Microneedling only (base treatment)",
          es: "Microneedling solo (tratamiento base)"
        },
        isPromoEligible: false,
        optionPrice: "$140",
        optionCurrency: "USD",
        optionPromoPrice: "$120",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Includes Toskani Lumicen Gel serum infusion only",
            es: "Incluye únicamente infusión de suero Toskani Lumicen Gel"
          }
        ]
      },
      {
        optionName: {
          en: "Microneedling – PRP or PRFM",
          es: "Microneedling – PRP o PRFM"
        },
        isPromoEligible: false,
        optionPrice: "$160",
        optionCurrency: "USD",
        optionPromoPrice: "$160",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Uses patient’s own plasma or fibrin matrix",
            es: "Utiliza el propio plasma o matriz de fibrina del paciente"
          }
        ]
      },
      {
        optionName: {
          en: "Microneedling – Kiara Reju",
          es: "Microneedling – Kiara Reju"
        },
        isPromoEligible: false,
        optionPrice: "$190",
        optionCurrency: "USD",
        optionPromoPrice: "$170",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "PN + HA + Niacinamide booster",
            es: "Booster de PN + AH + niacinamida"
          }
        ]
      },
      {
        optionName: {
          en: "Microneedling skin renewal – Rejuran – full face",
          es: "Renovación de piel con microneedling – Rejuran – rostro completo"
        },
        isPromoEligible: false,
        optionPrice: "$300",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Salmon DNA-based cellular regeneration",
            es: "Regeneración celular basada en ADN de salmón"
          }
        ]
      }
    ]
  },
  goals: [
    {
      en: "Improve skin texture and tone",
      es: "Mejorar la textura y el tono de la piel"
    },
    {
      en: "Reduce acne scars and fine lines",
      es: "Reducir cicatrices de acné y líneas finas"
    },
    {
      en: "Shrink enlarged pores",
      es: "Disminuir la apariencia de poros dilatados"
    }
  ],
  treatableAreas: [
    {
      en: "Full face",
      es: "Rostro completo"
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
      en: "Back",
      es: "Espalda"
    },
    {
      en: "Hands",
      es: "Manos"
    }
  ],
  addOns: [
    {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild: "Any Zone",
      displayName: {
        en: "Wrinkle Reducer – Botox",
        es: "Reductor de arrugas Botox"
      },
      link: "/treatments/wrinkle-reducers-botox"
    },
    {
      serviceParent: "HydraFacial MD",
      serviceChild: "Hydrafacial MD - Face",
      displayName: {
        en: "HydraFacial MD – Face",
        es: "HydraFacial MD – Rostro"
      },
      link: "/treatments/hydrafacial"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid retinoids, AHAs/BHAs and exfoliation for 3 days prior.",
        es: "Evite retinoides, ácidos AHA/BHA y exfoliación durante los 3 días previos."
      },
      {
        en: "No active acne, open wounds or infections at the treatment site.",
        es: "No debe haber acné activo, heridas abiertas ni infecciones en la zona a tratar."
      }
    ],
    postTreatment: [
      {
        en: "Expect redness similar to a sunburn for 24–72 hours.",
        es: "Espere un enrojecimiento similar al de una quemadura solar durante 24–72 horas."
      },
      {
        en: "Avoid sun, sweating and active skincare for 2–3 days post-treatment.",
        es: "Evite el sol directo, el sudor intenso y productos con activos fuertes durante 2–3 días después del tratamiento."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How many sessions will I need?",
        es: "¿Cuántas sesiones voy a necesitar?"
      },
      answer: {
        en: "Most patients need 3–6 sessions spaced 4–6 weeks apart for best results.",
        es: "La mayoría de los pacientes requiere de 3 a 6 sesiones, espaciadas cada 4–6 semanas, para obtener los mejores resultados."
      }
    },
    {
      question: {
        en: "Which infusion option is best for me?",
        es: "¿Qué opción de infusión es mejor para mí?"
      },
      answer: {
        en: "PRP/PRFM uses your own plasma for regeneration. Kiara Reju adds hydration and glow. Rejuran focuses on deep cellular repair. Your provider will recommend the best option based on your skin needs.",
        es: "PRP/PRFM utiliza tu propio plasma para favorecer la regeneración. Kiara Reju aporta hidratación y luminosidad. Rejuran se enfoca en la reparación celular profunda. Tu especialista te recomendará la mejor opción según las necesidades de tu piel."
      }
    },
    {
      question: {
        en: "Is this safe for all skin types?",
        es: "¿Es seguro para todo tipo de piel?"
      },
      answer: {
        en: "Yes, microneedling is safe for most skin tones when performed by trained professionals. Rejuran and Kiara Reju are excellent options for sensitive or aging skin.",
        es: "Sí, el microneedling es seguro para la mayoría de los fototipos cuando lo realiza personal capacitado. Rejuran y Kiara Reju son excelentes opciones para piel sensible o madura."
      }
    },
    {
      question: {
        en: "Can I combine this with other treatments?",
        es: "¿Puedo combinar este tratamiento con otros?"
      },
      answer: {
        en: "Yes, microneedling pairs well with facials, laser or radiofrequency for enhanced results. Always consult your provider to create the safest treatment plan.",
        es: "Sí, el microneedling se puede combinar con faciales, láser o radiofrecuencia para potenciar resultados. Siempre consulta con tu especialista para diseñar el plan de tratamiento más seguro."
      }
    }
  ]
};
