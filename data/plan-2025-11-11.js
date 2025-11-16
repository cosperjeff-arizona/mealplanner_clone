// Weekly plan with integrated Daily Fuel (momDaily) for breastfeeding mom.
// Week of November 11, 2025 (Starting Tuesday)

const planData = {
  title: "Weekly Plan",
  meta: {
    weekOf: "2025-11-11",
    notes:
      "4 dinners planned + 1 night out (Swim). Highlights: Crockpot meal for office day, Smashburgers, and the first Holiday Dessert Test (Chai Spiced Pumpkin Tiramisu)."
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
    tuesday: {
      id: "tuesday",
      title: "Crockpot Chicken Fajita Soup",
      recipe: {
        summary:
          "Creamy, spiced chicken soup with peppers and onions. Perfect for an office day; just shred and serve.",
        cookTime: "6-8 hrs (Low)",
        ingredients: [
          "1.5 lbs chicken thighs",
          "1 onion, diced",
          "2 bell peppers (any color), diced",
          "1 (15 oz) can diced tomatoes or salsa",
          "4 cups chicken broth",
          "1 packet taco seasoning (or: chili powder, cumin, paprika)",
          "4 oz cream cheese (stirred in at end)",
          "Toppings: Tortilla chips, avocado, shredded cheese"
        ],
        steps: [
          "Place chicken, onion, peppers, tomatoes/salsa, broth, and seasoning in slow cooker.",
          "Cook on Low for 6-8 hours.",
          "Remove chicken and shred.",
          "Whisk softened cream cheese into the hot broth until melted; return chicken to pot.",
          "Serve topped with chips, avocado, and cheese."
        ],
        equipment: ["Slow Cooker"]
      }
    },
    wednesday: {
      id: "wednesday",
      title: "Swim Lessons (Out)",
      recipe: { summary: "Family night out." }
    },
    thursday: {
      id: "thursday",
      title: "Stovetop Smashburgers & Oven Fries",
      recipe: {
        summary:
          "Classic smashburgers with crispy edges, cooked in stainless steel, served with oven fries.",
        prepTime: "10 min",
        cookTime: "20 min",
        ingredients: [
          "1 lb ground beef (85/15)",
          "4 burger buns",
          "4 slices cheddar cheese",
          "1 bag frozen french fries",
          "Salt & pepper",
          "Toppings: Lettuce, tomato, condiments"
        ],
        steps: [
          "Preheat oven and bake fries according to package instructions.",
          "Divide beef into 4 loose balls (do not pack tight). Season generously with salt/pepper.",
          "Heat stainless steel skillet over high heat. Add beef balls and smash flat immediately.",
          "Sear undisturbed for 2-3 mins until deep crust forms. Flip, add cheese, cover pan briefly to melt.",
          "Serve on buns with fries."
        ],
        equipment: ["12\" Stainless Steel Skillet", "Spatula", "Oven"]
      }
    },
    friday: {
      id: "friday",
      title: "Italian Sausage & Broccolini Pasta",
      recipe: {
        summary:
          "A fast, flavor-forward pasta using crumbled sausage and garlic-roasted broccolini.",
        prepTime: "5 min",
        cookTime: "20 min",
        ingredients: [
          "1 lb Italian sausage (mild or spicy), casings removed",
          "1 lb pasta (orecchiette or penne)",
          "2 bunches broccolini, chopped",
          "3 cloves garlic, minced",
          "1/2 cup parmesan cheese",
          "Olive oil, red pepper flakes"
        ],
        steps: [
          "Boil water and cook pasta.",
          "Meanwhile, brown sausage in a large skillet. Remove sausage, leaving fat.",
          "Add broccolini to the skillet (add olive oil if dry) and sauté/steam until tender-crisp.",
          "Add garlic and cook 1 min.",
          "Toss drained pasta and sausage back into skillet. Finish with parmesan and a splash of pasta water."
        ],
        equipment: ["Large Skillet", "Stock Pot"]
      }
    },
    saturday: {
      id: "saturday",
      title: "Sheet Pan Flank Steak Fajitas",
      recipe: {
        summary:
          "High-heat roasted steak and veggies. Simple prep leaves time for dessert making.",
        prepTime: "15 min",
        cookTime: "15 min",
        ingredients: [
          "1.5 lb flank steak",
          "2 bell peppers, sliced",
          "1 large onion, sliced wedges",
          "Tortillas",
          "Fajita seasoning (chili powder, cumin, garlic powder, oregano)",
          "Olive oil",
          "Lime"
        ],
        steps: [
          "Preheat oven to 425°F (Convection if available).",
          "Toss peppers and onions on sheet pan with oil and seasoning.",
          "Rub steak with oil and seasoning; place in center of pan.",
          "Roast 12-15 mins (check steak for desired doneness). Let steak rest 5 mins before slicing against the grain.",
          "Serve with warm tortillas."
        ],
        equipment: ["Sheet Pan", "Oven"]
      }
    },
    dessert: {
      id: "holiday-test",
      title: "HOLIDAY TEST: Chai Spiced Pumpkin Tiramisu",
      recipe: {
        summary: "A no-bake, make-ahead autumn twist on the Italian classic.",
        prepTime: "25 min",
        notes: "Needs 6+ hours to chill. Assemble Friday night or Saturday morning.",
        ingredients: [
          "1 cup strong coffee or espresso (cooled)",
          "2 bags chai tea (brewed in the hot coffee)",
          "1 (8 oz) tub mascarpone cheese, softened",
          "1 cup pumpkin puree (not pie mix)",
          "1/2 cup heavy cream (whipped)",
          "1/3 cup maple syrup",
          "1 package ladyfingers (Savoiardi)",
          "Spices: 1 tsp cinnamon, 1/2 tsp ginger, 1/4 tsp cardamom, pinch clove"
        ],
        steps: [
          "Brew coffee with chai tea bags; let cool completely.",
          "Whisk mascarpone, pumpkin, maple syrup, and spices until smooth. Gently fold in whipped cream.",
          "Quickly dip ladyfingers in chai-coffee and layer in an 8x8 dish.",
          "Spread half the pumpkin mixture over top. Repeat layers.",
          "Cover and chill 6 hours or overnight. Dust with cocoa or cinnamon before serving."
        ]
      }
    }
  },

  momDaily: {
    tuesday: {
      breakfast: "SEC sandwich (English muffin)",
      lunch: "Turkey wrap + spinach + hummus",
      snackAM: "Greek yogurt + berries",
      snackPM: "Hard boiled eggs + fruit",
      kcalEstimate: 2200,
      proteinEstimate: "100-115 g"
    },
    wednesday: {
      breakfast: "Overnight oats (milk, chia, protein powder option)",
      lunch: "Leftover Chicken Fajita Soup",
      snackAM: "Apple + peanut butter",
      snackPM: "Premier Protein shake (pre-swim energy)",
      kcalEstimate: 2300,
      proteinEstimate: "110-125 g"
    },
    thursday: {
      breakfast: "SEC sandwich",
      lunch: "Turkey sandwich + baby carrots",
      snackAM: "Cottage cheese + pineapple",
      snackPM: "Nuts + cheese stick",
      kcalEstimate: 2250,
      proteinEstimate: "100-120 g"
    },
    friday: {
      breakfast: "SEC sandwich",
      lunch: "Leftover Pasta (light portion) + side salad",
      snackAM: "Banana + almonds",
      snackPM: "Yogurt bowl + granola",
      kcalEstimate: 2200,
      proteinEstimate: "95-110 g"
    },
    saturday: {
      breakfast: "Scrambled eggs + avocado toast",
      lunch: "Leftover Burger patty (chopped) salad or wrap",
      snackAM: "Smoothie (fruit, spinach, yogurt)",
      snackPM: "Tiramisu Test Portion!",
      kcalEstimate: 2400,
      proteinEstimate: "100-115 g"
    },
    sunday: {
      breakfast: "SEC sandwich",
      lunch: "Leftover Fajita Bowl",
      snackAM: "Boiled eggs",
      snackPM: "Fruit + popcorn",
      kcalEstimate: 2200,
      proteinEstimate: "100-115 g"
    }
  },

  shopping: {
    "🛒 Consolidated Shopping List": {
      lists: {
        "Produce": [
          { text: "Bell Peppers (5-6 total for soup/fajitas)", checked: false },
          { text: "Onions (3 yellow/white)", checked: false },
          { text: "Broccolini (2 bunches)", checked: false },
          { text: "Garlic", checked: false },
          { text: "Avocado (2-3)", checked: false },
          { text: "Lettuce/Tomato (for burgers)", checked: false },
          { text: "Baby carrots (snack)", checked: false },
          { text: "Fruit (Apples, Bananas, Berries)", checked: false },
          { text: "Spinach (for wraps/smoothies)", checked: false },
          { text: "Lime (1)", checked: false }
        ],
        "Meat & Deli": [
          { text: "Chicken thighs (1.5 lbs)", checked: false },
          { text: "Ground Beef (1 lb, 85/15)", checked: false },
          { text: "Italian Sausage (1 lb)", checked: false },
          { text: "Flank Steak (1.5 lbs)", checked: false },
          { text: "Deli Turkey (1 lb)", checked: false },
          { text: "Breakfast Sausage patties", checked: false }
        ],
        "Dairy & Eggs": [
          { text: "Eggs (1-2 dozen)", checked: false },
          { text: "Cheddar cheese slices", checked: false },
          { text: "Cream Cheese (4 oz block)", checked: false },
          { text: "Mascarpone cheese (8 oz)", checked: false },
          { text: "Heavy Cream (pint)", checked: false },
          { text: "Greek Yogurt", checked: false },
          { text: "Cottage Cheese", checked: false },
          { text: "Parmesan Wedge", checked: false },
          { text: "Milk", checked: false }
        ],
        "Bakery & Grains": [
          { text: "English Muffins (whole wheat preferred)", checked: false },
          { text: "Burger Buns", checked: false },
          { text: "Tortillas (flour or corn)", checked: false },
          { text: "Pasta (Orecchiette or Penne)", checked: false },
          { text: "Ladyfingers (Savoiardi cookies)", checked: false },
          { text: "Wraps/Bread for lunch", checked: false }
        ],
        "Pantry": [
          { text: "Chicken Broth (carton)", checked: false },
          { text: "Diced Tomatoes or Salsa (1 jar/can)", checked: false },
          { text: "Pumpkin Puree (1 can, NOT pie mix)", checked: false },
          { text: "Maple Syrup", checked: false },
          { text: "Chai Tea bags", checked: false },
          { text: "Coffee (strong brew needed)", checked: false },
          { text: "Spices: Taco mix, Chili powder, Cumin, Cinnamon, Ginger, Cardamom", checked: false },
          { text: "Olive Oil", checked: false }
        ],
        "Frozen": [
          { text: "French Fries", checked: false }
        ]
      }
    }
  },

  prep: {
    ingredients: [
      "Cook breakfast sausage for the week",
      "Slice peppers and onions (store in separate containers for Soup vs Fajitas)",
      "Brew coffee/chai mix for Tiramisu (do this Friday morning)"
    ],
    steps: [
      "Tuesday Morning: Load slow cooker for Fajita Soup.",
      "Friday Evening or Saturday Morning: Assemble Tiramisu so it has time to set.",
      "Hard boil eggs for snacks."
    ]
  }
};

window.planData = planData;