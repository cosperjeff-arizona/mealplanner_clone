# Mise en Place 🍽️

An AI-powered meal planning app designed to reduce decision fatigue and distribute the mental load of home economics for busy families.

**Live Demo:** [https://cosperjeff-arizona.github.io/mealplan/](https://cosperjeff-arizona.github.io/mealplan/) *(or your Vercel URL)*

---

## 🎯 The Problem

Meal planning is exhausting for families with young kids. Parents are already stretched thin on time and energy, and the constant cycle of deciding what to cook, shopping, and preparing meals creates:
- **Decision fatigue** from endless "what's for dinner?" questions
- **Mental load imbalance** when one person handles all the planning
- **Family conflict** around meal decisions and execution
- **Time waste** without a clear structure or process

Most meal planning apps still require YOU to do all the thinking. This one is different.

---

## 💡 The Solution

**Mise en Place** (French for "everything in its place") shifts meal planning from *ideation → execution* to *approval → execution*. Instead of planning meals yourself, you work with an AI assistant to generate a personalized weekly plan, then use this app to execute it beautifully.

### How It Works

1. **Generate Your Plan**: Use a detailed prompt with your preferred AI assistant (ChatGPT, Claude, Gemini) describing your preferences, dietary needs, cooking skill level, time constraints, and family dynamics
2. **Refine Together**: The AI proposes a tailored weekly meal plan based on your specific situation
3. **Confirm & Generate**: Once you approve, the AI outputs a structured JavaScript file containing your complete meal plan
4. **Deploy to GitHub**: Upload the file to your repository - deployment is automatic
5. **Access Anywhere**: Your plan syncs across all devices instantly via your hosted web app

### Why This Approach?

- **Novice-Friendly**: Whether you're a casual home cook or a trained chef, the AI tailors the plan to YOUR skill level
- **Outsources Decisions**: No more staring at the fridge wondering what to make - the AI handles the creative work
- **Reduces Conflict**: Shifts the conversation from "What should we eat?" to "Does this plan work for us?"
- **Distributes Mental Load**: Anyone in the household can execute the plan without needing to know all the context
- **Consistent Weekly Process**: Follow the same workflow every week for predictable results

---

## ✨ Features

### Core Functionality
- **📅 Multi-Week Planning**: Navigate between different weeks with a dropdown selector
- **🗓️ Weekly Overview**: See your entire week's meals at a glance with Daily Fuel nutrition tracking
- **🍳 Dynamic Recipe Loading**: Individual recipe pages with ingredients, steps, timing, and equipment
- **🛒 Smart Shopping Lists**: Organized by grocery store section for efficient shopping
- **📪 Sunday Prep**: Batch prep tasks to make weeknight cooking easier
- **🍼 Daily Fuel Integration**: Optional breastfeeding nutrition tracking with meal-by-meal guidance

### User Experience
- **📱 Mobile-Responsive**: Access on any device, anywhere
- **🖨️ Print-Friendly**: Print your plan, recipes, or shopping list for offline use
- **⌨️ Keyboard Navigation**: Arrow keys to navigate between days
- **🔍 Recipe Search**: Find specific recipes across all weeks
- **👁️ Day Filtering**: View all days or focus on individual days (Today button)

### Technical Features
- **⚡ Fast Loading**: Single Page Application (SPA) architecture with dynamic content loading
- **📦 Modular Code**: Clean separation of concerns with component-based JavaScript
- **🔄 Auto-Sync**: Changes pushed to GitHub automatically deploy to your live site
- **💾 No Database Required**: Static files mean free hosting with no ongoing costs

---

## 🛠️ Built With

- **Core:** HTML5, CSS3, ES6+ JavaScript (Modules)
- **Architecture:** Single Page Application with dynamic content loading
- **Styling:** Custom CSS with dark theme and gradient accents
- **Hosting:** GitHub Pages (or Vercel)
- **Content Generation:** AI assistants (ChatGPT, Claude, Gemini)
- **Version Control:** Git/GitHub

---

## 🚀 Getting Started

### For Users

1. **Fork or Clone This Repository**
   ```bash
   git clone https://github.com/[yourusername]/mealplan.git
   cd mealplan
   ```

2. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, / (root)
   - Save

3. **Generate Your First Meal Plan**
   - Use the Master Prompt (V1.6) with your AI assistant
   - Follow the Operator Guide for step-by-step instructions
   - Generate your `plan-YYYY-MM-DD.js` file

4. **Deploy Your Plan**
   - Add your plan file to the `data/` folder
   - Update `data/weeks.js` with your new week
   - Commit and push to GitHub
   - Your site updates automatically (1-2 minutes)

5. **Access Your Plan**
   - Visit `https://[yourusername].github.io/mealplan/`
   - Your plan is now live and accessible from any device!

### For Developers

```bash
# Clone the repository
git clone https://github.com/[yourusername]/mealplan.git
cd mealplan

# Open in your browser or run a local server
# Python method:
python -m http.server 8000
# Then navigate to http://localhost:8000

# VS Code method:
# Install "Live Server" extension
# Right-click index.html → "Open with Live Server"
```

---

## 📂 Project Structure

```
mealplan/
├── index.html              # Main weekly view (SPA entry point)
│
├── data/
│   ├── weeks.js           # Index of all available weekly plans
│   ├── plan-2025-11-11.js # Individual week data files
│   └── plan-2025-11-09.js
│
├── js/
│   ├── app.js             # Application initialization
│   ├── components.js      # Reusable UI components and rendering logic
│   └── week-loader.js     # Dynamic week loading and navigation
│
├── pages/
│   ├── recipes.html       # Recipe index with search
│   ├── shopping.html      # Shopping list view
│   ├── prep.html          # Sunday prep tasks
│   ├── recipe-sunday.html # Individual recipe pages (one per day)
│   ├── recipe-monday.html
│   ├── recipe-tuesday.html
│   ├── recipe-wednesday.html
│   ├── recipe-thursday.html
│   ├── recipe-friday.html
│   └── recipe-saturday.html
│
├── styles/
│   ├── theme.css          # Main styling (dark theme, colors, layout)
│   ├── week-nav.css       # Week navigation dropdown styling
│   └── print.css          # Print-optimized styling
│
└── README.md              # You are here!
```

### Architecture Overview

**Single Page Application (SPA) with Dynamic Loading:**
- The main `index.html` loads different weeks dynamically without page refreshes
- `week-loader.js` manages fetching and switching between week data files
- `components.js` handles rendering meal cards, recipes, and daily fuel info
- Individual recipe pages are still separate HTML files for print-friendliness
- Week navigation persists in `localStorage` for seamless experience

**Why This Structure?**

This hybrid approach combines the best of both worlds:
- **SPA benefits:** Fast week switching, no full page reloads, modern feel
- **Static pages:** Individual recipe pages are printer-friendly and SEO-friendly
- **Modularity:** Easy to maintain with separated concerns (data, logic, presentation)
- **Progressive enhancement:** Works without JavaScript for basic content access

---

## 💾 How Data Works

### Data Storage
- Weekly meal plans are stored as JavaScript files in the `data/` folder
- Each week is a self-contained file: `plan-YYYY-MM-DD.js`
- The `weeks.js` file acts as an index/registry of available weeks
- Data is static (doesn't change unless you upload a new file)

### Data Format
Each weekly plan file exports a `planData` object containing:
- **meta:** Week info, start date, notes
- **dailyFuelConfig:** Nutrition tracking settings
- **meals:** Dinner recipes for each day
- **momDaily:** Daily Fuel breakfast/lunch/snacks for breastfeeding nutrition
- **shopping:** Consolidated shopping list organized by store section
- **prep:** Sunday batch-prep tasks

### Week Loading
1. `weeks.js` lists all available weeks with metadata
2. `week-loader.js` loads the selected week's data file
3. URL parameter (`?week=2025-11-11`) or localStorage determines which week to show
4. User can navigate between weeks via dropdown selector
5. Selection persists across page reloads

**What's the difference between JSON and .js files?**
Both store structured data, but a .js file can be directly loaded by your web page as a JavaScript module. The .js format allows for comments, easier syntax for the AI to generate, and direct variable assignment.

---

## 🎓 The AI-Assisted Workflow

### The Prompt System (V1.6)

This project uses a highly refined **Master Prompt** that provides:
- **Consistent persona:** "Mise en Place" as a James Beard-style culinary guide
- **Family profile:** Adults + toddler, efficiency-focused, whole foods emphasis
- **Cooking preferences:** Equipment, proteins, recipe templates, techniques
- **Special features:** Holiday dessert planning, Daily Fuel for breastfeeding
- **Structured process:** Initiation → Proposal → Refinement → Confirmation → Generation
- **Output specification:** Exact JavaScript format with validation checklist

**Evolution:** The prompt started simple and has been refined over a year+ of weekly use. Each frustration became an improvement. Each "I wish it knew..." became a new line in the prompt.

### Weekly Generation Process

**Time Required:** 30-60 minutes

1. **Preparation (5-10 min):**
   - Determine start date
   - Answer initiation questions (schedule, cravings, ingredients on hand)

2. **Generation (15-30 min):**
   - Paste Master Prompt into AI
   - Provide answers
   - Review and refine proposals
   - Confirm with "Geronimo!"

3. **Validation (5-10 min):**
   - Check file syntax and structure
   - Verify day names, categories, completeness
   - Optional: validate in code editor

4. **Deployment (10-15 min):**
   - Upload plan file to GitHub `data/` folder
   - Update `weeks.js` with new entry
   - Wait for automatic deployment
   - Verify on live site

See the **Operator Guide** for detailed step-by-step instructions that anyone can follow.

---

## 🔧 Configuration & Customization

### Adapting to Your Family

The prompt system is designed to be personalized. To customize:

1. **Edit the Master Prompt:**
   - Update family profile (number of people, ages, dietary needs)
   - Change protein preferences
   - Modify cooking equipment and techniques
   - Adjust meal templates and style preferences

2. **Disable/Enable Features:**
   - Set `dailyFuelConfig.enabled: false` to turn off nutrition tracking
   - Remove holiday dessert section if not needed
   - Adjust calorie/protein targets for your situation

3. **Modify the Site:**
   - Edit CSS in `styles/theme.css` for different colors/layout
   - Adjust `components.js` for different card layouts
   - Customize navigation in `week-nav.css`

### Hosting Options

**GitHub Pages (Free):**
- ✅ Completely free
- ✅ Simple setup
- ✅ Works well for static sites
- ⚠️ 1-2 minute deployment time
- ❌ No password protection on free tier

**Vercel (Free tier):**
- ✅ Faster deployment (30-60 seconds)
- ✅ Better performance
- ✅ Modern dashboard
- ⚠️ Standard Protection requires login (not simple password)
- ⚠️ Simple password protection requires Pro plan ($20/month)

**Netlify (Free tier):**
- ✅ Password protection on free tier
- ✅ Good performance
- ⚠️ Build minute limits (300/month)

---

## 🎯 Who This Is For

- **Busy parents** drowning in the mental load of meal planning
- **Couples** wanting to share household responsibilities more equitably
- **Anyone** experiencing decision fatigue around meals
- **New cooks** who want guidance without feeling overwhelmed
- **Experienced cooks** who want to try new things without the planning work
- **Breastfeeding parents** needing structured nutrition support

---

## 🚧 Known Limitations

- Requires manual file upload for each new plan (no automatic AI integration yet)
- Each week is independent (no built-in leftover tracking across weeks)
- Recipe scaling requires manual calculation
- Shopping list checkboxes don't sync across devices (uses localStorage)
- Best viewed on tablet/desktop for full recipe experience
- Password protection requires paid hosting or workarounds

---

## 🔮 Future Ideas

### High Priority
- [ ] Persistent shopping list checkboxes (localStorage - **in progress**)
- [ ] Leftover tracking system across days/weeks
- [ ] Recipe scaling calculator (2x, 3x, 0.5x servings)
- [ ] Export weekly plan as PDF
- [ ] Print individual shopping list

### Medium Priority
- [ ] Direct AI integration (generate plans within the app)
- [ ] Recipe search across all historical weeks
- [ ] Favorites/ratings system
- [ ] Ingredient inventory tracker
- [ ] Meal rotation suggestions (avoid repeats)

### Ambitious
- [ ] Native mobile app (iOS/Android)
- [ ] Family member task assignment
- [ ] Nutrition tracking graphs
- [ ] Grocery cost tracking
- [ ] Integration with grocery delivery services
- [ ] Voice assistant integration

---

## 🎓 The Learning Journey

This project was built over a year+ as a learning experience. With no formal coding training, I used AI assistants (ChatGPT, Claude, Gemini) iteratively to:
- Learn HTML, CSS, and JavaScript from scratch
- Understand Single Page Application architecture
- Figure out GitHub Pages hosting and deployment
- Design a user-friendly interface with modern aesthetics
- Solve real problems for real people
- Develop a repeatable, systematic workflow

### Key Learnings

**Technical:**
- How to structure a web application
- JavaScript modules and component-based design
- Dynamic content loading and routing
- Data structure design for weekly plans
- Version control with Git/GitHub

**AI Collaboration:**
- How to write effective prompts that produce consistent results
- The importance of validation and error prevention
- Iterative refinement through trial and error
- Building a systematic process anyone can follow

**Product Development:**
- Solving your own problems leads to better solutions
- Simple architecture can be better than complex
- Consistency matters more than perfection
- Documentation is crucial for sustainability

This app represents hundreds of conversations with AI, lots of trial and error, and the persistence to keep improving something useful. **If you're thinking about learning to code, know that you can build real things without formal training** - just curiosity, determination, and effective use of AI assistants.

---

## 📚 Documentation Files

- **mise-en-place-prompt-v1.6.md** - The master prompt for AI meal plan generation
- **operator-guide.md** - Step-by-step process for weekly meal plan creation
- **README.md** - This file (project overview and architecture)

---

## 🐛 Troubleshooting

### New week doesn't appear in dropdown
- Check that `weeks.js` was updated with the new entry
- Verify file name matches the entry in `weeks.js` exactly
- Look for syntax errors (missing commas, brackets)

### Page shows errors or blank sections
- Check browser console for JavaScript errors (F12 → Console)
- Verify day names are lowercase (sunday, monday, etc.)
- Ensure all braces `{}` and brackets `[]` are balanced
- Check that `window.planData = planData;` is at the end of the file

### Shopping list categories wrong or missing
- Category names must match exactly: "Produce", "Meat & Deli", "Dairy & Eggs", "Bakery & Grains", "Pantry", "Frozen"
- Each item must use format: `{ text: "Item name", checked: false }`

### Site not updating after GitHub push
- Wait 1-2 minutes for GitHub Pages to rebuild
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions tab for deployment status
- Clear browser cache if needed

---

## 📄 License

This is a personal project. Feel free to fork, adapt, and use for your own meal planning needs!

---

## 🙏 Acknowledgments

- Built with extensive help from AI coding assistants (ChatGPT, Claude, Gemini)
- Inspired by the real challenges of family meal planning and the mental load crisis
- Thanks to everyone who gave feedback and encouragement along the way
- Special appreciation for the open-source community and free hosting platforms

---

## 📬 Contact & Contributions

Have questions? Found a bug? Want to share your experience?
- Open an issue on GitHub
- Submit a pull request with improvements
- Share your customized prompt adaptations

This project thrives on community feedback and shared learning!

---

*Made with ❤️ and a lot of AI assistance to help families reclaim their time and reduce stress around meals.*

**Last Updated:** November 2025  
**Version:** 2.0 (SPA Architecture)  
**Prompt Version:** 1.6
