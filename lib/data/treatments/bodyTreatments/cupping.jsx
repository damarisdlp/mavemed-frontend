export const cupping = {
  urlSlug: "cupping",
  category: "body-medical-treatments",
  categoryDisplayName: {
    en: "Body & Medical Treatments",
    es: "Tratamientos Corporales y Médicos"
  },
  serviceDisplayName: {
    en: "Cupping Therapy - Add‑On",
    es: "Terapia de Ventosas - Complemento"
  },
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/cupping.jpg",
    secondary: "/cupping2.jpg",
  },
  description: {
    en: "Therapeutic cupping paired with massage to enhance circulation, relieve tension, and support detoxification.",
    es: "Terapia de ventosas terapéutica combinada con masaje para mejorar la circulación, aliviar tensión y apoyar la desintoxicación."
  },
  details: {
    en: "Cupping therapy uses suction to draw blood flow to targeted areas, reducing inflammation and promoting muscle recovery. It is commonly integrated into massage sessions for added therapeutic benefit.",
    es: "La terapia de ventosas utiliza succión para dirigir el flujo sanguíneo a áreas específicas, reduciendo la inflamación y promoviendo la recuperación muscular. Se integra comúnmente en sesiones de masaje para beneficio terapéutico adicional."
  },
  notes: [
    {
      en: "Add-on service only, not available as a standalone treatment",
      es: "Servicio complementario únicamente, no disponible como tratamiento independiente"
    },
    {
      en: "May leave temporary circular marks on the skin",
      es: "Puede dejar marcas circulares temporales en la piel"
    },
    {
      en: "Customizable pressure based on comfort level",
      es: "Presión personalizable según nivel de comodidad"
    }
  ],
  pricing: {
    startingPrice: "$10",
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Cupping Add‑On",
          es: "Complemento de Ventosas"
        },
        isPromoEligible: false,
        optionPrice: "$10",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Only available as an add-on to Swedish massage",
            es: "Solo disponible como complemento al masaje sueco"
          }
        ]
      },
    ],
  },
  goals: [
    {
      en: "Stimulate circulation",
      es: "Estimular la circulación"
    },
    {
      en: "Relieve muscle tension",
      es: "Aliviar tensión muscular"
    },
    {
      en: "Support lymphatic detox",
      es: "Apoyar desintoxicación linfática"
    }
  ],
  treatableAreas: [
    {
      en: "Back",
      es: "Espalda"
    },
    {
      en: "Shoulders",
      es: "Hombros"
    },
    {
      en: "Thighs",
      es: "Muslos"
    },
    {
      en: "Calves",
      es: "Pantorrillas"
    },
    {
      en: "Arms",
      es: "Brazos"
    }
  ],
  addOns: [
    {
      serviceParent: "Relaxing Swedish Massage - Full Body",
      serviceChild:  "Relaxing Swedish Massage - Full Body",
      displayName: {
        en: "Relaxing Swedish Massage - Full Body",
        es: "Masaje Sueco Relajante - Cuerpo Completo"
      },
      link:          "/treatments/swedish-massage"
    },
  ],
  expectations: {
    preTreatment: [
      {
        en: "Wear loose clothing.",
        es: "Vista ropa holgada."
      },
      {
        en: "Notify your provider of any skin conditions or medications that affect clotting.",
        es: "Notifique a su proveedor sobre cualquier condición de piel o medicamentos que afecten la coagulación."
      }
    ],
    postTreatment: [
      {
        en: "Mild soreness or redness is normal.",
        es: "Dolor leve o enrojecimiento es normal."
      },
      {
        en: "Stay hydrated to support detox.",
        es: "Manténgase hidratado para apoyar la desintoxicación."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "Does cupping hurt?",
        es: "¿Duele la terapia de ventosas?"
      },
      answer: {
        en: "Most clients feel a tight pulling sensation, not pain. It's generally well tolerated.",
        es: "La mayoría de los clientes sienten una sensación de tirón apretado, no dolor. Generalmente se tolera bien."
      }
    },
    {
      question: {
        en: "Will I have marks afterward?",
        es: "¿Tendré marcas después?"
      },
      answer: {
        en: "Yes, cupping often leaves painless circular marks that fade within a few days.",
        es: "Sí, la terapia de ventosas a menudo deja marcas circulares indoloras que se desvanecen en pocos días."
      }
    }
  ]
};