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
  isPromoEligible: false,
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
        isPromoEligible: false,
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
      treatmentSlug: "wrinkle-reducers-botox",
      optionName: {
        en: "Any Zone",
        es: "Cualquier Zona"
      }
    },
    {
      treatmentSlug: "hydrafacial",
      optionName: {
        en: "Hydrafacial MD - Face",
        es: "Hydrafacial MD - Rostro"
      }
    },
    {
      treatmentSlug: "casmara-purifying",
      optionName: {
        en: "Casmara Purifying Algae Facial",
        es: "Facial Purificante de Algas Casmara"
      }
    },
  ],
  expectations: {
    preTreatment: [
      {
        en: "Arrive well-hydrated.",
        es: "Llegue bien hidratado."
      },
      {
        en: "Avoid heavy meals beforehand.",
        es: "Evite comidas pesadas con anticipación."
      }
    ],
    postTreatment: [
      {
        en: "Drink plenty of water to support lymphatic drainage.",
        es: "Beba mucha agua para apoyar el drenaje linfático."
      },
      {
        en: "Mild soreness may occur if it's your first massage.",
        es: "Puede ocurrir dolor leve si es su primer masaje."
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
