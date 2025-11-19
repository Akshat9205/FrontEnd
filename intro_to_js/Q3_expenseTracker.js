
let expenses = [5000, 2000, 8000, 3000, 1500];
let total = expenses.reduce((a,b) => a + b, 0);
let avg = total / expenses.length;
let final = total * 1.1;
console.log("Total:", total.toFixed(2));
console.log("Average:", avg.toFixed(2));
console.log("Final after tax:", final.toFixed(2));
