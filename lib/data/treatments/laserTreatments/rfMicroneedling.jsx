export const rfMicroneedling = {
  urlSlug: "rf-microneedling",
  category: "laser-resurfacing",
  categoryDisplayName: {
    en: "Laser Treatments & Skin Resurfacing",
    es: "Tratamientos Láser y Resurfacing Cutáneo"
  },
  serviceDisplayName: {
    en: "Scarlet S RF Microneedling",
    es: "Microneedling con radiofrecuencia Scarlet S"
  },
  isPopular: true,
  isPromoEligible: true,
  images: {
    primary: "/scarlet.jpg",
    secondary: "/scarlet2.jpg"
  },
  description: {
    en: "Combines microneedling with fractional radiofrequency to lift, tighten, and resurface skin with minimal downtime.",
    es: "Combina microneedling con radiofrecuencia fraccionada para levantar, tensar y renovar la piel con tiempo de recuperación mínimo."
  },
  details: {
    en: "Scarlet S uses short pulse radiofrequency delivered through microneedles to stimulate deeper layers of skin for collagen remodeling, tightening, and scar reduction. It enhances firmness and texture without damaging the skin surface.",
    es: "Scarlet S utiliza radiofrecuencia de pulso corto a través de microagujas para estimular las capas profundas de la piel, favoreciendo la remodelación del colágeno, el tensado y la mejora de cicatrices. Mejora la firmeza y la textura sin dañar la superficie de la piel."
  },
  notes: [
    {
      en: "3–4 sessions spaced 4–6 weeks apart recommended",
      es: "Se recomiendan de 3 a 4 sesiones espaciadas cada 4–6 semanas"
    },
    {
      en: "Safe for all skin types",
      es: "Seguro para todo tipo de piel"
    },
    {
      en: "Mild redness may last 1–2 days",
      es: "El enrojecimiento leve puede durar de 1 a 2 días"
    }
  ],
  pricing: {
    startingPrice: "$265",
    startingPriceCurrency: "USD",
    promoPrice: "$225",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Scarlet S RF Microneedling – Face",
          es: "Microneedling RF Scarlet S – Rostro"
        },
        isPromoEligible: true,
        optionPrice: "$265",
        optionCurrency: "USD",
        optionPromoPrice: "$225",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: {
          en: "Scarlet S RF Microneedling – Face and neck",
          es: "Microneedling RF Scarlet S – Rostro y cuello"
        },
        isPromoEligible: true,
        optionPrice: "$310",
        optionCurrency: "USD",
        optionPromoPrice: "$275",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: {
          en: "Scarlet S RF Microneedling – Face, neck and décolleté",
          es: "Microneedling RF Scarlet S – Rostro, cuello y escote"
        },
        isPromoEligible: true,
        optionPrice: "$350",
        optionCurrency: "USD",
        optionPromoPrice: "$310",
        optionPromoPriceCurrency: "USD",
        notes: null
      }
    ]
  },
  goals: [
    {
      en: "Lift and tighten sagging skin",
      es: "Levantar y tensar la piel flácida"
    },
    {
      en: "Reduce acne scars and large pores",
      es: "Reducir cicatrices de acné y poros dilatados"
    },
    {
      en: "Improve fine lines and skin laxity",
      es: "Mejorar líneas finas y laxitud de la piel"
    }
  ],
  treatableAreas: [
    {
      en: "Face",
      es: "Rostro"
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
      en: "Jawline",
      es: "Línea mandibular"
    },
    {
      en: "Acne scars",
      es: "Cicatrices de acné"
    },
    {
      en: "Stretch marks",
      es: "Estrías"
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
    },
    {
      serviceParent: "Serum Add-Ons",
      serviceChild:
        "Add-On - Platelet-Rich Plasma (PRP) or Platelet-Rich Fibrin Matrix (PRFM)",
      displayName: {
        en: "Add on – Platelet rich plasma (PRP) or platelet rich fibrin matrix (PRFM)",
        es: "Complemento – Plasma rico en plaquetas (PRP) o matriz de fibrina rica en plaquetas (PRFM)"
      },
      link: "/treatments/serum-add-ons"
    },
    {
      serviceParent: "Serum Add-Ons",
      serviceChild: "Add-On - Rejuran",
      displayName: {
        en: "Add on – Rejuran",
        es: "Complemento – Rejuran"
      },
      link: "/treatments/serum-add-ons"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid blood thinners, alcohol and caffeine 24 hours before your session.",
        es: "Evite anticoagulantes, alcohol y cafeína durante las 24 horas previas a su sesión."
      },
      {
        en: "Discontinue active skincare products for 3 days prior to treatment.",
        es: "Suspenda productos de cuidado de la piel con activos fuertes (ácidos, retinoides, etcétera) durante 3 días antes del tratamiento."
      }
    ],
    postTreatment: [
      {
        en: "Expect redness, swelling or tightness for 1–2 days after treatment.",
        es: "Espere enrojecimiento, ligera inflamación o sensación de tirantez durante 1–2 días después del tratamiento."
      },
      {
        en: "Avoid sun exposure and heat based treatments for 72 hours.",
        es: "Evite la exposición solar intensa y tratamientos que generen calor (sauna, vapor, ejercicio intenso) durante 72 horas."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How is this different from regular microneedling?",
        es: "¿En qué se diferencia de un microneedling tradicional?"
      },
      answer: {
        en: "Scarlet RF adds radiofrequency energy to microneedling to reach deeper layers of the skin for more powerful collagen remodeling and tightening.",
        es: "Scarlet RF añade energía de radiofrecuencia al microneedling para llegar a capas más profundas de la piel y lograr una remodelación de colágeno y un tensado más potentes."
      }
    },
    {
      question: {
        en: "Is there downtime?",
        es: "¿Hay tiempo de recuperación?"
      },
      answer: {
        en: "Most patients notice redness and tightness for 24–48 hours, with minimal flaking and very little interruption to daily activities.",
        es: "La mayoría de los pacientes presenta enrojecimiento y sensación de tirantez durante 24–48 horas, con muy poca descamación y mínima interrupción de sus actividades diarias."
      }
    },
    {
      question: {
        en: "Does it hurt?",
        es: "¿Duele el tratamiento?"
      },
      answer: {
        en: "A topical numbing cream is applied before the procedure for comfort. Most patients describe the sensation as tolerable and brief.",
        es: "Se aplica una crema anestésica tópica antes del procedimiento para mayor comodidad. La mayoría de los pacientes describe la sensación como tolerable y de corta duración."
      }
    }
  ]
};
