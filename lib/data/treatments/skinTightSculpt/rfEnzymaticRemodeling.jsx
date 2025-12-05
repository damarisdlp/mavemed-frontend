export const venusFreeze = {
  urlSlug: "venus-freeze",
  category: "skin-tightening",
  categoryDisplayName: {
    en: "Skin Tightening & Sculpting",
    es: "Reafirmación y Esculpido Corporal"
  },
  serviceDisplayName: {
    en: "Radio Frequency Body Sculpting",
    es: "Esculpido corporal con radiofrecuencia"
  },
  isPopular: false,
  isPromoEligible: true,
  images: {
    primary: "/radiofrequency.jpg",
    secondary: "/venus-freeze2.jpg"
  },
  description: {
    en: "Non invasive radiofrequency therapy to smooth skin, reduce localized fat, and improve body contour.",
    es: "Terapia de radiofrecuencia no invasiva para suavizar la piel, reducir grasa localizada y mejorar el contorno corporal."
  },
  details: {
    en: "Venus Freeze uses multi polar radiofrequency and pulsed electromagnetic fields to deliver heat into the skin, stimulating collagen and elastin while reducing fat deposits. Ideal for patients seeking skin tightening and smoother contours without surgery.",
    es: "Venus Freeze utiliza radiofrecuencia multipolar y campos electromagnéticos pulsados para generar calor en la piel, estimular colágeno y elastina y reducir depósitos de grasa. Es ideal para quienes buscan reafirmar la piel y suavizar el contorno sin cirugía."
  },
  notes: [
    {
      en: "Painless treatment with no downtime",
      es: "Tratamiento cómodo, sin dolor y sin tiempo de recuperación"
    },
    {
      en: "Multiple sessions recommended for optimal results",
      es: "Se recomiendan varias sesiones para obtener resultados óptimos"
    },
    {
      en: "Also improves cellulite and lymphatic drainage",
      es: "También ayuda a mejorar la celulitis y el drenaje linfático"
    }
  ],
  pricing: {
    startingPrice: { en: "$110", es: "$110" },
    startingPriceCurrency: "USD",
    promoPrice: { en: "$95", es: "$95" },
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Abdomen",
          es: "Abdomen"
        },
        isPromoEligible: true,
        optionPrice: { en: "$110", es: "$110" },
        optionCurrency: "USD",
        optionPromoPrice: { en: "$95", es: "$95" },
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: {
          en: "Arms",
          es: "Brazos"
        },
        isPromoEligible: true,
        optionPrice: { en: "$110", es: "$110" },
        optionCurrency: "USD",
        optionPromoPrice: { en: "$95", es: "$95" },
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: {
          en: "Thighs (inner or outer)",
          es: "Muslos (cara interna o externa)"
        },
        isPromoEligible: true,
        optionPrice: { en: "$120", es: "$120" },
        optionCurrency: "USD",
        optionPromoPrice: { en: "$105", es: "$105" },
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: {
          en: "Buttocks",
          es: "Glúteos"
        },
        isPromoEligible: true,
        optionPrice: { en: "$130", es: "$130" },
        optionCurrency: "USD",
        optionPromoPrice: { en: "$115", es: "$115" },
        optionPromoPriceCurrency: "USD",
        notes: []
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
    )
  },
  goals: [
    {
      en: "Tighten loose skin on abdomen, arms, or thighs",
      es: "Reafirmar la piel laxa en abdomen, brazos o muslos"
    },
    {
      en: "Reduce appearance of cellulite",
      es: "Reducir la apariencia de la celulitis"
    },
    {
      en: "Stimulate collagen and lymphatic drainage",
      es: "Estimular el colágeno y el drenaje linfático"
    }
  ],
  treatableAreas: [
    {
      en: "Abdomen",
      es: "Abdomen"
    },
    {
      en: "Arms",
      es: "Brazos"
    },
    {
      en: "Inner thighs",
      es: "Muslos internos"
    },
    {
      en: "Outer thighs",
      es: "Muslos externos"
    },
    {
      en: "Buttocks",
      es: "Glúteos"
    },
    {
      en: "Back (bra fat)",
      es: "Espalda (zona del brasier)"
    },
    {
      en: "Love handles",
      es: "Lonjas o costados"
    }
  ],
  addOns: [
    {
      serviceParent: "Enzymatic Therapy",
      serviceChild: null,
      displayName: {
        en: "Enzymatic Therapy",
        es: "Terapia enzimática"
      },
      link: "/treatments/enzymatic-therapy"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Hydrate well for 24 hours before treatment to aid lymphatic response.",
        es: "Hidratación adecuada durante las 24 horas previas al tratamiento para apoyar la respuesta linfática."
      },
      {
        en: "Avoid heavy meals and caffeine 2 hours before your session.",
        es: "Evite comidas muy pesadas y cafeína 2 horas antes de la sesión."
      }
    ],
    postTreatment: [
      {
        en: "Slight redness or warmth may occur and usually resolves within a few hours.",
        es: "Puede presentarse enrojecimiento leve o sensación de calor, que generalmente desaparece en pocas horas."
      },
      {
        en: "Engage in light physical activity and drink water to help flush toxins.",
        es: "Realice actividad física ligera y beba agua para ayudar a eliminar toxinas."
      },
      {
        en: "Multiple sessions, typically 6–8, are recommended for long term contouring effects.",
        es: "Se recomiendan varias sesiones, normalmente de 6 a 8, para efectos de contorno a largo plazo."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "Is Venus Freeze painful?",
        es: "¿Venus Freeze es doloroso?"
      },
      answer: {
        en: "No, it is a comfortable treatment often described as similar to a warm stone massage.",
        es: "No, es un tratamiento cómodo que muchas personas describen como similar a un masaje con piedras calientes."
      }
    },
    {
      question: {
        en: "How soon will I see results?",
        es: "¿En cuánto tiempo veré resultados?"
      },
      answer: {
        en: "You may notice some tightening after the first session, but full results usually develop over 6–8 treatments.",
        es: "Puede notar algo de tensión desde la primera sesión, pero los resultados completos suelen lograrse tras 6 a 8 tratamientos."
      }
    },
    {
      question: {
        en: "How long do results last?",
        es: "¿Cuánto tiempo duran los resultados?"
      },
      answer: {
        en: "Results can last several months, especially when paired with healthy habits and occasional maintenance sessions.",
        es: "Los resultados pueden durar varios meses, especialmente si se acompañan de hábitos saludables y sesiones de mantenimiento ocasionales."
      }
    },
    {
      question: {
        en: "Can this replace liposuction?",
        es: "¿Este tratamiento sustituye a la liposucción?"
      },
      answer: {
        en: "No, Venus Freeze is ideal for mild to moderate contouring. It is not a substitute for surgical fat removal.",
        es: "No, Venus Freeze es ideal para contorno leve a moderado. No sustituye a la extracción quirúrgica de grasa."
      }
    },
    {
      question: {
        en: "Is there downtime?",
        es: "¿Hay tiempo de recuperación?"
      },
      answer: {
        en: "There is no downtime. Patients can return to normal activities immediately after each session.",
        es: "No hay tiempo de recuperación. Puede retomar sus actividades normales inmediatamente después de cada sesión."
      }
    }
  ]
};
