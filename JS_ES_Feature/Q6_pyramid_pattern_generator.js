"use strict";
/*
Q6 – Pyramid Pattern Generator
- Generates a simple star pyramid.
- Observes var vs let behavior and uses strict mode.
- Allows an outer limit controlled by user input (via environment variable) default 5.
*/
(function pyramid() {
  console.log("=== Q6: Pyramid Pattern Generator ===");
  // Read user limit from environment variable to avoid prompt (suitable for automated run)
  const limit = Number(process.env.PYRAMID_LIMIT) || 5;
  console.log(`Using outer loop limit = ${limit}`);

  // Using let (block-scoped loop variable)
  for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }

  console.log("\nNow replacing 'let' with 'var' to observe behavior (in code comments):");
  console.log("If we used 'var' for loop counters, variables would be function-scoped and can cause unexpected reuse in closures.");

  console.log("=== End Q6 ===\n");
})();
