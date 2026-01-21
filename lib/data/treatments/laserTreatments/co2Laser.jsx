export const co2Laser = {
  urlSlug: "co2-laser",
  category: "laser-resurfacing",
  categoryDisplayName: {
    en: "Laser Treatments & Skin Resurfacing",
    es: "Tratamientos Láser y Resurfacing Cutáneo"
  },
  serviceDisplayName: {
    en: "CO₂ Laser Resurfacing (AcuPulse)",
    es: "Resurfacing Láser CO₂ (AcuPulse)"
  },
  isPopular: true,
  isPromoActive: true,
  images: {
    primary: "/laserco2.jpg",
    secondary: "/laserco22.jpg"
  },

  description: {
    en: "Deep fractional CO₂ laser therapy to repair damaged skin, reduce wrinkles, and renew overall texture and tone.",
    es: "Terapia láser fraccionada de CO₂ para reparar piel dañada, reducir arrugas y renovar la textura y el tono general de la piel."
  },

  details: {
    en: "CO₂ laser delivers fractional ablative energy to stimulate deep skin regeneration. It vaporizes microcolumns of tissue, triggering collagen production and promoting smoother, healthier skin. Ideal for acne scars, wrinkles, sun damage, and dull skin tone.",
    es: "El láser de CO₂ emite energía ablativa fraccionada para estimular la regeneración profunda de la piel. Vaporiza microcolumnas de tejido que activan la producción de colágeno y promueven una piel más lisa y saludable. Ideal para cicatrices de acné, arrugas, daño solar y textura opaca."
  },

  notes: [
    {
      en: "Requires consultation for clearance and prep",
      es: "Requiere consulta previa para evaluación y preparación"
    },
    {
      en: "Downtime ranges from 3–7 days depending on intensity",
      es: "El tiempo de recuperación varía entre 3 y 7 días según la intensidad"
    },
    {
      en: "Most patients need 1–3 sessions spaced 2+ months apart",
      es: "La mayoría de los pacientes requieren 1–3 sesiones separadas por 2 meses o más"
    }
  ],

  pricing: {
    startingPrice: "$250",
    startingPriceCurrency: "USD",

    options: [
      // Face / Neck
      {
        optionName: { en: "Under Eye", es: "Ojeras" },
        optionPrice: { en: "$250", es: "$250" },
        optionCurrency: "USD",
        isOptionPromoActive: true,
        optionPromoPrice: "$150",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Neck", es: "Cuello" },
        optionPrice: { en: "$385", es: "$385" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Face", es: "Rostro" },
        optionPrice: { en: "$550", es: "$550" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Face + Neck", es: "Rostro + Cuello" },
        optionPrice: { en: "$650", es: "$650" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Face + Neck + Décolleté", es: "Rostro + Cuello + Escote" },
        optionPrice: { en: "$850", es: "$850" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Face + Neck + Décolleté + Chest", es: "Rostro + Cuello + Escote + Pecho" },
        optionPrice: { en: "$950", es: "$950" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },

      // Chest / Décolleté
      {
        optionName: { en: "Décolleté", es: "Escote" },
        optionPrice: { en: "$315", es: "$315" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: { en: "Chest", es: "Pecho" },
        optionPrice: { en: "$400", es: "$400" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },

      // Zone sizes
      {
        optionName: { en: "Small Zone", es: "Zona Pequeña" },
        optionPrice: { en: "$325", es: "$325" },
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
        optionName: { en: "Medium Zone", es: "Zona Mediana" },
        optionPrice: { en: "$675", es: "$675" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Area total [523 cm² - 1080.3 cm²]. Four to six palms — roughly the size of a full sheet of paper.",
            es: "Área total [523 cm² - 1080.3 cm²]. De cuatro a seis palmas de la mano, aproximadamente del tamaño de una hoja completa de papel."
          }
        ]
      },
      {
        optionName: { en: "Large Zone", es: "Zona Grande" },
        optionPrice: { en: "$1,275", es: "$1,275" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: [
          {
            en: "Area total [1264 cm² - 2090 cm²]. Eight to twelve palms — about the size of a square pillow or large square.",
            es: "Área total [1264 cm² - 2090 cm²]. De ocho a doce palmas de la mano, aproximadamente del tamaño de un cojín cuadrado o un cuadrado grande."
          }
        ]
      },

      // Other areas
      {
        optionName: { en: "Hands", es: "Manos" },
        optionPrice: { en: "$300", es: "$300" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      }
    ]
  },

  goals: [
    {
      en: "Fade deep wrinkles and lines",
      es: "Atenuar arrugas profundas y líneas finas"
    },
    {
      en: "Smooth acne scars and uneven skin",
      es: "Suavizar cicatrices de acné y textura irregular"
    },
    {
      en: "Brighten tone and rejuvenate texture",
      es: "Mejorar el tono y rejuvenecer la textura de la piel"
    }
  ],

  treatableAreas: [
    {
      en: "Perioral Lines (Smoker’s Lines)",
      es: "Líneas Periorales"
    },
    {
      en: "Under-Eyes",
      es: "Debajo de los Ojos"
    },
    {
      en: "Full Face",
      es: "Cara Completa"
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
      en: "Stretch Marks",
      es: "Estrías"
    },
    {
      en: "Scars",
      es: "Cicatrices"
    },
    {
      en: "Hands",
      es: "Manos"
    },
    {
      en: "Other zones available upon request",
      es: "Otras zonas disponibles bajo solicitud"
    }
  ],

  addOns: [
    {
      treatmentSlug: "serum-add-ons",
      optionName: {
        en: "Serum Add-On - PRP (Face) - Platelet Rich Plasma",
        es: "Complemento de Suero - PRP (Rostro) - Plasma Rico en Plaquetas"
      }
    },
    {
      treatmentSlug: "serum-add-ons",
      optionName: {
        en: "Serum Add-On - PN (Face) - Polynucleotide",
        es: "Complemento de Suero - PN (Rostro) - Polinucleótido"
      }
    }
  ],

  expectations: {
    preTreatment: [
      {
        en: "Avoid sun exposure, retinoids, acids, and exfoliation for 7–10 days before treatment; no recent tanning or self-tanner.",
        es: "Evite exposición solar, retinoides, ácidos y exfoliación durante 7–10 días antes del tratamiento; no acuda bronceado ni con autobronceador."
      },
      {
        en: "Arrive with clean skin, no makeup; disclose isotretinoin use, photosensitizing meds, or history of keloids.",
        es: "Llegue con la piel limpia, sin maquillaje; informe sobre uso de isotretinoína, medicamentos fotosensibilizantes o antecedentes de queloides."
      },
      {
        en: "Stop blood-thinning meds/supplements and smoking if medically permitted to reduce healing risks.",
        es: "Suspenda anticoagulantes y suplementos que adelgacen la sangre, y evite fumar si su médico lo permite para reducir riesgos de cicatrización."
      }
    ],
    duringTreatment: [
      {
        en: "Topical/local anesthetic is applied; you’ll feel warmth and snapping as the laser pulses across the skin.",
        es: "Se aplica anestesia tópica/local; sentirá calor y pequeños destellos mientras el láser recorre la piel."
      },
      {
        en: "Cooling and occlusive ointment are applied immediately after to protect the skin barrier.",
        es: "Se aplican enfriamiento y ungüento oclusivo de inmediato para proteger la barrera cutánea."
      }
    ],
    postTreatment: [
      {
        en: "Redness, swelling, oozing, and peeling are normal for 5–10 days; keep the area moist with the prescribed ointment.",
        es: "Enrojecimiento, hinchazón, exudado y descamación son normales durante 5–10 días; mantenga el área humectada con el ungüento indicado."
      },
      {
        en: "Cleanse gently with tepid water; avoid sun, heat, pools, saunas, and sweating until re-epithelialized.",
        es: "Limpie suavemente con agua tibia; evite sol, calor, albercas, saunas y sudor hasta que la piel re-epitelice."
      },
      {
        en: "Use only provider-recommended products; no makeup until peeling resolves (usually 5–7+ days).",
        es: "Use solo productos recomendados por su especialista; no use maquillaje hasta que termine la descamación (generalmente 5–7+ días)."
      },
      {
        en: "Strict SPF 30+ once skin closes; contact us for pus, fever, spreading redness, or severe pain.",
        es: "Use FPS 30+ estricto cuando la piel haya cerrado; contáctenos ante pus, fiebre, enrojecimiento extenso o dolor severo."
      }
    ]
  },

  faq: [
    {
      question: {
        en: "Is CO₂ laser painful?",
        es: "¿El láser de CO₂ duele?"
      },
      answer: {
        en: "Topical anesthetic is applied beforehand. Patients usually describe warmth with occasional sharp zaps. Mild discomfort may last 1–2 days.",
        es: "Se aplica anestesia tópica antes del tratamiento. Los pacientes suelen describir una sensación de calor con pequeños destellos. Puede haber molestia leve durante 1 a 2 días."
      }
    },
    {
      question: {
        en: "How long is recovery?",
        es: "¿Cuánto dura la recuperación?"
      },
      answer: {
        en: "Expect 5–7 days of visible healing depending on intensity. Redness may last longer but can be covered with makeup after peeling stops.",
        es: "La recuperación visible dura entre 5 y 7 días según la intensidad. El enrojecimiento puede durar más, pero se puede cubrir con maquillaje cuando finaliza la descamación."
      }
    },
    {
      question: {
        en: "Can I combine this with PRP or other treatments?",
        es: "¿Puedo combinarlo con PRP u otros tratamientos?"
      },
      answer: {
        en: "Yes. PRP accelerates healing and enhances results. Other treatments must be timed appropriately based on provider recommendation.",
        es: "Sí. El PRP acelera la recuperación y mejora los resultados. Otros tratamientos deben programarse estratégicamente según indicación del proveedor."
      }
    },
    {
      question: {
        en: "How many sessions do I need?",
        es: "¿Cuántas sesiones necesito?"
      },
      answer: {
        en: "Many patients see dramatic improvement after one session, but deeper scars or more advanced aging may require 2–3 sessions.",
        es: "Muchos pacientes ven una mejora notable después de una sesión, aunque cicatrices más profundas o envejecimiento avanzado pueden requerir 2 o 3 sesiones."
      }
    }
  ]
};
