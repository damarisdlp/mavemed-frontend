export const rfEnzymatic = {
  urlSlug: "rf-enzymatic",
  category: "skin-tightening",
  categoryDisplayName: {
    en: "Skin Tightening & Sculpting",
    es: "Reafirmación y Esculpido Corporal"
  },
  serviceDisplayName: {
    en: "RF + Enzymatic Body Treatment",
    es: "Tratamiento Corporal con RF + Enzimas"
  },
  isPopular: false,
  isPromoEligible: true,
  images: {
    primary: "/body.jpg",
    secondary: "/rf-enzymatic2.jpg"
  },
  description: {
    en: "Synergistic treatment combining radiofrequency and enzyme therapy to sculpt the body, reduce fibrosis, and tighten skin.",
    es: "Tratamiento sinérgico que combina radiofrecuencia y terapia enzimática para esculpir el cuerpo, reducir fibrosis y tensar la piel."
  },
  details: {
    en: "This treatment merges two powerful technologies: radiofrequency for dermal heating and collagen stimulation, and enzymatic injections for fat breakdown and fibrosis reduction. Recommended for post-lipo patients or individuals seeking body refinement without surgery.",
    es: "Este tratamiento combina dos tecnologías potentes: radiofrecuencia para calentar la dermis y estimular colágeno, y enzimas inyectables para reducir grasa localizada y fibrosis. Recomendado para pacientes post-lipo o personas que buscan remodelación corporal sin cirugía."
  },
  notes: [
    {
      en: "Ideal for post-liposuction fibrosis, uneven skin, and localized fat",
      es: "Ideal para fibrosis post-liposucción, piel irregular y grasa localizada"
    },
    {
      en: "Combines RF-induced tightening with enzyme-based contouring",
      es: "Combina el tensado de la RF con el contorno producido por enzimas"
    },
    {
      en: "Visible improvement in tone and smoothness with repeated sessions",
      es: "Mejoras visibles en tono y suavidad con sesiones repetidas"
    }
  ],
  pricing: {
    startingPrice: "$190 USD per session",
    startingPriceCurrency: "USD",
    promoPrice: "$165 USD per session with package",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Localized Combo Area",
          es: "Zona localizada combinada"
        },
        isPromoEligible: true,
        optionPrice: "$190 USD",
        optionCurrency: "USD",
        optionPromoPrice: "$165 USD",
        optionPromoPriceCurrency: "USD",
        notes: null
      }
    ]
  },
  goals: [
    {
      en: "Enhance skin tightening",
      es: "Mejorar la firmeza y tensión de la piel"
    },
    {
      en: "Reduce subcutaneous fibrosis",
      es: "Reducir fibrosis subcutánea"
    },
    {
      en: "Refine body contour",
      es: "Mejorar el contorno corporal"
    }
  ],
  treatableAreas: [
    { en: "Abdomen", es: "Abdomen" },
    { en: "Arms", es: "Brazos" },
    { en: "Thighs", es: "Muslos" },
    { en: "Back", es: "Espalda" },
    { en: "Flanks", es: "Laterales" },
    { en: "Under Chin (Submental)", es: "Debajo del mentón (submentón)" }
  ],
  addOns: [
    {
      serviceParent: "Swedish Massage - Lymphatic Drainage",
      serviceChild: null,
      displayName: {
        en: "Lymphatic Drainage Massage",
        es: "Drenaje linfático manual"
      },
      link: "/treatments/swedish-massage"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid anti-inflammatory meds and alcohol for 24 hours before your session.",
        es: "Evite medicamentos antiinflamatorios y alcohol durante 24 horas antes del tratamiento."
      },
      {
        en: "Drink plenty of water to support the body’s elimination process.",
        es: "Beba suficiente agua para apoyar el proceso de eliminación del cuerpo."
      }
    ],
    postTreatment: [
      {
        en: "Bruising, soreness, or heat in the treated area is normal and temporary.",
        es: "Moretones, sensibilidad o calor en la zona tratada son normales y temporales."
      },
      {
        en: "Wear compression if advised and avoid strenuous workouts for 24 hours.",
        es: "Use faja si se recomienda y evite ejercicio intenso durante 24 horas."
      },
      {
        en: "Visible changes typically occur within 1–2 weeks with optimal results after 4+ sessions.",
        es: "Los cambios suelen notarse en 1–2 semanas, con resultados óptimos después de 4 o más sesiones."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "Why combine RF and enzymes?",
        es: "¿Por qué combinar RF y enzimas?"
      },
      answer: {
        en: "RF improves skin tightening and circulation, while enzymes reduce fat and fibrosis. The combo creates a stronger reshaping effect.",
        es: "La RF mejora la firmeza de la piel y la circulación, mientras que las enzimas reducen grasa y fibrosis. La combinación logra un efecto de remodelación más potente."
      }
    },
    {
      question: {
        en: "How often can I do this treatment?",
        es: "¿Con qué frecuencia puedo hacerme este tratamiento?"
      },
      answer: {
        en: "Sessions can be done every 1–2 weeks depending on your provider’s recommendation.",
        es: "Las sesiones pueden realizarse cada 1–2 semanas según la recomendación del especialista."
      }
    },
    {
      question: {
        en: "Is it painful?",
        es: "¿Es doloroso?"
      },
      answer: {
        en: "The RF portion feels like a warm massage. Enzymatic injections may cause brief stinging or tenderness afterward.",
        es: "La RF se siente como un masaje tibio. Las inyecciones enzimáticas pueden causar leve escozor o sensibilidad después."
      }
    },
    {
      question: {
        en: "Do I need compression wear?",
        es: "¿Necesito usar faja?"
      },
      answer: {
        en: "In many cases, yes. Your provider will guide you depending on the area treated and your response.",
        es: "En muchos casos, sí. Su especialista le indicará según el área tratada y su respuesta al procedimiento."
      }
    }
  ]
};
