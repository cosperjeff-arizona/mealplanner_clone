const planData = {
  title: "Weekly Plan",
  meta: {
    weekOf: "2025-11-16",
    notes: "Comfort-heavy November week featuring cozy make-ahead meals for travel, easy weekday efficiency, and a chai-spiced pumpkin tiramisu test run for Thanksgiving."
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
      title: "Creamy Chicken & Wild Rice Soup with Crusty Bread",
      recipe: {
        title: "Creamy Chicken & Wild Rice Soup",
        summary: "A cozy, hearty soup with tender chicken, nutty rice, and creamy broth — perfect for Sunday family dinner.",
        yield: "4 servings",
        prepTime: "15 min",
        cookTime: "40 min",
        ingredients: [
          { section: "Soup Base", items: [
            "1 lb boneless, skinless chicken thighs",
            "1 cup uncooked wild rice blend",
            "1 tbsp olive oil",
            "1 small onion, diced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "2 cloves garlic, minced",
            "4 cups chicken broth",
            "1 cup milk or half-and-half",
            "2 tbsp flour",
            "1 tbsp butter",
            "Salt and pepper to taste"
          ]},
          { section: "To Serve", items: [
            "Crusty bread or rolls"
          ]}
        ],
        steps: [
          "Sauté onion, carrots, and celery in olive oil for 5–7 minutes until softened.",
          "Add garlic and chicken thighs; season with salt and pepper. Sear lightly.",
          "Add wild rice and broth. Bring to a simmer, cover, and cook 35–40 minutes until rice and chicken are tender.",
          "Remove chicken, shred, and return to pot.",
          "Whisk flour and butter into milk, then stir into soup. Simmer 5 minutes to thicken.",
          "Adjust seasoning and serve with crusty bread."
        ],
        equipment: ["4 qt saucepan", "ladle", "cutting board", "knife"]
      }
    },

    monday: {
      id: "monday",
      title: "Bangers and Mash with Onion Gravy",
      recipe: {
        title: "Bangers and Mash",
        summary: "Sausages with creamy mashed potatoes and caramelized onion gravy — hearty comfort food at its best.",
        yield: "3 servings",
        prepTime: "10 min",
        cookTime: "35 min",
        ingredients: [
          { section: "Main", items: [
            "4 pork sausages (brats or English-style)",
            "1.5 lb russet potatoes, peeled and cubed",
            "3 tbsp butter",
            "1/4 cup milk",
            "Salt and pepper to taste"
          ]},
          { section: "Onion Gravy", items: [
            "1 large onion, thinly sliced",
            "1 tbsp butter",
            "1 tbsp flour",
            "1 cup beef broth",
            "1 tsp Worcestershire sauce"
          ]}
        ],
        steps: [
          "Boil potatoes until fork-tender; mash with butter and milk.",
          "Pan-sear sausages until browned and cooked through.",
          "In the same pan, add butter and onions; cook until caramelized (10–12 minutes).",
          "Stir in flour, then broth and Worcestershire; simmer to thicken.",
          "Serve sausages over mashed potatoes with gravy spooned on top."
        ],
        equipment: ["12\" frying pan", "potato masher", "saucepan"]
      }
    },

    tuesday: {
      id: "tuesday",
      title: "Trader Joe’s Cast-Iron Pizza Night",
      recipe: {
        title: "Quick Cast-Iron Pizza",
        summary: "15-minute prep pizza using Trader Joe’s dough, sauce, and mozzarella — customizable with favorite toppings.",
        yield: "3 servings",
        prepTime: "10 min",
        cookTime: "15 min",
        ingredients: [
          { section: "Pizza", items: [
            "1 Trader Joe’s pizza dough",
            "1/2 cup marinara sauce",
            "1.5 cups shredded mozzarella",
            "Your choice of toppings (pepperoni, sausage, veggies)",
            "Olive oil for pan"
          ]}
        ],
        steps: [
          "Preheat oven to 475°F. Oil a 12\" cast-iron pan.",
          "Stretch dough to fit pan; add sauce, cheese, and toppings.",
          "Cook on stovetop for 3 minutes to start crust, then bake 10–12 minutes until golden.",
          "Cool slightly before slicing."
        ],
        equipment: ["Cast-iron skillet", "oven mitt", "spatula"]
      }
    },

    wednesday: {
      id: "wednesday",
      title: "Cottage Pie with Salad Kit",
      recipe: {
        title: "Make-Ahead Cottage Pie with Salad Kit",
        summary: "Savory beef and vegetable filling topped with mashed potatoes — travels well and reheats beautifully for family dinner.",
        yield: "7 servings (6 adults + 1 toddler)",
        prepTime: "25 min",
        cookTime: "45 min",
        ingredients: [
          { section: "Filling", items: [
            "1.5 lb ground beef",
            "1 tbsp olive oil",
            "1 small onion, diced",
            "2 carrots, diced",
            "1 cup frozen peas",
            "2 tbsp tomato paste",
            "1 tbsp Worcestershire sauce",
            "1 cup beef broth",
            "1 tbsp flour",
            "Salt and pepper"
          ]},
          { section: "Topping", items: [
            "2 lb russet potatoes, peeled and cubed",
            "3 tbsp butter",
            "1/4 cup milk",
            "Salt and pepper"
          ]},
          { section: "Side Salad", items: [
            "1 family-size salad kit (Caesar, Sweet Kale, or Apple Dijon)"
          ]}
        ],
        steps: [
          "Brown ground beef with onion and carrots. Stir in tomato paste, flour, and Worcestershire.",
          "Add broth and peas; simmer 5 minutes until thickened.",
          "Boil potatoes; mash with butter and milk.",
          "Layer beef mixture in a 9x13 pan, top with mashed potatoes, smooth surface.",
          "Cover and refrigerate overnight. Reheat at 375°F for 25–30 minutes before serving.",
          "Serve with salad kit."
        ],
        equipment: ["9x13 baking dish", "potato masher", "skillet", "spatula"]
      }
    },

    thursday: {
      id: "thursday",
      title: "Eat Out – Williams Family Dinner",
      recipe: {
        title: "Eat Out Night",
        summary: "Relax and enjoy a meal out with the family in Williams — no prep required.",
        yield: "—",
        prepTime: "0 min",
        cookTime: "0 min",
        ingredients: [],
        steps: [],
        equipment: []
      }
    },

    friday: {
      id: "friday",
      title: "Garlic Butter Pork Chops with Roasted Sweet Potatoes & Green Beans",
      recipe: {
        title: "Sheet Pan Garlic Butter Pork Chops",
        summary: "An easy one-pan dinner for your return home — tender chops and veggies roasted together.",
        yield: "3 servings",
        prepTime: "10 min",
        cookTime: "30 min",
        ingredients: [
          { section: "Main", items: [
            "3 pork chops (bone-in or boneless)",
            "2 tbsp butter, melted",
            "2 cloves garlic, minced",
            "1 lb sweet potatoes, cubed",
            "8 oz green beans, trimmed",
            "Olive oil, salt, pepper"
          ]}
        ],
        steps: [
          "Preheat oven to 400°F.",
          "Toss sweet potatoes and green beans with olive oil, salt, and pepper; spread on a sheet pan.",
          "Nestle in pork chops; brush with garlic butter.",
          "Roast 25–30 minutes, flipping halfway, until pork reaches 145°F.",
          "Rest 5 minutes before serving."
        ],
        equipment: ["Sheet pan", "basting brush", "tongs"]
      }
    },

    holidayTest: {
      id: "holiday-test",
      title: "Chai-Spiced Pumpkin Tiramisu",
      recipe: {
        title: "Chai-Spiced Pumpkin Tiramisu",
        summary: "A creamy autumnal twist on classic tiramisu with spiced chai soak and pumpkin-mascarpone layers — ideal Thanksgiving test dessert.",
        yield: "10–12 servings",
        prepTime: "30 min",
        cookTime: "0 min (6 hr chill)",
        ingredients: [
          { section: "Chai Soak", items: [
            "2 cups strong brewed chai tea (4 tea bags, steeped 10 min)",
            "1 tbsp dark rum (optional)",
            "1 tsp vanilla extract"
          ]},
          { section: "Mascarpone Filling", items: [
            "1 15-oz can pumpkin purée",
            "8 oz mascarpone cheese",
            "1 cup heavy cream",
            "1/3 cup brown sugar",
            "1 tsp cinnamon",
            "1/2 tsp ground ginger",
            "1/4 tsp cloves",
            "1/4 tsp nutmeg"
          ]},
          { section: "Assembly", items: [
            "2 packs ladyfingers",
            "Cocoa powder for dusting"
          ]}
        ],
        steps: [
          "Brew chai tea, stir in vanilla (and rum if using); cool.",
          "Whip heavy cream to soft peaks; fold into mascarpone, pumpkin, sugar, and spices.",
          "Dip ladyfingers in chai soak briefly; layer half in dish, spread half filling, repeat.",
          "Dust with cocoa; cover and chill at least 6 hours or overnight.",
          "Serve chilled — travels well in cooler."
        ],
        equipment: ["Mixing bowls", "hand mixer", "9x13 dish", "spatula"]
      }
    }
  },

  momDaily: {
    sunday: {
      breakfast: "SEC sandwich with orange slices and coffee.",
      lunch: "Leftover soup and whole-grain crackers.",
      snackAM: "Greek yogurt with honey.",
      snackPM: "Handful of ranch-seasoned cashews.",
      kcalEstimate: 2250,
      proteinEstimate: "105g"
    },
    monday: {
      breakfast: "Oatmeal with milk, peanut butter, and banana.",
      lunch: "Turkey sandwich with cheddar, lettuce, and apple slices.",
      snackAM: "Protein shake (Premier Chocolate).",
      snackPM: "Cheese stick and almonds.",
      kcalEstimate: 2300,
      proteinEstimate: "110g"
    },
    tuesday: {
      breakfast: "SEC sandwich, water, and coffee.",
      lunch: "Leftover soup with side salad.",
      snackAM: "Yogurt with berries.",
      snackPM: "Peanut butter toast.",
      kcalEstimate: 2200,
      proteinEstimate: "100g"
    },
    wednesday: {
      breakfast: "SEC sandwich and banana pre-travel.",
      lunch: "Turkey sandwich with fruit on the road.",
      snackAM: "Trail mix pouch.",
      snackPM: "Yogurt cup.",
      kcalEstimate: 2250,
      proteinEstimate: "105g"
    },
    thursday: {
      breakfast: "SEC sandwich with coffee.",
      lunch: "Family-style lunch leftovers.",
      snackAM: "Protein shake.",
      snackPM: "Apple slices with peanut butter.",
      kcalEstimate: 2200,
      proteinEstimate: "100g"
    },
    friday: {
      breakfast: "Greek yogurt with granola.",
      lunch: "Leftover cottage pie or sandwich.",
      snackAM: "Cheese stick.",
      snackPM: "Handful of cashews.",
      kcalEstimate: 2150,
      proteinEstimate: "98g"
    },
    saturday: {
      breakfast: "SEC sandwich and berries.",
      lunch: "Big salad with grilled chicken.",
      snackAM: "Protein shake.",
      snackPM: "Dark chocolate square and nuts.",
      kcalEstimate: 2300,
      proteinEstimate: "115g"
    }
  },

  shopping: {
    "🛒 Consolidated Shopping List": {
      lists: {
        "Produce": [
          { text: "Onions (3–4)", checked: false },
          { text: "Carrots (4–5)", checked: false },
          { text: "Celery (2 stalks)", checked: false },
          { text: "Russet potatoes (5 lb)", checked: false },
          { text: "Sweet potatoes (1 lb)", checked: false },
          { text: "Green beans (8 oz)", checked: false },
          { text: "Salad kit (family-size)", checked: false },
          { text: "Garlic (1 bulb)", checked: false },
          { text: "Bananas", checked: false },
          { text: "Apples", checked: false },
          { text: "Oranges", checked: false },
          { text: "Berries", checked: false }
        ],
        "Meat & Deli": [
          { text: "Chicken thighs (1 lb)", checked: false },
          { text: "Ground beef (1.5 lb)", checked: false },
          { text: "Pork sausages (4 links)", checked: false },
          { text: "Pork chops (3)", checked: false },
          { text: "Deli turkey", checked: false }
        ],
        "Dairy & Eggs": [
          { text: "Milk", checked: false },
          { text: "Butter", checked: false },
          { text: "Eggs", checked: false },
          { text: "Mascarpone cheese", checked: false },
          { text: "Heavy cream", checked: false },
          { text: "Shredded mozzarella", checked: false },
          { text: "Cheddar cheese", checked: false },
          { text: "Greek yogurt", checked: false },
          { text: "Cheese sticks", checked: false }
        ],
        "Bakery & Grains": [
          { text: "Crusty bread", checked: false },
          { text: "Trader Joe’s pizza dough", checked: false },
          { text: "English muffins (whole-grain)", checked: false },
          { text: "Ladyfingers (2 packs)", checked: false },
          { text: "Granola", checked: false },
          { text: "Whole-grain crackers", checked: false }
        ],
        "Pantry": [
          { text: "Wild rice blend", checked: false },
          { text: "Chicken broth", checked: false },
          { text: "Beef broth", checked: false },
          { text: "Olive oil", checked: false },
          { text: "Flour", checked: false },
          { text: "Brown sugar", checked: false },
          { text: "Chai tea bags", checked: false },
          { text: "Tomato paste", checked: false },
          { text: "Worcestershire sauce", checked: false },
          { text: "Marinara sauce", checked: false },
          { text: "Spices (cinnamon, nutmeg, ginger, cloves)", checked: false },
          { text: "Cocoa powder", checked: false },
          { text: "Nuts (cashews, almonds)", checked: false },
          { text: "Peanut butter", checked: false }
        ],
        "Frozen": [
          { text: "Frozen peas", checked: false },
          { text: "Frozen fries (optional for burgers or side)", checked: false }
        ]
      }
    }
  },

  prep: {
    ingredients: [
      "Dice onions, carrots, and celery for soup and cottage pie.",
      "Peel and cube potatoes for Monday and Wednesday.",
      "Brew chai tea for tiramisu and allow to cool.",
      "Prepare Cottage Pie on Tuesday night for travel.",
      "Pre-chop sweet potatoes and green beans for Friday.",
      "Boil extra eggs for snacks or SEC sandwiches."
    ],
    steps: [
      "Sunday: Make soup; reserve leftover broth for midweek use.",
      "Tuesday: Bake pizza; prep Cottage Pie and tiramisu for travel.",
      "Wednesday: Transport Cottage Pie and tiramisu in cooler.",
      "Friday: Unpack and roast pork chops with sweet potatoes.",
      "Batch SEC sandwich ingredients for quick breakfasts all week."
    ]
  }
};

window.planData = planData;
