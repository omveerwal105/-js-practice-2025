// Create BankAccount class with deposit/withdraw, private balance, and logs

class BankAccount {
    #balance = 0;

    constructor(name,logs){
        this.name = name;
        this.logs = [];
    }

    deposite(amount){
        if(amount > 0){
            this.#balance +=amount;
            this.logs.push(`Deposie ${amount}`);
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -=amount;
            this.logs.push(`Withdraw ${amount}`);
        }
    }

    get balance(){
        return this.#balance;
    }

    showLogs(){
        console.log(this.logs);
    }
}

const acc = new BankAccount('Om');
acc.deposite(1000);
console.log(acc.balance);

// Make a Shape class and Rectangle, Circle subclasses with area() method

class Shape {
    constructor(name){
        this.name = name;
    }


    area(){
        throw new Error("area() must be implemented by subclass");
    }
}

class Rectangle extends Shape {
    constructor(width , height){
        super('Rectangle')
        this.width =width;
        this.height = height;
    }

     area() {
    return this.width * this.height;
  }

}
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const rect = new Rectangle(10,5);
console.log(`${rect.name} Area: ${rect.area()}`);

const circ = new Circle(7);
console.log(`${circ.name} Area: ${circ.area().toFixed(2)}`); 


// Design a User and AdminUser with role-based behavior using OOP

class User {
    constructor(username){
        this.username = username;
        this.role = 'user';
    }

    viewContent(){
        console.log(`${this.username} has viewed the content`);
    }

    getPermission(){
        return ["read"];
    }
}

class AdminUser extends User{
    constructor(username){
    super(username);
    this.role ='admin'
    }

    deleteUser(user){
        console.log(`${this.username} deleted User ${user.username}`);

    }

    getPermission(){
         return ["read", "write", "delete", "manage-users"];
    }
}

const normalUser = new User('Shivani');
normalUser.viewContent();

const admin = new AdminUser("Om");
admin.viewContent();
admin.deleteUser(normalUser);
console.log(admin.getPermission());