// Write a Student class with a private field #marks and a method getGrade() that returns:

// "A" if marks >= 90

// "B" if 70 <= marks < 90

// "C" otherwise

class Student {
    #marks
    constructor(name , marks){
        this.name = name;
        this.#marks = marks;
    }

    getGrade() {
        if (this.#marks >= 90) {
            return "A";
        } else if (this.#marks >= 70 && this.#marks < 90) {
            return "B";
        } else {
            return "C";
        }
    }
}

const om = new Student('om', 75);
om.getGrade();
console.log(`${om.name} gets ${om.getGrade()} grade`);
