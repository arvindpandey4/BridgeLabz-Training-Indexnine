
class CompanyWageCalculator {
  // compute wage for a company with specific parameters passed as an object
  computeWageForCompany({ companyName, wagePerHour, maxDays, maxHours }) {
    let totalDays = 0;
    let totalHours = 0;
    let totalWage = 0;

    function getDailyHoursRandom() {
      const mode = Math.floor(Math.random() * 3);
      switch (mode) {
        case 0: return 0;
        case 1: return 4;
        case 2: return 8;
        default: return 0;
      }
    }

    while (totalDays < maxDays && totalHours < maxHours) {
      totalDays++;
      const hoursToday = getDailyHoursRandom();
      const hoursCounted = (totalHours + hoursToday > maxHours)
        ? (maxHours - totalHours)
        : hoursToday;

      totalHours += hoursCounted;
      totalWage += hoursCounted * wagePerHour;
    }

    return {
      companyName,
      wagePerHour,
      maxDays,
      maxHours,
      totalDays,
      totalHours,
      totalWage
    };
  }
}

const companies = [
  { companyName: "XYZTech", wagePerHour: 15, maxDays: 20, maxHours: 80 },
  { companyName: "ABCTech", wagePerHour: 20, maxDays: 22, maxHours: 100 },
  { companyName: "PQRTech", wagePerHour: 18, maxDays: 18, maxHours: 90 },
];

const calculator = new CompanyWageCalculator();

const results = companies.map(company => calculator.computeWageForCompany(company));

results.forEach(res => {
  console.log("Company:", res.companyName);
  console.log("Wage/hr:", res.wagePerHour, "MaxDays:", res.maxDays, "MaxHours:", res.maxHours);
  console.log("Total Days:", res.totalDays, "Total Hours:", res.totalHours, "Total Wage:", res.totalWage);
});
