// Weekly plan with integrated Daily Fuel (momDaily) for breastfeeding mom.
// Week of November 9, 2025 (starting Sunday)

const planData = {
  title: "Weekly Plan",
  meta: {
    weekOf: "2025-11-09",
    notes:
      "Week opens with Sunday split day: takeout for family, Cajun Chicken & Rice Foil Packet for camping night two; Daily Fuel active."
  },

  dailyFuelConfig: {
    enabled: true,
    kcalMode: "auto",
    proteinTargetGPerKg: 1.3,
    breakfastPreference: {
      sausageEggCheeseEnglishMuffin: { enabled: true, targetPerWeek: 4 }
    }
  },

  meals: {
    sunday: {
      id: "sunday",
      title: "Split: Takeout Night (Family) / Cajun Chicken & Rice Foil Packets (You)",
      recipe: {
        title: "Split Meal: Takeout (Family) + Cajun Chicken Foil Packets (Camping)",
        summary:
          "Family gets takeout at home; you enjoy a simple foil-packet Cajun meal for camping night two.",
        yield: "1 serving (camping portion)",
        prepTime: "10 min",
        cookTime: "25–30 min",
        ingredients: [
          { section: "For Family at Home", items: [
            "Order takeout (pizza, Chinese, etc.)"
          ]},
          { section: "For You (Camping) - Cajun Chicken Foil Packets", items: [
            "2 boneless chicken thighs",
            "1/2 cup parboiled rice",
            "1/4 onion, sliced",
            "1/4 bell pepper, sliced",
            "1 tbsp butter or olive oil",
            "1 tsp Cajun seasoning",
            "1/4 tsp garlic powder",
            "Salt & pepper",
            "1 lime wedge"
          ]}
        ],
        steps: [
          "Family: Order and enjoy takeout at home.",
          "Camping prep: Combine chicken, rice, vegetables, butter, and seasonings on a large piece of heavy-duty foil.",
          "Seal foil packet tightly, leaving some room for steam.",
          "Place packet in campfire coals and cook 25–30 min, flipping halfway through.",
          "Carefully open packet (watch for steam), check rice doneness.",
          "Serve with lime wedge or drizzle of ranch dressing."
        ],
        equipment: ["Heavy-duty aluminum foil", "Campfire or coals"]
      }
    }
  },

  momDaily: {
    sunday: {
      breakfast: "SEC sandwich",
      lunch: "Turkey sandwich + apple",
      snackAM: "Boiled eggs + cucumber",
      snackPM: "Greek yogurt + nuts",
      kcalEstimate: 2250,
      proteinEstimate: "100–120 g"
    }
  },

  shopping: {
    "🛒 Consolidated Shopping List": {
      lists: {
        "Dairy & Eggs": [
          { text: "Butter", checked: false },
          { text: "Eggs (on hand)", checked: false }
        ],
        "Meat & Deli": [
          { text: "Chicken thighs (for Cajun foil packets)", checked: false }
        ],
        "Produce": [
          { text: "Onion (1)", checked: false },
          { text: "Bell pepper (1)", checked: false },
          { text: "Lime (1)", checked: false }
        ],
        "Pantry": [
          { text: "Parboiled rice", checked: false },
          { text: "Cajun seasoning", checked: false },
          { text: "Garlic powder", checked: false }
        ]
      }
    }
  },

  prep: {
    ingredients: [
      "Parboiled rice (for foil packets)",
      "Pre-cut onion and bell pepper for easy packing"
    ],
    steps: [
      "Cook and cool rice before packing for trip.",
      "Slice onion and bell pepper; store in reusable bag or container."
    ]
  }
};

window.planData = planData;
