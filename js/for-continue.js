let continueResult = "";

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; 
  }
  continueResult += i + " ";
}

console.log("Continue Loop Output:", continueResult); 


