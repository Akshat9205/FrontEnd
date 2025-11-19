
let name = "Alex";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "sports"];
let address = { city: "Delhi", country: "India" };
let emptyValue = null;
let unknownValue;
console.table([
  { label: "Name", value: name, type: typeof name },
  { label: "Age", value: age, type: typeof age },
  { label: "Is Student", value: isStudent, type: typeof isStudent },
  { label: "Hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { label: "Address", value: JSON.stringify(address), type: typeof address },
  { label: "Empty", value: emptyValue, type: typeof emptyValue },
  { label: "Unknown", value: unknownValue, type: typeof unknownValue }
]);
