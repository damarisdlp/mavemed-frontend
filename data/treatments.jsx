// ✅ Cleaned and Structured Botox Treatment Object
export const treatments = [
  {
    slug: "botulinum-toxin",
    category: "wrinkle-reducers",
    displayName: "Wrinkle Reducer - Botox ",
    categoryDisplayName: "Wrinkle Reducers",
    isPopular: true,
    image: "/botox.jpg",
    image2: "/botox2.jpg",
    description:
      "Reduce the appearance of fine lines and wrinkles for a smoother, more refreshed look.",
    standardPrice: "Price varies per zone",
    memberPrice: "Price varies per zone",
    notes: [
      "Only new patients receive exclusive welcome-prices",
      "Established patients receive exclusive maintenance tier pricing",
      "Maintenance zone pricing is only applicable within 3–4 months after the initial application"
    ],
    details:
      "Neuromodulators are injected into the muscle to temporarily relax fine lines and wrinkles, resulting in improved and more youthful skin quality.",
    goals: [
      "Smooth dynamic lines",
      "Lift eyebrows or corners of mouth",
      "Prevent future wrinkle formation"
    ],
    treatableAreas: [
      "Forehead",
      "Frown Lines (Glabella)",
      "Crow’s Feet",
      "Bunny Lines (Nasalis)",
      "Chin Dimples",
      "Perioral Package (Gummy Smile + Lip Elevators + Chin)",
      "Lip Flip",
      "Eyebrow Lift",
      "Downturned Corners (Sad Smile)",
      "Perioral Lines",
      "Masseters (Jaw Slimming)",
      "Neck Bands (Platysma)",
      "Axillary Hyperhidrosis (Underarms)",
      "Palmar Hyperhidrosis (Hands)"
    ],
    pricing: [
      { zone: "Forehead", standardPrice: "$86USD", promoPrice: "$78USD" },
      { zone: "Frown Lines (Glabella)", standardPrice: "$145USD", promoPrice: "$130USD" },
      { zone: "Crow’s Feet", standardPrice: "$139USD", promoPrice: "$126USD" },
      { zone: "Bunny Lines", standardPrice: "$48USD", promoPrice: "$45USD" },
      { zone: "Chin Dimples", standardPrice: "$45USD", promoPrice: "$40USD" },
      { zone: "Perioral Lines", standardPrice: "$46USD", promoPrice: null, promoNote: "Not eligible for exclusive pricing" },
      { zone: "Gummy Smile", standardPrice: "$45USD", promoPrice: null, promoNote: "Only available as part of Perioral Package" },
      { zone: "Downturned Corners", standardPrice: "$45USD", promoPrice: null, promoNote: "Only available as part of Perioral Package" },
      { zone: "Eyebrow Lift", standardPrice: "$30USD", promoPrice: null, promoNote: "Not eligible for exclusive pricing" },
      { zone: "Masseters", standardPrice: "$225USD", promoPrice: null, promoNote: "Not eligible for exclusive pricing" },
      { zone: "Neck Bands", standardPrice: "$340USD", promoPrice: null, promoNote: "Not eligible for exclusive pricing" },
      { zone: "Axillary Hyperhidrosis", standardPrice: "$570USD", promoPrice: null, promoNote: "Not eligible for exclusive pricing" },
      { zone: "Palmar Hyperhidrosis", standardPrice: "$570USD", promoPrice: null, promoNote: "Not eligible for exclusive pricing" },
      {
        zone: "Perioral Package",
        standardPrice: "$135USD",
        promoPrice: "$120USD",
        notes: ["Includes gummy smile, mouth elevators, and chin dimples"]
      },
      {
        zone: "Maintenance of Superior Third",
        standardPrice: "$260USD",
        promoPrice: "Not eligible for exclusive pricing",
        notes: ["Appointment must be within 4-5 months of initial application","Includes forehead, frown lines (glabella), and crow's feet"]
      },
      {
        zone: "Maintenance of Individual Zone",
        standardPrice: "$70USD",
        promoPrice: "Not eligible for exclusive pricing",
        notes: [
          "Appointment must be within 4–5 months of initial application",
          "Applicable to any zone",
          "Zones may be combined at the doctor's discretion based on evaluation"
]      }
    ],
    addOns: [
      {
        name: "HydraFacial",
        description: "A hydrating facial that cleanses, exfoliates, and infuses serums into the skin for a fresh glow.",
        standardPrice: "$95",
        promoPrice: null,
        promoNote: "Add-on only available at standard rate",
        link: "/treatments/hydrafacial"
      },
      {
        name: "Casmara Purifying Facial Treatment",
        description: "A clarifying treatment that deeply detoxifies and calms the skin before or after injectables.",
        standardPrice: "$80",
        promoPrice: null,
        promoNote: "Add-on only available at standard rate",
        link: "/treatments/casmara-purifying-treatment"
      }
    ],
    expectations: [
  {
    label: "Pre-Treatment",
    note: "Avoid alcohol, ibuprofen, aspirin, or any blood thinners for 24 hours prior to treatment to reduce the risk of bruising."
  },
  {
    label: "Pre-Treatment",
    note: "Refrain from intense physical activity on the day of your appointment."
  },
  {
    label: "Pre-Treatment",
    note: "Inform your provider of any recent vaccinations, medications, or medical conditions."
  },
  {
    label: "Post-Treatment",
    note: "Avoid touching, rubbing, or applying pressure to the treated areas for at least 4 hours."
  },
  {
    label: "Post-Treatment",
    note: "Remain upright and avoid lying down flat for 4 hours following treatment."
  },
  {
    label: "Post-Treatment",
    note: "Skip intense physical activity, alcohol, and saunas for 24 hours post-treatment to reduce the risk of swelling and migration."
  },
  {
    label: "Post-Treatment",
    note: "Mild swelling or bruising may occur and typically resolves within a few days. Ice can be applied gently if needed."
  },
  {
    label: "Post-Treatment",
    note: "Results begin to appear within 3–5 days, with full effect visible at 10–14 days."
  }
],
faq: [
  {
    question: "How long does Botox take to work?",
    answer:
      "You may begin to see softening of lines within 3 to 5 days, but full results usually appear between 10 to 14 days after treatment."
  },
  {
    question: "How long do Botox results last?",
    answer:
      "Botox typically lasts 3 to 4 months. Longevity may vary depending on your metabolism, lifestyle, and treatment area."
  },
  {
    question: "Will I look frozen or unnatural?",
    answer:
      "Not at all. Our providers specialize in natural-looking results. We focus on softening movement, not eliminating expression."
  },
  {
    question: "Can I wear makeup or skincare after Botox?",
    answer:
      "Yes, but wait at least 4 hours before applying makeup and avoid rubbing the treated areas to prevent product migration."
  },
  {
    question: "Is there any downtime?",
    answer:
      "There is no official downtime, though you should avoid lying down, heavy exercise, and alcohol for 24 hours post-treatment."
  },
  {
    question: "Is Botox safe?",
    answer:
      "Botox is FDA-approved and considered very safe when administered by trained medical professionals. At Mave, treatments are performed under medical supervision using only certified products."
  },
  {
    question: "Can I combine Botox with other treatments?",
    answer:
      "Absolutely. Botox can be safely combined with treatments like HydraFacial, Sculptra, or laser resurfacing for enhanced results. Your provider will guide you on the ideal timing between procedures."
  }
]
  },
  {
  slug: "hyaluronic-filler",
  category: "dermal-fillers",
  categoryDisplayName: "Dermal Fillers (Hyaluronic Acid)",
  displayName: "Hyaluronic Acid Lip Fillers",
  isPopular: true,
  image: "/fillers.jpg",
  image2: "/fillers2.jpg",
  description: "Restore and add volume and contour to lips using hyaluronic acid dermal fillers with immediate, natural-looking results.",
  standardPrice: "Starting at $305 USD",
  memberPrice: "Not eligible for exclusive pricing",
  notes: [
    "Results are immediate with minimal downtime",
    "Volume and symmetry can be customized to patient goals",
    "Touch-ups may be needed after 6–12 months depending on brand selected"
  ],
  details: "Hyaluronic acid lip fillers are injected into the lips to enhance shape, add volume, and improve hydration. This treatment is ideal for patients looking to restore youthful fullness, define lip borders, or correct asymmetries. All applications are customized per facial harmony goals.",
  goals: [
    "Add or restore volume to lips",
    "Improve hydration and definition",
    "Correct asymmetry and refine lip shape"
  ],
  treatableAreas: ["Upper lip", "Lower lip", "Cupid's bow", "Vermilion border"],
  pricing: [
    { zone: "Stylage M with Lidocaine", standardPrice: "$306USD", promoPrice: null, promoNote: "Price per 1ml syringe" },
    { zone: "Juvéderm Volift with Lidocaine", standardPrice: "$365USD", promoPrice: null, promoNote: "Price per 1ml syringe" },
  ],
  addOns: [
  {
    name: "Wrinkle Reducer - Botox - Lip Flip (Gummy Smile)",
    description: "Enhance your smile by relaxing upper lip muscles for a subtle lift and reduced gum visibility.",
    standardPrice: "$30USD",
    promoPrice: null,
    promoNote: "Standard rate only",
    link: "/treatments/botulinum-toxin"
  }
],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid alcohol, NSAIDs, and supplements like fish oil or vitamin E for 48 hours before your appointment to reduce the risk of bruising."
    },
    {
      label: "Pre-Treatment",
      note: "Arrive with a clean face and no makeup around the lip area."
    },
    {
      label: "Post-Treatment",
      note: "Expect swelling for 24–48 hours. Apply cold compresses gently if needed."
    },
    {
      label: "Post-Treatment",
      note: "Avoid lip movement exercises, heat exposure, and makeup for at least 12 hours."
    },
    {
      label: "Post-Treatment",
      note: "Final results typically settle within 5–7 days."
    }
  ],
  faq: [
    {
      question: "How long do lip filler results last?",
      answer: "Most patients enjoy results for 6 to 12 months, depending on metabolism and filler type used."
    },
    {
      question: "Is the procedure painful?",
      answer: "Most patients experience mild discomfort. A topical numbing agent is applied beforehand to minimize sensation."
    },
    {
      question: "Can I still look natural with lip filler?",
      answer: "Absolutely. At Mave, our approach emphasizes subtle enhancement and facial harmony tailored to your anatomy."
    },
    {
      question: "What happens if I don’t like the result?",
      answer: "Hyaluronic acid fillers can be reversed with an enzyme called hyaluronidase if necessary."
    }
  ]
},
{
  slug: "facial-balancing-fillers",
  category: "dermal-fillers",
  categoryDisplayName: "Dermal Fillers (Hyaluronic Acid)",
  displayName: "Facial Balancing with Dermal Fillers",
  isPopular: false,
  image: "/fillers.jpg",
  image2: "/fillers.jpg",
  description: "Strategic filler placement to enhance facial harmony, restore volume, and contour areas like the chin, jawline, and cheeks.",
  standardPrice: "Custom pricing per zone",
  memberPrice: "Discounted member pricing available",
  notes: [
    "Pricing is based on volume and number of syringes required",
    "Most balancing treatments use between 2–5 syringes",
    "Ideal for subtle, yet impactful full-face rejuvenation"
  ],
  details: "Facial balancing involves the strategic use of dermal fillers to restore proportions, enhance symmetry, and define key features. Common areas include the jawline, chin, midface, cheeks, temples, and nose. Each plan is tailored to complement the patient’s natural anatomy and aesthetic goals.",
  goals: [
    "Restore volume in cheeks and midface",
    "Define jawline and chin structure",
    "Improve overall facial symmetry and proportions"
  ],
  treatableAreas: [
    "Jawline",
    "Chin",
    "Cheeks",
    "Temples",
    "Nasolabial folds",
    "Marionette lines",
    "Midface"
  ],
  pricing: [
    {
      zone: "Chin Contour",
      standardPrice: "$280USD",
      promoPrice: "$250USD"
    },
    {
      zone: "Jawline (per side)",
      standardPrice: "$320USD",
      promoPrice: "$290USD"
    },
    {
      zone: "Cheek Enhancement",
      standardPrice: "$290USD",
      promoPrice: null,
      promoNote: "Promo not available on structural fillers"
    },
    {
      zone: "Midface Lift",
      standardPrice: "$290USD",
      promoPrice: null
    }
  ],
  addOns: [
    {
      name: "RF Microneedling",
      description: "Boost collagen and skin tightening before or after filler for stronger contour.",
      standardPrice: "$190",
      promoPrice: "$160",
      promoNote: "Add-on discounted only when bundled",
      link: "/treatments/rf-microneedling"
    }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid blood thinners (aspirin, ibuprofen, alcohol) for 48 hours to minimize bruising."
    },
    {
      label: "Pre-Treatment",
      note: "Have a light meal before your appointment and arrive hydrated."
    },
    {
      label: "Post-Treatment",
      note: "Mild swelling or tenderness is normal and resolves in a few days."
    },
    {
      label: "Post-Treatment",
      note: "Avoid heavy workouts, alcohol, or lying face down for 24 hours."
    },
    {
      label: "Post-Treatment",
      note: "Full results are typically visible in 3–7 days after swelling resolves."
    }
  ],
  faq: [
    {
      question: "What is facial balancing?",
      answer: "Facial balancing uses fillers to restore volume and create harmony across facial features. It can subtly reshape areas like the jawline, chin, or cheeks to enhance symmetry and aesthetics."
    },
    {
      question: "How many syringes will I need?",
      answer: "It depends on your goals and anatomy. Most facial balancing plans use 2 to 5 syringes strategically placed across multiple zones."
    },
    {
      question: "Does it look natural?",
      answer: "Yes. Our medical team focuses on enhancing your features without overfilling or altering your unique identity."
    },
    {
      question: "Can I combine facial balancing with other treatments?",
      answer: "Absolutely. We often combine balancing with skin tightening, collagen stimulation, or toxin treatments for comprehensive rejuvenation."
    }
  ]
},
{
  slug: "hyaluronidase",
  category: "dermal-fillers",
  categoryDisplayName: "Dermal Fillers (Hyaluronic Acid)",
  displayName: "Hyaluronidase Filler Reversal",
  isPopular: false,
  image: "/fillers.jpg",
  image2: "/fillers.jpg",
  description: "Dissolve misplaced or undesired hyaluronic acid fillers using hyaluronidase for safe and effective correction.",
  standardPrice: "$115USD per session",
  memberPrice: "$95USD per session",
  notes: [
    "A patch test may be required to rule out allergy",
    "Multiple sessions may be needed for complete dissolution",
    "Follow-up correction with fresh filler is optional"
  ],
  details: "Hyaluronidase is an enzyme that breaks down hyaluronic acid-based fillers. It’s used to correct overfilled areas, migrate filler, or address complications like vascular compression. Treatment is quick, safe, and performed only by trained medical personnel at Mave.",
  goals: [
    "Dissolve unwanted or poorly placed filler",
    "Correct asymmetry or migration",
    "Resolve nodules, lumps, or vascular occlusion"
  ],
  treatableAreas: [
    "Lips",
    "Under Eyes",
    "Cheeks",
    "Nasolabial Folds",
    "Jawline",
    "Chin",
    "Any previously treated filler site"
  ],
  pricing: [
    {
      zone: "Focal Correction (Small Area)",
      standardPrice: "$115USD",
      promoPrice: null
    },
    {
      zone: "Full Dissolution (Multiple Areas)",
      standardPrice: "$180USD",
      promoPrice: null,
      promoNote: "Promo pricing not available due to medical use classification"
    }
  ],
  addOns: [
    {
      name: "New Filler Application",
      description: "Once the area is corrected, a new filler session can restore ideal contours.",
      standardPrice: "Varies",
      promoPrice: null,
      promoNote: "Available upon consultation",
      link: "/treatments/facial-balancing-fillers"
    }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Discontinue blood thinners 48 hours before (with physician approval) to reduce bruising risk."
    },
    {
      label: "Pre-Treatment",
      note: "Inform your provider of any prior allergic reactions or medical history involving hyaluronidase."
    },
    {
      label: "Post-Treatment",
      note: "You may experience temporary swelling or redness at the injection site."
    },
    {
      label: "Post-Treatment",
      note: "Results can be seen within 24–72 hours as the filler dissolves and tissue settles."
    },
    {
      label: "Post-Treatment",
      note: "Avoid massaging or pressing the treated area unless instructed otherwise."
    }
  ],
  faq: [
    {
      question: "Is hyaluronidase safe?",
      answer: "Yes. It is widely used in aesthetic medicine and emergency medicine. We perform a patch test beforehand to check for allergic reactions."
    },
    {
      question: "Will my original filler fully dissolve?",
      answer: "In most cases, yes. Some patients may require a second session depending on the amount and age of the filler."
    },
    {
      question: "Can I get new filler afterward?",
      answer: "Yes. After complete resolution, we can safely reapply filler using a more strategic and customized approach."
    },
    {
      question: "Does it hurt?",
      answer: "You may feel mild discomfort or stinging at the injection site, but the treatment is very quick and tolerable."
    }
  ]
},
{
  slug: "sculptra",
  category: "biostimulatory-fillers",
  categoryDisplayName: "Collagen Biostimulators",
  displayName: "Sculptra PLLA Collagen Stimulator",
  isPopular: true,
  image: "/sculptra.jpg",
  image2: "/sculptra.jpg",
  description: "Stimulate collagen from within for natural-looking volume, skin thickening, and long-term rejuvenation.",
  standardPrice: "$550USD per vial",
  memberPrice: "$495USD per vial",
  notes: [
    "Typical protocol includes 2–3 vials spaced 4-6 weeks apart",
    "Gradual volume restoration over 2–3 months",
    "Best for patients looking for long-term results without an overfilled appearance"
  ],
  details: "Sculptra is a poly-L-lactic acid (PLLA) injectable that stimulates your body’s natural collagen production over time. It improves skin quality, restores volume, and enhances contour gradually. Ideal for facial hollowing, skin laxity, and structure loss.",
  goals: [
    "Stimulate collagen production",
    "Restore youthful facial volume",
    "Improve skin firmness and texture"
  ],
  treatableAreas: [
    "Cheeks",
    "Temples",
    "Jawline",
    "Nasolabial Folds",
    "Marionette Lines",
    "Chin",
    "Neck"
  ],
  pricing: [
    {
      zone: "Per Vial",
      standardPrice: "$550USD",
      promoPrice: "$495USD"
    }
  ],
  addOns: [
    {
      name: "Ultraformer MPT (HIFU)",
      description: "Combine with focused ultrasound for synergistic collagen stimulation and skin tightening.",
      standardPrice: "Varies",
      promoPrice: null,
      link: "/treatments/ultraformer-mpt"
    }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid alcohol, anti-inflammatories, and supplements like fish oil for 24–48 hours before treatment."
    },
    {
      label: "Pre-Treatment",
      note: "Eat well and hydrate to minimize bruising and optimize circulation."
    },
    {
      label: "Post-Treatment",
      note: "Massage the treated area 5 minutes, 5 times a day, for 5 days to ensure even distribution."
    },
    {
      label: "Post-Treatment",
      note: "Mild swelling or bruising may occur and typically resolves within a few days."
    },
    {
      label: "Post-Treatment",
      note: "Results appear gradually over 4–8 weeks as collagen builds."
    }
  ],
  faq: [
    {
      question: "How is Sculptra different from dermal fillers?",
      answer: "Unlike hyaluronic acid fillers that add immediate volume, Sculptra works by stimulating your body’s natural collagen over time for gradual and longer-lasting results."
    },
    {
      question: "How many vials will I need?",
      answer: "Most patients benefit from 2–3 vials spaced a few weeks apart, but this can vary based on age, goals, and facial structure."
    },
    {
      question: "Is there downtime?",
      answer: "You may experience swelling or bruising, but most clients resume normal activities the same day."
    },
    {
      question: "When will I see results?",
      answer: "Results appear gradually over several weeks and continue to improve for up to 6 months."
    },
    {
      question: "How long does it last?",
      answer: "Results typically last 2+ years with proper protocol and maintenance."
    }
  ]
},
{
  slug: "harmonyca",
  category: "biostimulatory-fillers",
  categoryDisplayName: "Collagen Biostimulators",
  displayName: "HarmonyCA (HA + Calcium Hydroxyapatite)",
  isPopular: false,
  image: "/sculptra.jpg",
  image2: "/sculptra.jpg",
  description: "A dual-action filler combining hyaluronic acid for immediate volume and CaHA for long-term collagen production.",
  standardPrice: "$590USD per syringe",
  memberPrice: "$540USD per syringe",
  notes: [
    "Ideal for structural lifting and improving skin density",
    "Provides both immediate correction and progressive skin thickening",
    "Often used in cheeks, jawline, and lower face for definition and firmness"
  ],
  details: "HarmonyCA combines the best of both worlds: immediate hydration and volume with hyaluronic acid, and long-term collagen stimulation through calcium hydroxyapatite (CaHA) microspheres. This hybrid filler enhances facial contour, improves skin firmness, and stimulates lasting bioremodeling.",
  goals: [
    "Immediate lift and contour",
    "Progressive collagen stimulation",
    "Long-lasting skin density and firmness"
  ],
  treatableAreas: [
    "Cheeks",
    "Jawline",
    "Lower Face",
    "Preauricular Hollow",
    "Chin"
  ],
  pricing: [
    {
      zone: "Per Syringe",
      standardPrice: "$590USD",
      promoPrice: "$540USD"
    }
  ],
  addOns: [
    {
      name: "Microneedling with Rejuran",
      description: "Boost skin regeneration and elasticity while enhancing biostimulatory effects of the filler.",
      standardPrice: "$250USD",
      promoPrice: "$225USD",
      link: "/treatments/rejuran"
    }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid alcohol and blood-thinning supplements (omega-3, garlic, ginseng) 24–48 hours prior."
    },
    {
      label: "Pre-Treatment",
      note: "Inform your provider if you’ve recently had dental work, laser, or vaccinations."
    },
    {
      label: "Post-Treatment",
      note: "Minor swelling or bruising may occur, and tenderness can last 1–2 days."
    },
    {
      label: "Post-Treatment",
      note: "Avoid massaging or pressing on the treated area for the first 48 hours."
    },
    {
      label: "Post-Treatment",
      note: "Results are immediate but continue to improve over 6–8 weeks as collagen forms."
    }
  ],
  faq: [
    {
      question: "How is HarmonyCA different from regular fillers?",
      answer: "HarmonyCA combines hyaluronic acid for instant volume with calcium hydroxyapatite for long-term collagen stimulation, offering both immediate and lasting results."
    },
    {
      question: "What areas benefit most from HarmonyCA?",
      answer: "It’s ideal for structural zones like the cheeks, jawline, and lower face, where both volume and lift are desired."
    },
    {
      question: "How long do results last?",
      answer: "Typically 12–18 months, depending on your metabolism, age, and skincare habits."
    },
    {
      question: "Is it safe?",
      answer: "Yes, HarmonyCA is CE-marked and widely used in Europe. It’s administered by trained medical professionals for safe and effective outcomes."
    },
    {
      question: "Can I combine it with other treatments?",
      answer: "Absolutely. HarmonyCA pairs well with RF microneedling, Rejuran, and Ultraformer for a layered regenerative protocol."
    }
  ]
},
{
  slug: "ultraformer-mpt",
  category: "skin-tightening",
  categoryDisplayName: "Skin Tightening & Sculpting",
  displayName: "Ultraformer MPT Ultrasound Lift",
  isPopular: true,
  image: "/hifu.jpg",
  image2: "/hifu2.jpg",
  description: "Non-invasive ultrasound technology for skin tightening, lifting, and contouring without downtime.",
  standardPrice: "Price varies by zone and intensity",
  memberPrice: "Exclusive member discounts available",
  notes: [
    "Ideal for facial lifting, jowls, neck tightening, and body sculpting",
    "Results continue improving over 3–6 months",
    "Each treatment is personalized based on depth, zone, and clinical indications"
  ],
  details: "Ultraformer MPT delivers focused ultrasound energy to stimulate collagen at multiple depths—SMAS, dermis, and subcutaneous layers—without harming the surface. It’s clinically proven for lifting, tightening, and contouring with no downtime.",
  goals: [
    "Lift sagging skin",
    "Improve facial contour and definition",
    "Stimulate long-term collagen production"
  ],
  treatableAreas: [
    "Full Face",
    "Jawline",
    "Neck",
    "Décolleté",
    "Eyelids",
    "Under Chin",
    "Abdomen",
    "Inner Thighs",
    "Arms",
    "Knees"
  ],
  pricing: [
    {
      zone: "Jawline + Submenton",
      standardPrice: "$450USD",
      promoPrice: "$400USD"
    },
    {
      zone: "Full Face + Neck",
      standardPrice: "$990USD",
      promoPrice: "$890USD"
    },
    {
      zone: "Lower Face",
      standardPrice: "$690USD",
      promoPrice: "$620USD"
    },
    {
      zone: "Eyelids",
      standardPrice: "$295USD",
      promoPrice: "$270USD"
    }
  ],
  addOns: [
    {
      name: "Sculptra Biostimulator",
      description: "Amplify collagen response by combining HIFU with Sculptra injections for deeper tissue remodeling.",
      standardPrice: "$490USD",
      promoPrice: "$440USD",
      link: "/treatments/sculptra"
    }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Stay well-hydrated and avoid alcohol or caffeine for 24 hours prior to appointment."
    },
    {
      label: "Pre-Treatment",
      note: "Notify provider if you’ve had recent Botox or filler in the area within the past 2 weeks."
    },
    {
      label: "Post-Treatment",
      note: "Mild redness, swelling, or sensitivity may occur and typically resolves within hours to days."
    },
    {
      label: "Post-Treatment",
      note: "Avoid hot baths, saunas, and intense workouts for 24 hours post-treatment."
    },
    {
      label: "Post-Treatment",
      note: "Initial skin tightening is immediate, but full lifting effects build gradually over 8–12 weeks."
    }
  ],
  faq: [
    {
      question: "Is Ultraformer MPT painful?",
      answer: "You may feel a deep tingling or warming sensation during treatment, but most patients tolerate it well. We offer numbing cream and other comfort options."
    },
    {
      question: "How many sessions will I need?",
      answer: "Most patients see results with 1 session, but optimal results are achieved with a full protocol of 2–3 spaced sessions based on age and skin laxity."
    },
    {
      question: "How long do results last?",
      answer: "Results can last 12–18 months, especially when supported with maintenance treatments and healthy skincare habits."
    },
    {
      question: "Can Ultraformer be combined with other treatments?",
      answer: "Yes, Ultraformer works synergistically with injectables, RF microneedling, and biostimulators like Sculptra for enhanced outcomes."
    },
    {
      question: "Is there any downtime?",
      answer: "No. You can return to normal activities immediately, although some mild swelling or tenderness may occur for 1–3 days."
    }
  ]
},
{
  slug: "pdo-threads",
  category: "skin-tightening",
  categoryDisplayName: "Skin Tightening & Sculpting",
  displayName: "PDO Thread Lift Skin Tightening",
  isPopular: true,
  image: "/threads.jpg",
  image2: "/threads2.jpg",
  description: "Minimally invasive lifting treatment using dissolvable PDO threads to restore firmness and definition.",
  standardPrice: "Price varies by zone and thread type",
  memberPrice: "Discounted packages available for multiple zones",
  notes: [
    "Uses sterile, absorbable polydioxanone threads",
    "Threads stimulate collagen production over 3–6 months",
    "Ideal for patients with mild to moderate sagging"
  ],
  details: "PDO threads are strategically inserted under the skin to provide instant lifting and long-term tightening. They dissolve naturally while triggering collagen regeneration, making them ideal for facial contouring and rejuvenation without surgery.",
  goals: [
    "Lift sagging cheeks, jowls, and jawline",
    "Improve skin laxity and firmness",
    "Enhance facial contour and definition"
  ],
  treatableAreas: [
    "Jawline",
    "Cheeks",
    "Neck",
    "Eyebrows",
    "Nasolabial Folds",
    "Marionette Lines",
    "Under Eyes"
  ],
  pricing: [
    {
      zone: "Jawline + Jowls",
      standardPrice: "$650USD",
      promoPrice: "$590USD"
    },
    {
      zone: "Midface (Cheeks + Nasolabial)",
      standardPrice: "$590USD",
      promoPrice: "$540USD"
    },
    {
      zone: "Eyebrow Lift",
      standardPrice: "$395USD",
      promoPrice: "$360USD"
    }
  ],
  addOns: [
    {
      name: "Kiara Reju Skin Booster",
      description: "Hydrates and revitalizes skin to support tissue remodeling post-thread lift.",
      standardPrice: "$160USD",
      promoPrice: "$140USD",
      link: "/treatments/kiara-reju"
    }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid blood thinners, alcohol, and anti-inflammatory medications for 24–48 hours before your procedure."
    },
    {
      label: "Pre-Treatment",
      note: "Discuss recent filler or Botox treatments with your provider to properly space procedures."
    },
    {
      label: "Post-Treatment",
      note: "Mild bruising or swelling is normal and subsides within a few days."
    },
    {
      label: "Post-Treatment",
      note: "Avoid exaggerated facial movements, dental appointments, or sleeping face-down for 1–2 weeks."
    },
    {
      label: "Post-Treatment",
      note: "Results improve progressively over 6–12 weeks as collagen builds around the threads."
    }
  ],
  faq: [
    {
      question: "How long do PDO threads last?",
      answer: "Threads dissolve in 6 months, but the lifting effect and collagen production can last 12–18 months."
    },
    {
      question: "Is the treatment painful?",
      answer: "Topical anesthetic and local lidocaine are used to ensure comfort during the procedure."
    },
    {
      question: "Can I combine PDO threads with fillers?",
      answer: "Yes, combining threads with dermal fillers can enhance volume and lift for more dramatic facial rejuvenation."
    },
    {
      question: "Is there any downtime?",
      answer: "You can resume daily activities after 24–48 hours. Avoid strenuous exercise or heavy chewing for one week."
    },
    {
      question: "When will I see results?",
      answer: "Initial lifting is visible immediately, with full collagen-stimulated effects seen at 6–12 weeks post-treatment."
    }
  ]
},
{
  slug: "venus-freeze",
  category: "skin-tightening",
  categoryDisplayName: "Skin Tightening & Sculpting",
  displayName: "Radio Frequency Body Sculpting",
  isPopular: false,
  image: "/radiofrequency.jpg",
  image2: "/venus-freeze2.jpg",
  description: "Non-invasive radiofrequency therapy to smooth skin, reduce localized fat, and improve body contour.",
  standardPrice: "$110USD per session",
  memberPrice: "$95USD per session with package",
  notes: [
    "Painless treatment with no downtime",
    "Multiple sessions recommended for optimal results",
    "Also improves cellulite and lymphatic drainage"
  ],
  details: "Venus Freeze uses multi-polar radiofrequency and pulsed electromagnetic fields to deliver heat into the skin, stimulating collagen and elastin while reducing fat deposits. Ideal for patients seeking skin tightening and smoother contours without surgery.",
  goals: [
    "Tighten loose skin on abdomen, arms, or thighs",
    "Reduce appearance of cellulite",
    "Stimulate collagen and lymphatic drainage"
  ],
  treatableAreas: [
    "Abdomen",
    "Arms",
    "Inner Thighs",
    "Outer Thighs",
    "Buttocks",
    "Back (Bra Fat)",
    "Love Handles"
  ],
  pricing: [
    {
      zone: "Abdomen",
      standardPrice: "$110USD",
      promoPrice: "$95USD"
    },
    {
      zone: "Arms",
      standardPrice: "$110USD",
      promoPrice: "$95USD"
    },
    {
      zone: "Thighs (Inner or Outer)",
      standardPrice: "$120USD",
      promoPrice: "$105USD"
    },
    {
      zone: "Buttocks",
      standardPrice: "$130USD",
      promoPrice: "$115USD"
    }
  ],
  addOns: [
    {
      name: "Enzymatic Therapy",
      description: "Breaks down fibrosis and enhances fat metabolism, pairs well with RF for contouring.",
      standardPrice: "$85USD",
      promoPrice: "$70USD",
      link: "/treatments/enzymatic-therapy"
    }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Hydrate well for 24 hours before treatment to aid lymphatic response."
    },
    {
      label: "Pre-Treatment",
      note: "Avoid heavy meals and caffeine 2 hours before session."
    },
    {
      label: "Post-Treatment",
      note: "Slight redness or warmth may occur and usually resolves within a few hours."
    },
    {
      label: "Post-Treatment",
      note: "Engage in light physical activity and drink water to help flush toxins."
    },
    {
      label: "Post-Treatment",
      note: "Multiple sessions (typically 6–8) are recommended for long-term contouring effects."
    }
  ],
  faq: [
    {
      question: "Is Venus Freeze painful?",
      answer: "No, it’s a comfortable treatment often described as a hot stone massage."
    },
    {
      question: "How soon will I see results?",
      answer: "You may notice some tightening after the first session, but full results develop over 6–8 treatments."
    },
    {
      question: "How long do results last?",
      answer: "Results can last several months, especially when paired with healthy habits and maintenance sessions."
    },
    {
      question: "Can this replace liposuction?",
      answer: "No, Venus Freeze is ideal for mild to moderate contouring. It is not a substitute for surgical fat removal."
    },
    {
      question: "Is there downtime?",
      answer: "No downtime—patients return to normal activities immediately after each session."
    }
  ]
},
{
  slug: "enzymatic-therapy",
  category: "skin-tightening",
  categoryDisplayName: "Skin Tightening & Sculpting",
  displayName: "Enzymatic Remodeling Therapy",
  isPopular: false,
  image: "/body.jpg",
  image2: "/enzymatic2.jpg",
  description: "Localized fat reduction and fibrosis breakdown using targeted enzyme therapy for smoother contour and skin texture.",
  standardPrice: "$130USD per session",
  memberPrice: "$110USD per session with package",
  notes: [
    "Non-surgical injectable treatment with visible skin smoothing effects",
    "Multiple sessions typically required",
    "Ideal for post-liposuction fibrosis, localized fat, and skin tone improvement"
  ],
  details: "Enzymatic therapy uses lipolytic and anti-fibrotic enzymes injected into specific areas to break down dense connective tissue, improve circulation, and promote fat metabolism. Commonly used for patients post-lipo or with stubborn pockets of fat or fibrosis.",
  goals: [
    "Break down post-lipo fibrosis",
    "Improve localized fat reduction",
    "Even out texture and skin tone"
  ],
  treatableAreas: [
    "Abdomen",
    "Arms",
    "Thighs",
    "Back",
    "Flanks",
    "Under Chin (Submental)"
  ],
  pricing: [
    {
      zone: "Localized Area (any small zone)",
      standardPrice: "$130USD",
      promoPrice: "$110USD"
    },
    {
      zone: "Larger Zones (abdomen, thighs, flanks)",
      standardPrice: "$160USD",
      promoPrice: "$140USD"
    }
  ],
  addOns: [
    {
      name: "RF Body Sculpting",
      description: "Radiofrequency treatment for improved skin tightening and lymphatic drainage following enzyme breakdown.",
      standardPrice: "$95USD",
      promoPrice: "$85USD",
      link: "/treatments/venus-freeze"
    }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid anti-inflammatories and alcohol 24 hours prior to reduce bruising risk."
    },
    {
      label: "Pre-Treatment",
      note: "Hydrate well to support lymphatic drainage post-treatment."
    },
    {
      label: "Post-Treatment",
      note: "Bruising and tenderness are common for 2–5 days in treated areas."
    },
    {
      label: "Post-Treatment",
      note: "Wear compression garments if recommended by provider for enhanced results."
    },
    {
      label: "Post-Treatment",
      note: "Lymphatic massage or movement is encouraged to assist enzyme clearance."
    }
  ],
  faq: [
    {
      question: "Is this the same as mesotherapy?",
      answer: "While similar in concept, enzymatic remodeling uses specific enzymes rather than lipolytic cocktails, and is more effective for fibrosis and post-lipo recovery."
    },
    {
      question: "How many sessions will I need?",
      answer: "Typically 4–6 sessions are recommended, spaced 1–2 weeks apart, depending on severity and area."
    },
    {
      question: "Can I combine this with RF or massage?",
      answer: "Yes, combination therapy enhances drainage and skin tightening. RF or lymphatic massage is often recommended after enzyme sessions."
    },
    {
      question: "Does it hurt?",
      answer: "Mild discomfort or stinging during injection is normal, followed by soreness or light bruising."
    },
    {
      question: "How soon will I see results?",
      answer: "Initial smoothing may be visible within 1–2 weeks. More dramatic improvements occur gradually over several sessions."
    }
  ]
},
{
  slug: "rf-enzymatic",
  category: "skin-tightening",
  categoryDisplayName: "Skin Tightening & Sculpting",
  displayName: "RF + Enzymatic Body Treatment",
  isPopular: false,
  image: "/body.jpg",
  image2: "/rf-enzymatic2.jpg",
  description: "Synergistic treatment combining radiofrequency and enzyme therapy to sculpt the body, reduce fibrosis, and tighten skin.",
  standardPrice: "$190USD per session",
  memberPrice: "$165USD per session with package",
  notes: [
    "Ideal for post-liposuction fibrosis, uneven skin, and localized fat",
    "Combines RF-induced tightening with enzyme-based contouring",
    "Visible improvement in tone and smoothness with repeated sessions"
  ],
  details: "This treatment merges two powerful technologies: radiofrequency for dermal heating and collagen stimulation, and enzymatic injections for fat breakdown and fibrosis reduction. Recommended for post-lipo patients or individuals seeking body refinement without surgery.",
  goals: [
    "Enhance skin tightening",
    "Reduce subcutaneous fibrosis",
    "Refine body contour"
  ],
  treatableAreas: [
    "Abdomen",
    "Arms",
    "Thighs",
    "Back",
    "Flanks",
    "Under Chin (Submental)"
  ],
  pricing: [
    {
      zone: "Localized Combo Area",
      standardPrice: "$190USD",
      promoPrice: "$165USD"
    }
  ],
  addOns: [
    {
      name: "Lymphatic Drainage Massage",
      description: "Encourages detox and fluid movement post-enzyme treatment for faster recovery.",
      standardPrice: "$60USD",
      promoPrice: null,
      link: "/treatments/swedish-massage"
    }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid anti-inflammatory meds and alcohol for 24 hours before your session."
    },
    {
      label: "Pre-Treatment",
      note: "Drink plenty of water to support the body’s elimination process."
    },
    {
      label: "Post-Treatment",
      note: "Bruising, soreness, or heat in the treated area is normal and temporary."
    },
    {
      label: "Post-Treatment",
      note: "Wear compression if advised and avoid strenuous workouts for 24 hours."
    },
    {
      label: "Post-Treatment",
      note: "Visible changes typically occur within 1–2 weeks with optimal results after 4+ sessions."
    }
  ],
  faq: [
    {
      question: "Why combine RF and enzymes?",
      answer: "RF improves skin tightening and circulation, while enzymes reduce fat and fibrosis. The combo creates a stronger reshaping effect."
    },
    {
      question: "How often can I do this treatment?",
      answer: "Sessions can be done every 1–2 weeks depending on your provider’s recommendation."
    },
    {
      question: "Is it painful?",
      answer: "The RF portion feels like a warm massage. Enzymatic injections may cause brief stinging or tenderness afterward."
    },
    {
      question: "Do I need compression wear?",
      answer: "In many cases, yes. Your provider will guide you depending on the area treated and your response."
    }
  ]
},
{
  slug: "co2-laser",
  category: "laser-resurfacing",
  categoryDisplayName: "Laser Treatments & Skin Resurfacing",
  displayName: "CO₂ Laser Resurfacing (AcuPulse)",
  isPopular: true,
  image: "/laser-co2.jpg",
  image2: "/laser-co2-2.jpg",
  description: "Deep fractional CO₂ laser therapy to repair damaged skin, reduce wrinkles, and renew overall texture and tone.",
  standardPrice: "Varies by area",
  memberPrice: "Package pricing available",
  notes: [
    "Requires consultation for clearance and prep",
    "Downtime ranges from 3–7 days depending on intensity",
    "Most patients need 1–3 sessions spaced 2+ months apart"
  ],
  details: "CO₂ laser delivers fractional ablative energy to stimulate deep skin regeneration. It vaporizes microcolumns of tissue, triggering collagen production and promoting smoother, healthier skin. Ideal for acne scars, wrinkles, sun damage, and dull skin tone.",
  goals: [
    "Fade deep wrinkles and lines",
    "Smooth acne scars and uneven skin",
    "Brighten tone and rejuvenate texture"
  ],
  treatableAreas: [
    "Full Face",
    "Perioral Lines (Smoker’s Lines)",
    "Eye Area",
    "Neck",
    "Chest (Décolleté)",
    "Stretch Marks",
    "Surgical Scars",
    "Hands"
  ],
  pricing: [
    { zone: "Perioral Area", standardPrice: "$195USD", promoPrice: "$165USD" },
    { zone: "Under-Eyes", standardPrice: "$195USD", promoPrice: "$165USD" },
    { zone: "Full Face", standardPrice: "$460USD", promoPrice: "$415USD" },
    { zone: "Neck", standardPrice: "$225USD", promoPrice: "$200USD" },
    { zone: "Chest", standardPrice: "$260USD", promoPrice: "$230USD" }
  ],
  addOns: [
    {
      name: "PRP Add-On",
      description: "Accelerates healing, reduces redness, and enhances collagen output post-laser.",
      standardPrice: "$90USD",
      promoPrice: null,
      link: "/treatments/prp"
    }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid sun exposure, retinoids, and acids for 7 days before your session."
    },
    {
      label: "Pre-Treatment",
      note: "Discontinue any exfoliating treatments or harsh products prior to laser."
    },
    {
      label: "Post-Treatment",
      note: "Redness, swelling, and peeling are expected and part of the healing process."
    },
    {
      label: "Post-Treatment",
      note: "Keep the area clean and moisturized. Avoid direct sun until fully healed."
    },
    {
      label: "Post-Treatment",
      note: "Use only provider-recommended skincare during recovery."
    },
    {
      label: "Post-Treatment",
      note: "Makeup may be worn after 5–7 days, once the skin has fully re-epithelialized."
    }
  ],
  faq: [
    {
      question: "Is CO₂ laser painful?",
      answer: "Topical anesthetic is applied prior to the session. Most patients describe it as warm with occasional sharp zaps. Mild discomfort may persist for 1–2 days."
    },
    {
      question: "How long is recovery?",
      answer: "Expect 5–7 days of visible healing depending on intensity. Redness may persist for a couple of weeks but can be covered with makeup after peeling stops."
    },
    {
      question: "Can I combine this with PRP or other treatments?",
      answer: "Yes! PRP can speed up healing and enhance results. Other treatments like microneedling or injectables should be timed strategically—your provider will guide you."
    },
    {
      question: "How many sessions do I need?",
      answer: "Many patients see dramatic results after one session, but deeper scars or advanced aging may benefit from 2–3 treatments spaced out over several months."
    }
  ]
},
{
  slug: "ipl",
  category: "laser-resurfacing",
  categoryDisplayName: "Laser Treatments & Skin Resurfacing",
  displayName: "IPL Photofacial (Harmony XL)",
  isPopular: false,
  image: "/ipl.jpg",
  image2: "/ipl2.jpg",
  description: "Light-based therapy to reduce sun damage, pigmentation, redness, and boost overall skin clarity.",
  standardPrice: "$170USD per session",
  memberPrice: "$145USD",
  notes: [
    "Package pricing available for multiple sessions",
    "Requires photo evaluation for clearance",
    "No active tan or self-tanner before session"
  ],
  details: "IPL (Intense Pulsed Light) delivers broad-spectrum light to target pigment, sun spots, redness, and broken capillaries. It gently resurfaces and revitalizes without damaging the top layer of skin.",
  goals: [
    "Reduce pigmentation and age spots",
    "Minimize redness and rosacea",
    "Brighten dull skin and improve tone"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Chest",
    "Hands",
    "Shoulders",
    "Arms"
  ],
  pricing: [
    { zone: "Full Face", standardPrice: "$170USD", promoPrice: "$145USD" },
    { zone: "Chest", standardPrice: "$185USD", promoPrice: "$160USD" },
    { zone: "Face + Neck + Chest", standardPrice: "$395USD", promoPrice: "$350USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid sun exposure, tanning beds, and self-tanners for 2 weeks before treatment."
    },
    {
      label: "Pre-Treatment",
      note: "Discontinue retinoids or acids 3–5 days prior to your session."
    },
    {
      label: "Post-Treatment",
      note: "Pigmented areas may darken temporarily before flaking off over 5–7 days."
    },
    {
      label: "Post-Treatment",
      note: "Use SPF daily to maintain results and prevent new pigmentation."
    }
  ],
  faq: [
    {
      question: "How many sessions will I need?",
      answer: "Most patients need 3–5 sessions spaced 3–4 weeks apart for best results."
    },
    {
      question: "Is there downtime?",
      answer: "There is no official downtime. However, pigmented areas may darken or flake for a few days post-treatment."
    },
    {
      question: "Can I wear makeup after IPL?",
      answer: "Yes, makeup can be worn immediately unless otherwise advised by your provider."
    },
    {
      question: "Does IPL hurt?",
      answer: "Patients describe it as a warm snap—similar to a rubber band. It’s tolerable and quick."
    }
  ]
},
{
  slug: "laser-hair-removal",
  category: "laser-resurfacing",
  categoryDisplayName: "Laser Treatments & Skin Resurfacing",
  displayName: "Laser Hair Removal (Soprano Titanium ICE)",
  isPopular: true,
  image: "/hair-removal.jpg",
  image2: "/hair-removal2.jpg",
  description: "Pain-free laser hair removal for all skin types using the Alma Soprano Titanium ICE system.",
  standardPrice: "Starts at $39USD per session",
  memberPrice: "Discounted packages available",
  notes: [
    "6–8 sessions recommended for full clearance",
    "Maintenance touch-ups may be needed 1–2x per year",
    "Safe for tanned and darker skin tones"
  ],
  details: "The Alma Soprano Titanium uses triple-wavelength laser energy and ICE cooling to deliver virtually painless, fast, and effective hair reduction. It targets follicles at all growth stages for long-lasting results.",
  goals: [
    "Permanently reduce unwanted hair",
    "Improve skin texture and minimize ingrowns",
    "Provide safe and comfortable treatments for all tones"
  ],
  treatableAreas: [
    "Upper Lip",
    "Chin",
    "Underarms",
    "Bikini Line",
    "Brazilian",
    "Full Legs",
    "Arms",
    "Back",
    "Chest",
    "Face",
    "Neck"
  ],
  pricing: [
    { zone: "Upper Lip", standardPrice: "$39USD", promoPrice: "$35USD" },
    { zone: "Underarms", standardPrice: "$65USD", promoPrice: "$55USD" },
    { zone: "Bikini Line", standardPrice: "$89USD", promoPrice: "$75USD" },
    { zone: "Brazilian", standardPrice: "$120USD", promoPrice: "$105USD" },
    { zone: "Full Legs", standardPrice: "$225USD", promoPrice: "$199USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Shave the treatment area the day before your session. Do not wax or pluck."
    },
    {
      label: "Pre-Treatment",
      note: "Avoid sun exposure and tanning for 2 weeks prior to treatment."
    },
    {
      label: "Post-Treatment",
      note: "You may experience redness or warmth for a few hours. Avoid hot showers, saunas, and exfoliants for 24–48 hours."
    },
    {
      label: "Post-Treatment",
      note: "Hair will shed gradually over 1–3 weeks. Don't pluck or wax between sessions."
    }
  ],
  faq: [
    {
      question: "Is laser hair removal permanent?",
      answer: "It offers permanent hair reduction. Most clients see 80–90% reduction after completing a full series."
    },
    {
      question: "Does it hurt?",
      answer: "Our system uses ICE cooling for a virtually painless experience. Most patients feel warmth or a mild snap."
    },
    {
      question: "Can I get treated if I have dark skin?",
      answer: "Yes! Soprano Titanium is safe for all Fitzpatrick skin types—including tanned skin."
    },
    {
      question: "How often should I come in?",
      answer: "Sessions are spaced every 4–6 weeks for body and 2–4 weeks for facial areas depending on the growth cycle."
    }
  ]
},
{
  slug: "microneedling",
  category: "microneedling-rf",
  categoryDisplayName: "Microneedling & RF Skin Rejuvenation",
  displayName: "Microneedling Skin Renewal",
  isPopular: false,
  image: "/microneedling.jpg",
  image2: "/microneedling2.jpg",
  description: "Refine texture, shrink pores, and stimulate collagen through precision microneedling using fine sterile needles.",
  standardPrice: "$140USD per session",
  memberPrice: "$120USD",
  notes: [
    "3–6 sessions recommended for optimal results",
    "Safe for most skin types",
    "Downtime: 1–3 days of redness possible"
  ],
  details: "Microneedling uses fine needles to create micro-channels in the skin, triggering the body’s natural healing response and promoting collagen, elastin, and skin cell regeneration. It improves texture, firmness, and reduces scarring over time.",
  goals: [
    "Improve skin texture and tone",
    "Reduce acne scars and fine lines",
    "Shrink enlarged pores"
  ],
  treatableAreas: [
    "Full Face",
    "Neck",
    "Décolleté",
    "Back",
    "Hands"
  ],
  pricing: [
    { zone: "Face", standardPrice: "$140USD", promoPrice: "$120USD" },
    { zone: "Face + Neck", standardPrice: "$170USD", promoPrice: "$150USD" },
    { zone: "Face + Neck + Décolleté", standardPrice: "$190USD", promoPrice: "$165USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid retinoids, AHAs/BHAs, and exfoliation for 3 days prior."
    },
    {
      label: "Pre-Treatment",
      note: "No active acne, open wounds, or infections at the treatment site."
    },
    {
      label: "Post-Treatment",
      note: "Expect redness similar to a sunburn for 24–72 hours."
    },
    {
      label: "Post-Treatment",
      note: "Avoid sun, sweating, and active skincare for 2–3 days post-treatment."
    }
  ],
  faq: [
    {
      question: "How many sessions will I need?",
      answer: "Most patients need 3–6 sessions spaced 4–6 weeks apart for best results."
    },
    {
      question: "Can I wear makeup after?",
      answer: "It’s recommended to wait 24–48 hours post-treatment before applying makeup."
    },
    {
      question: "Is it safe for darker skin?",
      answer: "Yes, microneedling is generally safe for all skin tones with proper protocols."
    }
  ]
},
{
  slug: "rf-microneedling",
  category: "microneedling-rf",
  categoryDisplayName: "Microneedling & RF Skin Rejuvenation",
  displayName: "Scarlet RF Microneedling",
  isPopular: true,
  image: "/microneedling.jpg",
  image2: "/scarlet.jpg",
  description: "Combines microneedling with fractional radiofrequency to lift, tighten, and resurface skin with minimal downtime.",
  standardPrice: "$265USD per session",
  memberPrice: "$225USD",
  notes: [
    "3–4 sessions spaced 4–6 weeks apart recommended",
    "Safe for all skin types",
    "Mild redness may last 1–2 days"
  ],
  details: "Scarlet S uses short-pulse radiofrequency delivered through microneedles to stimulate deeper layers of skin for collagen remodeling, tightening, and scar reduction. It enhances firmness and texture without damaging the skin’s surface.",
  goals: [
    "Lift and tighten sagging skin",
    "Reduce acne scars and large pores",
    "Improve fine lines and skin laxity"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Décolleté",
    "Jawline",
    "Acne scars",
    "Stretch marks"
  ],
  pricing: [
    { zone: "Face", standardPrice: "$265USD", promoPrice: "$225USD" },
    { zone: "Face + Neck", standardPrice: "$310USD", promoPrice: "$275USD" },
    { zone: "Face + Neck + Décolleté", standardPrice: "$350USD", promoPrice: "$310USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid blood thinners, alcohol, and caffeine 24 hours before your session."
    },
    {
      label: "Pre-Treatment",
      note: "Discontinue active skincare 3 days prior to treatment."
    },
    {
      label: "Post-Treatment",
      note: "Expect redness, swelling, or tightness for 1–2 days post-treatment."
    },
    {
      label: "Post-Treatment",
      note: "Avoid sun exposure and heat-based treatments for 72 hours."
    }
  ],
  faq: [
    {
      question: "How is this different from regular microneedling?",
      answer: "Scarlet RF adds radiofrequency energy to microneedling for deeper collagen remodeling and skin tightening."
    },
    {
      question: "Is there downtime?",
      answer: "Most patients experience redness and tightness for 24–48 hours, with minimal to no peeling."
    },
    {
      question: "Does it hurt?",
      answer: "Topical numbing cream is applied before the procedure for comfort. Most describe it as tolerable."
    }
  ]
},
{
  slug: "skin-boosters",
  category: "microneedling-rf",
  categoryDisplayName: "Microneedling & RF Skin Rejuvenation",
  displayName: "Skin Booster Cocktails",
  isPopular: false,
  image: "/meso.jpg",
  image2: "/meso2.jpg",
  description: "Customized injections of vitamins, peptides, and hydrating agents for radiant, youthful-looking skin.",
  standardPrice: "From $165USD",
  memberPrice: "From $145USD",
  notes: [
    "May be applied via microneedling, microinjections, or topically post-RF treatment",
    "Commonly combined with Scarlet RF or Ultraformer MPT",
    "3 sessions recommended for optimal glow and hydration"
  ],
  details: "Skin boosters are nutrient-rich cocktails containing hyaluronic acid, vitamins, peptides, and amino acids. They are infused directly into the dermis to improve hydration, elasticity, and skin tone. Ideal for dull, dehydrated, or tired-looking skin.",
  goals: [
    "Deep hydration and skin radiance",
    "Stimulate collagen production",
    "Improve elasticity and texture"
  ],
  treatableAreas: [
    "Full Face",
    "Neck",
    "Décolleté",
    "Hands",
    "Back of arms"
  ],
  pricing: [
    { zone: "Standard Hydration", standardPrice: "$165USD", promoPrice: "$145USD" },
    { zone: "Glow Booster Cocktail", standardPrice: "$180USD", promoPrice: "$160USD" },
    { zone: "Peptide + HA Firming", standardPrice: "$200USD", promoPrice: "$180USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid blood thinners and alcohol 24 hours prior to minimize bruising."
    },
    {
      label: "Post-Treatment",
      note: "Redness or mild swelling may occur at injection points and typically subsides within 1–2 days."
    },
    {
      label: "Post-Treatment",
      note: "Do not massage or apply pressure to the area for 24 hours post-injection."
    }
  ],
  faq: [
    {
      question: "Are results immediate?",
      answer: "Some plumping and glow is visible right away, but full benefits appear over several days as hydration and collagen increase."
    },
    {
      question: "How often should I do this?",
      answer: "A series of 3 treatments spaced 3–4 weeks apart is ideal, followed by maintenance every 3–6 months."
    },
    {
      question: "Can this be done after microneedling?",
      answer: "Yes, skin boosters can be applied topically after microneedling or RF for enhanced penetration and effect."
    }
  ]
},
{
  slug: "rejuran",
  category: "mesotherapy",
  categoryDisplayName: "Mesotherapy & Growth Factor Infusions",
  displayName: "PN/PDRN for Skin Rejuvenation",
  isPopular: true,
  image: "/rejuran.jpg",
  image2: "/rejuran2.jpg",
  description: "Advanced skin regeneration with salmon DNA polynucleotides to repair, firm, and deeply hydrate the skin.",
  standardPrice: "$220USD per session",
  memberPrice: "$190USD",
  notes: [
    "3–4 sessions recommended for cumulative collagen regeneration",
    "Can be injected or used post-microneedling/RF as a topical regenerative serum",
    "Ideal for acne scars, dullness, and aging skin"
  ],
  details: "Rejuran Healer is a PDRN-based treatment that uses DNA fragments derived from salmon to promote skin healing, reduce inflammation, and stimulate fibroblast activity. This leads to stronger, smoother, and more youthful skin over time.",
  goals: [
    "Stimulate cellular regeneration",
    "Improve elasticity and skin firmness",
    "Fade acne scars and fine lines"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Décolleté",
    "Under Eyes",
    "Acne Scars"
  ],
  pricing: [
    { zone: "Rejuran Healer (Full Face)", standardPrice: "$220USD", promoPrice: "$190USD" },
    { zone: "Under Eyes Only", standardPrice: "$110USD", promoPrice: "$95USD" },
    { zone: "Face + Neck", standardPrice: "$260USD", promoPrice: "$230USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid alcohol and anti-inflammatories for 24 hours before treatment."
    },
    {
      label: "Post-Treatment",
      note: "Mild swelling, redness, or pinpoint bumps are normal and resolve within 48–72 hours."
    },
    {
      label: "Post-Treatment",
      note: "Avoid intense heat, sun exposure, or exfoliation for 3 days post-treatment."
    }
  ],
  faq: [
    {
      question: "How is Rejuran different from PRP or HA fillers?",
      answer: "Rejuran contains polynucleotides for cellular regeneration, while PRP uses your own growth factors and HA fillers provide volume. Rejuran is ideal for healing and elasticity."
    },
    {
      question: "Is Rejuran safe for all skin types?",
      answer: "Yes, Rejuran is safe for all skin tones and especially effective for sensitive or damaged skin."
    },
    {
      question: "When will I see results?",
      answer: "Most patients begin to see visible improvements after 2–3 sessions, with full results developing over 6–8 weeks."
    }
  ]
},
{
  slug: "kiara-reju",
  category: "mesotherapy",
  categoryDisplayName: "Mesotherapy & Growth Factor Infusions",
  displayName: "PN + Hyaluronic Acid Booster + Niacinamide",
  isPopular: false,
  image: "/kiara-reju.jpg",
  image2: "/kiara-reju2.jpg",
  description: "Skin booster combining polynucleotides (PN) and hyaluronic acid for deep hydration, repair, and natural glow.",
  standardPrice: "$185USD per session",
  memberPrice: "$160USD",
  notes: [
    "Ideal for dull, dry, or tired-looking skin",
    "Recommended as a 3-session protocol spaced 3–4 weeks apart",
    "Can be applied via microneedling, topical infusion, or microinjections"
  ],
  details: "Kiara Reju is a next-generation skin rejuvenation product that blends hyaluronic acid with salmon-derived polynucleotides (PN) to enhance skin hydration, elasticity, and cellular regeneration. It is gentle yet highly effective, perfect for sensitive or first-time skin booster patients.",
  goals: [
    "Hydrate and plump the skin",
    "Enhance skin tone and radiance",
    "Repair fine lines and texture damage"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Décolleté",
    "Under Eyes",
    "Back of Hands"
  ],
  pricing: [
    { zone: "Full Face", standardPrice: "$185USD", promoPrice: "$160USD" },
    { zone: "Under Eyes Only", standardPrice: "$105USD", promoPrice: "$90USD" },
    { zone: "Face + Neck", standardPrice: "$230USD", promoPrice: "$200USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid anti-inflammatories and alcohol 24 hours before your appointment."
    },
    {
      label: "Post-Treatment",
      note: "Expect mild redness or small bumps that subside within 24–48 hours."
    },
    {
      label: "Post-Treatment",
      note: "Avoid sun exposure and makeup for 24 hours after treatment."
    }
  ],
  faq: [
    {
      question: "How does Kiara Reju compare to Rejuran?",
      answer: "Both contain PN for cellular regeneration, but Kiara Reju adds hyaluronic acid for enhanced hydration and glow."
    },
    {
      question: "When will I see results?",
      answer: "Most patients notice brighter, smoother skin within 7–10 days, with cumulative improvement after each session."
    },
    {
      question: "Can I combine this with other treatments?",
      answer: "Yes, it pairs well with RF microneedling, laser, or facial treatments for enhanced outcomes."
    }
  ]
},
{
  slug: "skinvive",
  category: "mesotherapy",
  categoryDisplayName: "Mesotherapy & Growth Factor Infusions",
  displayName: "SkinVive by Juvéderm",
  isPopular: true,
  image: "/skinvive.jpg",
  image2: "/skinvive2.jpg",
  description: "FDA-approved skin hydration injectable that smooths texture and adds glow using hyaluronic acid microdroplets.",
  standardPrice: "$250USD",
  memberPrice: "$220USD",
  notes: [
    "Perfect for dull, dry, or uneven skin texture",
    "Lasts up to 6 months with visible glow and improved smoothness",
    "Minimal downtime, ideal for busy patients"
  ],
  details: "SkinVive by Juvéderm is a microdroplet hyaluronic acid injection that hydrates skin from within. It improves texture, radiance, and moisture retention without adding volume. FDA-approved for the cheeks and safe for most skin types.",
  goals: [
    "Boost skin hydration",
    "Improve texture and glow",
    "Smooth fine lines without adding volume"
  ],
  treatableAreas: [
    "Cheeks",
    "Face",
    "Neck"
  ],
  pricing: [
    { zone: "Cheeks", standardPrice: "$250USD", promoPrice: "$220USD" },
    { zone: "Cheeks + Neck", standardPrice: "$300USD", promoPrice: "$265USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid alcohol, aspirin, and anti-inflammatories 24 hours before."
    },
    {
      label: "Post-Treatment",
      note: "Mild swelling or tenderness may occur at injection sites and typically resolves within 48 hours."
    },
    {
      label: "Post-Treatment",
      note: "Do not massage or apply pressure to the treated area for 24 hours."
    }
  ],
  faq: [
    {
      question: "Is SkinVive the same as dermal fillers?",
      answer: "No, SkinVive hydrates and smooths the skin without adding volume. It’s designed for radiance, not contour."
    },
    {
      question: "When will I see results?",
      answer: "Glow and skin softness can appear within a few days, with continued improvement over 2–4 weeks."
    },
    {
      question: "How long does SkinVive last?",
      answer: "Up to 6 months for most patients. Maintenance every 5–6 months is ideal for best results."
    }
  ]
},
{
  slug: "tkn-ha3",
  category: "mesotherapy",
  categoryDisplayName: "Mesotherapy & Growth Factor Infusions",
  displayName: "TKN HA‑3 Mesotherapy",
  isPopular: false,
  image: "/tkn-ha3.jpg",
  image2: "/tkn-ha3-2.jpg",
  description: "Advanced mesotherapy cocktail of hyaluronic acid, antioxidants, and amino acids to deeply nourish and hydrate aging or dehydrated skin.",
  standardPrice: "$155USD per session",
  memberPrice: "$135USD",
  notes: [
    "Recommended in protocols of 3 to 5 sessions spaced 2–4 weeks apart",
    "Can be applied with microneedling or superficial microinjections",
    "Ideal for smokers, sun-damaged, or dry skin types"
  ],
  details: "TKN HA-3 is a revitalizing mesotherapy solution rich in hyaluronic acid, vitamins, amino acids, and antioxidants. It restores hydration, improves texture, and promotes regeneration. Commonly applied using microneedling or mesogun for optimal absorption.",
  goals: [
    "Restore hydration and elasticity",
    "Revitalize dull or tired-looking skin",
    "Improve tone and skin barrier function"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Chest",
    "Back of Hands"
  ],
  pricing: [
    { zone: "Full Face", standardPrice: "$155USD", promoPrice: "$135USD" },
    { zone: "Face + Neck", standardPrice: "$195USD", promoPrice: "$170USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Hydrate well and avoid exfoliants, retinol, or sun exposure 48 hours prior to your appointment."
    },
    {
      label: "Post-Treatment",
      note: "Avoid makeup and sun exposure for 24–48 hours. Mild redness or sensitivity may occur."
    }
  ],
  faq: [
    {
      question: "How is this different from SkinVive or Rejuran?",
      answer: "TKN HA-3 focuses more on hydration and antioxidant protection, while SkinVive focuses on smoothness and Rejuran on regeneration."
    },
    {
      question: "Can it be used on darker skin types?",
      answer: "Yes, TKN HA-3 is suitable for all skin tones and types, including sensitive and melanin-rich skin."
    }
  ]
},
{
  slug: "prp",
  category: "mesotherapy",
  categoryDisplayName: "Mesotherapy & Growth Factor Infusions",
  displayName: "PRP & PRFM – Platelet Therapy",
  isPopular: true,
  image: "/prp.jpg",
  image2: "/prfm.jpg",
  description: "Regenerative skin therapy using your body’s own platelets and fibrin matrix to repair, tighten, and rejuvenate.",
  standardPrice: "$180USD (PRP) – $230USD (PRFM)",
  memberPrice: "$160USD – $210USD",
  notes: [
    "PRFM offers longer-lasting growth factor release compared to PRP",
    "Ideal for dark circles, skin laxity, fine lines, and scarring",
    "Safe and natural – no foreign substances"
  ],
  details: "PRP (Platelet-Rich Plasma) and PRFM (Platelet-Rich Fibrin Matrix) are regenerative therapies derived from a small sample of your own blood. After centrifugation, the platelet-rich component is extracted and injected or microneedled into the skin, stimulating collagen production, healing, and rejuvenation.",
  goals: [
    "Reduce fine lines and dark circles",
    "Rejuvenate under eyes and facial skin",
    "Stimulate collagen for long-term skin quality"
  ],
  treatableAreas: [
    "Under Eyes",
    "Face",
    "Neck",
    "Scalp (for hair restoration)",
    "Acne Scars",
    "Stretch Marks"
  ],
  pricing: [
    { zone: "Under Eyes – PRP", standardPrice: "$180USD", promoPrice: "$160USD" },
    { zone: "Under Eyes – PRFM", standardPrice: "$230USD", promoPrice: "$210USD" },
    { zone: "Full Face – PRP", standardPrice: "$220USD", promoPrice: "$195USD" },
    { zone: "Full Face – PRFM", standardPrice: "$270USD", promoPrice: "$245USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Hydrate well for 24 hours before your appointment to ensure a successful blood draw."
    },
    {
      label: "Post-Treatment",
      note: "Swelling, redness, or pinpoint bruising may occur and resolve within 1–3 days."
    },
    {
      label: "Post-Treatment",
      note: "Avoid blood thinners, alcohol, and sun exposure for at least 24 hours."
    }
  ],
  faq: [
    {
      question: "What is the difference between PRP and PRFM?",
      answer: "PRFM includes a fibrin matrix that holds growth factors in place longer, allowing extended regeneration over days instead of hours."
    },
    {
      question: "How many treatments will I need?",
      answer: "Most patients benefit from 2–3 sessions spaced 4–6 weeks apart, followed by maintenance every 6–12 months."
    },
    {
      question: "Can I do this with microneedling?",
      answer: "Yes. Combining PRP or PRFM with microneedling enhances collagen stimulation and helps penetrate growth factors more deeply into the skin."
    }
  ]
},
{
  slug: "hydrafacial",
  category: "facials",
  categoryDisplayName: "Facials & Add‑Ons",
  displayName: "HydraFacial MD – Face And/Or Back",
  isPopular: true,
  image: "/hydrafacial.jpg",
  image2: "/hydrafacial2.jpg",
  description: "The ultimate 3-step facial for deep cleansing, extraction, and hydration using patented vortex fusion technology.",
  standardPrice: "$155USD Face, $195USD Back",
  memberPrice: "$135USD Face, $170USD Back",
  notes: [
    "No downtime, makeup can be applied the same day",
    "Safe for all skin tones and sensitive skin types",
    "Includes optional manual extractions when needed"
  ],
  details: "HydraFacial MD is a multi-step, medical-grade facial that uses patented suction and serum infusion to cleanse, exfoliate, and deeply hydrate your skin. Suitable for acne-prone, dull, or congested complexions.",
  goals: [
    "Deeply cleanse and exfoliate skin",
    "Unclog pores and remove blackheads",
    "Hydrate and brighten complexion"
  ],
  treatableAreas: [
    "Full Face",
    "Upper Back",
    "Shoulders"
  ],
  pricing: [
    { zone: "Full Face", standardPrice: "$155USD", promoPrice: "$135USD" },
    { zone: "Upper Back", standardPrice: "$195USD", promoPrice: "$170USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid retinol and exfoliants 48 hours before your appointment."
    },
    {
      label: "Post-Treatment",
      note: "Expect instant glow with no downtime. Apply sunscreen and avoid harsh products for 24 hours."
    }
  ],
  faq: [
    {
      question: "How often should I get a HydraFacial?",
      answer: "Monthly sessions are ideal for maintaining clear, radiant skin, though a single session can provide immediate results."
    },
    {
      question: "Is HydraFacial good for acne?",
      answer: "Yes, it helps to unclog pores, reduce blackheads, and gently exfoliate acne-prone skin."
    },
    {
      question: "Can I wear makeup after?",
      answer: "Yes, but most patients prefer to enjoy their post-glow naturally. You can reapply makeup after 6–12 hours if desired."
    }
  ]
},
{
  slug: "casmara-purifying",
  category: "facials",
  categoryDisplayName: "Facials & Add‑Ons",
  displayName: "Casmara Purifying Algae Facial",
  isPopular: false,
  image: "/facials.jpg",
  image2: "/facials2.jpg",
  description: "Detoxifying algae mask facial that targets oily, acne-prone, or congested skin with balancing and calming ingredients.",
  standardPrice: "$85USD",
  memberPrice: "$75USD",
  notes: [
    "Includes manual extractions",
    "Ideal for teens, oily skin, or congested pores",
    "Soothing formula calms inflammation and redness"
  ],
  details: "This Casmara professional facial uses purifying algae extract and sebum-regulating actives to cleanse, calm, and detox the skin. Perfect for breakout-prone or congested complexions. Includes steam, manual extractions, and high-frequency if needed.",
  goals: [
    "Detoxify pores and clarify skin",
    "Reduce inflammation and oiliness",
    "Restore skin balance and comfort"
  ],
  treatableAreas: [
    "Full Face"
  ],
  pricing: [
    { zone: "Full Face", standardPrice: "$85USD", promoPrice: "$75USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Discontinue use of retinoids or strong exfoliants 2 days prior."
    },
    {
      label: "Post-Treatment",
      note: "Avoid heavy makeup and sun exposure for 24–48 hours after extractions."
    }
  ],
  faq: [
    {
      question: "Is this suitable for sensitive skin?",
      answer: "Yes, the algae mask soothes and reduces redness while purifying the skin without harsh ingredients."
    },
    {
      question: "Does it include extractions?",
      answer: "Yes, manual extractions are included as needed, followed by high-frequency therapy to minimize bacteria."
    }
  ]
},
{
  slug: "casmara-retinol-proage",
  category: "facials",
  categoryDisplayName: "Facials & Add‑Ons",
  displayName: "Casmara Retinol Pro‑Age Facial",
  isPopular: false,
  image: "/facials.jpg",
  image2: "/facials2.jpg",
  description: "Professional-strength retinol treatment designed to promote cellular renewal, improve texture, and reduce fine lines.",
  standardPrice: "$98USD",
  memberPrice: "$88USD",
  notes: [
    "Mild flaking may occur after treatment",
    "Not suitable for use with other retinol products at home",
    "Safe for aging skin, sun damage, and uneven tone"
  ],
  details: "Casmara’s Pro-Age facial uses a high-potency 0.3% retinol complex to deeply renew the skin. Ideal for mature or sun-damaged skin in need of resurfacing and hydration. Includes antioxidants and post-treatment recovery mask.",
  goals: [
    "Stimulate cell turnover and collagen",
    "Reduce fine lines and wrinkles",
    "Improve tone, texture, and radiance"
  ],
  treatableAreas: [
    "Full Face"
  ],
  pricing: [
    { zone: "Full Face", standardPrice: "$98USD", promoPrice: "$88USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid retinoids, exfoliating acids, or waxing for 5 days before your session."
    },
    {
      label: "Post-Treatment",
      note: "Use gentle, hydrating products and SPF daily. Peeling or flaking may occur within 2–4 days."
    }
  ],
  faq: [
    {
      question: "Will I peel after this treatment?",
      answer: "You may experience light flaking or dryness 2–4 days after. This is part of the skin’s renewal process."
    },
    {
      question: "Can I combine this with other facials?",
      answer: "We recommend spacing retinol facials at least 2 weeks apart from exfoliating or microneedling treatments."
    }
  ]
},
{
  slug: "casmara-infinity",
  category: "facials",
  categoryDisplayName: "Facials & Add‑Ons",
  displayName: "Casmara Infinity Anti‑Aging Facial",
  isPopular: false,
  image: "/facials.jpg",
  image2: "/facials2.jpg",
  description: "Luxury anti-aging facial with growth factors, peptides, and Casmara's exclusive Infinity serum for firming and lifting mature skin.",
  standardPrice: "$105USD",
  memberPrice: "$90USD",
  notes: [
    "Includes neck and décolleté zone",
    "Great for special events or regular anti-aging maintenance",
    "Leaves skin glowing, firmer, and deeply nourished"
  ],
  details: "This high-end anti-aging protocol combines biomimetic peptides, firming actives, and Casmara’s potent Infinity serum to visibly firm, hydrate, and restore mature skin. Includes facial massage and lifting mask for enhanced effect.",
  goals: [
    "Firm and lift sagging skin",
    "Hydrate deeply and nourish",
    "Soften fine lines and signs of aging"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Décolleté"
  ],
  pricing: [
    { zone: "Face + Neck + Décolleté", standardPrice: "$105USD", promoPrice: "$90USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "No special preparation needed. Avoid retinoids or peels for 48 hours prior if possible."
    },
    {
      label: "Post-Treatment",
      note: "Your skin will look lifted and luminous right after. Avoid harsh products or exfoliation for 24 hours."
    }
  ],
  faq: [
    {
      question: "Is this facial good for mature skin?",
      answer: "Yes, it’s specifically designed for aging skin to boost firmness, elasticity, and glow."
    },
    {
      question: "Can I wear makeup after this facial?",
      answer: "Yes, but we recommend letting your skin breathe for a few hours post-treatment for best results."
    }
  ]
},
{
  slug: "janssen-ultra-renewal",
  category: "facials",
  categoryDisplayName: "Facials & Add‑Ons",
  displayName: "Janssen Ultra Renewal Facial",
  isPopular: false,
  image: "/facials.jpg",
  image2: "/facials2.jpg",
  description: "A gentle yet effective AHA and peptide-based peel that stimulates skin renewal and refines texture.",
  standardPrice: "$88USD",
  memberPrice: "$78USD",
  notes: [
    "Minimal downtime and safe for most skin types",
    "Ideal for dull or uneven skin tone",
    "Great monthly maintenance option"
  ],
  details: "This advanced facial combines alpha hydroxy acids (AHAs) with peptides to exfoliate, stimulate cell turnover, and brighten the skin. It’s perfect for those seeking renewal without harsh downtime.",
  goals: [
    "Improve skin tone and clarity",
    "Stimulate collagen and cell renewal",
    "Minimize the appearance of pores and fine lines"
  ],
  treatableAreas: [
    "Full Face"
  ],
  pricing: [
    { zone: "Full Face", standardPrice: "$88USD", promoPrice: "$78USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid retinol, acids, or exfoliating agents for 3 days prior."
    },
    {
      label: "Post-Treatment",
      note: "Mild redness may occur. Use hydrating products and sunscreen. Avoid exfoliating products for 3 days."
    }
  ],
  faq: [
    {
      question: "Is this facial suitable for sensitive skin?",
      answer: "Yes, it’s formulated to be effective yet gentle enough for most skin types."
    },
    {
      question: "How often should I get this facial?",
      answer: "It can be done monthly as part of your regular skincare routine."
    }
  ]
},
{
  slug: "janssen-radiance-boost",
  category: "facials",
  categoryDisplayName: "Facials & Add‑Ons",
  displayName: "Janssen Radiance Boost Facial",
  isPopular: false,
  image: "/facials.jpg",
  image2: "/facials2.jpg",
  description: "Brightening antioxidant facial to restore luminosity, even tone, and improve hydration.",
  standardPrice: "$90USD",
  memberPrice: "$80USD",
  notes: [
    "Great for dull, dehydrated, or tired skin",
    "Includes oxygenating and vitamin-rich serums",
    "No downtime—perfect before events"
  ],
  details: "The Radiance Boost Facial uses potent antioxidant serums, hydration masks, and oxygenating techniques to revitalize tired-looking skin. This is your go-to glow facial before any big event or seasonal change.",
  goals: [
    "Re-energize dull skin",
    "Hydrate and plump",
    "Even out skin tone and texture"
  ],
  treatableAreas: [
    "Full Face"
  ],
  pricing: [
    { zone: "Full Face", standardPrice: "$90USD", promoPrice: "$80USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Come with clean skin; no exfoliation needed before your appointment."
    },
    {
      label: "Post-Treatment",
      note: "No downtime expected. Skin may look slightly pink from massage but should fade quickly."
    }
  ],
  faq: [
    {
      question: "Will my skin glow immediately after?",
      answer: "Yes, the facial is designed to enhance radiance and hydration instantly."
    },
    {
      question: "Is this safe during pregnancy?",
      answer: "Yes, this facial does not use any harsh acids or retinol, making it safe for pregnant clients."
    }
  ]
},
{
  slug: "sclerotherapy",
  category: "body-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  displayName: "Sclerotherapy for Vein Removal",
  isPopular: false,
  image: "/body.jpg",
  image2: "/body2.jpg",
  description: "Minimally invasive injection treatment to eliminate spider veins and improve leg appearance.",
  standardPrice: "$135USD",
  memberPrice: "$115USD",
  notes: [
    "Multiple sessions may be needed for optimal results",
    "Compression stockings required post-treatment",
    "Ideal for non-varicose surface veins"
  ],
  details: "Sclerotherapy involves injecting a sclerosing agent into small superficial veins, causing them to collapse and fade from view. It is commonly used to treat spider veins and small varicose veins on the legs.",
  goals: [
    "Reduce visibility of spider veins",
    "Improve leg aesthetics",
    "Prevent worsening of vascular issues"
  ],
  treatableAreas: [
    "Thighs",
    "Calves",
    "Ankles"
  ],
  pricing: [
    { zone: "One Leg (Up to 3 zones)", standardPrice: "$135USD", promoPrice: "$115USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid aspirin, ibuprofen, or alcohol 24 hours prior. Wear loose clothing."
    },
    {
      label: "Post-Treatment",
      note: "Wear compression stockings for 5–7 days. Avoid sun exposure and high-impact activity."
    }
  ],
  faq: [
    {
      question: "How long before I see results?",
      answer: "Veins typically fade over 3–6 weeks. Larger veins may take longer or require more sessions."
    },
    {
      question: "Is the procedure painful?",
      answer: "There may be a slight stinging or cramping sensation, but most patients tolerate it well."
    }
  ]
},
{
  slug: "swedish-massage",
  category: "body-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  displayName: "Relaxing Swedish Massage",
  isPopular: false,
  image: "/body.jpg",
  image2: "/body2.jpg",
  description: "A gentle, full-body massage to relieve tension, improve circulation, and promote overall relaxation.",
  standardPrice: "$65USD",
  memberPrice: "$55USD",
  notes: [
    "Includes aromatherapy upon request",
    "Not a deep tissue massage",
    "Ideal for stress relief and general wellness"
  ],
  details: "This classic Swedish massage uses light to moderate pressure with long, flowing strokes. It helps improve lymphatic flow, reduce stress, and increase oxygen levels in the blood.",
  goals: [
    "Promote relaxation",
    "Relieve muscular tension",
    "Improve blood circulation"
  ],
  treatableAreas: [
    "Full Body"
  ],
  pricing: [
    { zone: "Full Body", standardPrice: "$65USD", promoPrice: "$55USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Arrive well-hydrated. Avoid heavy meals beforehand."
    },
    {
      label: "Post-Treatment",
      note: "Drink plenty of water to support lymphatic drainage. Mild soreness may occur if it's your first massage."
    }
  ],
  faq: [
    {
      question: "Is this massage good for chronic pain?",
      answer: "While it helps with tension, Swedish massage is better for relaxation. Chronic pain may require a deeper modality."
    },
    {
      question: "Can I combine this with other treatments?",
      answer: "Yes, many clients pair it with facials, RF therapy, or body sculpting for a holistic session."
    }
  ]
},
{
  slug: "cupping",
  category: "body-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  displayName: "Cupping Therapy Add‑On",
  isPopular: false,
  image: "/body.jpg",
  image2: "/body2.jpg",
  description: "Therapeutic cupping paired with massage to enhance circulation, relieve tension, and support detoxification.",
  standardPrice: "$25USD",
  memberPrice: "$20USD",
  notes: [
    "Add-on service only, not available as a standalone treatment",
    "May leave temporary circular marks on the skin",
    "Customizable pressure based on comfort level"
  ],
  details: "Cupping therapy uses suction to draw blood flow to targeted areas, reducing inflammation and promoting muscle recovery. It is commonly integrated into massage sessions for added therapeutic benefit.",
  goals: [
    "Stimulate circulation",
    "Relieve muscle tension",
    "Support lymphatic detox"
  ],
  treatableAreas: [
    "Back",
    "Shoulders",
    "Thighs"
  ],
  pricing: [
    { zone: "Single Area (Add‑On)", standardPrice: "$25USD", promoPrice: "$20USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Wear loose clothing. Notify your provider of any skin conditions or medications that affect clotting."
    },
    {
      label: "Post-Treatment",
      note: "Mild soreness or redness is normal. Stay hydrated to support detox."
    }
  ],
  faq: [
    {
      question: "Does cupping hurt?",
      answer: "Most clients feel a tight pulling sensation, not pain. It’s generally well tolerated."
    },
    {
      question: "Will I have marks afterward?",
      answer: "Yes, cupping often leaves painless circular marks that fade within a few days."
    }
  ]
},
{
  slug: "wart-removal",
  category: "body-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  displayName: "Wart & Skin Tag Removal",
  isPopular: false,
  image: "/body.jpg",
  image2: "/body2.jpg",
  description: "Safe clinical removal of warts, skin tags, and benign growths for a smoother, cleaner appearance.",
  standardPrice: "Starting at $45USD",
  memberPrice: "Starting at $40USD",
  notes: [
    "Price varies based on size, quantity, and location",
    "Performed under medical supervision",
    "Post-care instructions will be provided"
  ],
  details: "We use cryotherapy, cautery, or excision techniques to remove benign skin growths. Treatments are quick and performed by trained professionals to minimize scarring and ensure safety.",
  goals: [
    "Remove unsightly growths",
    "Prevent irritation or catching",
    "Restore clear, smooth skin"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Underarms",
    "Torso",
    "Groin",
    "Feet"
  ],
  pricing: [
    { zone: "Small (1–2 lesions)", standardPrice: "$45USD", promoPrice: "$40USD" },
    { zone: "Medium (3–5 lesions)", standardPrice: "$70USD", promoPrice: "$65USD" },
    { zone: "Large (6+ lesions)", standardPrice: "$95USD", promoPrice: "$85USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid applying any creams or ointments on the treatment area before your appointment."
    },
    {
      label: "Post-Treatment",
      note: "Keep the area clean and dry. Avoid sun exposure until fully healed."
    }
  ],
  faq: [
    {
      question: "Is wart removal painful?",
      answer: "You may feel a brief sting or discomfort, but local anesthesia is available if needed."
    },
    {
      question: "Will the growths come back?",
      answer: "Most do not, but recurring lesions may require additional sessions depending on the root cause."
    }
  ]
},
{
  slug: "keloid-injection",
  category: "body-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  displayName: "Keloid Scar Injection",
  isPopular: false,
  image: "/podiatry.jpg",
  image2: "/podiatry2.jpg",
  description: "Targeted corticosteroid or antifibrotic injections to flatten and soften raised keloid scars.",
  standardPrice: "$60USD per session",
  memberPrice: "$50USD per session",
  notes: [
    "Multiple sessions may be required depending on size and response",
    "Performed only under medical supervision",
    "Available for cosmetic or symptomatic relief"
  ],
  details: "This medical treatment involves injecting corticosteroids or specialized anti-fibrotic agents directly into keloid tissue. It helps reduce inflammation, pain, and scar thickness while improving cosmetic appearance over time.",
  goals: [
    "Reduce raised scar thickness",
    "Improve scar appearance",
    "Relieve itching or discomfort"
  ],
  treatableAreas: [
    "Ears",
    "Chest",
    "Shoulders",
    "Back",
    "Jawline",
    "Any area with a keloid scar"
  ],
  pricing: [
    { zone: "Single Injection Area", standardPrice: "$60USD", promoPrice: "$50USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "No special preparation needed unless otherwise directed by the doctor."
    },
    {
      label: "Post-Treatment",
      note: "Expect mild tenderness or redness. Avoid sun exposure and picking the area. Results may take several sessions."
    }
  ],
  faq: [
    {
      question: "How many sessions are needed?",
      answer: "It depends on the scar. Some keloids flatten in 2–3 sessions, while others may need 4 or more spaced over several weeks."
    },
    {
      question: "Are results permanent?",
      answer: "Improvement is usually long-lasting, though recurrence can happen. We monitor each case and adjust treatment as needed."
    }
  ]
},
{
  slug: "nail-fungus-laser",
  category: "podiatry",
  categoryDisplayName: "Medical Podiatry Services",
  displayName: "Laser Nail Fungus Treatment",
  isPopular: false,
  image: "/podiatry.jpg",
  image2: "/podiatry2.jpg",
  description: "Non-invasive laser therapy to eliminate toenail fungus and restore nail clarity.",
  standardPrice: "$95USD per session",
  memberPrice: "$80USD per session",
  notes: [
    "Recommended protocol: 1 session every 2–3 weeks, total 6–8 sessions",
    "Treatment is safe, painless, and requires no downtime"
  ],
  details: "Using focused laser light (K-Laser Blue Derma), this treatment targets fungal colonies beneath the toenail without damaging surrounding tissue. The procedure is safe, effective, and requires no medication.",
  goals: [
    "Kill fungal infection at the root",
    "Improve nail appearance and clarity",
    "Prevent recurrence of infection"
  ],
  treatableAreas: ["Toenails", "Fingernails (case-dependent)"],
  pricing: [
    { zone: "Single Nail", standardPrice: "$25USD", promoPrice: "$20USD" },
    { zone: "Full Foot (5 Nails)", standardPrice: "$95USD", promoPrice: "$80USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Clean feet thoroughly and avoid polish. Let the staff know if you've taken antifungal medications."
    },
    {
      label: "Post-Treatment",
      note: "Avoid re-contamination by disinfecting shoes and socks. Keep nails clean and dry."
    }
  ],
  faq: [
    {
      question: "Does it hurt?",
      answer: "Not at all. Most patients describe it as a warm sensation. There is no downtime or pain afterward."
    },
    {
      question: "When will I see results?",
      answer: "Healthy nail regrowth can take months. However, the fungus dies quickly, and improvement is visible within weeks."
    }
  ]
},
{
  slug: "toenail-extraction",
  category: "podiatry",
  categoryDisplayName: "Medical Podiatry Services",
  displayName: "Toenail Extraction Procedure",
  isPopular: false,
  image: "/podiatry.jpg",
  image2: "/podiatry2.jpg",
  description: "Partial or total nail removal to treat severely ingrown, infected, or damaged toenails.",
  standardPrice: "$115USD",
  memberPrice: "$95USD",
  notes: [
    "Performed by medical professionals using sterile technique",
    "Antibiotics or topical antifungals may be prescribed as needed"
  ],
  details: "This medical procedure removes part or all of the toenail to relieve pressure, drain infection, and promote healthy regrowth. Often recommended for chronic ingrown nails or trauma.",
  goals: [
    "Eliminate pain or infection",
    "Prevent recurrent ingrown nails",
    "Improve nail health and appearance"
  ],
  treatableAreas: ["Big toe", "Lesser toes"],
  pricing: [
    { zone: "Partial Extraction", standardPrice: "$115USD", promoPrice: "$95USD" },
    { zone: "Total Extraction", standardPrice: "$135USD", promoPrice: "$110USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Do not trim nails before the appointment. Wear open footwear if possible."
    },
    {
      label: "Post-Treatment",
      note: "Keep area clean, dry, and covered. Follow wound care instructions and take medication as prescribed."
    }
  ],
  faq: [
    {
      question: "Is the procedure painful?",
      answer: "The area is numbed beforehand, so most patients feel no pain during the procedure. Some mild soreness is expected after."
    },
    {
      question: "Will the nail grow back?",
      answer: "It depends. Partial extractions typically regrow, while full extractions may or may not, depending on matrix involvement."
    }
  ]
},
{
  slug: "calcaneal-spur",
  category: "podiatry",
  categoryDisplayName: "Medical Podiatry Services",
  displayName: "Heel Spur Injection (Calcaneal Spur)",
  isPopular: false,
  image: "/podiatry.jpg",
  image2: "/podiatry2.jpg",
  description: "Targeted injection therapy to reduce inflammation and pain caused by calcaneal spurs and plantar fasciitis.",
  standardPrice: "$95USD",
  memberPrice: "$80USD",
  notes: [
    "Ultrasound-guided if required",
    "Usually includes corticosteroids or regenerative compounds depending on severity"
  ],
  details: "A medical injection is applied to the inflamed tissue around the heel spur to reduce pain and swelling. Often combined with rest, footwear adjustments, or physical therapy.",
  goals: [
    "Reduce heel pain",
    "Minimize inflammation",
    "Support recovery from plantar fasciitis"
  ],
  treatableAreas: ["Heel", "Plantar fascia insertion"],
  pricing: [
    { zone: "Single Injection", standardPrice: "$95USD", promoPrice: "$80USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Avoid taking NSAIDs for 24 hours prior. Inform us of any blood thinners or allergies."
    },
    {
      label: "Post-Treatment",
      note: "Avoid strenuous impact activities for 48 hours. Ice the area if needed. Follow any post-injection care instructions."
    }
  ],
  faq: [
    {
      question: "How long does pain relief last?",
      answer: "It varies. Some patients feel relief in days, others require additional sessions or physical therapy to maintain results."
    },
    {
      question: "Is the injection safe?",
      answer: "Yes. It is a common outpatient procedure performed under medical supervision."
    }
  ]
},
{
  slug: "matrixectomy",
  category: "podiatry",
  categoryDisplayName: "Medical Podiatry Services",
  displayName: "Matrixectomy (Permanent Ingrown Nail Removal)",
  isPopular: false,
  image: "/podiatry.jpg",
  image2: "/podiatry2.jpg",
  description: "Surgical removal of part of the nail matrix to permanently prevent ingrown toenails.",
  standardPrice: "$160USD",
  memberPrice: "$130USD",
  notes: [
    "Recommended after repeated ingrown nail infections or failed conservative treatment",
    "Performed under local anesthesia"
  ],
  details: "Matrixectomy involves destroying or removing a portion of the nail matrix (growth center) to prevent regrowth of the problematic nail edge. It offers a permanent solution to chronic ingrown toenails.",
  goals: [
    "Prevent recurrence of ingrown toenail",
    "Reduce chronic inflammation and infection",
    "Improve toe comfort and function"
  ],
  treatableAreas: ["Big toe", "Lesser toes (case-dependent)"],
  pricing: [
    { zone: "Single Toe", standardPrice: "$160USD", promoPrice: "$130USD" }
  ],
  expectations: [
    {
      label: "Pre-Treatment",
      note: "Don’t trim the toenail beforehand. Bring sandals or loose shoes to wear after the procedure."
    },
    {
      label: "Post-Treatment",
      note: "Keep toe elevated for the first 24 hours. Change dressings as instructed. Avoid tight shoes and intense activity for a few days."
    }
  ],
  faq: [
    {
      question: "Is matrixectomy permanent?",
      answer: "Yes. The goal is to permanently prevent regrowth of the treated nail portion."
    },
    {
      question: "Is the recovery painful?",
      answer: "There may be mild pain for 1–2 days, which can be managed with over-the-counter pain relievers and proper care."
    }
  ]
}
];

export const popularTreatments = treatments.filter(t => t.isPopular);