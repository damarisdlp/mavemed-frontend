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
  isPromoEligible: false,
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
        isPromoEligible: false,
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
        isPromoEligible: false,
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
        en: "Any Zone",
        es: "Cualquier Zona"
      },
      link: "/treatments/wrinkleReducers/botox"
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
        en: "Facial Casmara Purificante de Algas",
        es: "Facial Casmara Purificante de Algas"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid alcohol, blood-thinning medications, and supplements like fish oil or vitamin E 48 hours prior to treatment.",
        es: "Evite alcohol, medicamentos anticoagulantes y suplementos como aceite de pescado o vitamina E 48 horas antes del tratamiento."
      },
      {
        en: "Come with clean skin and no makeup on the lips or surrounding area.",
        es: "Venga con la piel limpia y sin maquillaje en los labios o área circundante."
      }
    ],
    postTreatment: [
      {
        en: "Mild swelling or bruising may occur and typically resolves within 24–48 hours.",
        es: "Puede ocurrir hinchazón leve o moretones y generalmente se resuelve en 24-48 horas."
      },
      {
        en: "Avoid heat exposure, strenuous activity, and makeup on the treated area for 12 hours.",
        es: "Evite exposición al calor, actividad extenuante y maquillaje en el área tratada durante 12 horas."
      },
      {
        en: "Full results typically settle within one week.",
        es: "Los resultados completos generalmente se asientan en una semana."
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
