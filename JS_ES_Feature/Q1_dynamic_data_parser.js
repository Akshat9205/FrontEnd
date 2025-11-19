"use strict";
/*
Q1 – Dynamic Data Parser
- Converts mixed API data into Number, Boolean, and String.
- Skips invalid numbers and logs them separately.
- Builds arrays for valid numeric data and invalid entries.
- All output via console.log().
*/
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

(function parseData(data) {
  console.log("=== Q1: Dynamic Data Parser ===");
  const validNumbers = [];
  const invalidNumbers = [];

  function toNumber(val) {
    // Number(null) === 0, Number(undefined) === NaN — we want to treat null/undefined as invalid numerics here
    if (val === null || val === undefined) return NaN;
    return Number(val);
  }

  for (let i = 0; i < data.length; i++) {
    const original = data[i];
    // Convert to String
    const asString = String(original);
    // Convert to Boolean
    const asBoolean = Boolean(original);
    // Convert to Number
    const asNumber = toNumber(original);
    // Determine if numeric is valid
    const isValidNumber = typeof asNumber === "number" && !Number.isNaN(asNumber);
    if (isValidNumber) {
      validNumbers.push(asNumber);
    } else {
      // Check specific invalid cases per instructions
      invalidNumbers.push({ index: i, value: original, reason: "invalid number" });
    }

    console.log(`Index ${i} | original: ${JSON.stringify(original)} | String: "${asString}" | Boolean: ${asBoolean} | Number: ${asNumber}`);
  }

  console.log("\nValid numeric data array:", validNumbers);
  console.log("Invalid numeric entries (skipped):", invalidNumbers);
  console.log("=== End Q1 ===\n");
})(apiData);
