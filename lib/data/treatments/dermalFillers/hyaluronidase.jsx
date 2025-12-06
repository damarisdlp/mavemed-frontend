export const hyaluronidase = {
  urlSlug: "hyaluronidase",
  category: "dermal-fillers",
  categoryDisplayName: {
    en: "Dermal Fillers (Hyaluronic Acid)",
    es: "Rellenos Dérmicos (Ácido Hialurónico)"
  },
  serviceDisplayName: {
    en: "Hyaluronidase Filler Reversal",
    es: "Reversión de Rellenos con Hialuronidasa"
  },
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/enzymes.jpg",
    secondary: "/enzymes2.jpg"
  },
  description: {
    en: "Dissolve misplaced or undesired hyaluronic acid fillers using hyaluronidase for safe and effective correction.",
    es: "Disuelva rellenos de ácido hialurónico mal colocados o no deseados usando hialuronidasa para una corrección segura y efectiva."
  },
  details: {
    en: "Hyaluronidase is an enzyme that breaks down hyaluronic acid-based fillers. It's used to correct overfilled areas, migrated filler, or address complications like vascular compression. Treatment is quick, safe, and performed only by trained medical personnel at Mave.",
    es: "La hialuronidasa es una enzima que descompone los rellenos basados en ácido hialurónico. Se utiliza para corregir áreas sobrellenadas, rellenos migrados o abordar complicaciones como compresión vascular. El tratamiento es rápido, seguro y realizado solo por personal médico capacitado en Mave."
  },
  notes: [
    {
      en: "Price is per vial",
      es: "Precio por vial"
    },
    {
      en: "A patch test may be required to rule out allergy",
      es: "Puede requerirse una prueba de parche para descartar alergia"
    },
    {
      en: "Multiple sessions may be needed for complete dissolution",
      es: "Pueden ser necesarias múltiples sesiones para una disolución completa"
    },
    {
      en: "Follow-up correction with fresh filler is optional",
      es: "La corrección de seguimiento con relleno fresco es opcional"
    }
  ],
  pricing: {
    startingPrice: { en: "$60", es: "$60" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Hyaluronidase",
          es: "Hialuronidasa"
        },
        isPromoEligible: false,
        optionPrice: { en: "$60", es: "$60" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Price is per vial",
            es: "Precio por vial"
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
      en: "Dissolve unwanted or poorly placed filler",
      es: "Disolver relleno no deseado o mal colocado"
    },
    {
      en: "Correct asymmetry or migration",
      es: "Corregir asimetría o migración"
    },
    {
      en: "Resolve nodules, lumps, or vascular occlusion",
      es: "Resolver nódulos, bultos u oclusión vascular"
    }
  ],
  treatableAreas: [
    {
      en: "Lips",
      es: "Labios"
    },
    {
      en: "Under Eyes",
      es: "Bajo los Ojos"
    },
    {
      en: "Cheeks",
      es: "Mejillas"
    },
    {
      en: "Nasolabial Folds",
      es: "Pliegues Nasolabiales"
    },
    {
      en: "Jawline",
      es: "Línea de la Mandíbula"
    },
    {
      en: "Chin",
      es: "Barbilla"
    },
    {
      en: "Any previously treated filler site",
      es: "Cualquier sitio de relleno tratado previamente"
    }
  ],
  addOns: [
    {
      treatmentSlug: "hyaluronic-acid-lip-fillers",
      optionName: {
        en: "Dermal Filler - Hyaluronic Acid - Stylage M",
        es: "Relleno Dérmico - Ácido Hialurónico - Stylage - M"
      },
      displayName: {
        en: "Lip Fillers - Stylage M with Lidocaine",
        es: "Rellenos de Labios - Stylage M con Lidocaína"
      },
      link: "/treatments/dermalFillers/lipFillers"
    },
    {
      treatmentSlug: "facial-balancing-fillers",
      optionName: {
        en: "Juvéderm Volift",
        es: "Juvéderm Volift"
      },
      displayName: {
        en: "Facial Balancing - Juvéderm Voluma with Lidocaine",
        es: "Equilibrio Facial - Juvéderm Voluma con Lidocaína"
      },
      link: "/treatments/dermalFillers/facialBalancing"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Discontinue blood thinners 48 hours before (with physician approval) to reduce bruising risk.",
        es: "Suspenda anticoagulantes 48 horas antes (con aprobación médica) para reducir el riesgo de moretones."
      },
      {
        en: "Inform your provider of any prior allergic reactions or medical history involving hyaluronidase.",
        es: "Informe a su proveedor sobre cualquier reacción alérgica previa o historial médico que involucre hialuronidasa."
      }
    ],
    postTreatment: [
      {
        en: "You may experience temporary swelling or redness at the injection site.",
        es: "Puede experimentar hinchazón temporal o enrojecimiento en el sitio de inyección."
      },
      {
        en: "Results can be seen within 24–72 hours as the filler dissolves and tissue settles.",
        es: "Los resultados se pueden ver dentro de 24-72 horas mientras el relleno se disuelve y el tejido se asienta."
      },
      {
        en: "Avoid massaging or pressing the treated area unless instructed otherwise.",
        es: "Evite masajear o presionar el área tratada a menos que se indique lo contrario."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "Is hyaluronidase safe?",
        es: "¿Es segura la hialuronidasa?"
      },
      answer: {
        en: "Yes. It is widely used in aesthetic medicine and emergency medicine. We perform a patch test beforehand to check for allergic reactions.",
        es: "Sí. Se utiliza ampliamente en medicina estética y de emergencia. Realizamos una prueba de parche de antemano para verificar reacciones alérgicas."
      }
    },
    {
      question: {
        en: "Will my original filler fully dissolve?",
        es: "¿Se disolverá completamente mi relleno original?"
      },
      answer: {
        en: "In most cases, yes. Some patients may require a second session depending on the amount and age of the filler.",
        es: "En la mayoría de los casos, sí. Algunos pacientes pueden requerir una segunda sesión dependiendo de la cantidad y edad del relleno."
      }
    },
    {
      question: {
        en: "Can I get new filler afterward?",
        es: "¿Puedo obtener nuevo relleno después?"
      },
      answer: {
        en: "Yes. After complete resolution, we can safely reapply filler using a more strategic and customized approach.",
        es: "Sí. Después de la resolución completa, podemos reaplicar relleno de manera segura utilizando un enfoque más estratégico y personalizado."
      }
    },
    {
      question: {
        en: "Does it hurt?",
        es: "¿Duele?"
      },
      answer: {
        en: "You may feel mild discomfort or stinging at the injection site, but the treatment is very quick and tolerable.",
        es: "Puede sentir incomodidad leve o picazón en el sitio de inyección, pero el tratamiento es muy rápido y tolerable."
      }
    }
  ]
};
