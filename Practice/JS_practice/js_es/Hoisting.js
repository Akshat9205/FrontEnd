// It is a behaviour of javascript where it moves the declarations of variables, functions and classes 
// to the top of their scope during the compilation phase and before the code is executed.

// add();
// function add()
// {
//     console.log(10+10);//fully hoisted
// }

// d();//TypeError //Var
// d(); // d= undefined
// var d = function sub(){
//     console.log(10-10);
// }

// //Only var is undefined, let and const gives no value(TDZ) - Reference Error
// // let d = function sub(){
// //     console.log(10-10);
// // }


// //Variable Hoisting
// console.log(f);
// let f = 5

// class Hoisting (TDX - Temporal Dead Zone)
// const s = new Student("Kush", 20) // Reference error
// s.show()
// var s2 = new Student("Kush", 20) // Reference error
// s.show()

class Student{
    constructor(name, age)
    {
        this.age = age
        this.name = name
    }


    show(){
        console.log(`Name : ${this.name} \n Age : ${this.age}`);
    }
}
const s2 = new Student("Kush", 20) 
s2.show()

const student = {
    "Name" : "Kushaal"
}

