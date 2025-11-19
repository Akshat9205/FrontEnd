
let salary = 50000;
let increment = 10;
let data = [];
for (let year = 1; year <= 5; year++) {
  salary += (salary * increment) / 100;
  data.push({ Year: year, Salary: Math.round(salary) });
}
console.table(data);
