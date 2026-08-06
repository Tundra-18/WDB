const fruits = ["Banana", "Orange", "Apple", "Mango"];
const points = [40, 100, 1, 5, 25, 10];
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

// 1. Alphabetic, Reverse & Safe Options (ES2023)
console.log("Sort (Mutating):", [...fruits].sort()); 
console.log("Reverse (Mutating):", [...fruits].reverse()); 

console.log("Safe Sorted (New Array):", fruits.toSorted()); 
console.log("Safe Reversed (New Array):", fruits.toReversed()); 

// 2. Numeric Sort
console.log("Ascending:", [...points].sort((a, b) => a - b)); 
console.log("Descending:", [...points].sort((a, b) => b - a)); 

// 3. Object Sort
console.log("By Year:", [...cars].sort((a, b) => a.year - b.year));
console.log("By Type:", [...cars].sort((a, b) => a.type.localeCompare(b.type)));

// 4. Min / Max
console.log("Min:", Math.min(...points)); 
console.log("Max:", Math.max(...points));

