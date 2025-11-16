# Mise en Place Operator Guide
## Weekly Meal Plan Generation Process

**Purpose:** This guide allows anyone to create a weekly meal plan for the Mise en Place app by following a simple, standardized process.

**Time Required:** 30-60 minutes (depending on complexity and revisions)

---

## Prerequisites

Before starting, ensure you have:
- [ ] Access to ChatGPT, Claude, or another AI assistant
- [ ] The Master Prompt file (V1.6 or latest)
- [ ] Access to the GitHub repository
- [ ] Answers to the initiation questions prepared

---

## Part 1: Preparation (5-10 minutes)

### Step 1.1: Determine the Start Date
Identify what week you're planning for:
- **Format:** "Tuesday November 11, 2025" or "Sunday November 16, 2025"
- **Tip:** Meal plans typically start on Sunday or the first day you're planning dinners

### Step 1.2: Answer the Initiation Questions

Prepare answers to these questions before starting:

1. **Start date:** _______________
2. **Number of dinners needed:** _______________
3. **Schedule constraints:**
   - Busy nights: _______________
   - Nights eating out: _______________
   - Special events: _______________
4. **Recipe requests/cravings:** _______________
5. **Ingredients to use up:** _______________
6. **Holiday proximity (within 4 weeks)?** Yes / No
   - If yes, test dessert? Yes / No
   - Which dessert? _______________
7. **Include Daily Fuel plan?** Yes / No
8. **Daily Fuel preferences this week:** _______________
9. **Ingredients on hand for Daily Fuel:** _______________
10. **Special constraints for Daily Fuel:** _______________
11. **Adjust recurring Daily Fuel items?** _______________

**Pro Tip:** Keep a running list of pantry items, scheduled events, and cravings throughout the week to make this step faster.

---

## Part 2: Generate the Meal Plan (15-30 minutes)

### Step 2.1: Open Your AI Assistant
- Open ChatGPT, Claude, or your preferred AI
- Start a new conversation

### Step 2.2: Load the Master Prompt
- Copy the entire Master Prompt (V1.6 or latest)
- Paste it into the AI assistant
- The AI should respond by asking the Initiation Questions

### Step 2.3: Provide Your Answers
- Copy your prepared answers from Part 1
- Paste them into the conversation
- The AI will propose a draft meal plan

### Step 2.4: Review and Refine
Review the proposed plan and ask yourself:
- [ ] Does this fit our schedule?
- [ ] Are the recipes appropriate for our skill level?
- [ ] Do we have time to cook these meals?
- [ ] Are the ingredients realistic?
- [ ] Does the variety feel right?

**Common refinements:**
- "Can we swap [meal] for something quicker?"
- "This feels too ambitious for Tuesday - simpler option?"
- "Can we use [ingredient] in another recipe?"

Continue discussing until the plan feels right.

### Step 2.5: Confirm Generation
When you're satisfied with the plan:
- Type exactly: **"Geronimo!"**
- The AI will generate the JavaScript file
- DO NOT say "Geronimo!" until you're completely happy with the plan

---

## Part 3: Validate the Generated File (5-10 minutes)

### Step 3.1: Copy the Generated File
- The AI will output a JavaScript file
- Copy the entire file (from first comment to `window.planData = planData;`)

### Step 3.2: Visual Inspection Checklist

Before uploading, quickly scan the file and verify:

**File Format:**
- [ ] First line is a comment (starts with `//`)
- [ ] Starts with `const planData = {`
- [ ] Ends with `window.planData = planData;`

**Day Names:**
- [ ] All day names are lowercase (sunday, monday, tuesday, etc.)
- [ ] No typos in day names

**Structure:**
- [ ] All `{` braces have matching `}`
- [ ] All `[` brackets have matching `]`
- [ ] No obvious missing commas
- [ ] Strings use double quotes `"` consistently

**Content:**
- [ ] `weekOf` date matches your start date (YYYY-MM-DD format)
- [ ] Number of planned meals matches request
- [ ] momDaily includes all 7 days
- [ ] Shopping list has items in all categories

**Shopping Categories:**
Must use these exact names:
- [ ] "Produce"
- [ ] "Meat & Deli"
- [ ] "Dairy & Eggs"
- [ ] "Bakery & Grains"
- [ ] "Pantry"
- [ ] "Frozen"

### Step 3.3: Optional - Validate with Code Editor

For extra confidence (optional but recommended):
1. Paste the file into VS Code, Sublime Text, or any code editor
2. Save as `.js` file
3. Check for red squiggly lines or syntax errors
4. If you see errors, note them and ask the AI to fix

---

## Part 4: Deploy to GitHub (10-15 minutes)

### Step 4.1: Create the Plan File

1. Navigate to your GitHub repository
2. Go to the `data/` folder
3. Click **"Add file"** → **"Create new file"**
4. Name the file: `plan-YYYY-MM-DD.js`
   - Example: `plan-2025-11-11.js`
   - Use the start date of your meal plan
5. Paste the entire generated file content
6. **Important:** Scroll down and add a commit message
   - Example: "Add meal plan for week of Nov 11, 2025"
7. Click **"Commit new file"**

### Step 4.2: Update weeks.js

1. In GitHub, navigate to `data/weeks.js`
2. Click the **pencil icon** (Edit this file)
3. Add a new entry to the `availableWeeks` array:

```javascript
{
  id: "2025-11-11",
  label: "November 11, 2025",
  file: "plan-2025-11-11.js",
  startDate: "2025-11-11"
}
```

**Important Notes:**
- Add this entry at the END of the array (before the closing `]`)
- Make sure there's a comma after the previous entry
- Use the SAME date format as your filename
- Match the `file` name exactly

4. Update the `defaultWeek` at the bottom:

```javascript
const defaultWeek = availableWeeks[availableWeeks.length - 1].id;
```

This automatically sets the newest week as the default.

5. Add commit message: "Add week of Nov 11 to weeks index"
6. Click **"Commit changes"**

### Step 4.3: Wait for Deployment

- GitHub Pages takes 1-2 minutes to deploy
- Vercel (if using) takes 30-60 seconds
- You'll see a yellow dot next to your commit while it's building
- Green checkmark means deployment succeeded

---

## Part 5: Verification (5 minutes)

### Step 5.1: Open Your Live Site

Visit your meal planning site:
- GitHub Pages: `https://[username].github.io/[repo-name]/`
- Vercel: `https://[project-name].vercel.app/`

### Step 5.2: Verify the New Week Loaded

- [ ] Check the week navigation dropdown
- [ ] Your new week should appear in the list
- [ ] Select your new week from the dropdown
- [ ] The page should update with your new plan

### Step 5.3: Spot-Check Content

Click through and verify:
- [ ] **Weekly View:** All planned days show correctly
- [ ] **Recipes:** Click on a recipe - ingredients and steps appear
- [ ] **Shopping List:** Items are organized by category
- [ ] **Prep:** Prep tasks are listed
- [ ] **Daily Fuel cards:** All days have breakfast/lunch/snacks (if enabled)

### Step 5.4: Test on Mobile

- [ ] Open the site on your phone
- [ ] Verify it displays correctly
- [ ] Navigation works
- [ ] Can access recipes easily

---

## Troubleshooting

### Problem: New week doesn't appear in dropdown

**Possible causes:**
1. `weeks.js` wasn't updated correctly
2. Syntax error in `weeks.js` (missing comma, wrong brackets)
3. File name doesn't match the entry in `weeks.js`

**Solution:**
- Check `weeks.js` in GitHub for errors
- Verify the new week entry exists
- Make sure file name matches exactly

### Problem: Page loads but shows "No data" or errors

**Possible causes:**
1. Syntax error in the plan file
2. File name format incorrect
3. Missing `window.planData = planData;` at the end

**Solution:**
- Check browser console for JavaScript errors (F12 → Console tab)
- Go back to the generated file and look for syntax errors
- Ask the AI to regenerate with corrections

### Problem: Some recipes or sections are blank

**Possible causes:**
1. Missing data in the generated file
2. Incorrect object structure

**Solution:**
- Open the plan file in GitHub and verify the section has data
- Check that day names are lowercase
- Verify object structure matches template

### Problem: Shopping list categories missing or wrong

**Possible causes:**
1. Category names don't match exactly
2. Items not formatted correctly

**Solution:**
- Category names must be EXACT (case-sensitive):
  - "Produce", "Meat & Deli", "Dairy & Eggs", "Bakery & Grains", "Pantry", "Frozen"
- Each item must use format: `{ text: "Item name", checked: false }`

---

## Tips for Success

### For Faster Future Plans:
- **Keep a running list** of cravings and requests during the week
- **Track pantry items** that need using up
- **Note busy nights** as soon as they're scheduled
- **Prep answers in advance** - saves 5-10 minutes

### For Better Consistency:
- **Use the same AI assistant** each week when possible
- **Reference previous weeks** that worked well
- **Keep the Master Prompt updated** with new preferences
- **Don't skip validation steps** - they catch 90% of errors

### For Easier Collaboration:
- **Save your answers file** - family members can review and edit
- **Share the generated file** before deploying - get buy-in
- **Document special requests** - "remember I don't like X"
- **Create a family calendar** of busy nights to reference

---

## Quick Reference Checklist

Use this for rapid weekly generation:

```
□ Prepare answers to initiation questions
□ Load Master Prompt into AI
□ Provide answers
□ Review and refine plan
□ Confirm with "Geronimo!"
□ Copy generated file
□ Visual validation (file format, day names, structure)
□ Create plan-YYYY-MM-DD.js in GitHub
□ Update weeks.js with new entry
□ Wait for deployment (1-2 min)
□ Verify site loads new week
□ Spot-check: recipes, shopping, prep
□ Test on mobile
□ Done! 🎉
```

---

## Appendix: Example Answer File

Save this as a template and fill it out each week:

```
MEAL PLAN ANSWERS - Week of [DATE]
=====================================

1. Start Date: [Day, Month Date, Year]

2. Number of Dinners: [X]

3. Schedule:
   - Busy nights: 
   - Eating out: 
   - Special events: 

4. Recipe Requests:
   -
   -

5. Ingredients to Use Up:
   -
   -

6. Holiday Planning:
   - Within 4 weeks? Yes / No
   - Test dessert? Yes / No
   - Which dessert:

7. Daily Fuel: Yes / No

8. Daily Fuel Preferences:
   -

9. Daily Fuel Ingredients on Hand:
   -

10. Daily Fuel Constraints:
    -

11. Adjust Recurring Items:
    -

ADDITIONAL NOTES:
-
-
```

---

**Document Version:** 1.0  
**Last Updated:** November 2025  
**Compatible with:** Master Prompt V1.6+
