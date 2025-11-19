"use strict";
/*
Q5 – Hoisting Lab: The Sequence Trap
- Explanation of hoisting and memory states included as comments.
- Fixed version and arrow function variant provided.
*/

// ORIGINAL (will cause issues if run as-is):
/*
console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
  console.log(status);
}
*/

// FIXED version:
console.log("=== Q5: Hoisting Lab ===");
(function fixed() {
  // Declarations are hoisted; initializations are not.
  var score = 50;
  function announce() { console.log("Game started"); }
  let status = "ready";
  // Using functions after they are defined/variables initialized.
  console.log(score);
  announce();
  startGame();

  function startGame() {
    console.log(status);
  }

  // Arrow function variant: demonstrates that arrow functions are not hoisted as function declarations.
  const announceArrow = () => { console.log("Game started (arrow)"); };
  // announceArrow(); // safe to call after definition
  announceArrow();
})();

console.log("// Hoisting notes: 'var' declarations are hoisted with undefined. Function declarations are hoisted fully. 'let' and 'const' are hoisted but in TDZ until initialized.");
console.log("=== End Q5 ===\n");
