// data/weeks.js
// Index of all available weekly meal plans
// Add new weeks here as you create them

const availableWeeks = [
  {
    id: "2025-10-19",
    label: "October 19, 2025",
    file: "plan-2025-10-19.js",
    startDate: "2025-10-19"
  },
  {
    id: "2025-10-26",
    label: "October 26, 2025",
    file: "plan-2025-10-26.js",
    startDate: "2025-10-26"
  },
  {
    id: "2025-11-02",
    label: "November 2, 2025",
    file: "plan-2025-11-02.js",
    startDate: "2025-11-02"
  },
  {
    id: "2025-11-09",
    label: "November 9, 2025",
    file: "plan-2025-11-09.js",
    startDate: "2025-11-09"
  },
  {
    id: "2025-11-11",
    label: "November 11, 2025",
    file: "plan-2025-11-11.js",
    startDate: "2025-11-11"
  }
];

// Default to the most recent week
const defaultWeek = availableWeeks[availableWeeks.length - 1].id;