console.log("var hoisting:", hoistedVar); // undefined
var hoistedVar = 5;

try {
  console.log("let tdz:", tdzVar); // ReferenceError
} catch(e) {
  console.log("let TDZ error:", e.name);
}
let tdzVar = 10;

hoistedFunc();
function hoistedFunc() { console.log("function declaration hoisted"); }

try {
  notAFunction(); // TypeError because var is hoisted but init is function expression
} catch(e) {
  console.log("fn expr error:", e.name);
}
var notAFunction = function() { console.log("will not run here"); };
