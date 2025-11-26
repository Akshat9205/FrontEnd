// 1. Arrow Function 
const add = (a,b) => a+b 

// 2. Anonymus Function 
setTimeout(function(){
    console.log("2 sec", 2000);
})

// IIFE - Immediately 
(function(){
    console.log("IMME");
})();


// Higher Order Function
function greetUser(greetFn, name){
    return greetFn(name)
}

//Callback Function
function greet(name){
    return "Hello " + name;
}

const s = greetUser(greet, "Kushaal")
console.log(s);


//Prototypes
Object.prototype.print = function(){
    console.log("Common method");
}

let b = {
    name: "Kushaal",
    age: 20
}

b.print()


//Callback Function
function a(fun){
    console.log("First")
    fun()
}
function b(fun){
    console.log("Second")
    fun()
}
function c(fun){
    console.log("Third")
    fun()
}
function d(){
    console.log("Fourth")
}

//Callback Hell
a(function(){
    b(function(){
        cw(d)
    })
})