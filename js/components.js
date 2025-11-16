// /js/components.js
export const ORDER = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
export function cap(s){ return s? s[0].toUpperCase()+s.slice(1):''; }

export function dayCardHTML(d, plan){
  const m = (plan.meals||{})[d] || {};
  const mom = (plan.momDaily||{})[d] || {};
  const dinnerTitle = m.title || '';
  const dinnerSummary = (m.recipe && (m.recipe.summary || m.recipe.notes || m.recipe.title))
    ? (m.recipe.summary || m.recipe.notes || '')
    : '';
  const hasRecipe = !!m.recipe;

  const linkBtn = hasRecipe
    ? `<a href="./pages/recipe-${d}.html" class="btn" style="margin-left:8px;">View recipe</a>`
    : '';

  return `<article class="day" id="day-${d}" data-day="${d}">
    <header>
      <h3>${cap(d)}</h3>
      <span class="pill">Plan</span>
    </header>
    <div class="section">
      <div class="row">
        <div class="key">Dinner</div>
        <div>
          ${hasRecipe
            ? `<a href='./pages/recipe-${d}.html'>${dinnerTitle}</a>`
            : (dinnerTitle || '<span class="muted">No dinner planned</span>')}
          ${linkBtn}
        </div>
      </div>
      ${dinnerSummary ? `<div class="row"><div class="key">Notes</div><div class="muted">${dinnerSummary}</div></div>` : ''}
    </div>
    <div class="section">
      <div class="row"><div class="key">Breakfast</div><div>${(mom.breakfast||'')}</div></div>
      <div class="row"><div class="key">Lunch</div><div>${(mom.lunch||'')}</div></div>
      <div class="row"><div class="key">Snack (AM)</div><div>${(mom.snackAM||'')}</div></div>
      <div class="row"><div class="key">Snack (PM)</div><div>${(mom.snackPM||'')}</div></div>
      <div class="meta">~${mom.kcalEstimate||''} kcal · Protein ${mom.proteinEstimate||''}${mom.notes? ' · '+mom.notes:''}</div>
    </div>
  </article>`;
}

/** Flexible, defensive recipe renderer with smart fallbacks */
export function renderRecipeHTML(recipe){
  // If no recipe object at all: explicit friendly message
  if(!recipe){
    return `
      <p class="muted">No recipe necessary.</p>
      <div class="card"><h3>Ingredients</h3><p class="muted">—</p></div>
      <div class="card"><h3>Steps</h3><p class="muted">—</p></div>
    `;
  }

  const title   = recipe.title   || recipe.name   || '';
  const summary = recipe.summary || recipe.notes  || '';
  const yieldTx = recipe.yield   || recipe.servings || '';
  const prep    = recipe.prepTime || recipe.prep  || '';
  const cook    = recipe.cookTime || recipe.cook  || '';
  const total   = recipe.totalTime|| recipe.total || '';

  // Ingredients: array of strings or [{section, items:[...]}, ...]
  let hasIngredients = false;
  let ingHTML = '';
  const ing = recipe.ingredients || recipe.ingredientLines || [];
  if(Array.isArray(ing) && ing.length){
    hasIngredients = true;
    if(typeof ing[0] === 'string'){
      ingHTML = '<ul>' + ing.map(i=> `<li>${i}</li>`).join('') + '</ul>';
    }else{
      ingHTML = ing.map(g=>{
        const sec = g.section ? `<h4>${g.section}</h4>` : '';
        const items = (g.items||[]).map(i=> `<li>${i}</li>`).join('');
        if(items) hasIngredients = true;
        return `<div class="card">${sec}${items? `<ul>${items}</ul>` : '<p class="muted">—</p>'}</div>`;
      }).join('');
    }
  }

  // Steps: array of strings or [{text,time}]
  let hasSteps = false;
  const steps = recipe.steps || recipe.directions || recipe.method || [];
  let stepsHTML = '';
  if(Array.isArray(steps) && steps.length){
    hasSteps = true;
    if(typeof steps[0] === 'string'){
      stepsHTML = '<ol>' + steps.map(s=> `<li>${s}</li>`).join('') + '</ol>';
    }else{
      stepsHTML = '<ol>' + steps.map(s=>{
        const line = (s.text || s.step || '').trim();
        if(line) hasSteps = true;
        return `<li>${line}${s.time ? ` <span class="muted">(${s.time})</span>`:''}</li>`;
      }).join('') + '</ol>';
    }
  }

  const equip = recipe.equipment || recipe.tools || [];
  const equipHTML = Array.isArray(equip) && equip.length
    ? ('<ul>'+equip.map(e=> `<li>${e}</li>`).join('')+'</ul>')
    : '';

  // If the recipe object exists but has no meaningful content, show the friendly message
  const emptyRecipe = !title && !summary && !hasIngredients && !hasSteps && !equipHTML && !yieldTx && !prep && !cook && !total;
  if(emptyRecipe){
    return `
      <p class="muted">No recipe necessary.</p>
      <div class="card"><h3>Ingredients</h3><p class="muted">—</p></div>
      <div class="card"><h3>Steps</h3><p class="muted">—</p></div>
    `;
  }

  return `
    ${title? `<h3 style="margin:0 0 6px 0">${title}</h3>`:''}
    ${summary? `<p class="muted" style="margin:0 0 10px 0">${summary}</p>`:''}
    ${(yieldTx || prep || cook || total) ? `
      <div class="row">
        ${yieldTx? `<div class="key">Serves</div><div>${yieldTx}</div>`:''}
        ${prep?    `<div class="key">Prep</div><div>${prep}</div>`:''}
        ${cook?    `<div class="key">Cook</div><div>${cook}</div>`:''}
        ${total?   `<div class="key">Total</div><div>${total}</div>`:''}
      </div>
    `:''}
    <div class="card">
      <h3>Ingredients</h3>
      ${ingHTML || '<p class="muted">—</p>'}
    </div>
    <div class="card">
      <h3>Steps</h3>
      ${stepsHTML || '<p class="muted">—</p>'}
    </div>
    ${equipHTML? `<div class="card"><h3>Equipment</h3>${equipHTML}</div>`:''}
  `;
}

export function renderAll(target, plan){
  target.classList.remove('focus');
  target.innerHTML = ORDER.map(d => dayCardHTML(d, plan)).join('');
}
export function renderFocus(target, plan, day){
  target.classList.add('focus');
  target.innerHTML = dayCardHTML(day, plan);
  // keyboard nav
  window.onkeydown = (e)=>{
    const i = ORDER.indexOf(day);
    if(e.key==='ArrowRight'){ const next = ORDER[(i+1)%ORDER.length]; renderFocus(target, plan, next); }
    if(e.key==='ArrowLeft'){ const prev = ORDER[(i-1+ORDER.length)%ORDER.length]; renderFocus(target, plan, prev); }
  };
}
export function todayKey(){
  const map={0:'sunday',1:'monday',2:'tuesday',3:'wednesday',4:'thursday',5:'friday',6:'saturday'};
  return map[new Date().getDay()];
}
