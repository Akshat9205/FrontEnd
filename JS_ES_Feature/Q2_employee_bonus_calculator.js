"use strict";
/*
Q2 – Employee Bonus Calculator
- Converts salary and years to numbers.
- bonus = 10% if years > 3 else 5%
- Strict validation, template strings, try...catch for conversion/missing properties.
*/
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

(function calcBonuses(list) {
  console.log("=== Q2: Employee Bonus Calculator ===");
  for (let i = 0; i < list.length; i++) {
    try {
      const emp = list[i];
      if (!emp) throw new Error("Missing employee object");
      const { name } = emp;
      if (!("salary" in emp) || !("years" in emp)) {
        throw new Error(`Missing salary or years for ${name || "unknown"}`);
      }
      const salary = Number(emp.salary);
      const years = Number(emp.years);

      if (Number.isNaN(salary) || Number.isNaN(years)) {
        throw new TypeError(`Conversion failed for employee ${name}`);
      }

      const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

      console.log(`Employee: ${name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
    } catch (err) {
      console.log(`Error processing employee at index ${i}:`, err.message);
    }
  }
  console.log("=== End Q2 ===\n");
})(employees);
