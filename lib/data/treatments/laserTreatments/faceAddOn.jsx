export const serumAddOns = {
  urlSlug: "serum-add-ons",
  category: "laser-resurfacing",
  categoryDisplayName: {
    en: "Laser Treatments & Skin Resurfacing",
    es: "Tratamientos Láser y Resurfacing Cutáneo"
  },
  serviceDisplayName: {
    en: "Serum Add-Ons",
    es: "Complementos de Suero"
  },
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/serum.jpg",
    secondary: "/serum2.jpg"
  },
  description: {
    en: "Enhance your treatment results with our specialty serums and boosters. These add-ons are applied immediately after procedures like RF microneedling or laser resurfacing to deliver targeted actives deep into the skin, amplifying healing and rejuvenation.",
    es: "Potencia tus resultados con nuestros sueros y potenciadores especializados. Estos complementos se aplican inmediatamente después de procedimientos como microneedling con RF o resurfacing láser para llevar activos específicos a capas profundas de la piel, intensificando la reparación y la rejuveneción."
  },
  details: {
    en: "Serum add-ons are concentrated boosters that infuse the skin with powerful ingredients during the optimal post-treatment window. Each option targets different skin needs, from cellular repair and hydration to biostimulation and brightening, supporting faster recovery and superior outcomes.",
    es: "Los complementos de suero son potenciadores concentrados que infunden la piel con ingredientes potentes durante la ventana óptima posterior al tratamiento. Cada opción atiende diferentes necesidades de la piel, desde reparación celular e hidratación hasta biostimulación y luminosidad, favoreciendo una recuperación más rápida y resultados superiores."
  },
  notes: [
    {
      en: "Recommended immediately after RF microneedling or CO₂ laser",
      es: "Recomendados inmediatamente después de microneedling con RF o láser CO₂"
    },
    {
      en: "Boosts healing and enhances visible results",
      es: "Aceleran la recuperación y potencian los resultados visibles"
    },
    {
      en: "Safe for most skin types; selected according to provider guidance",
      es: "Seguros para la mayoría de los tipos de piel; se eligen según la recomendación del especialista"
    }
  ],
  pricing: {
    startingPrice: "$135",
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Add-On - PRP or PRFM",
          es: "Complemento - PRP o PRFM"
        },
        isPromoEligible: false,
        optionPrice: "$135",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Uses the patient’s own platelet-rich plasma or platelet-rich fibrin matrix to support natural healing and regeneration",
            es: "Utiliza el propio plasma rico en plaquetas o matriz de fibrina rica en plaquetas del paciente para favorecer la reparación y regeneración natural"
          }
        ]
      },
      {
        optionName: {
          en: "Add-On - Kiara Reju",
          es: "Complemento - Kiara Reju"
        },
        isPromoEligible: false,
        optionPrice: "$145",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "PN + HA + niacinamide booster for hydration, elasticity, and glow",
            es: "Potenciador con polinucleótidos, ácido hialurónico y niacinamida para hidratación, elasticidad y luminosidad"
          }
        ]
      },
      {
        optionName: {
          en: "Add-On - Rejuran",
          es: "Complemento - Rejuran"
        },
        isPromoEligible: false,
        optionPrice: "$250",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Salmon DNA based polynucleotides for cellular repair, barrier recovery, and collagen support",
            es: "Polinucleótidos derivados de ADN de salmón para reparar células, recuperar la barrera cutánea y estimular colágeno"
          }
        ]
      }
    ]
  },
  goals: [
    {
      en: "Accelerate post-treatment healing and recovery",
      es: "Acelerar la recuperación después del tratamiento"
    },
    {
      en: "Deeply hydrate and nourish the skin",
      es: "Hidratar y nutrir la piel en profundidad"
    },
    {
      en: "Enhance glow, smoothness, and overall treatment results",
      es: "Incrementar la luminosidad, suavidad y resultados generales del tratamiento"
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
    }
  ],
  addOns: [
    {
      serviceParent: "Scarlet S RF Microneedling",
      serviceChild: "Scarlet S RF Microneedling - Face",
      displayName: {
        en: "Scarlet S RF Microneedling - Face",
        es: "Microneedling con RF Scarlet S - Rostro"
      },
      link: "/treatments/rf-microneedling"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "No special preparation is needed beyond what is required for your primary treatment.",
        es: "No se requiere preparación especial más allá de la indicada para tu tratamiento principal."
      },
      {
        en: "If possible, avoid retinoids or strong peels for 48 hours before your appointment.",
        es: "Si es posible, evita retinoides o peelings fuertes durante 48 horas antes de tu cita."
      }
    ],
    postTreatment: [
      {
        en: "Skin often looks extra radiant and hydrated immediately after the serum is applied.",
        es: "La piel suele verse especialmente luminosa e hidratada inmediatamente después de la aplicación del suero."
      },
      {
        en: "Avoid harsh products, exfoliation, or active acids for at least 24 hours.",
        es: "Evita productos agresivos, exfoliantes o ácidos activos durante al menos 24 horas."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "Is this add-on good for mature or sensitive skin?",
        es: "¿Este complemento es adecuado para piel madura o sensible?"
      },
      answer: {
        en: "Yes. Most serum add-ons are designed to support barrier repair, hydration, and collagen, making them ideal for mature, sensitized, or recently treated skin.",
        es: "Sí. La mayoría de los complementos con suero están diseñados para apoyar la barrera cutánea, la hidratación y el colágeno, por lo que son ideales para piel madura, sensibilizada o recién tratada."
      }
    },
    {
      question: {
        en: "Can I wear makeup after receiving a serum add-on?",
        es: "¿Puedo usar maquillaje después de aplicar un complemento con suero?"
      },
      answer: {
        en: "Yes, unless your primary treatment has specific restrictions. For best results, we recommend letting the skin breathe for a few hours after your session.",
        es: "Sí, a menos que tu tratamiento principal tenga restricciones específicas. Para mejores resultados, recomendamos dejar que la piel respire algunas horas después de la sesión."
      }
    },
    {
      question: {
        en: "Which serum add-on should I choose?",
        es: "¿Qué complemento con suero debo elegir?"
      },
      answer: {
        en: "Your provider will recommend the most effective option based on your skin type, concerns, and the procedure performed that day.",
        es: "Tu especialista te recomendará la opción más efectiva según tu tipo de piel, tus necesidades y el procedimiento realizado ese día."
      }
    }
  ]
};
