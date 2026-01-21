export const facialBalancing = {
  urlSlug: "facial-balancing-fillers",
  category: "dermal-fillers",
  categoryDisplayName: {
    en: "Dermal Fillers (Hyaluronic Acid)",
    es: "Rellenos Dérmicos (Ácido Hialurónico)"
  },
  serviceDisplayName: {
    en: "Facial Balancing with Dermal Fillers",
    es: "Equilibrio Facial con Rellenos Dérmicos"
  },
  isPopular: false,
  images: {
    primary: "/facialfillers.jpg",
    secondary: "/facialfillers2.jpg"
  },
  description: {
    en: "Achieve natural facial harmony with strategic dermal filler placement targeting the cheeks, chin, jawline, and midface. Ideal for restoring symmetry, contour, and volume loss.",
    es: "Logre armonía facial natural con colocación estratégica de rellenos dérmicos dirigidos a las mejillas, barbilla, línea mandibular y cara media. Ideal para restaurar simetría, contorno y pérdida de volumen."
  },
  details: {
    en: "Facial balancing is a non-surgical aesthetic treatment that uses hyaluronic acid-based dermal fillers to enhance symmetry, define features, and restore youthful proportions. Areas treated often include the jawline, chin, cheeks, temples, and midface. Each plan is tailored for your unique facial structure and aesthetic goals to ensure natural-looking, harmonious results.",
    es: "El equilibrio facial es un tratamiento estético no quirúrgico que utiliza rellenos dérmicos a base de ácido hialurónico para mejorar la simetría, definir rasgos y restaurar proporciones juveniles. Las áreas tratadas a menudo incluyen la línea mandibular, barbilla, mejillas, sienes y cara media. Cada plan se adapta a su estructura facial única y objetivos estéticos para asegurar resultados armoniosos y naturales."
  },
  notes: [
    {
      en: "Pricing depends on treatment zones and number of syringes used",
      es: "Los precios dependen de las zonas de tratamiento y el número de jeringas utilizadas"
    },
    {
      en: "Typical plans involve 2–5 syringes for full-face balancing",
      es: "Los planes típicos involucran 2-5 jeringas para equilibrio facial completo"
    },
    {
      en: "Designed for subtle but transformative rejuvenation",
      es: "Diseñado para rejuvenecimiento sutil pero transformador"
    }
  ],
  pricing: {
    startingPrice: "$360",
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Juvéderm Volift",
          es: "Juvéderm Volift"
        },
        optionPrice: { en: "$360", es: "$360" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Price per 1ml syringe",
            es: "Precio por jeringa de 1ml"
          },
          {
            en: "Duration approx 12 to 15 months",
            es: "Duración aproximada de 12 a 15 meses"
          }
        ]
      },
      {
        optionName: {
          en: "Juvéderm Volbella",
          es: "Juvéderm Volbella"
        },
        optionPrice: { en: "$370", es: "$370" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Price per 1ml syringe",
            es: "Precio por jeringa de 1ml"
          },
          {
            en: "Duration approx 12 months",
            es: "Duración aproximada de 12 meses"
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
      en: "Enhance facial symmetry and definition",
      es: "Mejorar simetría y definición facial"
    },
    {
      en: "Lift and volumize cheeks and midface",
      es: "Levantar y volumizar mejillas y cara media"
    },
    {
      en: "Define jawline, chin, and facial profile",
      es: "Definir línea mandibular, barbilla y perfil facial"
    }
  ],
  treatableAreas: [
    {
      en: "Jawline",
      es: "Línea Mandibular"
    },
    {
      en: "Chin",
      es: "Barbilla"
    },
    {
      en: "Cheeks",
      es: "Mejillas"
    },
    {
      en: "Temples",
      es: "Sienes"
    },
    {
      en: "Nasolabial folds",
      es: "Pliegues Nasolabiales"
    },
    {
      en: "Marionette lines",
      es: "Líneas de Marioneta"
    },
    {
      en: "Midface",
      es: "Cara Media"
    }
  ],
  addOns: [
    {
      treatmentSlug: "wrinkle-reducers-botox",
      optionName: {
        en: "Botox - Any Zone",
        es: "Botox - Cualquier Zona"
      },
      link: "/treatments/wrinkle-reducers-botox"
    },
    {
      treatmentSlug: "hyaluronic-acid-lip-fillers",
      optionName: {
        en: "Lip Filler - Hyaluronic Acid - Stylage M",
        es: "Relleno de Labios - Ácido Hialurónico - Stylage - M"
      }
    },
    {
      treatmentSlug: "microneedling",
      optionName: {
        en: "Microneedling - PDRN - Polynucleotide",
        es: "Microneedling - PDRN - Polinucleótido"
      }
    },
    {
      treatmentSlug: "microneedling",
      optionName: {
        en: "Microneedling - Glow Revitalizing & Facial Definition",
        es: "Microneedling - Glow Revitalizante & Definición Facial"
      }
    },
    {
      treatmentSlug: "pdo-threads",
      optionName: {
        en: "PDO Thread Lift - Signature Lower Face Lift",
        es: "Hilos PDO - Levantamiento Facial Inferior Signature"
      }
    },
    {
      treatmentSlug: "enzymatic-therapy",
      optionName: {
        en: "Enzymatic Therapy - PB Serum+ (Kit)",
        es: "Terapia Enzimática - PB Serum+ (Kit)"
      }
    },
    {
      treatmentSlug: "rf-microneedling",
      optionName: {
        en: "Sylfirm X - RF Microneedling - Face + Neck + Décolleté",
        es: "Sylfirm X - Microagujas RF - Rostro + Cuello + Escote"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid alcohol, aspirin, ibuprofen, and fish oil 48 hours before your appointment to reduce bruising.",
        es: "Evite alcohol, aspirina, ibuprofeno y aceite de pescado 48 horas antes de su cita para reducir moretones."
      },
      {
        en: "Stay hydrated, eat a light meal, and arrive with clean skin; pause retinoids/acids for 48 hours.",
        es: "Manténgase hidratado, coma algo ligero y llegue con la piel limpia; suspenda retinoides/ácidos por 48 horas."
      },
      {
        en: "Disclose anticoagulants, autoimmune conditions, keloid tendency, and recent dental work/vaccines.",
        es: "Informe sobre anticoagulantes, condiciones autoinmunes, tendencia a queloides y trabajos dentales/vacunas recientes."
      }
    ],
    duringTreatment: [
      {
        en: "Topical numbing and/or cannula techniques are used; you may feel brief pinches and pressure.",
        es: "Se usa anestesia tópica y/o técnica con cánula; puede sentir pequeños pinchazos y presión."
      },
      {
        en: "Provider will mold and check symmetry throughout to balance the face.",
        es: "El especialista modelará y revisará la simetría durante todo el procedimiento para equilibrar el rostro."
      }
    ],
    postTreatment: [
      {
        en: "Mild swelling/tenderness are expected for 2–3 days; apply cool compresses in the first 24 hours.",
        es: "Se esperan hinchazón/sensibilidad leves durante 2–3 días; aplique compresas frías en las primeras 24 horas."
      },
      {
        en: "Avoid strenuous exercise, alcohol, saunas, and facial pressure (facials/massage) for 48 hours.",
        es: "Evite ejercicio intenso, alcohol, saunas y presión facial (faciales/masajes) durante 48 horas."
      },
      {
        en: "Sleep with head elevated the first night; avoid dental work for 2 weeks. Results refine as swelling settles in ~1 week.",
        es: "Duerma con la cabeza elevada la primera noche; evite trabajo dental por 2 semanas. Los resultados se afinan al bajar la hinchazón en ~1 semana."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "What is facial balancing?",
        es: "¿Qué es el equilibrio facial?"
      },
      answer: {
        en: "Facial balancing is an advanced filler technique to restore proportion and harmony across the face, often enhancing areas like the jawline, cheeks, and chin for a more symmetrical, youthful appearance.",
        es: "El equilibrio facial es una técnica avanzada de relleno para restaurar proporción y armonía en toda la cara, a menudo mejorando áreas como la línea mandibular, mejillas y barbilla para una apariencia más simétrica y juvenil."
      }
    },
    {
      question: {
        en: "How many syringes will I need?",
        es: "¿Cuántas jeringas necesitaré?"
      },
      answer: {
        en: "Most full-face balancing treatments require 2–5 syringes depending on the number of areas treated and the desired outcome.",
        es: "La mayoría de los tratamientos de equilibrio facial completo requieren 2-5 jeringas dependiendo del número de áreas tratadas y el resultado deseado."
      }
    },
    {
      question: {
        en: "Will it look natural?",
        es: "¿Se verá natural?"
      },
      answer: {
        en: "Yes. Our team specializes in subtle enhancements that maintain your natural features while improving symmetry and volume.",
        es: "Sí. Nuestro equipo se especializa en mejoras sutiles que mantienen sus rasgos naturales mientras mejoran la simetría y el volumen."
      }
    },
    {
      question: {
        en: "Can this be combined with other treatments?",
        es: "¿Se puede combinar con otros tratamientos?"
      },
      answer: {
        en: "Yes. Facial balancing is often paired with collagen stimulators, Botox®, or skin-tightening treatments for optimal results.",
        es: "Sí. El equilibrio facial a menudo se combina con estimuladores de colágeno, Botox® o tratamientos de tensado de piel para resultados óptimos."
      }
    }
  ]
};
