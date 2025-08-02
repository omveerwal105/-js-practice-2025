const user = {
    name : 'om',
    sayHi : function () {
        setTimeout(function (){
            console.log('hi, ' + this.name)
        }.bind(this),1000)
    }
};

user.sayHi();

function Counter() {
  this.count = 0;
  setInterval(()=> {
    this.count++;
    console.log(this.count);
  }, 1000);
}
new Counter();

const a = {
  name: "Om",
  greet: () => {
    console.log("Hey, " + this.name);
  },
};

a.greet();

function createCounter(start) {
  return {
    increment: function () {
      start++;
      console.log(start);
    },
    decrement: function () {
      start--;
      console.log(start);
    },
  };
}

const counter = createCounter(5);
counter.increment(); // ?
counter.decrement(); // ?

