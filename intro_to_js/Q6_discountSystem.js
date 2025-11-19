
let total = 7500;
let discount = total >= 10000 ? 25 : total >= 5000 ? 15 : total >= 2000 ? 5 : 0;
let final = total - (total * discount / 100);
console.log("Original Total:", total);
console.log("Discount %:", discount);
console.log("Final Price:", Math.round(final));
