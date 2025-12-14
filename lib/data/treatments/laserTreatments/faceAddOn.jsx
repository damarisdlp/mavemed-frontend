export const serumAddOns = {
  urlSlug: "serum-add-ons",
  category: "laser-resurfacing",
  categoryDisplayName: {
    en: "Laser Treatments & Skin Resurfacing",
    es: "Tratamientos Láser y Resurfacing Cutáneo"
  },
  serviceDisplayName: {
    en: "Serum Add-Ons (PRP, PN, PDRN)",
    es: "Complementos de Suero (PRP, PN, PDRN)"
  },
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/serum.jpg",
    secondary: "/serum2.jpg"
  },
  description: {
    en: "Enhance your treatment results with our specialty serums and boosters. These add-ons are applied immediately after procedures like RF microneedling or CO₂ laser resurfacing to deliver targeted actives deep into the skin, amplifying healing and rejuvenation.",
    es: "Potencia tus resultados con nuestros sueros y potenciadores especializados. Estos complementos se aplican inmediatamente después de procedimientos como microneedling con RF o resurfacing con láser CO₂ para llevar activos específicos a capas profundas de la piel, intensificando la reparación y la rejuveneción."
  },
  details: {
    en: "Serum add-ons are concentrated boosters that infuse the skin with powerful ingredients during the optimal post-treatment window. Each option targets different skin needs, from cellular repair and hydration to biostimulation and brightening, supporting faster recovery and superior outcomes.",
    es: "Los complementos de suero son potenciadores concentrados que infunden la piel con ingredientes potentes durante la ventana óptima posterior al tratamiento. Cada opción atiende diferentes necesidades de la piel, desde reparación celular e hidratación hasta biostimulación y luminosidad, favoreciendo una recuperación más rápida y resultados superiores."
  },
  notes: [
    {
      en: "Recommended with RF microneedling or CO₂ laser treatments",
      es: "Recomendados complementariamente con tratamientos microneedling con RF o láser CO₂"
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
    startingPrice: { en: "$135", es: "$135" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      // PRP
      { optionName: { en: "PRP - Face", es: "PRP - Rostro" }, isPromoEligible: false, optionPrice: { en: "$135", es: "$135" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [] },
      { optionName: { en: "PRP - Face + Neck", es: "PRP - Rostro + Cuello" }, isPromoEligible: false, optionPrice: { en: "$150", es: "$150" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [] },
      { optionName: { en: "PRP - Face + Neck + Décolleté", es: "PRP - Rostro + Cuello + Escote" }, isPromoEligible: false, optionPrice: { en: "$170", es: "$170" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [] },

      // PDRN
      { optionName: { en: "PDRN - Face", es: "PDRN - Rostro" }, isPromoEligible: false, optionPrice: { en: "$145", es: "$145" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [] },
      { optionName: { en: "PDRN - Face + Neck", es: "PDRN - Rostro + Cuello" }, isPromoEligible: false, optionPrice: { en: "$230", es: "$230" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [] },
      { optionName: { en: "PDRN - Face + Neck + Décolleté", es: "PDRN - Rostro + Cuello + Escote" }, isPromoEligible: false, optionPrice: { en: "$270", es: "$270" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [] },

      // PN
      { optionName: { en: "PN - Face", es: "PN - Rostro" }, isPromoEligible: false, optionPrice: { en: "$250", es: "$250" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [] },
      { optionName: { en: "PN - Face + Neck", es: "PN - Rostro + Cuello" }, isPromoEligible: false, optionPrice: { en: "$370", es: "$370" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [] },
      { optionName: { en: "PN - Face + Neck + Décolleté", es: "PN - Rostro + Cuello + Escote" }, isPromoEligible: false, optionPrice: { en: "$520", es: "$520" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [] }
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
      en: "Any zone treated with RF microneedling or CO₂ laser",
      es: "Cualquier zona tratada con microneedling de RF o láser de CO₂"
    }
  ],
  addOns: [
    {
      treatmentSlug: "rf-microneedling",
      optionName: {
        en: "Face",
        es: "Rostro"
      }
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
