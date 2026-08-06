let hugeNumber = 9007199254740991n; 
console.log(typeof hugeNumber)

let anotherHuge = BigInt("9007199254740991");
console.log(anotherHuge);
console.log(typeof anotherHuge)

let bigintSum = hugeNumber + 1n;
console.log(bigintSum); // 9007199254740992n


