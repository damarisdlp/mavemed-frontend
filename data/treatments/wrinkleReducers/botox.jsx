export const botox = {
  slug: "wrinkle-reducers-botox",
  category: "wrinkle-reducers",
  categoryDisplayName: "Wrinkle Reducers",
  serviceDisplayName: "Wrinkle Reducer - Botox",
  isPopular: true,
  isPromoEligible: true,
  image: "/botox.jpg",
  image2: "/botox2.jpg",
  description:
    "Smooth dynamic wrinkles and fine lines with precision injectables for a refreshed, youthful appearance.",
  standardPrice: "Price varies per zone",
  promoPrice: "Price varies per zone",
  notes: [
    "Only new patients receive exclusive welcome-prices",
    "Established patients receive exclusive maintenance tier pricing",
    "Maintenance zone pricing is only applicable within 4-5 months after the initial application"
  ],
  details:
  "Neuromodulator injections temporarily relax facial muscles to smooth fine lines and dynamic wrinkles, enhancing skin texture and creating a more youthful, natural-looking appearance.",
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
    "Lip Flip (Gummy Smile)",
    "Eyebrow Lift",
    "Downturned Corners (Sad Smile)",
    "Perioral Lines",
    "Masseters (Jaw Slimming)",
    "Neck Bands (Platysma)",
    "Axillary Hyperhidrosis (Underarms)",
    "Palmar Hyperhidrosis (Hands)"
  ],
  pricing: [
    { 
      serviceChild: "Forehead",                      
      isPromoEligible: true,  
      standardPrice: "$86 USD",  
      promoPrice: "$78 USD",  
      notes: [null] 
    },{ 
      serviceChild: "Frown Lines (Glabella)",        
      isPromoEligible: true,  
      standardPrice: "$145 USD", 
      promoPrice: "$130 USD", 
      notes: [null] 
    },{ 
      serviceChild: "Crow’s Feet",                   
      isPromoEligible: true,  
      standardPrice: "$139 USD", 
      promoPrice: "$126 USD", 
      notes: [null] 
    },{ 
      serviceChild: "Bunny Lines",                   
      isPromoEligible: true,  
      standardPrice: "$48 USD",  
      promoPrice: "$45 USD",  
      notes: [null] 
    },{ 
      serviceChild: "Chin Dimples",                  
      isPromoEligible: true,  
      standardPrice: "$45 USD",  
      promoPrice: "$40 USD",  
      notes: [null] 
    },{ 
      serviceChild: "Perioral Lines",                
      isPromoEligible: false, 
      standardPrice: "$46 USD",  
      promoPrice: null,       
      notes: [null] 
    },{ 
      serviceChild: "Lip Flip (Gummy Smile)",        
      isPromoEligible: true,  
      standardPrice: "$45 USD",  
      promoPrice: "$40 USD",  
      notes: 
      [
        "Only available as part of Perioral Package"
      ] 
    },{ 
      serviceChild: "Downturned Corners",            
      isPromoEligible: true,  
      standardPrice: "$45 USD",  
      promoPrice: "$40 USD",  
      notes: 
      [
        "Only available as part of Perioral Package"
      ] 
    },{ 
      serviceChild: "Eyebrow Lift",                  
      isPromoEligible: false, 
      standardPrice: "$30 USD",  
      promoPrice: null,       
      notes: [null] 
    },{ 
      serviceChild: "Masseters",                     
      isPromoEligible: false, 
      standardPrice: "$225 USD", 
      promoPrice: null,       
      notes: [null] 
    },{ 
      serviceChild: "Neck Bands",                    
      isPromoEligible: false, 
      standardPrice: "$340 USD", 
      promoPrice: null,       
      notes: [null] 
    },{ 
      serviceChild: "Axillary Hyperhidrosis",        
      isPromoEligible: false, 
      standardPrice: "$570 USD", 
      promoPrice: null,       
      notes: [null] 
    },{ 
      serviceChild: "Palmar Hyperhidrosis",          
      isPromoEligible: false, 
      standardPrice: "$570 USD", 
      promoPrice: null,       
      notes: [null] 
    },{
      serviceChild:   "Perioral Package",
      isPromoEligible: true,
      standardPrice:  "$135 USD",
      promoPrice:     "$120 USD",
      notes: [
        "Includes gummy smile, mouth elevators, and chin dimples"
      ]
    },{
      serviceChild:   "Maintenance of Superior Third",
      isPromoEligible: false,
      standardPrice:  "$260 USD",
      promoPrice:     null,
      notes: [
        "Appointment must be within 4-5 months of initial application",
        "Includes forehead, frown lines (glabella), and crow's feet"
      ]
    },
    {
      serviceChild:   "Maintenance of Individual Zone",
      isPromoEligible: false,
      standardPrice:  "$70 USD",
      promoPrice:     null,
      notes: [
        "Appointment must be within 4–5 months of initial application",
        "Applicable to any zone",
        "Zones may be combined at the doctor's discretion based on evaluation"
      ]
    }
  ],
  addOns: [
    {
      serviceParent: "HydraFacial MD – Face And/Or Back",
      serviceChild:  "Face",
      displayName:   "HydraFacial MD - Face",
      link:          "/treatments/facials/hydrafacial"
    },
    {
      serviceParent: "Casmara Purifying Facial Treatment",
      serviceChild:  null,
      displayName:   "Casmara Purifying Facial Treatment",
      link:          "/treatments/facials/casmara/purifying"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid alcohol, ibuprofen, aspirin, or any blood thinners for 24 hours prior to treatment to reduce the risk of bruising.",
      "Refrain from intense physical activity on the day of your appointment.",
      "Inform your provider of any recent vaccinations, medications, or medical conditions."
    ],
    postTreatment: [
      "Avoid touching, rubbing, or applying pressure to the treated areas for at least 4 hours.",
      "Remain upright and avoid lying down flat for 4 hours following treatment.",
      "Skip intense physical activity, alcohol, and saunas for 24 hours post-treatment to reduce the risk of swelling and migration.",
      "Mild swelling or bruising may occur and typically resolves within a few days. Ice can be applied gently if needed.",
      "Results begin to appear within 3–5 days, with full effect visible at 10–14 days."
    ]
  },
  faq: [
  {
    question: "How long does Botox take to work?",
    answer:   "You may begin to see softening of lines within 3 to 5 days, but full results usually appear between 10 to 14 days after treatment."
  },
  {
    question: "How long do Botox results last?",
    answer:   "Botox typically lasts 3 to 4 months. Longevity may vary depending on your metabolism, lifestyle, and treatment area."
  },
  {
    question: "Will I look frozen or unnatural?",
    answer:   "Not at all. Our providers specialize in natural-looking results. We focus on softening movement, not eliminating expression."
  },
  {
    question: "Can I wear makeup or skincare after Botox?",
    answer:   "Yes, but wait at least 4 hours before applying makeup and avoid rubbing the treated areas to prevent product migration."
  },
  {
    question: "Is there any downtime?",
    answer:   "There is no official downtime, though you should avoid lying down, heavy exercise, and alcohol for 24 hours post-treatment."
  },
  {
    question: "Is Botox safe?",
    answer:   "Botox is FDA-approved and considered very safe when administered by trained medical professionals. At Mave, treatments are performed under medical supervision using only certified products."
  },
  {
    question: "Can I combine Botox with other treatments?",
    answer:   "Absolutely. Botox can be safely combined with treatments like HydraFacial, Sculptra, or laser resurfacing for enhanced results. Your provider will guide you on the ideal timing between procedures."
  }
]
};