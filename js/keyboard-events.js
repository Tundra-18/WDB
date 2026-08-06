// 1. keydown Event
const keydownInput = document.getElementById("keydownInput");
const keydownLog = document.getElementById("keydownLog");

keydownInput.addEventListener("keydown", function (event) {
    // Detect the Enter key
    if (event.code === "Enter") {

        alert("You pressed the Enter key!");

    }

    keydownLog.textContent =
        `Key: "${event.key}" | Code: "${event.code}"`;

});

// 2. keyup Event
const keyupInput = document.getElementById("keyupInput");
const keyupLog = document.getElementById("keyupLog");
const keyupStatus = document.getElementById("keyupStatus");

// While typing
keyupInput.addEventListener("keydown", function () {

    keyupStatus.textContent = "Typing...";
    keyupStatus.classList.add("active");

});

// After releasing the key
keyupInput.addEventListener("keyup", function () {

    keyupStatus.textContent = "Key Released";
    keyupStatus.classList.remove("active");

    // Count the number of characters
    const characterCount = keyupInput.value.length;

    keyupLog.textContent =
        `Character Count: ${characterCount}`;

});



