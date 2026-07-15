let text = "   JavaScript Programming Language   ";
console.log("Original String:", text);

let part = text.slice(3, 13);
console.log("\nExtracted Text:", part);

let upperText = text.toUpperCase();
console.log("\nUppercase:", upperText);

let lowerText = text.toLowerCase();
console.log("\nLowercase:", lowerText);

let replacedText = text.replace("JavaScript", "Python");
console.log("\nAfter Replace:", replacedText);

let position = text.indexOf("Programming");
console.log("\nIndex of Programming:", position);

let trimmedText = text.trim();
console.log("\nAfter Trim:", trimmedText);


