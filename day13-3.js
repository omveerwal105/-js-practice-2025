// encapssulation private js feilds
class GymUser {
    #name;
    #weight;
    #height;
    constructor(name, weight, height) {
        this.#name = name;
        this.#height = height;
        this.#weight = weight;
    }
    get bmi() {
        const h = this.#height / 100;
        return (this.#weight / (h ** 2)).toFixed(2);
    }

    get info() {
        return `Name: ${this.#name} , Bmi: ${this.bmi}`;
    }

    set weightUpdate(newWeight) {
        if (newWeight > 0 && newWeight < 300) {
            this.#weight = newWeight;
        } else {
            console.log("❌ Invalid weight input.");
        }
    }
}

const u1 = new GymUser("Om",75,181);
console.log(u1.info);
u1.weightUpdate=82;
console.log(u1.info);