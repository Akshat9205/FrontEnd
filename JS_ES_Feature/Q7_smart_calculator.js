"use strict";
/*
Q7 – Smart Calculator
- Handles operations: add, divide, power, root, subtract
- Custom errors for divide by zero and root of negative.
- Throws InvalidOperationError for unknown operations.
*/
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0; // per task

class InvalidOperationError extends Error {}
class MathDomainError extends Error {}

(function smartCalc(op, a, b) {
  console.log("=== Q7: Smart Calculator ===");
  try {
    let result;
    switch (op) {
      case "add":
        result = a + b;
        break;
      case "subtract":
        result = a - b;
        break;
      case "divide":
        if (b === 0) throw new MathDomainError("Division by zero");
        result = a / b;
        break;
      case "power":
        result = Math.pow(a, b);
        break;
      case "root":
        if (a < 0) throw new MathDomainError("Root of negative number");
        result = Math.pow(a, 1 / b);
        break;
      default:
        throw new InvalidOperationError(`Operation '${op}' not recognized`);
    }
    console.log(`Operation: ${op} | num1=${a} | num2=${b} | Result: ${result}`);
  } catch (err) {
    if (err instanceof InvalidOperationError) {
      console.log("InvalidOperationError:", err.message);
    } else if (err instanceof MathDomainError) {
      console.log("MathDomainError:", err.message);
    } else {
      console.log("Error:", err.message);
    }
  }
  console.log("=== End Q7 ===\n");
})("divide", num1, num2);
