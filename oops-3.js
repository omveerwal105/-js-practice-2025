

// call()


const obj = {
  name: "Om",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};




const greetFn = () => obj.greet(obj);
greetFn(); 


const user = {
  name: "Om",
  logName: function () {
    setTimeout(function () {
      console.log(this.name);
    }.bind(this) , 1000);
  }
};
user.logName(); // ?

