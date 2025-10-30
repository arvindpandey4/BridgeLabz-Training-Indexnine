const isPresent = Math.random() < 0.5 ? 0 : 1; // 50% chance

if (isPresent) {
  console.log("Employee is Present");
} else {
  console.log("Employee is Absent");
}

console.log("Debug: isPresent value =", isPresent);