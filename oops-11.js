// prototype

function Person(name){
    this.name = name;
}
Person.prototype.sayHello = function () {
    return `Hello, I m ${this.name}`;
};

function Student(name , grade){
    Person.call(this, name);
    this.grade = grade;
}
// Inherit prototype:
Student.prototype = Object.create(Person.prototype);

// correct constructor refernce :
Student.prototype.constructor =  Student ;

// // Add method to Student:
Student.prototype.study = function () {
    return `${this.name} is studying in grade ${this.grade}`;
}

Student.prototype.sayHello = function () {
     return `Hey, I'm student ${this.name}` ;
};

const s1 = new Student("Om", 12);

console.log(s1.sayHello());
console.log(s1.study());
console.log(s1 instanceof Student); 
console.log(s1 instanceof Person);  

