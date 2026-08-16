// 1. setTimeout & Arguments 
const timeoutId = setTimeout((name) => {
  console.log(`Hello, ${name}!`);
}, 1000, "Alice");


// 2. setInterval & clearInterval (every 0.5 sec)
let count = 3;
const intervalId = setInterval(() => {
  console.log(`Count: ${count}`);
  count--;

  if (count === 0) {
    clearInterval(intervalId); // stop after 3 times
    console.log("Done!");
  }
}, 500);

// 3. Zero Delay 
setTimeout(() => console.log("Async Timer"), 0);

console.log("Sync Code");


