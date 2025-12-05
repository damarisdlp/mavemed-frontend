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
  isPromoEligible: true,
  images: {
    primary: "/radiofrequency.jpg",
    secondary: "/radiofrequency2.jpg"
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
      en: "For facial rejuvenation/skin tightening we use RF microneedling with Sylfirm X. Venus Freeze is better suited for body contouring.",
      es: "Para rejuvenecimiento y tensado facial usamos RF microneedling con Sylfirm X. Venus Freeze se adapta mejor al contorno corporal."
    }
  ],
  pricing: {
    startingPrice: { en: "$25", es: "$25" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: { en: "Express Body Glow – Small Zone", es: "Brillo Corporal Exprés - 1 Zona Pequeña" },
        isPromoEligible: false,
        optionPrice: { en: "$25", es: "$25" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Area total [103 cm² - 413 cm²]. Approximately one to two palms — similar to a credit card up to half a sheet of paper.",
            es: "Área total [103 cm² - 413 cm²]. Aproximadamente de una a dos palmas de la mano, similar al tamaño de una tarjeta de crédito hasta media hoja de papel."
          }
        ]
      },
      {
        optionName: { en: "Décolleté Rejuvenation – Chest + Clavicles", es: "Rejuvenecimiento de Escote - Pecho + Clavículas" },
        isPromoEligible: false,
        optionPrice: { en: "$30", es: "$30" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: { en: "Express Back Glow – Flanks", es: "Brillo de Espalda Exprés - Flancos" },
        isPromoEligible: false,
        optionPrice: { en: "$35", es: "$35" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: { en: "Glute Contour – Glutes + Subgluteal Line", es: "Contorno de Glúteos - Glúteos + Línea Subglútea" },
        isPromoEligible: false,
        optionPrice: { en: "$45", es: "$45" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: { en: "Defined Arms – Triceps + Biceps + Laterals + Elbow + Deltoid", es: "Brazos Definidos - Tríceps + Bíceps + Laterales + Codo + Deltoides" },
        isPromoEligible: false,
        optionPrice: { en: "$50", es: "$50" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: { en: "Thigh Sculpt – Inner + Front Thighs", es: "Escultura de Muslos - Cara Interna + Frontal de Muslos" },
        isPromoEligible: false,
        optionPrice: { en: "$50", es: "$50" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: { en: "Lumbar Sculpt – Lumbar + Flanks", es: "Escultura de Espalda Baja - Región Lumbar + Flancos" },
        isPromoEligible: false,
        optionPrice: { en: "$50", es: "$50" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: { en: "Abdomen Firming – Upper + Lower Abdomen", es: "Abdomen Firme - Abdomen Superior + Inferior" },
        isPromoEligible: false,
        optionPrice: { en: "$70", es: "$70" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: { en: "Total Back Rejuvenation – Upper + Mid + Lower Back + Flanks", es: "Rejuvenecimiento Total de Espalda - Alta + Media + Baja + Flancos" },
        isPromoEligible: false,
        optionPrice: { en: "$70", es: "$70" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
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
      serviceParent: "Enzymatic Therapy",
      serviceChild: null,
      displayName: {
        en: "Enzymatic Therapy",
        es: "Terapia Enzimática"
      },
      link: "/treatments/enzymatic-therapy"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Hydrate well for 24 hours before treatment to aid lymphatic response.",
        es: "Hidrátese bien durante 24 horas antes del tratamiento para apoyar la respuesta linfática."
      },
      {
        en: "Avoid heavy meals and caffeine 2 hours before session.",
        es: "Evite comidas pesadas y cafeína 2 horas antes de la sesión."
      }
    ],
    postTreatment: [
      {
        en: "Slight redness or warmth may occur and usually resolves within a few hours.",
        es: "Puede presentarse enrojecimiento o calor leve que suele resolverse en pocas horas."
      },
      {
        en: "Engage in light physical activity and drink water to help flush toxins.",
        es: "Realice actividad ligera y beba agua para ayudar a eliminar toxinas."
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
