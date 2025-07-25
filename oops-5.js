// Q1. Create a class Shape with a method draw(). Then create subclasses:
// Circle → draw() logs "Drawing a circle"

// Square → draw() logs "Drawing a square"

// Then loop through an array of shapes and call draw() on each

class Shape{
    constructor(name){
        this.name=name;
    }
    draw(){
        console.log(`${this.name} drwaing `);
    }
}
class Circle extends Shape{
    constructor(){
        super('circle');
    }
    draw(){
        console.log(`Drawing a ${this.name}`);
    }
}
class Square extends Shape{
    constructor(){
    super('square');
    }
    draw(){
        console.log(`Drawing a ${this.name}`);
    }
}
const myShape = [new Shape('Generic Shape') , new Circle() , new Square()];

myShape.forEach((shape)=>shape.draw());

// encapsulation

// Q1. Create a class Person:
// Private field #age

// Getter: get age() → returns age

// Setter: set age(val) → only set if val >= 0 && val <= 120

class Person {
  #age = 23;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(val) {
    if (val >= 0 && val <= 120) {
      this.#age = val;
    } else {
      console.log("Please enter a valid age");
    }
  }
}

const om = new Person('Om', 23);

console.log(om.age);  
om.age = 24;
console.log(om.age);  
om.age = 140;         
console.log(om.age);  

