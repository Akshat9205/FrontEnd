//Different ways to initialize a string
let a = "Hii"
let b = 'Hii'
let c = `Hii`
let g = new String("Hii")


//Concatination of string
let d = a + " " + b
let e = a.concat(b)
let f = `Hii${b}`

console.log(f);

//length of string
console.log(b.length);

console.log("hello".length);


//toLowerCase
b.toLowerCase();
"Hello".toLowerCase()

//toUpperCase
b.toUpperCase();
"Hello".toUpperCase()


//trim
b.trim()

//includes
"Hello".includes("el");

//lastIndexof
"Hello".lastIndexOf('l')

//slice
console.log("Hello".slice(1,4))

//split 
"He l alo".split(' ')