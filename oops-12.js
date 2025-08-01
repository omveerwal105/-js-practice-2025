// this keyword call apply bind 

const Car = {
    brand : 'tesla',
    showBrand : function () {
        console.log(`${this.brand}`)
    }
};

const bike = {
    brand : 'BMW'
};

Car.showBrand();

Car.showBrand.call(bike);
Car.showBrand.apply(bike );

const bikeBrand = Car.showBrand.bind(bike);
bikeBrand();


const user = {
  name: "Om",
  sayHi: function () {
    setTimeout(function () {
      console.log("Hi, " + this.name); 
    }.bind(this), 1000);
  },
};

user.sayHi();
