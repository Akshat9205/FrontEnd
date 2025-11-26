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
    "Name" : "Kushaal",
    "Age" : 20
}

const stud2 = new Object()
stud2.name = "Kushaal"
stud2.age = 20

//Constructor Function
function bike(name, price){
    this.name = name
    this.price = price
    this.greet = function(){ // Anonymus Function
        return `Hi my name is ${this.name} and price is ${this.price}`
    }
}

const bike1 = new bike("KIA-Seltos", 100000)

//Using create 
const child = {
    greet()
    {
        console.log("Hii")
    }
}

const child1 = Object.create(child)
child1.age  = 24
child1.greet()
console.log(child1.age);


//Using JSON
const person = '{"name" : "Kushaal", "Age" : 20}'
const jsonObj = JSON.parse(person)
console.log(jsonObj.name);
const stringObj = JSON.stringify(jsonObj)