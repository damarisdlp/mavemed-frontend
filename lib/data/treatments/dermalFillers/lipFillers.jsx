export const lipFillers = {
  urlSlug: "hyaluronic-acid-lip-fillers",
  category: "dermal-fillers",
  categoryDisplayName: {
    en: "Dermal Fillers (Hyaluronic Acid)",
    es: "Rellenos Dérmicos (Ácido Hialurónico)"
  },
  serviceDisplayName: {
    en: "Lip Fillers",
    es: "Rellenos de Labios"
  },
  isPopular: true,
  images: {
    primary: "/lipfillers.jpg",
    secondary: "/lipfillers2.jpg"
  },
  description: {
    en: "Achieve fuller, more defined lips instantly with hyaluronic acid-based lip fillers. This non-surgical treatment enhances lip volume, symmetry, and hydration with natural-looking results.",
    es: "Logre labios más llenos y definidos al instante con rellenos de labios a base de ácido hialurónico. Este tratamiento no quirúrgico mejora el volumen, la simetría y la hidratación de los labios con resultados naturales."
  },
  details: {
    en: "Hyaluronic acid lip fillers are used to enhance the size, shape, and contour of the lips. Whether you're looking to restore lost volume, balance asymmetry, or define the Cupid's bow, this treatment offers subtle and customizable results. At Mave, every injection is guided by facial balancing principles for natural outcomes.",
    es: "Los rellenos de labios con ácido hialurónico se usan para mejorar el tamaño, la forma y el contorno de los labios. Ya sea que busque restaurar el volumen perdido, equilibrar la asimetría o definir el arco de Cupido, este tratamiento ofrece resultados sutiles y personalizables. En Mave, cada inyección se guía por principios de equilibrio facial para resultados naturales."
  },
  notes: [
    {
      en: "Immediate results with minimal recovery time",
      es: "Resultados inmediatos con tiempo de recuperación mínimo"
    },
    {
      en: "Treatment tailored for volume, definition, or symmetry",
      es: "Tratamiento adaptado para volumen, definición o simetría"
    },
    {
      en: "Touch-ups recommended every 6–12 months depending on filler type",
      es: "Retoques recomendados cada 6-12 meses dependiendo del tipo de relleno"
    }
  ],
  pricing: {
    startingPrice: { en: "$305", es: "$305" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Dermal Filler - Hyaluronic Acid - Stylage M",
          es: "Relleno Dérmico - Ácido Hialurónico - Stylage - M"
        },
        optionPrice: { en: "$305", es: "$305" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Price per 1ml syringe",
            es: "Precio por jeringa de 1ml"
          },
          {
            en: "Estimated duration: 9 to 12 months",
            es: "Duración estimada: 9 a 12 meses"
          }
        ]
      },
      {
        optionName: {
          en: "Juvéderm Volift with Lidocaine",
          es: "Relleno Dérmico - Ácido Hialurónico - Juvederm - Volift"
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
            en: "Estimated duration: 12 to 15 months",
            es: "Duración estimada: 12 a 15 meses"
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
      en: "Enhance lip volume and projection",
      es: "Mejorar el volumen y proyección de los labios"
    },
    {
      en: "Smooth and hydrate the lip surface",
      es: "Suavizar e hidratar la superficie de los labios"
    },
    {
      en: "Define borders and improve lip shape",
      es: "Definir bordes y mejorar la forma de los labios"
    }
  ],
  treatableAreas: [
    {
      en: "Upper lip",
      es: "Labio superior"
    },
    {
      en: "Lower lip",
      es: "Labio inferior"
    },
    {
      en: "Cupid's bow",
      es: "Arco de Cupido"
    },
    {
      en: "Vermilion border",
      es: "Borde bermellón"
    }
  ],
  addOns: [
    {
      treatmentSlug: "wrinkle-reducers-botox",
      optionName: {
        en: "Botox - Any Zone",
        es: "Botox - Cualquier Zona"
      },
    },
    {
      treatmentSlug: "microneedling",
      optionName: {
        en: "Microneedling - PRP - Platelet Rich Plasma",
        es: "Microneedling - PRP - Plasma Rico en Plaquetas"
      }
    },
    {
      treatmentSlug: "mesotherapy-infusions",
      optionName: {
        en: "Mesotherapy - PN - Polynucleotide",
        es: "Mesoterapia - PN - Polinucleótido"
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
        en: "Casmara - Purifying Algae Facial",
        es: "Casmara - Facial Purificante de Algas"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid alcohol, NSAIDs/aspirin, and blood-thinning supplements (fish oil, vitamin E) for 48 hours if medically permitted.",
        es: "Evite alcohol, AINE/aspirina y suplementos anticoagulantes (aceite de pescado, vitamina E) durante 48 horas si su médico lo permite."
      },
      {
        en: "Arrive with clean skin and no makeup on lips or surrounding area; pause retinoids/acids for 48 hours.",
        es: "Acuda con la piel limpia y sin maquillaje en labios o zona cercana; suspenda retinoides/ácidos por 48 horas."
      },
      {
        en: "Tell your provider about anticoagulants, autoimmune issues, or history of cold sores (antiviral prophylaxis may be recommended).",
        es: "Informe a su especialista sobre anticoagulantes, problemas autoinmunes o antecedentes de herpes labial (puede recomendarse profilaxis antiviral)."
      }
    ],
    duringTreatment: [
      {
        en: "Topical numbing is applied; you’ll feel brief pinching and pressure as filler is placed.",
        es: "Se aplica anestesia tópica; sentirá pequeños pinchazos y presión mientras se coloca el relleno."
      },
      {
        en: "Gentle molding is done to shape the lips evenly.",
        es: "Se realiza un modelado suave para dar forma uniforme a los labios."
      }
    ],
    postTreatment: [
      {
        en: "Expect swelling or bruising for 2–3 days; apply cool (not ice-cold) compresses intermittently for 24 hours.",
        es: "Espere hinchazón o moretones por 2–3 días; aplique compresas frescas (no muy frías) de forma intermitente durante 24 horas."
      },
      {
        en: "Avoid strenuous exercise, saunas, alcohol, and makeup on lips for 24 hours; avoid kissing/straws for the first day.",
        es: "Evite ejercicio intenso, saunas, alcohol y maquillaje en los labios por 24 horas; evite besar o usar popotes el primer día."
      },
      {
        en: "Sleep with head elevated the first night and avoid pressing or massaging unless instructed; results settle in about 1 week.",
        es: "Duerma con la cabeza elevada la primera noche y evite presionar o masajear salvo indicación; los resultados se asientan en ~1 semana."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How long do lip fillers last?",
        es: "¿Cuánto duran los rellenos de labios?"
      },
      answer: {
        en: "Lip filler results typically last 6 to 12 months, depending on the type of filler and individual metabolism.",
        es: "Los resultados de los rellenos de labios generalmente duran 6 a 12 meses, dependiendo del tipo de relleno y el metabolismo individual."
      }
    },
    {
      question: {
        en: "Will my lips look natural?",
        es: "¿Mis labios se verán naturales?"
      },
      answer: {
        en: "Yes. At Mave, we focus on enhancing your natural beauty with subtle, balanced results that suit your facial features.",
        es: "Sí. En Mave, nos enfocamos en mejorar su belleza natural con resultados sutiles y equilibrados que se adapten a sus rasgos faciales."
      }
    },
    {
      question: {
        en: "Does the treatment hurt?",
        es: "¿El tratamiento duele?"
      },
      answer: {
        en: "Most clients feel only mild discomfort. We apply a numbing cream before treatment, and the fillers contain lidocaine for added comfort.",
        es: "La mayoría de los clientes sienten solo molestia leve. Aplicamos una crema anestésica antes del tratamiento, y los rellenos contienen lidocaína para mayor comodidad."
      }
    },
    {
      question: {
        en: "Can lip filler be reversed?",
        es: "¿Se pueden revertir los rellenos de labios?"
      },
      answer: {
        en: "Yes. If needed, hyaluronic acid fillers can be safely dissolved with an enzyme called hyaluronidase.",
        es: "Sí. Si es necesario, los rellenos de ácido hialurónico se pueden disolver de manera segura con una enzima llamada hialuronidasa."
      }
    }
  ]
};
