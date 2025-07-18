// oop 
// class and constructor  Inheritance Encapsulation Abstraction

// Parent Class

class GymUser {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;;
    }

    calculateBmi() {
        const heightInMeters = this.height / 100;
        const bmi = this.weight / (heightInMeters ** 2);
        return bmi.toFixed(2);
    }

    greet(){
        console.log(`Hey ${this.name} , your BMI is ${this.calculateBmi()}`);
    }
}

// child class

class AthleteUser extends GymUser {
    constructor(name , height ,weight , sport){
        super(name , height ,weight);
        this.sport = sport
    }

    showAthlete(){
           console.log(`${this.name} is an athlete in ${this.sport}`);
    }
}

const Athlete1 = new AthleteUser('Om', 181 ,75 ,'boxing');
Athlete1.greet();
Athlete1.showAthlete();