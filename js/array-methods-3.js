const numbers = [1, 2, 3, 4, 5, 6];
console.log("Original Array:", numbers);

const multipliedNumbers = numbers.map(num => num * 10);

console.log("Transformed Array (num * 10):", multipliedNumbers); 
// Output: [10, 20, 30, 40, 50, 60]
console.log("Original Array remains unchanged:", numbers); 
// Output: [1, 2, 3, 4, 5, 6]

// Filtering out only the even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Filtered Array (Even Numbers Only):", evenNumbers); 
// Output: [2, 4, 6]
console.log("Original Array remains unchanged:", numbers); 
// Output: [1, 2, 3, 4, 5, 6]


