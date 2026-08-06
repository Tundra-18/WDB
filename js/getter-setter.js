class Car {
    constructor(brand) {
        this._carname = brand; // _ 
    }

    // Getter
    get carname() {
        return this._carname;
    }

    // Setter
    set carname(x) {
        this._carname = x;
    }
}

const myCar = new Car("Ford");
console.log(myCar.carname)

// Setter 
myCar.carname = "Volvo"; 

console.log("-----------------------")

// Getter 
console.log(myCar.carname); // Output: Volvo

