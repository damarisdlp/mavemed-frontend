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
    startingPrice: { en: "$10", es: "$10" },
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
        optionPrice: { en: "$10", es: "$10" },
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
      treatmentSlug: "swedish-massage",
      optionName: {
        en: "Relaxing Swedish Massage - Full Body",
        es: "Masaje Sueco Relajante - Cuerpo Completo"
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
      treatmentSlug: "casmara-retinol-proage",
      optionName: {
        en: "Casmara - Retinol Pro‑Age Facial",
        es: "Casmara - Facial Retinol Pro‑Age"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Arrive well hydrated and eat a light meal 1–2 hours before your session.",
        es: "Llegue bien hidratado y coma algo ligero 1–2 horas antes de la sesión."
      },
      {
        en: "Avoid heavy lotions or oils on the areas to be treated on the day of your appointment.",
        es: "Evite lociones o aceites pesados en las zonas a tratar el día de su cita."
      },
      {
        en: "Let your provider know about blood thinners, recent sunburn, pregnancy, or skin conditions (eczema, psoriasis, wounds).",
        es: "Informe a su especialista si usa anticoagulantes, tiene quemaduras solares recientes, embarazo o afecciones cutáneas (eczema, psoriasis, heridas)."
      }
    ],
    duringTreatment: [
      {
        en: "You will feel a firm pulling/suction sensation; intensity can be adjusted for comfort.",
        es: "Sentirá una sensación firme de succión o tirón; la intensidad puede ajustarse para su comodidad."
      },
      {
        en: "Expect temporary circular marks to form as cups draw blood flow to the surface.",
        es: "Es normal que se formen marcas circulares temporales cuando las ventosas llevan flujo sanguíneo a la superficie."
      },
      {
        en: "Mild warmth or pressure is common; tell your provider immediately if you feel sharp pain or dizziness.",
        es: "El calor o la presión leves son comunes; informe de inmediato si siente dolor agudo o mareo."
      }
    ],
    postTreatment: [
      {
        en: "Mild soreness, redness, or circular bruising can last 3–7 days; this is expected.",
        es: "Dolor leve, enrojecimiento o moretones circulares pueden durar de 3 a 7 días; es esperado."
      },
      {
        en: "Stay hydrated and avoid hot tubs, saunas, or vigorous exercise for 24 hours.",
        es: "Manténgase hidratado y evite tinas calientes, saunas o ejercicio intenso por 24 horas."
      },
      {
        en: "Keep treated skin clean, avoid harsh exfoliants, and protect marks from direct sun until they fade.",
        es: "Mantenga la piel tratada limpia, evite exfoliantes agresivos y proteja las marcas del sol directo hasta que desaparezcan."
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
