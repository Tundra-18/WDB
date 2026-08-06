const fruits = ["Apple", "Orange", "Apple", "Mango", NaN];
const numbers = [12, 28, 35, 42, 50, 39, 18];

console.log("--- Value-Based Search ---");

// indexOf() - Finds the index of the first occurrence
console.log("Index of Apple : ", fruits.indexOf("Apple")); 
console.log("Index of Grape: ", fruits.indexOf("Grape")); 

// lastIndexOf() - Finds the index of the last occurrence
console.log("Last index of Apple : ", fruits.lastIndexOf("Apple")); 

// includes() - Checks existence (returns true/false, handles NaN)
console.log("Does include Mango ? :", fruits.includes("Mango")); 
console.log("Does include NanN ? :", fruits.includes(NaN)); 


console.log("\n--- Condition-Based Search ---");

const isOver40 = num => num > 40;

// find() - First value matching condition (from start)
console.log("find (> 40):", numbers.find(isOver40)); 

// findIndex() - First index matching condition (from start)
console.log("findIndex (> 40):", numbers.findIndex(isOver40)); 

// findLast() - First value matching condition (from end)
console.log("findLast (> 40):", numbers.findLast(isOver40)); 

// findLastIndex() - First index matching condition (from end)
console.log("findLastIndex (> 40):", numbers.findLastIndex(isOver40)); 