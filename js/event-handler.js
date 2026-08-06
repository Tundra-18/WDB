// 1. Click Event Listener
const toggleBtn = document.getElementById("toggleBtn");
const colorBox = document.getElementById("colorBox");


toggleBtn.addEventListener("click", function () {
    colorBox.classList.toggle("active");

});

// 2. Input Event Listener
const usernameInput = document.getElementById("usernameInput");
const greetingText = document.getElementById("greetingText");


usernameInput.addEventListener("input", function(event){
    const value = event.target.value;

    if(value.trim() === ""){
        greetingText.textContent = "...";

    }
    else{
        greetingText.textContent = `Hello, ${value}!`;
    }
});

// 3. Form Submit Event Listener
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");


loginForm.addEventListener("submit", function(event){
    event.preventDefault();

    if(emailInput.value === ""){

        alert("Please enter your email.");

    }
    else{
        formMessage.textContent =
        `Success! The email (${emailInput.value}) has been submitted.`;

        emailInput.value = "";
    }
});


