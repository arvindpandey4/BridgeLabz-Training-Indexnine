// Used switch-case to compute daily hours/wage depending on attendance type

const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;

// Randomly choose 0,1,2
const mode = Math.floor(Math.random() * 3);

let hoursWorked;
switch (mode) {
  case 0:
    hoursWorked = 0;
    console.log("Attendance: Absent");
    break;
  case 1:
    hoursWorked = PART_TIME_HOURS;
    console.log("Attendance: Part-time");
    break;
  case 2:
    hoursWorked = FULL_DAY_HOURS;
    console.log("Attendance: Full-time");
    break;
  default:
    hoursWorked = 0;
    console.log("Unknown attendance mode");
}

const dailyWage = hoursWorked * WAGE_PER_HOUR;
console.log("Hours worked:", hoursWorked);
console.log("Daily wage:", dailyWage);
console.log("Debug mode value:", mode);
