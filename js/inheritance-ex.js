// Parent Class
class Person {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    introduce() {
        console.log(`Hello, I'm ${this.name}.`);
        console.log(`I am ${this.age} years old.`);
    }

}

// Child Class
class Student extends Person {
    // Constructor
    constructor(name, age, grade) {
        super(name, age); // Call the parent constructor
        this.grade = grade;
    }

    // Child Method
    study() {
        console.log(`${this.name} is studying.`);
        console.log(`Grade: ${this.grade}`);
    }

}

// Create Objects
const student1 = new Student("Alice", 20, "A");
const student2 = new Student("Bob", 19, "B");
const student3 = new Student("Charlie", 21, "A+");

// Call Methods
student1.introduce();
student1.study();

console.log("----------------------");

student2.introduce();
student2.study();

console.log("----------------------");

student3.introduce();
student3.study();

