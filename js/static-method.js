class Car {
  constructor(name) {
    this.name = name;
  }

  static greet(x) {
    return "Hello " + x.name;
  }
}

const myCar = new Car("Ford");
console.log(Car.greet(myCar)); // "Hello Ford"


