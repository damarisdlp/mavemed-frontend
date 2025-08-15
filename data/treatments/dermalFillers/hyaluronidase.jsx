export const hyaluronidase = {
  slug: "hyaluronidase",
  category: "dermal-fillers",
  categoryDisplayName: "Dermal Fillers (Hyaluronic Acid)",
  serviceDisplayName: "Hyaluronidase Filler Reversal",
  isPopular: false,
  isPromoEligible: false,
  image: "/enzymes.jpg",
  image2: "/enzymes2.jpg",
  description:
    "Dissolve misplaced or undesired hyaluronic acid fillers using hyaluronidase for safe and effective correction.",
  standardPrice: "$45 USD",
  promoPrice: null,
  notes: [
    "Price is per vial",
    "A patch test may be required to rule out allergy",
    "Multiple sessions may be needed for complete dissolution",
    "Follow-up correction with fresh filler is optional"
  ],
  details:
    "Hyaluronidase is an enzyme that breaks down hyaluronic acid-based fillers. It’s used to correct overfilled areas, migrated filler, or address complications like vascular compression. Treatment is quick, safe, and performed only by trained medical personnel at Mave.",
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
      serviceChild: "Hyaluronidase Filler Reversal",
      isPromoEligible: false,
      standardPrice: "$45 USD",
      promoPrice: null,
      notes: ["Price is per vial"]
    }
  ],
  addOns: [
    {
      serviceParent: "Hyaluronic Acid Lip Fillers",
      serviceChild: "Stylage M with Lidocaine",
      displayName: "Lip Fillers - Stylage M with Lidocaine",
      link: "/treatments/dermalFillers/lipFillers"
    },
    {
      serviceParent: "Facial Balancing with Dermal Fillers",
      serviceChild: "Juvéderm Voluma with Lidocaine",
      displayName: "Facial Balancing - Juvéderm Voluma with Lidocaine",
      link: "/treatments/dermalFillers/facialBalancing"
    }
  ],
  expectations: {
    preTreatment: [
      "Discontinue blood thinners 48 hours before (with physician approval) to reduce bruising risk.",
      "Inform your provider of any prior allergic reactions or medical history involving hyaluronidase."
    ],
    postTreatment: [
      "You may experience temporary swelling or redness at the injection site.",
      "Results can be seen within 24–72 hours as the filler dissolves and tissue settles.",
      "Avoid massaging or pressing the treated area unless instructed otherwise."
    ]
  },
  faq: [
    {
      question: "Is hyaluronidase safe?",
      answer:
        "Yes. It is widely used in aesthetic medicine and emergency medicine. We perform a patch test beforehand to check for allergic reactions."
    },
    {
      question: "Will my original filler fully dissolve?",
      answer:
        "In most cases, yes. Some patients may require a second session depending on the amount and age of the filler."
    },
    {
      question: "Can I get new filler afterward?",
      answer:
        "Yes. After complete resolution, we can safely reapply filler using a more strategic and customized approach."
    },
    {
      question: "Does it hurt?",
      answer:
        "You may feel mild discomfort or stinging at the injection site, but the treatment is very quick and tolerable."
    }
  ]
};