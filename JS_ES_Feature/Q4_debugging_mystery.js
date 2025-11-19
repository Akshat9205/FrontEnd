"use strict";
/*
Q4 – Debugging Mystery
- Under strict mode, assigning to an undeclared variable throws an error.
- Fix by declaring variable with let/var/const.
*/
function showMessage() {
  // greeting = "Welcome"; // would throw in strict mode: ReferenceError: greeting is not defined
  let greeting = "Welcome"; // fixed: declared in local scope
  console.log(greeting);
}
console.log("=== Q4: Debugging Mystery ===");
showMessage();
console.log("// Explanation: In strict mode, assignments to undeclared identifiers are forbidden. Declaring 'greeting' with let creates a local binding and prevents the ReferenceError.");
console.log("=== End Q4 ===\n");

// Debug note: place a watch on 'greeting' inside the function and step through call stack in VS Code.
