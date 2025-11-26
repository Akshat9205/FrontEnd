// Arithmetic Operator
// Relational/Comparison Operator
// Logical Operator
// Bitwise Operator
// Ternary Operator
// Unary Operator
// Assignment Operator
// Type Operator
// Nullish Coalsecing ??



// Arithmetic Operators
let a = 10;
let b = 3;

console.log("Arithmetic Operators");
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);
console.log("\n");


// Relational / Comparison Operators
console.log("Comparison Operators");
console.log("a > b =", a > b);
console.log("a == b =", a == b);
console.log("a === b =", a === b);
console.log("a != b =", a != b);
console.log("a !== b =", a !== b);
console.log("a <= b =", a <= b);
console.log("\n");


// Logical Operators
let x = true;
let y = false;

console.log("Logical Operators");
console.log("x && y =", x && y);
console.log("x || y =", x || y);
console.log("!x =", !x);
console.log("\n");


// Bitwise Operators
console.log("Bitwise Operators");
console.log("a & b =", a & b);
console.log("a | b =", a | b);
console.log("a ^ b =", a ^ b);
console.log("a << 1 =", a << 1);
console.log("a >> 1 =", a >> 1);
console.log("\n");


// Ternary Operator
console.log("Ternary Operator");
let ternary = (a > b) ? "a is bigger" : "b is bigger";
console.log("Result =", ternary);
console.log("\n");


// Unary Operators
console.log("Unary Operators");
console.log("+a =", +a);
console.log("-a =", -a);

let pre = ++a;
console.log("++a =", pre);

let post = b--;
console.log("b-- (before decrement) =", post);
console.log("b after decrement =", b);
console.log("\n");


// Assignment Operators
console.log("Assignment Operators");
let c = 5;
console.log("Initial c =", c);

c += 3;
console.log("c += 3 ->", c);

c -= 1;
console.log("c -= 1 ->", c);

c *= 2;
console.log("c *= 2 ->", c);

c /= 2;
console.log("c /= 2 ->", c);

c %= 3;
console.log("c %= 3 ->", c);

c **= 2;
console.log("c **= 2 ->", c);
console.log("\n");


// Type Operators
console.log("Type Operators");
console.log("typeof a =", typeof a);
console.log("\n");


// Nullish Coalescing Operator ??
console.log("Nullish Coalescing (??)");
let val = null;
console.log(val ?? "Default Value");
console.log("\n");