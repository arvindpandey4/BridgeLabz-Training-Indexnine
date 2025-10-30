class EmployeeWage {
  constructor(companyName, wagePerHour = 20, maxDays = 20, maxHours = 100) {
    this.companyName = companyName;
    this.wagePerHour = wagePerHour;
    this.maxDays = maxDays;
    this.maxHours = maxHours;
  }

  // helper to get hours for a day
  _getDailyHours() {
    const mode = Math.floor(Math.random() * 3); 
    switch (mode) {
      case 0: return 0; 
      case 1: return 4; 
      case 2: return 8; 
      default: return 0;
    }
  }

  // public method to compute monthly wage
  computeMonthlyWage() {
    let totalDays = 0;
    let totalHours = 0;
    let totalWage = 0;

    while (totalDays < this.maxDays && totalHours < this.maxHours) {
      totalDays++;
      const hoursToday = this._getDailyHours();
      const hoursCounted = (totalHours + hoursToday > this.maxHours)
        ? (this.maxHours - totalHours)
        : hoursToday;

      totalHours += hoursCounted;
      totalWage += hoursCounted * this.wagePerHour;
    }

    return {
      companyName: this.companyName,
      totalDays,
      totalHours,
      totalWage
    };
  }
}

const company = new EmployeeWage("XYZ Corp", 20, 20, 100);
const result = company.computeMonthlyWage();

console.log("Employee wage computation for:", result.companyName);
console.log("Total Days:", result.totalDays);
console.log("Total Hours:", result.totalHours);
console.log("Total Wage:", result.totalWage);
