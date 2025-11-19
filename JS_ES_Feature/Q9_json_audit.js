"use strict";
/*
Q9 – JSON Audit
- Parses raw JSON entries with try...catch.
- Detects missing keys and invalid JSON.
- Pushes valid entries to clean array and converts age to Number.
- Logs errors with line numbers.
*/
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

(function audit(data) {
  console.log("=== Q9: JSON Audit ===");
  const clean = [];
  const errors = [];

  for (let i = 0; i < data.length; i++) {
    const line = data[i];
    try {
      const parsed = JSON.parse(line);
      // Check required keys
      if (!("user" in parsed) || !("age" in parsed)) {
        throw new Error(`Missing keys at line ${i}: required 'user' and 'age'`);
      }
      // Convert age to Number
      parsed.age = Number(parsed.age);
      if (Number.isNaN(parsed.age)) throw new Error(`Invalid age at line ${i}`);
      // Filter under-18
      if (parsed.age < 18) {
        console.log(`Filtered under-18 user at line ${i}:`, parsed);
      } else {
        clean.push(parsed);
      }
    } catch (err) {
      errors.push({ line: i, raw: line, message: err.message });
    }
  }

  console.log("Clean entries:", clean);
  console.log("Errors:", errors);
  console.log("=== End Q9 ===\n");
})(rawData);
