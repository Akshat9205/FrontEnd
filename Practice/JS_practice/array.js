// Creating an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Accessing elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Mango

// Changing a value
fruits[1] = "Cherry";
console.log(fruits); // Output: ["Apple", "Cherry", "Mango", "Orange"]

// Length of the array
console.log(fruits.length); // Output: 4


let numbers = [10, 20, 30];

// Add element at the end
numbers.push(40);
console.log(numbers); // [10, 20, 30, 40]

// Remove last element
numbers.pop();
console.log(numbers); // [10, 20, 30]

// Add element at the beginning
numbers.unshift(5);
console.log(numbers); // [5, 10, 20, 30]

// Remove first element
numbers.shift();
console.log(numbers); // [10, 20, 30]
//Slice and splice explore


let colors = ["Red", "Green", "Blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


let cities = ["Delhi", "Mumbai", "Pune"];

cities.forEach(function(city) {
  console.log("City:", city);
});


let mixed = ["Ayush", 21, true, { city: "Lucknow" }];
console.log(mixed[3].city); // Output: Lucknow


let arr4 = [1, 2, 3, 4, 5];

let mapArr4 = arr4.map((x) => x*2);
console.log(mapArr4);

console.log(arr4.filter(x => x%2==0));

console.log(arr4.reduce((a,b) => a+b));


//Slice
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Slice from index 1 to 3 (3 not included)
let slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits);  // Output: ["Banana", "Mango"]
console.log(fruits);        // Original remains unchanged
// Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"]


//Splice
let colors1 = ["Red", "Green", "Blue", "Yellow"];

// Remove 2 elements starting from index 1
colors1.splice(1, 2);

console.log(colors1); // Output: ["Red", "Yellow"]


let numbers1 = [1, 2, 5];

// Add new elements at index 2
numbers1.splice(2, 0, 3, 4); //start index, delete, elements

console.log(numbers1); // Output: [1, 2, 3, 4, 5]

let animals = ["Dog", "Cat", "Cow"];

// Replace 1 element at index 1
animals.splice(1, 1, "Elephant");

console.log(animals); // Output: ["Dog", "Elephant", "Cow"]