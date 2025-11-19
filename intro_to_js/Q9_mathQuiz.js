
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let ops = ['+', '-', '*', '/'];
let op = ops[Math.floor(Math.random() * ops.length)];
let ans;
switch (op) {
  case '+': ans = num1 + num2; break;
  case '-': ans = num1 - num2; break;
  case '*': ans = num1 * num2; break;
  case '/': ans = (num1 / num2).toFixed(2); break;
}
console.log(`${num1} ${op} ${num2} = ${ans}`);
