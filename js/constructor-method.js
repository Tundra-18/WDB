class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // Class Method 
    age(currentYear) {
        return currentYear - this.year;
    }
}

const myCar = new Car("Ford", 2014);

console.log(myCar.name) // Ford
console.log(myCar.year) // 2014
console.log(myCar.age(2026)); // 12

