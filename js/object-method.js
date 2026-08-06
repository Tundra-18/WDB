const user = {
    firstName: "Kyaw",
    lastName: "Zin",
  
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },

    greet() {
        console.log(`Hello, my name is ${this.fullName()}`);
    }
};

console.log(user.fullName()); 
user.greet();                

