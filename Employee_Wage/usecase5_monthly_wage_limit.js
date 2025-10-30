const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;

const MAX_HOURS = 100;
const MAX_DAYS = 20;

let totalHours = 0;
let totalDays = 0;
let totalWage = 0;

function getDailyHoursRandom() {
  // 0 -> absent, 1 -> part-time, 2 -> full-time
  const mode = Math.floor(Math.random() * 3);
  switch (mode) {
    case 0: return 0;
    case 1: return PART_TIME_HOURS;
    case 2: return FULL_DAY_HOURS;
    default: return 0;
  }
}

while (totalHours < MAX_HOURS && totalDays < MAX_DAYS) {
  totalDays += 1;
  const hoursToday = getDailyHoursRandom();


  const hoursCounted = (totalHours + hoursToday > MAX_HOURS)
    ? (MAX_HOURS - totalHours)
    : hoursToday;

  totalHours += hoursCounted;
  const wageToday = hoursCounted * WAGE_PER_HOUR;
  totalWage += wageToday;

  console.log(`Day ${totalDays}: hours worked today = ${hoursToday} (counted ${hoursCounted}), wage = ${wageToday}`);
}
console.log("Total wage for the month:", totalWage);
console.log("Total days:", totalDays);
console.log("Total hours:", totalHours);