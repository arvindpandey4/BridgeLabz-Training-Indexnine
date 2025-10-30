//full time daily wage

const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;

const dailyWage = WAGE_PER_HOUR * FULL_DAY_HOURS;

console.log("Wage per hour:", WAGE_PER_HOUR);
console.log("Full day hours:", FULL_DAY_HOURS);
console.log("Daily Wage (full-time):", dailyWage);

//part time daily wage
const PART_TIME_HOURS = 4;

const fullTimeWage = WAGE_PER_HOUR * FULL_DAY_HOURS;
const partTimeWage = WAGE_PER_HOUR * PART_TIME_HOURS;

console.log("Full-time wage (8 hrs):", fullTimeWage);
console.log("Part-time wage (4 hrs):", partTimeWage);
console.log("Part-time is half of full-time:", partTimeWage === fullTimeWage / 2);