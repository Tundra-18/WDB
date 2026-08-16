let count = 1;

setInterval(countTime, 1000);


function countTime() {
    console.log("Count:", count);
    count++;
}