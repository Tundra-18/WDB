// 1. Original Array
let textBooks = ["HTML", "CSS", "JavaScript"];
console.log("Original:", textBooks); 

// 2. push() - Add to end
let lenPush = textBooks.push("Python");
console.log("After push:", textBooks); 
console.log("Returned length:", lenPush); 

// 3. pop() - Remove from end
let popped = textBooks.pop();
console.log("After pop:", textBooks); 
console.log("Returned value:", popped); 

// 4. unshift() - Add to beginning
let lenUnshift = textBooks.unshift("Git", "Odoo");
console.log("After unshift:", textBooks); 
console.log("Returned length:", lenUnshift); 

// 5. shift() - Remove from beginning
let shifted = textBooks.shift();
console.log("After shift:", textBooks); 
console.log("Returned value:", shifted); 

