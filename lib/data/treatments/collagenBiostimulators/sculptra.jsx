export const sculptra = {
  urlSlug: "sculptra",
  category: "biostimulatory-fillers",
  categoryDisplayName: {
    en: "Collagen Biostimulators",
    es: "Biostimuladores de Colágeno"
  },
  serviceDisplayName: {
    en: "Sculptra PLLA Collagen Stimulator",
    es: "Estimulador de Colágeno Sculptra PLLA"
  },
  isPopular: true,
  isPromoEligible: true,
  images: {
    primary: "/sculptra.jpg",
    secondary: "/sculptra2.jpg"
  },
  description: {
    en: "Gradually restore youthful volume and firmness with Sculptra — a poly-L-lactic acid (PLLA) collagen stimulator that enhances skin texture and structure over time.",
    es: "Restaure gradualmente el volumen y la firmeza juvenil con Sculptra — un estimulador de colágeno de ácido poli-L-láctico (PLLA) que mejora la textura y estructura de la piel con el tiempo."
  },
  details: {
    en: "Sculptra is an injectable biostimulant composed of poly-L-lactic acid (PLLA), designed to activate your skin’s natural collagen production. It gradually restores lost facial volume, improves skin density, and enhances definition in areas like the cheeks, jawline, and temples. Unlike traditional dermal fillers, Sculptra delivers subtle, progressive improvements that last up to two years.",
    es: "Sculptra es un biostimulante inyectable compuesto de ácido poli-L-láctico (PLLA), diseñado para activar la producción natural de colágeno de la piel. Restaura gradualmente el volumen facial perdido, mejora la densidad de la piel y realza la definición en áreas como las mejillas, la línea mandibular y las sienes. A diferencia de los rellenos dérmicos tradicionales, Sculptra proporciona mejoras sutiles y progresivas que duran hasta dos años."
  },
  notes: [
    {
      en: "Treatment plan typically includes 2–3 vials spaced 4–6 weeks apart",
      es: "El plan de tratamiento generalmente incluye 2-3 viales espaciados 4-6 semanas"
    },
    {
      en: "Full results build over 2–3 months as collagen regenerates",
      es: "Los resultados completos se construyen en 2-3 meses a medida que el colágeno se regenera"
    },
    {
      en: "Excellent for long-term volume restoration without an overfilled look",
      es: "Excelente para la restauración de volumen a largo plazo sin apariencia sobrecargada"
    }
  ],
  pricing: {
    startingPrice: "$575",
    startingPriceCurrency: "USD",
    promoPrice: "$515",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Per Vial",
          es: "Por Viales"
        },
        isPromoEligible: true,
        optionPrice: "$575",
        optionCurrency: "USD",
        optionPromoPrice: "$515",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "This price is reflective of 1 vial per zone treated",
            es: "Este precio refleja 1 vial por zona tratada"
          },
          {
            en: "Zones include, but not limited to: Face, Neck, Neckline, Hands",
            es: "Las zonas incluyen, pero no se limitan a: Rostro, Cuello, Escote, Manos"
          },
          {
            en: "Vial quantity is subject to change based on zone size and/or zones treated",
            es: "La cantidad de viales está sujeta a cambios según el tamaño de la zona y/o zonas tratadas"
          },
          {
            en: "Exclusive price is based on a treatment plan of 3 sessions",
            es: "El precio exclusivo se basa en un plan de tratamiento de 3 sesiones"
          }
        ]
      }
    ]
  },
  goals: [
    {
      en: "Stimulate natural collagen growth",
      es: "Estimular el crecimiento natural del colágeno"
    },
    {
      en: "Rebuild facial volume lost to aging",
      es: "Reconstruir el volumen facial perdido por el envejecimiento"
    },
    {
      en: "Improve skin texture, elasticity, and structure",
      es: "Mejorar la textura, elasticidad y estructura de la piel"
    }
  ],
  treatableAreas: [
    {
      en: "Cheeks",
      es: "Mejillas"
    },
    {
      en: "Temples",
      es: "Sienes"
    },
    {
      en: "Jawline",
      es: "Línea Mandibular"
    },
    {
      en: "Nasolabial Folds",
      es: "Pliegues Nasolabiales"
    },
    {
      en: "Marionette Lines",
      es: "Líneas de Marioneta"
    },
    {
      en: "Chin",
      es: "Barbilla"
    },
    {
      en: "Neck",
      es: "Cuello"
    }
  ],
  addOns: [
    {
      serviceParent: "HydraFacial MD",
      serviceChild:  "Hydrafacial MD - Face",
      displayName: {
        en: "HydraFacial MD - Face",
        es: "HydraFacial MD - Rostro"
      },
      link:          "/treatments/hydrafacial"
    },
    {
      serviceParent: "Casmara Purifying Algae Facial",
      serviceChild:  "Casmara Purifying Algae Facial",
      displayName: {
        en: "Casmara Purifying Algae Facial",
        es: "Facial Purificante de Algas Casmara"
      },
      link:          "/treatments/casmara-purifying"
    },
    {
      serviceParent: "Microneedling Skin Renewal - Rejuran - Full Face",
      serviceChild: "Microneedling Skin Renewal - Rejuran - Full Face",
      displayName: {
        en: "Microneedling Skin Renewal - Rejuran - Full Face",
        es: "Renovación de Piel con Microneedling - Rejuran - Rostro Completo"
      },
      link: "/treatments/microneedling"
    },
    {
      serviceParent: "Scarlet S RF Microneedling",
      serviceChild: "Scarlet S RF Microneedling - Face",
      displayName: {
        en: "Scarlet S RF Microneedling - Face",
        es: "Microneedling RF Scarlet S - Rostro"
      },
      link: "/treatments/rf-microneedling"
    },
    {
      serviceParent: "Ultraformer MPT Ultrasound Lift",
      serviceChild: "Ultraformer MPT - 360 Contour",
      displayName: {
        en: "Ultraformer MPT - 360 Contour",
        es: "Ultraformer MPT - Contorno 360"
      },
      link: "/treatments/ultraformer-mpt"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid alcohol, aspirin, ibuprofen, and fish oil supplements 24–48 hours before treatment to minimize bruising.",
        es: "Evite alcohol, aspirina, ibuprofeno y suplementos de aceite de pescado 24-48 horas antes del tratamiento para minimizar moretones."
      },
      {
        en: "Stay well-hydrated and eat a nutritious meal before your appointment.",
        es: "Manténgase bien hidratado y coma una comida nutritiva antes de su cita."
      }
    ],
    postTreatment: [
      {
        en: "Massage treated areas for 5 minutes, 5 times a day, for 5 days to support even collagen stimulation.",
        es: "Masajee las áreas tratadas por 5 minutos, 5 veces al día, durante 5 días para apoyar la estimulación uniforme del colágeno."
      },
      {
        en: "Mild swelling or bruising may occur and typically resolves in a few days.",
        es: "Puede ocurrir hinchazón leve o moretones y típicamente se resuelve en pocos días."
      },
      {
        en: "Results develop gradually over 4 to 8 weeks, with full improvements visible by 3 months.",
        es: "Los resultados se desarrollan gradualmente en 4 a 8 semanas, con mejoras completas visibles en 3 meses."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "What makes Sculptra different from traditional fillers?",
        es: "¿Qué hace que Sculptra sea diferente de los rellenos tradicionales?"
      },
      answer: {
        en: "Sculptra stimulates your body’s own collagen production over time, rather than adding immediate volume like hyaluronic acid fillers. The result is longer-lasting, natural rejuvenation.",
        es: "Sculptra estimula la producción propia de colágeno de su cuerpo con el tiempo, en lugar de agregar volumen inmediato como los rellenos de ácido hialurónico. El resultado es una rejuvenación natural de mayor duración."
      }
    },
    {
      question: {
        en: "How many vials are typically needed?",
        es: "¿Cuántos viales se necesitan típicamente?"
      },
      answer: {
        en: "Most patients need 2–3 vials over the course of multiple sessions, depending on age, facial volume loss, and treatment goals.",
        es: "La mayoría de los pacientes necesitan 2-3 viales durante el curso de múltiples sesiones, dependiendo de la edad, la pérdida de volumen facial y los objetivos del tratamiento."
      }
    },
    {
      question: {
        en: "Is there any downtime?",
        es: "¿Hay algún tiempo de inactividad?"
      },
      answer: {
        en: "There may be mild swelling, redness, or bruising, but most patients return to daily activities immediately after treatment.",
        es: "Puede haber hinchazón leve, enrojecimiento o moretones, pero la mayoría de los pacientes regresan a las actividades diarias inmediatamente después del tratamiento."
      }
    },
    {
      question: {
        en: "When will I see results?",
        es: "¿Cuándo veré los resultados?"
      },
      answer: {
        en: "Results appear gradually over several weeks as collagen builds, with continued improvement up to 6 months.",
        es: "Los resultados aparecen gradualmente en varias semanas a medida que el colágeno se acumula, con mejora continua hasta 6 meses."
      }
    },
    {
      question: {
        en: "How long do the results last?",
        es: "¿Cuánto duran los resultados?"
      },
      answer: {
        en: "Sculptra results typically last 2 years or longer with proper treatment and maintenance.",
        es: "Los resultados de Sculptra típicamente duran 2 años o más con tratamiento y mantenimiento adecuados."
      }
    }
  ]
};