"use strict";
/*
Q10 – Nested Hoisting and Closures
- Predict output and demonstrate behavior.
- Convert inner function to arrow and note changes.
*/
function outer() {
  console.log("outer before var count:", typeof count !== "undefined" ? count : "undefined");
  var count = 5;
  function inner() {
    console.log("inner before var count:", typeof count !== "undefined" ? count : "undefined");
    var count = 10;
    console.log("inner after var count:", count);
  }
  inner();
  console.log("outer after inner, count:", count);
}

console.log("=== Q10: Nested Hoisting and Closures ===");
outer();
console.log("// Explanation: Both 'var count' declarations are hoisted in their respective function scopes. The inner function's 'var count' shadows outer's count.");

// Arrow variant
function outerArrow() {
  var count = 5;
  const innerArrow = () => {
    // Arrow function does not create its own 'arguments' binding or its own 'this', but 'var count' below would still shadow if declared
    var count = 10; // still function-scoped inside the same function, so here it creates a new binding in the inner function scope
    console.log("innerArrow count:", count);
  };
  innerArrow();
  console.log("outerArrow count:", count);
}
outerArrow();

console.log("=== End Q10 ===\n");

// Debug note: set breakpoints inside outer and inner to inspect separate variable environments and the call stack.
