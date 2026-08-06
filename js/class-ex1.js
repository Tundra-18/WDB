class Student {
    // Constructor
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    // Method
    introduce() {
        console.log(`Hello, my name is ${this.name}.`);
        console.log(`I am ${this.age} years old.`);
        console.log(`My grade is ${this.grade}.`);
    }

}

// Create Objects
const student1 = new Student("John", 20, "A");
const student2 = new Student("Alice", 19, "B");
const student3 = new Student("David", 21, "A+");

// Call Methods
student1.introduce();

console.log("----------------");

student2.introduce();

console.log("----------------");

student3.introduce();