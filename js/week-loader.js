// js/week-loader.js
// Handles dynamic loading of weekly meal plans

class WeekManager {
  constructor() {
    this.currentWeek = null;
    this.planData = null;
  }

  // Determine correct path to data folder based on current page location
  getDataPath() {
    const path = window.location.pathname;
    // If we're in a pages/ subdirectory, go up one level
    if (path.includes('/pages/')) {
      return '../data/';
    }
    // Otherwise we're at root level
    return './data/';
  }

  // Get week ID from URL parameter or localStorage or default
  getCurrentWeekId() {
    const urlParams = new URLSearchParams(window.location.search);
    const weekFromUrl = urlParams.get('week');
    
    if (weekFromUrl && this.isValidWeek(weekFromUrl)) {
      return weekFromUrl;
    }
    
    const weekFromStorage = localStorage.getItem('selectedWeek');
    if (weekFromStorage && this.isValidWeek(weekFromStorage)) {
      return weekFromStorage;
    }
    
    return defaultWeek;
  }

  // Check if week ID exists in availableWeeks
  isValidWeek(weekId) {
    return availableWeeks.some(w => w.id === weekId);
  }

  // Get week data by ID
  getWeekData(weekId) {
    return availableWeeks.find(w => w.id === weekId);
  }

  // Load a specific week's plan file
  async loadWeek(weekId) {
    const week = this.getWeekData(weekId);
    if (!week) {
      console.error(`Week ${weekId} not found`);
      return false;
    }

    try {
      // Dynamically load the plan file with correct path
      const script = document.createElement('script');
      script.src = `${this.getDataPath()}${week.file}`;
      
      console.log(`Loading plan from: ${script.src}`); // Debug log
      
      // Wait for script to load
      await new Promise((resolve, reject) => {
        script.onload = () => {
          console.log('Plan loaded successfully');
          resolve();
        };
        script.onerror = () => {
          console.error(`Failed to load: ${script.src}`);
          reject();
        };
        document.head.appendChild(script);
      });

      this.currentWeek = weekId;
      this.planData = window.planData;
      
      if (!this.planData) {
        console.error('planData is undefined after loading script');
        return false;
      }
      
      // Save to localStorage
      localStorage.setItem('selectedWeek', weekId);
      
      // Update URL without reloading
      const url = new URL(window.location);
      url.searchParams.set('week', weekId);
      window.history.pushState({}, '', url);
      
      return true;
    } catch (error) {
      console.error(`Failed to load week ${weekId}:`, error);
      return false;
    }
  }

  // Navigate to previous week
  getPreviousWeekId() {
    const currentIndex = availableWeeks.findIndex(w => w.id === this.currentWeek);
    if (currentIndex > 0) {
      return availableWeeks[currentIndex - 1].id;
    }
    return null;
  }

  // Navigate to next week
  getNextWeekId() {
    const currentIndex = availableWeeks.findIndex(w => w.id === this.currentWeek);
    if (currentIndex < availableWeeks.length - 1) {
      return availableWeeks[currentIndex + 1].id;
    }
    return null;
  }

  // Reload page with new week
  switchWeek(weekId) {
    if (!this.isValidWeek(weekId)) return;
    
    const url = new URL(window.location);
    url.searchParams.set('week', weekId);
    window.location.href = url.toString();
  }

  // Build week navigation UI
  buildWeekNav() {
    const currentWeekData = this.getWeekData(this.currentWeek);
    const prevWeekId = this.getPreviousWeekId();
    const nextWeekId = this.getNextWeekId();

    const nav = document.createElement('div');
    nav.className = 'week-nav';
    nav.innerHTML = `
      <button class="week-nav-btn" id="prev-week" ${!prevWeekId ? 'disabled' : ''}>
        ← Previous
      </button>
      <select class="week-select" id="week-select">
        ${availableWeeks.map(week => `
          <option value="${week.id}" ${week.id === this.currentWeek ? 'selected' : ''}>
            ${week.label}
          </option>
        `).join('')}
      </select>
      <button class="week-nav-btn" id="next-week" ${!nextWeekId ? 'disabled' : ''}>
        Next →
      </button>
    `;

    // Add event listeners
    setTimeout(() => {
      const prevBtn = document.getElementById('prev-week');
      const nextBtn = document.getElementById('next-week');
      const select = document.getElementById('week-select');

      if (prevBtn && prevWeekId) {
        prevBtn.onclick = () => this.switchWeek(prevWeekId);
      }
      if (nextBtn && nextWeekId) {
        nextBtn.onclick = () => this.switchWeek(nextWeekId);
      }
      if (select) {
        select.onchange = (e) => this.switchWeek(e.target.value);
      }
    }, 0);

    return nav;
  }

  // Insert week navigation into page
  insertWeekNav() {
    const header = document.querySelector('.header');
    if (header) {
      const weekNav = this.buildWeekNav();
      header.appendChild(weekNav);
    }
  }
}

// Global instance
window.weekManager = new WeekManager();

// Initialize on page load
window.addEventListener('DOMContentLoaded', async () => {
  console.log('Week manager initializing...'); // Debug log
  const weekId = window.weekManager.getCurrentWeekId();
  console.log(`Selected week: ${weekId}`); // Debug log
  
  const loaded = await window.weekManager.loadWeek(weekId);
  
  if (loaded) {
    window.weekManager.insertWeekNav();
    
    // Trigger any page-specific initialization
    if (window.onPlanDataLoaded) {
      console.log('Calling onPlanDataLoaded...'); // Debug log
      window.onPlanDataLoaded();
    } else {
      console.warn('onPlanDataLoaded callback not found');
    }
  } else {
    console.error('Failed to load week data');
  }
});