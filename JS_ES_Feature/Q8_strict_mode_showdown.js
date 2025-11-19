"use strict";
/*
Q8 – Strict Mode Showdown
- Demonstrates errors with duplicate parameter names and illegal operations in strict mode.
*/
function demoStrict(a, a2) {
  // This function uses unique names; the original demo(a,a) is invalid in strict mode
  // total without declaration would throw; so we declare properly
  let total = 10;
  // delete total; // delete on declared variable will fail in strict mode
  // To show differences, we log behaviors.
  console.log("Inside demoStrict:", a, a2, total);
}
console.log("=== Q8: Strict Mode Showdown ===");
demoStrict(5, 10);

console.log("// Notes:");
console.log("// 1) In non-strict mode, duplicate parameter names are allowed but discouraged.");
console.log("// 2) In strict mode, duplicate parameter names cause a SyntaxError.");
console.log("// 3) Assigning to undeclared variables causes ReferenceError in strict mode.");
console.log("Correct ES6 version uses unique parameter names and 'let/const' for variable declarations.");
console.log("=== End Q8 ===\n");
