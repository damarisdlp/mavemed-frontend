export const venusFreeze = {
  urlSlug: "venus-freeze",
  category: "skin-tightening",
  categoryDisplayName: {
    en: "Skin Tightening & Sculpting",
    es: "Reafirmación y Esculpido Corporal"
  },
  serviceDisplayName: {
    en: "Radiofrequency Body Sculpting",
    es: "Escultura Corporal con Radiofrecuencia"
  },
  isPopular: false,
  images: {
    primary: "/rfsculpt.jpg",
    secondary: "/rfsculpt2.jpg"
  },
  description: {
    en: "Non-invasive radiofrequency therapy to smooth skin, reduce localized fat, and improve body contour.",
    es: "Terapia de radiofrecuencia no invasiva para suavizar la piel, reducir grasa localizada y mejorar el contorno corporal."
  },
  details: {
    en: "Venus Freeze uses multi-polar radiofrequency and pulsed electromagnetic fields to deliver heat into the skin, stimulating collagen and elastin while reducing fat deposits. Ideal for patients seeking skin tightening and smoother contours without surgery.",
    es: "Venus Freeze utiliza radiofrecuencia multipolar y campos electromagnéticos pulsados para calentar la piel, estimular colágeno y elastina y reducir depósitos de grasa. Ideal para quienes buscan tensar la piel y suavizar el contorno sin cirugía."
  },
  notes: [
    {
      en: "Painless treatment with no downtime",
      es: "Tratamiento indoloro sin tiempo de inactividad"
    },
    {
      en: "Multiple sessions recommended for optimal results",
      es: "Se recomiendan múltiples sesiones para resultados óptimos"
    },
    {
      en: "Also improves cellulite and lymphatic drainage",
      es: "También mejora la celulitis y el drenaje linfático"
    },
    {
      en: "For facial rejuvenation and skin tightening we prefer RF microneedling with Sylfirm X for controlled dermal remodeling. Venus Freeze is primarily indicated for body contouring and laxity.",
      es: "Para rejuvenecimiento y tensado facial preferimos la radiofrecuencia fraccionada con microagujas Sylfirm X por su remodelación dérmica controlada. Venus Freeze se indica principalmente para contorno corporal y laxitud."
    }
  ],
  pricing: {
    startingPrice: { en: "$25", es: "$25" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: { en: "Express Body Glow", es: "Brillo Corporal Exprés" },
        optionPrice: { en: "$25", es: "$25" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Area total [103 cm² - 413 cm²]. Approximately one to two palms — similar to a credit card up to half a sheet of paper.",
            es: "Área total [103 cm² - 413 cm²]. Aproximadamente de una a dos palmas de la mano, similar al tamaño de una tarjeta de crédito hasta media hoja de papel."
          },
        ]
      },
      {
        optionName: { en: "Décolleté Rejuvenation", es: "Rejuvenecimiento de Escote" },
        optionPrice: { en: "$30", es: "$30" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Covers chest and clavicles.",
            es: "Incluye pecho y clavículas."
          }
        ]
      },
      {
        optionName: { en: "Express Back Glow", es: "Brillo de Espalda Exprés" },
        optionPrice: { en: "$35", es: "$35" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Targets flanks.",
            es: "Tratamiento enfocado en los flancos."
          }
        ]
      },
      {
        optionName: { en: "Glute Contour", es: "Contorno de Glúteos" },
        optionPrice: { en: "$45", es: "$45" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Includes glutes and the subgluteal line.",
            es: "Incluye glúteos y la línea subglútea."
          }
        ]
      },
      {
        optionName: { en: "Defined Arms", es: "Brazos Definidos" },
        optionPrice: { en: "$50", es: "$50" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Triceps, biceps, laterals, elbow, and deltoid.",
            es: "Tríceps, bíceps, laterales, codo y deltoides."
          }
        ]
      },
      {
        optionName: { en: "Thigh Sculpt", es: "Escultura de Muslos" },
        optionPrice: { en: "$50", es: "$50" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Inner and anterior thighs.",
            es: "Cara interna y anterior de los muslos."
          }
        ]
      },
      {
        optionName: { en: "Lumbar Sculpt", es: "Escultura de Espalda Baja" },
        optionPrice: { en: "$50", es: "$50" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Lumbar region and flanks.",
            es: "Región lumbar y flancos."
          }
        ]
      },
      {
        optionName: { en: "Abdomen Firming", es: "Abdomen Firme" },
        optionPrice: { en: "$70", es: "$70" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Upper and lower abdomen.",
            es: "Abdomen superior e inferior."
          }
        ]
      },
      {
        optionName: { en: "Total Back Rejuvenation", es: "Rejuvenecimiento Total de Espalda" },
        optionPrice: { en: "$70", es: "$70" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Upper, mid, and lower back with flanks.",
            es: "Espalda alta, media y baja con flancos."
          }
        ]
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
      es: "Tensar la piel flácida en abdomen, brazos o muslos"
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
    { en: "Abdomen", es: "Abdomen" },
    { en: "Arms", es: "Brazos" },
    { en: "Inner Thighs", es: "Muslos internos" },
    { en: "Outer Thighs", es: "Muslos externos" },
    { en: "Buttocks", es: "Glúteos" },
    { en: "Back (Bra Fat)", es: "Espalda (rollo del sostén)" },
    { en: "Love Handles", es: "Costados (flancos)" }
  ],
  addOns: [
    {
      treatmentSlug: "enzymatic-therapy",
      optionName: {
        en: "Enzymatic Remodeling Therapy - PB Serum Slim+",
        es: "Terapia de Remodelación Enzimática - PB Serum Slim+"
      }
    },
    {
      treatmentSlug: "enzymatic-therapy",
      optionName: {
        en: "Enzymatic Remodeling Therapy - PB Serum+ (Kit)",
        es: "Terapia de Remodelación Enzimática - PB Serum+ (Kit)"
      }
    },
    {
      treatmentSlug: "rf-microneedling",
      optionName: {
        en: "Sylfirm X - RF Microneedling - Face + Neck + Décolleté",
        es: "Sylfirm X - Microagujas RF - Rostro + Cuello + Escote"
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
        en: "Hydrate well for 24 hours and avoid alcohol/NSAIDs for 24–48 hours if medically permitted.",
        es: "Hidrátese bien durante 24 horas y evite alcohol/AINE por 24–48 horas si su médico lo permite."
      },
      {
        en: "Arrive with clean skin; avoid heavy creams or oils on treatment areas the day of your session.",
        es: "Acuda con la piel limpia; evite cremas u aceites pesados en las zonas a tratar el día de su sesión."
      }
    ],
    duringTreatment: [
      {
        en: "You’ll feel warmth and mild suction/pressure as RF and pulsed magnetic fields work; intensity is adjusted for comfort.",
        es: "Sentirá calor y ligera succión/presión mientras actúan la RF y los campos magnéticos pulsados; la intensidad se ajusta para su comodidad."
      }
    ],
    postTreatment: [
      {
        en: "Slight redness or warmth may occur and usually resolves within a few hours.",
        es: "Puede presentarse enrojecimiento o calor leve que suele resolverse en pocas horas."
      },
      {
        en: "Avoid very hot showers/saunas and strenuous workouts for 24 hours; hydrate well.",
        es: "Evite duchas muy calientes/saunas y ejercicio intenso durante 24 horas; hidrátese bien."
      },
      {
        en: "Multiple sessions (typically 6–8) are recommended for long-term contouring effects.",
        es: "Se recomiendan múltiples sesiones (usualmente 6–8) para efectos de contorno a largo plazo."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "Is Venus Freeze painful?",
        es: "¿Es doloroso Venus Freeze?"
      },
      answer: {
        en: "No, it’s a comfortable treatment often described as a hot stone massage.",
        es: "No, es un tratamiento cómodo que suele describirse como un masaje con piedras calientes."
      }
    },
    {
      question: {
        en: "How soon will I see results?",
        es: "¿Cuándo veré resultados?"
      },
      answer: {
        en: "You may notice some tightening after the first session, but full results develop over 6–8 treatments.",
        es: "Puede notar algo de tensión después de la primera sesión, pero los resultados completos se desarrollan en 6–8 sesiones."
      }
    },
    {
      question: {
        en: "How long do results last?",
        es: "¿Cuánto duran los resultados?"
      },
      answer: {
        en: "Results can last several months, especially when paired with healthy habits and maintenance sessions.",
        es: "Los resultados pueden durar varios meses, especialmente si se acompañan de hábitos saludables y sesiones de mantenimiento."
      }
    },
    {
      question: {
        en: "Can this replace liposuction?",
        es: "¿Puede reemplazar la liposucción?"
      },
      answer: {
        en: "No, Venus Freeze is ideal for mild to moderate contouring. It is not a substitute for surgical fat removal.",
        es: "No, Venus Freeze es ideal para contornos leves a moderados. No es un sustituto de la extracción quirúrgica de grasa."
      }
    },
    {
      question: {
        en: "Is there downtime?",
        es: "¿Hay tiempo de recuperación?"
      },
      answer: {
        en: "No downtime—patients return to normal activities immediately after each session.",
        es: "No hay tiempo de recuperación: los pacientes retoman sus actividades de inmediato."
      }
    }
  ]
};
