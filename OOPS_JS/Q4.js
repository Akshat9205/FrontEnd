class Employee{
constructor(name,department){
this.name=name;
this.department=department;
}
work(){
return this.name+" is working.";
}
}

class Manager extends Employee{
work(){
return this.name+" is managing team.";
}
}

const e=new Employee("Harsh","HR");
const m=new Manager("Prakhar","IT");

console.log(e.work());
console.log(m.work());
