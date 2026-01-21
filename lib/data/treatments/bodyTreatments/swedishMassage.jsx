export const swedishMassage = {
  urlSlug: "swedish-massage",
  category: "body-medical-treatments",
  categoryDisplayName: {
    en: "Body & Medical Treatments",
    es: "Tratamientos Corporales y Médicos"
  },
  serviceDisplayName: {
    en: "Relaxing Swedish Massage",
    es: "Masaje Sueco Relajante"
  },
  isPopular: false,
  images: {
    primary: "/swissmsg.jpg",
    secondary: "/swissmsg2.jpg",
  },
  description: {
    en: "A gentle, full-body massage to relieve tension, improve circulation, and promote overall relaxation.",
    es: "Un masaje suave y completo del cuerpo para aliviar la tensión, mejorar la circulación y promover la relajación general."
  },
  details: {
    en: "This classic Swedish massage uses light to moderate pressure with long, flowing strokes. It helps improve lymphatic flow, reduce stress, and increase oxygen levels in the blood.",
    es: "Este clásico masaje sueco utiliza presión ligera a moderada con movimientos largos y fluidos. Ayuda a mejorar el flujo linfático, reducir el estrés y aumentar los niveles de oxígeno en la sangre."
  },
  notes: [
    {
      en: "Includes aromatherapy upon request",
      es: "Incluye aromaterapia bajo petición"
    },
    {
      en: "Not a deep tissue massage",
      es: "No es un masaje de tejido profundo"
    },
    {
      en: "Ideal for stress relief and general wellness",
      es: "Ideal para alivio del estrés y bienestar general"
    }
  ],
  pricing: {
    startingPrice: { en: "$35", es: "$35" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Relaxing Swedish Massage - Full Body",
          es: "Masaje Sueco Relajante - Cuerpo Completo"
        },
        optionPrice: { en: "$35", es: "$35" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
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
      en: "Promote relaxation",
      es: "Promover relajación"
    },
    {
      en: "Relieve muscular tension",
      es: "Aliviar tensión muscular"
    },
    {
      en: "Improve blood circulation",
      es: "Mejorar circulación sanguínea"
    }
  ],
  treatableAreas: [
    {
      en: "Full Body",
      es: "Cuerpo Completo"
    }
  ],
  addOns: [
    {
      treatmentSlug: "cupping",
      optionName: {
        en: "Cupping Add‑On",
        es: "Complemento de Ventosas"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Arrive well hydrated and have a light meal 1–2 hours before.",
        es: "Llegue bien hidratado y coma algo ligero 1–2 horas antes."
      },
      {
        en: "Share any recent injuries, surgeries, or areas of discomfort so pressure can be adjusted.",
        es: "Informe sobre lesiones o cirugías recientes y zonas sensibles para ajustar la presión."
      }
    ],
    duringTreatment: [
      {
        en: "Expect gentle to moderate pressure with long, flowing strokes; communicate if you prefer lighter or deeper work.",
        es: "Espere presión suave a moderada con pases largos y fluidos; comunique si prefiere un trabajo más ligero o más profundo."
      },
      {
        en: "Normal sensations include warmth and relaxation; tell your therapist if you feel pain or dizziness.",
        es: "Son normales sensaciones de calor y relajación; avise a su terapeuta si siente dolor o mareo."
      }
    ],
    postTreatment: [
      {
        en: "Drink water to support lymphatic drainage and avoid heavy workouts for the rest of the day.",
        es: "Beba agua para apoyar el drenaje linfático y evite entrenamientos intensos el resto del día."
      },
      {
        en: "Mild soreness can occur after your first or deeper session; gentle stretching and a warm (not hot) shower can help.",
        es: "Puede presentarse dolor leve después de la primera sesión o de una más profunda; estiramientos suaves y una ducha tibia (no caliente) pueden ayudar."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "Is this massage good for chronic pain?",
        es: "¿Este masaje es bueno para el dolor crónico?"
      },
      answer: {
        en: "While it helps with tension, Swedish massage is better for relaxation. Chronic pain may require a deeper modality.",
        es: "Aunque ayuda con la tensión, el masaje sueco es mejor para la relajación. El dolor crónico puede requerir una modalidad más profunda."
      }
    },
    {
      question: {
        en: "Can I combine this with other treatments?",
        es: "¿Puedo combinar esto con otros tratamientos?"
      },
      answer: {
        en: "Yes, many clients pair it with facials, RF therapy, or body sculpting for a holistic session.",
        es: "Sí, muchos clientes lo combinan con faciales, terapia RF o escultura corporal para una sesión holística."
      }
    }
  ]
};
