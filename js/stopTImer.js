let timerId = null;

function showTime() {
    console.log(new Date().toLocaleTimeString());
}

function startClock() {
    if (timerId === null) {
        timerId = setInterval(showTime, 1000);
        console.log("Clock started");
    }
}

function stopClock() {
    clearInterval(timerId);
    timerId = null;
    console.log("Clock stopped");
}

startClock();

setTimeout(() => {
    stopClock();
}, 5000);


