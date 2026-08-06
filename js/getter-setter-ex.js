class Student {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    // Getter
    get age() {
        return `Name: ${this.name}, Age: ${this._age}`;
    }

    // Setter
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be greater than 0.");
        }
    }
}

const student = new Student("Alice", 20);

console.log(student.age); // 20

student.age = 22;
console.log(student.age); // 22

student.age = -5;
console.log(student.age);


