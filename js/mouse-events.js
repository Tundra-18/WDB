// 1. Click & Double Click Events
const clickCard = document.getElementById("clickCard");

clickCard.addEventListener("click", function () {

    clickCard.textContent = "Clicked!";
    clickCard.style.backgroundColor = "#e2e3e5";

});

clickCard.addEventListener("dblclick", function () {

    clickCard.textContent = "Double Clicked!";
    clickCard.style.backgroundColor = "#ffc107";

});


// 2. Mouse Down & Mouse Up Events
const pressCard = document.getElementById("pressCard");

pressCard.addEventListener("mousedown", function () {

    pressCard.textContent = "Mouse Button Pressed";
    pressCard.style.backgroundColor = "#dc3545";
    pressCard.style.color = "#ffffff";

});

pressCard.addEventListener("mouseup", function () {

    pressCard.textContent = "Mouse Button Released";
    pressCard.style.backgroundColor = "#198754";
    pressCard.style.color = "#ffffff";

});


// 3. Mouse Over & Mouse Out Events
const hoverCard = document.getElementById("hoverCard");

hoverCard.addEventListener("mouseover", function () {

    hoverCard.textContent = "Mouse Over";
    hoverCard.style.backgroundColor = "#0d6efd";
    hoverCard.style.color = "#ffffff";

});

hoverCard.addEventListener("mouseout", function () {

    hoverCard.textContent = "Mouse Out";
    hoverCard.style.backgroundColor = "#ffffff";
    hoverCard.style.color = "#333333";

});

// 4. Mouse Enter & Mouse Leave Events
const enterCard = document.getElementById("enterCard");

enterCard.addEventListener("mouseenter", function () {

    enterCard.textContent = "Mouse Enter";
    enterCard.style.borderColor = "#0d6efd";

});

enterCard.addEventListener("mouseleave", function () {

    enterCard.textContent = "Mouse Leave";
    enterCard.style.borderColor = "#dee2e6";

});

// 5. Context Menu Event (Right Click)
const contextCard = document.getElementById("contextCard");

contextCard.addEventListener("contextmenu", function (event) {

    // Prevent the browser's default context menu
    event.preventDefault();

    contextCard.textContent = "Right Click Detected!";
    contextCard.style.backgroundColor = "#6f42c1";
    contextCard.style.color = "#ffffff";

});

// 6. Mouse Move Event
const trackBox = document.getElementById("trackBox");

trackBox.addEventListener("mousemove", function (event) {

    trackBox.textContent =
        `Mouse Position = X: ${event.clientX}px | Y: ${event.clientY}px`;

});

// 7. Mouse Wheel Event
const wheelBox = document.getElementById("wheelBox");

let fontSize = 1.5;

wheelBox.addEventListener("wheel", function (event) {
    // Prevent page scrolling
    event.preventDefault();

    if (event.deltaY < 0) {
        // Scroll Up
        fontSize += 0.1;
    } else {
        // Scroll Down
        fontSize = Math.max(0.8, fontSize - 0.1);
    }

    wheelBox.style.fontSize = `${fontSize}rem`;
    wheelBox.textContent =
        `Scroll Wheel! (Font Size: ${fontSize.toFixed(1)}rem)`;

});


