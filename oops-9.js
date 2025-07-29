// Write a User class with:

// Static property: count (to keep track of how many users are created)

// Constructor that increments User.count whenever a new user is created

// Static method: getTotalUsers() that returns the count

class User {
    static count = 0;

    constructor(name){
        this.name = name;
        User.count++;
    }
  
    static getTotalUsers(user){
        return User.count ;
    }
    sayHello(){
        console.log(`Hello iam ${this.name}`);
    }
}

const user1 = new User();
const user2 = new User();
const user3 = new User('Om')
user3.sayHello();
console.log(User.getTotalUsers());