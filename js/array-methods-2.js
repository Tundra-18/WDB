const courses = ["HTML", "CSS", "JavaScript", "Python"];

courses.forEach((course, index) => {
  console.log(`Course at index ${index} is ${course}`);
});


let indexJS = courses.indexOf("JavaScript");
let indexPHP = courses.indexOf("PHP");

console.log("Index of 'JavaScript':", indexJS); // Output: 2
console.log("Index of 'PHP' (Not Found):", indexPHP); // Output: -1

let hasPython = courses.includes("Python");
let hasRuby = courses.includes("Ruby");

console.log("Does array include 'Python'?:", hasPython); // Output: true
console.log("Does array include 'Ruby'?:", hasRuby);     // Output: false


