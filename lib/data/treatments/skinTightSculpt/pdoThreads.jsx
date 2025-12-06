export const pdoThreads = {
  urlSlug: "pdo-threads",
  category: "skin-tightening",
  categoryDisplayName: {
    en: "Skin Tightening & Sculpting",
    es: "Reafirmación y Esculpido Corporal"
  },
  serviceDisplayName: {
    en: "PDO Thread Lifts & Contouring – Non-Surgical Facial Rejuvenation",
    es: "Levantamiento y Contorno Facial con Hilos PDO – Rejuvenecimiento Facial sin Cirugía"
  },
  isPopular: true,
  isPromoEligible: false,
  images: {
    primary: "/threads.jpg",
    secondary: "/threads2.jpg"
  },
  description: {
    en: "Achieve a lifted, more defined look without surgery. PDO threads offer a non-invasive way to tighten skin, contour the face, and boost collagen over time.",
    es: "Logra un efecto de levantamiento y un contorno más definido sin cirugía. Los hilos PDO ofrecen una forma poco invasiva de tensar la piel, perfilar el rostro y estimular el colágeno con el tiempo."
  },
  details: {
    en: "PDO (polydioxanone) thread lifts are a minimally invasive procedure that uses absorbable sutures to reposition tissue and stimulate collagen production. The treatment provides both immediate lifting and long-term skin rejuvenation. Common areas include the jawline, cheeks, neck, and brow. No general anesthesia or downtime required.",
    es: "El levantamiento con hilos PDO (polidioxanona) es un procedimiento mínimamente invasivo que utiliza suturas reabsorbibles para reposicionar el tejido y estimular la producción de colágeno. El tratamiento ofrece un efecto de levantamiento inmediato y una rejuvenecimiento de la piel a largo plazo. Las zonas más tratadas incluyen la línea mandibular, mejillas, cuello y cejas. No requiere anestesia general ni tiempo prolongado de recuperación."
  },
  notes: [
    {
      en: "Sterile, absorbable polydioxanone (PDO) threads are used",
      es: "Se utilizan hilos de polidioxanona (PDO) estériles y reabsorbibles"
    },
    {
      en: "Stimulates natural collagen production for long-term firmness",
      es: "Estimula la producción natural de colágeno para firmeza a largo plazo"
    },
    {
      en: "Best for mild to moderate facial sagging and skin laxity",
      es: "Ideal para flacidez facial leve a moderada y piel con pérdida de tono"
    }
  ],
  pricing: {
    startingPrice: {
      en: "Price varies by area and thread count",
      es: "El precio varía según la zona y la cantidad de hilos"
    },
    startingPriceCurrency: "",
    promoPrice: {
      en: "Discounted packages available for multiple zones",
      es: "Paquetes con descuento disponibles para múltiples zonas"
    },
    promoPriceCurrency: "",
    options: [
      {
        optionName: {
          en: "Signature Lower Face Lift",
          es: "Levantamiento Facial Inferior Signature"
        },
        isPromoEligible: false,
        optionPrice: { en: "$TBD", es: "$TBD" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Includes jawline, jowls, and nasolabial folds",
            es: "Incluye línea mandibular, papada y pliegues nasolabiales"
          },
          {
            en: "Most popular package for visible contouring",
            es: "Paquete más popular para lograr un contorno visible"
          }
        ]
      },
      {
        optionName: {
          en: "Full Face Thread Lift",
          es: "Levantamiento en Rostro Completo"
        },
        isPromoEligible: false,
        optionPrice: { en: "$TBD", es: "$TBD" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Includes midface, jawline, and brows",
            es: "Incluye tercio medio del rostro, línea mandibular y cejas"
          },
          {
            en: "Provides sculpting and lifting for full facial balance",
            es: "Ofrece esculpido y lifting para un equilibrio facial completo"
          }
        ]
      },
      {
        optionName: {
          en: "Jawline Contour",
          es: "Contorno de Mandíbula"
        },
        isPromoEligible: false,
        optionPrice: { en: "$TBD", es: "$TBD" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Defines and lifts the jawline and lower face.",
            es: "Define y eleva la línea mandibular y el tercio inferior del rostro."
          },
          {
            en: "Ideal for softening jowls and improving profile.",
            es: "Ideal para suavizar los jowls y mejorar el perfil."
          }
        ]
      },
      {
        optionName: {
          en: "Eyebrow and Eye Lift",
          es: "Levantamiento de Cejas y Ojos"
        },
        isPromoEligible: false,
        optionPrice: { en: "$TBD", es: "$TBD" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Creates a subtle lateral brow lift and opens the eye area",
            es: "Crea un lifting lateral sutil de la ceja y abre la mirada"
          }
        ]
      },
      {
        optionName: {
          en: "Full Face & Neck Combo Lift",
          es: "Levantamiento de Rostro Completo y Cuello"
        },
        isPromoEligible: false,
        optionPrice: { en: "$TBD", es: "$TBD" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Includes midface, jawline, brows and neck",
            es: "Incluye tercio medio del rostro, línea mandibular, cejas y cuello"
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
      en: "Lift sagging jowls, cheeks, and midface",
      es: "Elevar papada, mejillas y tercio medio del rostro"
    },
    {
      en: "Improve skin laxity and smooth wrinkles",
      es: "Mejorar la flacidez de la piel y suavizar arrugas"
    },
    {
      en: "Enhance definition along the jawline and neck",
      es: "Realzar la definición de la línea mandibular y el cuello"
    }
  ],
  treatableAreas: [
    {
      en: "Jawline",
      es: "Línea mandibular"
    },
    {
      en: "Cheeks",
      es: "Mejillas"
    },
    {
      en: "Neck",
      es: "Cuello"
    },
    {
      en: "Eyebrows",
      es: "Cejas"
    },
    {
      en: "Nasolabial folds",
      es: "Pliegues nasolabiales"
    },
    {
      en: "Marionette lines",
      es: "Líneas de marioneta"
    },
    {
      en: "Under eyes",
      es: "Zona debajo de los ojos"
    }
  ],
  addOns: [
    {
      treatmentSlug: "mesotherapy-infusions",
      optionName: {
        en: "PDRN - Polydeoxyribonucleotide",
        es: "PDRN - Polidesoxirribonucleótido"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid alcohol, NSAIDs and blood thinning supplements 24–48 hours before your appointment to reduce bruising.",
        es: "Evite alcohol, antiinflamatorios y suplementos que adelgacen la sangre durante 24 a 48 horas antes de su cita para reducir el riesgo de moretones."
      },
      {
        en: "Inform your provider about any recent Botox or filler procedures to plan your treatment safely.",
        es: "Informe a su especialista sobre cualquier tratamiento reciente con Botox o rellenos para planear su procedimiento de forma segura."
      }
    ],
    postTreatment: [
      {
        en: "Expect mild soreness, swelling or bruising around thread entry points.",
        es: "Espere ligera molestia, hinchazón o moretones alrededor de los puntos de entrada de los hilos."
      },
      {
        en: "Avoid dental work, strenuous activity, or facial massage for 7 days.",
        es: "Evite trabajo dental, actividad física intensa o masajes faciales durante 7 días."
      },
      {
        en: "Sleep on your back and minimize exaggerated facial movements for 5–7 days so threads can settle properly.",
        es: "Duerma boca arriba y reduzca gestos faciales exagerados durante 5 a 7 días para que los hilos se asienten correctamente."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "What is a PDO thread lift?",
        es: "¿Qué es un lifting con hilos PDO?"
      },
      answer: {
        en: "A PDO thread lift is a non-surgical treatment that uses dissolvable threads to lift, contour and stimulate collagen in the face or neck. It offers natural looking results with minimal downtime.",
        es: "El lifting con hilos PDO es un tratamiento no quirúrgico que utiliza hilos reabsorbibles para levantar, perfilar y estimular el colágeno en el rostro o el cuello. Ofrece resultados de aspecto natural con un tiempo de recuperación mínimo."
      }
    },
    {
      question: {
        en: "How long do the results last?",
        es: "¿Cuánto duran los resultados?"
      },
      answer: {
        en: "The threads dissolve within about 6 months, but collagen stimulation continues and results can last 12–18 months depending on lifestyle and skin condition.",
        es: "Los hilos se disuelven alrededor de los 6 meses, pero la estimulación de colágeno continúa y los resultados pueden durar de 12 a 18 meses según el estilo de vida y el estado de la piel."
      }
    },
    {
      question: {
        en: "Is the procedure painful?",
        es: "¿El procedimiento es doloroso?"
      },
      answer: {
        en: "The area is numbed with lidocaine, so discomfort during the procedure is minimal. Some tenderness or tightness may be felt for a few days afterward.",
        es: "La zona se anestesia con lidocaína, por lo que la molestia durante el procedimiento es mínima. Puede haber sensibilidad o sensación de tirantez durante algunos días después."
      }
    },
    {
      question: {
        en: "Can threads be combined with other treatments?",
        es: "¿Se pueden combinar los hilos con otros tratamientos?"
      },
      answer: {
        en: "Yes. Thread lifts are often combined with biostimulators, dermal fillers or RF microneedling as part of a full facial rejuvenation plan.",
        es: "Sí. Con frecuencia se combinan con biostimuladores, rellenos dérmicos o microneedling con radiofrecuencia como parte de un plan integral de rejuvenecimiento facial."
      }
    },
    {
      question: {
        en: "When will I see results?",
        es: "¿Cuándo veré resultados?"
      },
      answer: {
        en: "Some lifting is visible immediately, while full collagen remodeling takes 6–12 weeks for optimal improvement.",
        es: "Parte del efecto lifting se ve de inmediato, mientras que la remodelación completa del colágeno tarda de 6 a 12 semanas para mostrar su máximo beneficio."
      }
    }
  ]
};
