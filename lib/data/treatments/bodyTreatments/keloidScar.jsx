export const keloidInjection = {
  urlSlug: "keloid-injection",
  category: "body-medical-treatments",
  categoryDisplayName: {
    en: "Body & Medical Treatments",
    es: "Tratamientos Corporales y Médicos"
  },
  serviceDisplayName: {
    en: "Keloid Scar Injection",
    es: "Inyección para Cicatriz Queloides"
  },
  isPopular: false,
  images: {
    primary: "/keloid.jpg",
    secondary: "/keloid2.jpg",
  },
  description: {
    en: "Targeted corticosteroid or anti-fibrotic injections to flatten and soften raised keloid scars.",
    es: "Inyecciones específicas de corticosteroides o anti-fibróticos para aplanar y suavizar cicatrices queloides elevadas."
  },
  details: {
    en: "This medical treatment involves injecting corticosteroids or specialized anti-fibrotic agents directly into keloid tissue. It helps reduce inflammation, pain, and scar thickness while improving cosmetic appearance over time.",
    es: "Este tratamiento médico implica inyectar corticosteroides o agentes anti-fibróticos especializados directamente en el tejido queloide. Ayuda a reducir la inflamación, dolor y grosor de la cicatriz mientras mejora la apariencia cosmética con el tiempo."
  },
  notes: [
    {
      en: "Multiple sessions may be required depending on size and response",
      es: "Pueden ser requeridas múltiples sesiones dependiendo del tamaño y respuesta"
    },
    {
      en: "Performed only under medical supervision",
      es: "Realizado solo bajo supervisión médica"
    },
    {
      en: "Available for cosmetic or symptomatic relief",
      es: "Disponible para alivio cosmético o sintomático"
    }
  ],
  pricing: {
    startingPrice: { en: "Based on consultation", es: "Basado en consulta" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Single Injection Area",
          es: "Área Única de Inyección"
        },
        optionPrice: { en: "Based on consultation", es: "Basado en consulta" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [],
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
      en: "Reduce raised scar thickness",
      es: "Reducir el grosor de cicatriz elevada"
    },
    {
      en: "Improve scar appearance",
      es: "Mejorar apariencia de cicatriz"
    },
    {
      en: "Relieve itching or discomfort",
      es: "Aliviar picazón o incomodidad"
    }
  ],
  treatableAreas: [
    {
      en: "Ears",
      es: "Orejas"
    },
    {
      en: "Chest",
      es: "Pecho"
    },
    {
      en: "Shoulders",
      es: "Hombros"
    },
    {
      en: "Back",
      es: "Espalda"
    },
    {
      en: "Jawline",
      es: "Línea Mandibular"
    },
    {
      en: "Any area with a keloid scar",
      es: "Cualquier área con cicatriz queloide"
    }
  ],
  addOns: [
    {
      treatmentSlug: "venus-freeze",
      optionName: {
        en: "RF Body Sculpting - Abdomen Firming",
        es: "Escultura Corporal RF - Abdomen Firme"
      }
    },
    {
      treatmentSlug: "rf-microneedling",
      optionName: {
        en: "Sylfirm X - RF Microneedling - Medium Zone",
        es: "Sylfirm X - Microagujas RF - Zona Mediana"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid NSAIDs, aspirin, and blood thinners for 3–5 days if medically permitted; inform your provider if you cannot stop them.",
        es: "Evite antiinflamatorios, aspirina y anticoagulantes durante 3–5 días si su médico lo permite; informe a su especialista si no puede suspenderlos."
      },
      {
        en: "Do not apply irritating products (retinoids, acids) on or near the scar for 48 hours prior.",
        es: "No aplique productos irritantes (retinoides, ácidos) en o cerca de la cicatriz durante 48 horas previas."
      },
      {
        en: "Reschedule if you have active infection, open wounds, or sunburn on the treatment area.",
        es: "Reprograme si tiene infección activa, heridas abiertas o quemadura solar en la zona a tratar."
      }
    ],
    duringTreatment: [
      {
        en: "You’ll feel a brief pinch and pressure as the medication is injected directly into the scar; numbing cream may be used for comfort.",
        es: "Sentirá un pequeño pinchazo y presión mientras se inyecta el medicamento directamente en la cicatriz; se puede usar crema anestésica para mayor comodidad."
      },
      {
        en: "Mild blanching or fullness at the site is expected as the steroid/anti-fibrotic disperses.",
        es: "Es normal un ligero blanqueamiento o sensación de llenado en el sitio mientras se dispersa el esteroide/anti-fibrótico."
      }
    ],
    postTreatment: [
      {
        en: "Expect mild tenderness, swelling, or redness for 24–72 hours; apply cool compresses if needed.",
        es: "Espere sensibilidad, hinchazón o enrojecimiento leve de 24 a 72 horas; aplique compresas frías si es necesario."
      },
      {
        en: "Keep the area clean, avoid picking or scratching, and skip tight clothing or friction over the site for 48 hours.",
        es: "Mantenga el área limpia, evite rascarse o manipularla y no use ropa ajustada ni genere fricción sobre la zona durante 48 horas."
      },
      {
        en: "Protect the area from sun with SPF 30+ and consider silicone gel/sheeting if recommended to support remodeling.",
        es: "Proteja la zona del sol con FPS 30+ y considere gel/láminas de silicona si se recomienda para apoyar la remodelación."
      },
      {
        en: "Results are gradual over multiple sessions; report any increasing pain, heat, pus, or rapid swelling.",
        es: "Los resultados son graduales en múltiples sesiones; informe cualquier aumento de dolor, calor, pus o hinchazón rápida."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How many sessions are needed?",
        es: "¿Cuántas sesiones se necesitan?"
      },
      answer: {
        en: "It depends on the scar. Some keloids flatten in 2–3 sessions, while others may need 4 or more spaced over several weeks.",
        es: "Depende de la cicatriz. Algunas queloides se aplanan en 2-3 sesiones, mientras que otras pueden necesitar 4 o más espaciadas en varias semanas."
      }
    },
    {
      question: {
        en: "Are results permanent?",
        es: "¿Los resultados son permanentes?"
      },
      answer: {
        en: "Improvement is usually long-lasting, though recurrence can happen. We monitor each case and adjust treatment as needed.",
        es: "La mejora generalmente es duradera, aunque puede haber recurrencia. Monitoreamos cada caso y ajustamos el tratamiento según sea necesario."
      }
    }
  ]
};
