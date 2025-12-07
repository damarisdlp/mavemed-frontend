export const microneedling = {
  urlSlug: "microneedling",
  category: "microneedling & mesotherapy",
  categoryDisplayName: {
    en: "Microneedling & Mesotherapy",
    es: "Microneedling y Mesoterapia"
  },
  serviceDisplayName: {
    en: "Microneedling Skin Renewal",
    es: "Renovación de Piel con Microneedling"
  },
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/microneedling.jpg",
    secondary: "/microneedling2.jpg"
  },
  description: {
    en: "Refine texture, shrink pores, and stimulate collagen through precision microneedling using fine sterile needles. Enhance results with powerful infusion options like PRP/PRFM, PN, or PDRN.",
    es: "Mejora la textura, reduce la apariencia de poros y estimula el colágeno mediante microneedling de precisión con agujas estériles finas. Potencia los resultados con opciones de infusión como PRP/PRFM, PN o PDRN."
  },
  details: {
    en: "Microneedling uses fine needles to create micro-channels in the skin, triggering the body’s natural healing response and promoting collagen, elastin, and skin cell regeneration. It improves texture, firmness, and reduces scarring over time. Options like PRP, PN, and PDRN can be infused for deeper regenerative benefits.",
    es: "El microneedling utiliza agujas finas para crear microcanales en la piel, activando la respuesta natural de reparación del cuerpo y promoviendo la producción de colágeno, elastina y la regeneración celular. Con el tiempo mejora la textura, la firmeza y disminuye cicatrices. Opciones como PRP, PN y PDRN pueden infundirse para beneficios regenerativos más profundos."
  },
  notes: [
    {
      en: "3–6 sessions recommended for optimal results",
      es: "Se recomiendan de 3 a 6 sesiones para resultados óptimos"
    },
    {
      en: "Safe for most skin types",
      es: "Seguro para la mayoría de los tipos de piel"
    },
    {
      en: "Downtime: 1–3 days of redness possible",
      es: "Tiempo de recuperación: puede haber de 1 a 3 días de enrojecimiento"
    }
  ],
  pricing: {
    startingPrice: { en: "$120", es: "$120" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      // PRP
      { optionName: { en: "PRP - Platelet Rich Plasma", es: "PRP - Plasma Rico en Plaquetas" }, isPromoEligible: false, optionPrice: { en: "$165", es: "$165" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "Benefits: Boosts collagen, healing, and overall skin renewal.", es: "Estimula colágeno, cicatrización y renovación global de la piel." }] },
      { optionName: { en: "PRP - Platelet Rich Plasma", es: "PRP - Plasma Rico en Plaquetas" }, isPromoEligible: false, optionPrice: { en: "$180", es: "$180" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck", es: "Zonas: Rostro + Cuello" }, { en: "Benefits: Boosts collagen, healing, and overall skin renewal.", es: "Estimula colágeno, cicatrización y renovación global de la piel." }] },
      { optionName: { en: "PRP - Platelet Rich Plasma", es: "PRP - Plasma Rico en Plaquetas" }, isPromoEligible: false, optionPrice: { en: "$195", es: "$195" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck + Décolleté", es: "Zonas: Rostro + Cuello + Escote" }, { en: "Benefits: Boosts collagen, healing, and overall skin renewal.", es: "Estimula colágeno, cicatrización y renovación global de la piel." }] },

      // PDRN
      { optionName: { en: "PDRN - Polydeoxyribonucleotide", es: "PDRN - Polidesoxirribonucleótido" }, isPromoEligible: false, optionPrice: { en: "$190", es: "$190" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "Benefits: Promotes deep dermal repair, scar improvement, and elasticity.", es: "Favorece reparación dérmica profunda, mejora de cicatrices y elasticidad." }] },
      { optionName: { en: "PDRN - Polydeoxyribonucleotide", es: "PDRN - Polidesoxirribonucleótido" }, isPromoEligible: false, optionPrice: { en: "$275", es: "$275" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck", es: "Zonas: Rostro + Cuello" }, { en: "Benefits: Promotes deep dermal repair, scar improvement, and elasticity.", es: "Favorece reparación dérmica profunda, mejora de cicatrices y elasticidad." }] },
      { optionName: { en: "PDRN - Polydeoxyribonucleotide", es: "PDRN - Polidesoxirribonucleótido" }, isPromoEligible: false, optionPrice: { en: "$315", es: "$315" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck + Décolleté", es: "Zonas: Rostro + Cuello + Escote" }, { en: "Benefits: Promotes deep dermal repair, scar improvement, and elasticity.", es: "Favorece reparación dérmica profunda, mejora de cicatrices y elasticidad." }] },
      { optionName: { en: "PDRN - Polydeoxyribonucleotide", es: "PDRN - Polidesoxirribonucleótido" }, isPromoEligible: false, optionPrice: { en: "$170", es: "$170" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Hands", es: "Zonas: Manos" }, { en: "Benefits: Promotes deep dermal repair, scar improvement, and elasticity.", es: "Favorece reparación dérmica profunda, mejora de cicatrices y elasticidad." }] },

      // PN
      { optionName: { en: "PN - Polynucleotide", es: "PN - Polinucleótido" }, isPromoEligible: false, optionPrice: { en: "$300", es: "$300" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "Benefits: Supports collagen, firmness, and smoother texture.", es: "Favorece colágeno, firmeza y una textura más suave." }] },
      { optionName: { en: "PN - Polynucleotide", es: "PN - Polinucleótido" }, isPromoEligible: false, optionPrice: { en: "$450", es: "$450" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck", es: "Zonas: Rostro + Cuello" }, { en: "Benefits: Supports collagen, firmness, and smoother texture.", es: "Favorece colágeno, firmeza y una textura más suave." }] },
      { optionName: { en: "PN - Polynucleotide", es: "PN - Polinucleótido" }, isPromoEligible: false, optionPrice: { en: "$565", es: "$565" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck + Décolleté", es: "Zonas: Rostro + Cuello + Escote" }, { en: "Benefits: Supports collagen, firmness, and smoother texture.", es: "Favorece colágeno, firmeza y una textura más suave." }] },
      { optionName: { en: "PN - Polynucleotide", es: "PN - Polinucleótido" }, isPromoEligible: false, optionPrice: { en: "$265", es: "$265" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Hands", es: "Zonas: Manos" }, { en: "Benefits: Supports collagen, firmness, and smoother texture.", es: "Favorece colágeno, firmeza y una textura más suave." }] },

      // Hydration & regeneration (TKN HA3+)
      { optionName: { en: "Cellular Hydration & Deep Regeneration", es: "Hidratación Celular y Regeneración Profunda" }, isPromoEligible: false, optionPrice: { en: "$310", es: "$310" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "Product: TKN HA3+", es: "Producto: TKN HA3+" }, { en: "Benefits: Provides intensive hydration and supports deep regeneration.", es: "Aporta hidratación intensiva y favorece la regeneración profunda." }] },
      { optionName: { en: "Cellular Hydration & Deep Regeneration", es: "Hidratación Celular y Regeneración Profunda" }, isPromoEligible: false, optionPrice: { en: "$375", es: "$375" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck", es: "Zonas: Rostro + Cuello" }, { en: "Product: TKN HA3+", es: "Producto: TKN HA3+" }, { en: "Benefits: Provides intensive hydration and supports deep regeneration.", es: "Aporta hidratación intensiva y favorece la regeneración profunda." }] },
      { optionName: { en: "Cellular Hydration & Deep Regeneration", es: "Hidratación Celular y Regeneración Profunda" }, isPromoEligible: false, optionPrice: { en: "$450", es: "$450" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck + Décolleté", es: "Zonas: Rostro + Cuello + Escote" }, { en: "Product: TKN HA3+", es: "Producto: TKN HA3+" }, { en: "Benefits: Provides intensive hydration and supports deep regeneration.", es: "Aporta hidratación intensiva y favorece la regeneración profunda." }] },

      // Glow
      { optionName: { en: "Glow Revitalizing & Facial Definition", es: "Glow Revitalizante & Definición Facial" }, isPromoEligible: false, optionPrice: { en: "$195", es: "$195" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "Product: Toskani WCPR + ECPR + Radiance Cocktail", es: "Producto: Toskani WCPR + ECPR + Radiance Cocktail" }, { en: "Brightens, firms, and enhances facial definition.", es: "Aporta luminosidad, firmeza y realza la definición facial." }] },
      { optionName: { en: "Glow Revitalizing & Facial Definition", es: "Glow Revitalizante & Definición Facial" }, isPromoEligible: false, optionPrice: { en: "$225", es: "$225" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck", es: "Zonas: Rostro + Cuello" }, { en: "Product: Toskani WCPR + ECPR + Radiance Cocktail", es: "Producto: Toskani WCPR + ECPR + Radiance Cocktail" }, { en: "Brightens, firms, and enhances facial definition.", es: "Aporta luminosidad, firmeza y realza la definición facial." }] },
      { optionName: { en: "Glow Revitalizing & Facial Definition", es: "Glow Revitalizante & Definición Facial" }, isPromoEligible: false, optionPrice: { en: "$250", es: "$250" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck + Décolleté", es: "Zonas: Rostro + Cuello + Escote" }, { en: "Product: Toskani WCPR + ECPR + Radiance Cocktail", es: "Producto: Toskani WCPR + ECPR + Radiance Cocktail" }, { en: "Brightens, firms, and enhances facial definition.", es: "Aporta luminosidad, firmeza y realza la definición facial." }] },

      // Repair
      { optionName: { en: "Epidermal Repair & Cellular Renewal", es: "Reparación Epidérmica & Renovación Celular" }, isPromoEligible: false, optionPrice: { en: "$195", es: "$195" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "Product: Toskani NCPR + ECPR + Radiance Cocktail", es: "Producto: Toskani NCPR + ECPR + Radiance Cocktail" }, { en: "Strengthens the epidermis, calms inflammation, and supports renewal.", es: "Refuerza la epidermis, calma la inflamación y apoya la renovación." }] },
      { optionName: { en: "Epidermal Repair & Cellular Renewal", es: "Reparación Epidérmica & Renovación Celular" }, isPromoEligible: false, optionPrice: { en: "$225", es: "$225" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck", es: "Zonas: Rostro + Cuello" }, { en: "Product: Toskani NCPR + ECPR + Radiance Cocktail", es: "Producto: Toskani NCPR + ECPR + Radiance Cocktail" }, { en: "Strengthens the epidermis, calms inflammation, and supports renewal.", es: "Refuerza la epidermis, calma la inflamación y apoya la renovación." }] },
      { optionName: { en: "Epidermal Repair & Cellular Renewal", es: "Reparación Epidérmica & Renovación Celular" }, isPromoEligible: false, optionPrice: { en: "$250", es: "$250" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck + Décolleté", es: "Zonas: Rostro + Cuello + Escote" }, { en: "Product: Toskani NCPR + ECPR + Radiance Cocktail", es: "Producto: Toskani NCPR + ECPR + Radiance Cocktail" }, { en: "Strengthens the epidermis, calms inflammation, and supports renewal.", es: "Refuerza la epidermis, calma la inflamación y apoya la renovación." }] },

      // Tone correction
      { optionName: { en: "Tone Correction & Antispot", es: "Corrección de Tono & Antimanchas" }, isPromoEligible: false, optionPrice: { en: "$160", es: "$160" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "Product: Toskani Lumicen Gel", es: "Producto: Toskani Lumicen Gel" }, { en: "Targets discoloration and helps even skin tone.", es: "Combate la pigmentación y ayuda a uniformar el tono de la piel." }] },
      { optionName: { en: "Tone Correction & Antispot", es: "Corrección de Tono & Antimanchas" }, isPromoEligible: false, optionPrice: { en: "$185", es: "$185" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck", es: "Zonas: Rostro + Cuello" }, { en: "Product: Toskani Lumicen Gel", es: "Producto: Toskani Lumicen Gel" }, { en: "Targets discoloration and helps even skin tone.", es: "Combate la pigmentación y ayuda a uniformar el tono de la piel." }] },
      { optionName: { en: "Tone Correction & Antispot", es: "Corrección de Tono & Antimanchas" }, isPromoEligible: false, optionPrice: { en: "$200", es: "$200" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck + Décolleté", es: "Zonas: Rostro + Cuello + Escote" }, { en: "Product: Toskani Lumicen Gel", es: "Producto: Toskani Lumicen Gel" }, { en: "Targets discoloration and helps even skin tone.", es: "Combate la pigmentación y ayuda a uniformar el tono de la piel." }] },

      // Caviar
      { optionName: { en: "Caviar Extract", es: "Extracto de Caviar" }, isPromoEligible: false, optionPrice: { en: "$120", es: "$120" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face", es: "Zonas: Rostro" }, { en: "Product: Janssen Cosmetics caviar extract", es: "Producto: Extracto de caviar Janssen Cosmetics" }, { en: "Benefits: Nourishes, hydrates, and improves skin vitality.", es: "Nutre, hidrata y mejora la vitalidad de la piel." }] },
      { optionName: { en: "Caviar Extract", es: "Extracto de Caviar" }, isPromoEligible: false, optionPrice: { en: "$135", es: "$135" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck", es: "Zonas: Rostro + Cuello" }, { en: "Product: Janssen Cosmetics caviar extract", es: "Producto: Extracto de caviar Janssen Cosmetics" }, { en: "Benefits: Nourishes, hydrates, and improves skin vitality.", es: "Nutre, hidrata y mejora la vitalidad de la piel." }] },
      { optionName: { en: "Caviar Extract", es: "Extracto de Caviar" }, isPromoEligible: false, optionPrice: { en: "$145", es: "$145" }, optionCurrency: "USD", optionPromoPrice: "", optionPromoPriceCurrency: "USD", notes: [{ en: "Zones: Face + Neck + Décolleté", es: "Zonas: Rostro + Cuello + Escote" }, { en: "Product: Janssen Cosmetics caviar extract", es: "Producto: Extracto de caviar Janssen Cosmetics" }, { en: "Benefits: Nourishes, hydrates, and improves skin vitality.", es: "Nutre, hidrata y mejora la vitalidad de la piel." }] }
    ]
  },
  goals: [
    {
      en: "Improve skin texture and tone",
      es: "Mejorar la textura y el tono de la piel"
    },
    {
      en: "Reduce acne scars and fine lines",
      es: "Reducir cicatrices de acné y líneas finas"
    },
    {
      en: "Shrink enlarged pores",
      es: "Disminuir la apariencia de poros dilatados"
    }
  ],
  treatableAreas: [
    {
      en: "Full face",
      es: "Rostro completo"
    },
    {
      en: "Neck",
      es: "Cuello"
    },
    {
      en: "Décolleté",
      es: "Escote"
    },
    {
      en: "Hands",
      es: "Manos"
    },
    {
      en: "Other zones treatable upon request and medical evaluation.",
      es: "Otras zonas tratables bajo solicitud y evaluación médica."
    }
  ],
  addOns: [
    {
      treatmentSlug: "wrinkle-reducers-botox",
      optionName: {
        en: "Botox - Any Zone",
        es: "Botox - Cualquier Zona"
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
    },
    {
      treatmentSlug: "facials-janssen-ultra-renewal",
      optionName: {
        en: "Janssen - Ultra Renewal Facial - Face",
        es: "Janssen - Facial Ultra Renewal - Rostro"
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
      treatmentSlug: "rf-microneedling",
      optionName: {
        en: "Sylfirm X - RF Microneedling - Face",
        es: "Sylfirm X - Microagujas RF - Rostro"
      }
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid retinoids, AHAs/BHAs, exfoliation, and waxing for 3–5 days prior; no recent sunburn or tanning.",
        es: "Evite retinoides, AHA/BHA, exfoliación y depilación por 3–5 días previos; no acuda con quemadura solar ni bronceado reciente."
      },
      {
        en: "Arrive with clean skin (no makeup); reschedule if you have active infection, open wounds, or flare of cold sores without prophylaxis.",
        es: "Llegue con la piel limpia (sin maquillaje); reprograme si tiene infección activa, heridas abiertas o brote de herpes sin profilaxis."
      },
      {
        en: "Limit alcohol, NSAIDs, and blood-thinning supplements 24–48 hours before if medically permitted.",
        es: "Limite alcohol, AINE y suplementos anticoagulantes 24–48 horas antes si su médico lo permite."
      }
    ],
    duringTreatment: [
      {
        en: "Topical numbing is applied; expect a scratching/pressure sensation with possible pinpoint bleeding.",
        es: "Se aplica anestesia tópica; espere una sensación de raspado/presión con posible sangrado puntual."
      },
      {
        en: "Channels are created evenly across the treated zones; serums are applied to enhance penetration.",
        es: "Se crean microcanales de manera uniforme en las zonas tratadas; se aplican sueros para mejorar la penetración."
      }
    ],
    postTreatment: [
      {
        en: "Expect redness similar to a sunburn for 24–72 hours; mild swelling or tightness is normal.",
        es: "Espere un enrojecimiento similar a una quemadura solar durante 24–72 horas; es normal hinchazón o tirantez leve."
      },
      {
        en: "Avoid sun, sweating, pools, and makeup for 24 hours; use gentle cleanser and hydrating serum only.",
        es: "Evite el sol, el sudor, las albercas y el maquillaje durante 24 horas; use solo limpiador suave y suero hidratante."
      },
      {
        en: "Do not use retinoids, acids, or scrubs for 5–7 days; apply SPF 30+ once reintroducing daytime products.",
        es: "No use retinoides, ácidos ni exfoliantes por 5–7 días; aplique FPS 30+ al reintroducir productos diurnos."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How many sessions will I need?",
        es: "¿Cuántas sesiones voy a necesitar?"
      },
      answer: {
        en: "Most patients need 3–6 sessions spaced 4–6 weeks apart for best results.",
        es: "La mayoría de los pacientes requiere de 3 a 6 sesiones, espaciadas cada 4–6 semanas, para obtener los mejores resultados."
      }
    },
    {
      question: {
        en: "Which infusion option is best for me?",
        es: "¿Qué opción de infusión es mejor para mí?"
      },
      answer: {
        en: "PRP/PRFM uses your own plasma for regeneration. Kiara Reju adds hydration and glow. Rejuran focuses on deep cellular repair. Your provider will recommend the best option based on your skin needs.",
        es: "PRP/PRFM utiliza tu propio plasma para favorecer la regeneración. Kiara Reju aporta hidratación y luminosidad. Rejuran se enfoca en la reparación celular profunda. Tu especialista te recomendará la mejor opción según las necesidades de tu piel."
      }
    },
    {
      question: {
        en: "Is this safe for all skin types?",
        es: "¿Es seguro para todo tipo de piel?"
      },
      answer: {
        en: "Yes, microneedling is safe for most skin tones when performed by trained professionals. Rejuran and Kiara Reju are excellent options for sensitive or aging skin.",
        es: "Sí, el microneedling es seguro para la mayoría de los fototipos cuando lo realiza personal capacitado. Rejuran y Kiara Reju son excelentes opciones para piel sensible o madura."
      }
    },
    {
      question: {
        en: "Can I combine this with other treatments?",
        es: "¿Puedo combinar este tratamiento con otros?"
      },
      answer: {
        en: "Yes, microneedling pairs well with facials, laser or radiofrequency for enhanced results. Always consult your provider to create the safest treatment plan.",
        es: "Sí, el microneedling se puede combinar con faciales, láser o radiofrecuencia para potenciar resultados. Siempre consulta con tu especialista para diseñar el plan de tratamiento más seguro."
      }
    }
  ]
};
