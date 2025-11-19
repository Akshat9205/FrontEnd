"use strict";
/*
Q3 – Transaction Validator
- Loops transactions, throws custom errors for negative/missing/null.
- Categorizes errors into arrays and prints reports.
*/
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class TransactionError extends Error {}
class NegativeAmountError extends TransactionError {}
class MissingFieldError extends TransactionError {}
class NullEntryError extends TransactionError {}

(function validate(transList) {
  console.log("=== Q3: Transaction Validator ===");
  const valid = [];
  const invalid = [];

  for (let i = 0; i < transList.length; i++) {
    try {
      const tx = transList[i];
      if (tx === null) throw new NullEntryError(`Transaction at index ${i} is null`);
      if (typeof tx !== "object") throw new TransactionError(`Invalid entry type at index ${i}`);
      if (!("id" in tx) || !("amount" in tx)) throw new MissingFieldError(`Missing id or amount at index ${i}`);
      if (typeof tx.amount !== "number") throw new TransactionError(`Amount not a number at index ${i}`);
      if (tx.amount < 0) throw new NegativeAmountError(`Negative amount for id ${tx.id}`);

      // If passed all checks
      valid.push(tx);
    } catch (err) {
      // classify
      if (err instanceof NegativeAmountError) {
        invalid.push({ type: "NegativeAmount", message: err.message, index: i });
      } else if (err instanceof MissingFieldError) {
        invalid.push({ type: "MissingField", message: err.message, index: i });
      } else if (err instanceof NullEntryError) {
        invalid.push({ type: "NullEntry", message: err.message, index: i });
      } else {
        invalid.push({ type: "Other", message: err.message, index: i });
      }
      // continue to next
    }
  }

  console.log("Valid transactions:", valid);
  console.log("Invalid transactions:", invalid);
  console.log(`Summary: successful=${valid.length}, failed=${invalid.length}`);
  console.log("=== End Q3 ===\n");
})(transactions);

// NOTE: Add a breakpoint on the "for" loop to watch 'tx' and arrays in VS Code.
