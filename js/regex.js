// Email Validation
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const userEmail = "test@gmail.com";

if (emailPattern.test(userEmail)) {
  console.log("Email format is valid.");
} else {
  console.log("Invalid email format.");
}


// Find Phone Numbers
const text = "Phone numbers: 091234567, 099876543";
const phonePattern = /\d+/g; // Find all numbers

const results = text.match(phonePattern);
console.log(results);
// Output: ["091234567", "099876543"]


// Replace Text
const str = "JavaScript is cool, javascript is fast!";
const updatedStr = str.replace(/javascript/gi, "Python");

console.log(updatedStr);
// Output: "Python is cool, Python is fast!"


// Numeric Validation
const isNumeric = /^\d+$/;
const value = "123456";

if (isNumeric.test(value)) {
    console.log("Valid number.");
} else {
    console.log("Invalid number.");
}


// Username Validation
const usernamePattern = /^[a-zA-Z0-9]{6,12}$/;
const username = "John123";

if (usernamePattern.test(username)) {
    console.log("Valid username.");
} else {
    console.log("Invalid username.");
}


// Password Validation
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const password = "Hello123";

if (passwordPattern.test(password)) {
    console.log("Strong password.");
} else {
    console.log("Weak password.");
}


