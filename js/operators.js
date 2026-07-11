// Arithmetic Operators 
console.log("--- 1. Arithmetic ---");
let num1 = 10;
let num2 = 3;

console.log("Addition (+):", num1 + num2);       
console.log("Subtraction (-):", num1 - num2);    
console.log("Multiplication (*):", num1 * num2); 
console.log("Division (/):", num1 / num2);       
console.log("Modulus/Remainder (%):", num1 % num2); 
console.log("Exponentiation (**):", num1 ** num2); 

// Assignment Operators 
console.log("--- 2. Assignment ---");
let x = 20;
x += 5;  
console.log("Add Assignment (+=):", x);         

let text = "Hello";
text += " World"; 
console.log("String Assignment (+=):", text);   

// Comparison Operators 
console.log("--- 3. Comparison ---");
let a = 5;
let b = "5";

console.log("Equal value (==):", a == b);        
console.log("Equal value & type (===):", a === b); 
console.log("Not Equal (!=):", a != 8);         
console.log("Greater than (>):", a > 3);       

// Logical Operators 
console.log("--- 4. Logical ---");
let age = 22;
let hasID = true;

console.log("AND (&&):", age > 18 && hasID === true); 
console.log("OR (||):", age < 18 || hasID === true);  
console.log("NOT (!):", !hasID);                     

// Ternary Operator 
console.log("--- 5. Ternary ---");
let score = 45;
let passStatus = (score >= 50) ? "Passed" : "Failed";
console.log("Exam Result:", passStatus);         

