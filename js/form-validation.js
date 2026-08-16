const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const about = document.getElementById("about").value.trim();
    const terms = document.getElementById("terms").checked;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("termsError").textContent = "";

    document.getElementById("successMessage").style.display = "none";

    let isValid = true;

    // Name Validation
    if(name === ""){
        document.getElementById("nameError").textContent =
        "Name is required.";
        isValid = false;
    }

    // Email Validation
    const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email === ""){
        document.getElementById("emailError").textContent =
        "Email is required.";
        isValid = false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent =
        "Invalid email format.";
        isValid = false;
    }

    // Password Validation
    const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!passwordPattern.test(password)){
        document.getElementById("passwordError").textContent =
        "Password must contain uppercase, lowercase, number and 8+ characters.";
        isValid = false;
    }

    // Age Validation
    if(age === "" || age < 18){
        document.getElementById("ageError").textContent =
        "Age must be 18 or older.";
        isValid = false;
    }

    // Gender Validation
    if(gender === ""){
        document.getElementById("genderError").textContent =
        "Please select a gender.";
        isValid = false;
    }

    // Checkbox Validation
    if(!terms){
        document.getElementById("termsError").textContent =
        "You must accept the terms.";
        isValid = false;
    }

    if(isValid){

        document.getElementById("successMessage").style.display =
        "block";

        const output = document.getElementById("output");

        output.style.display = "block";

        output.innerHTML = `
            <h3>Submitted Data</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>About:</strong> ${about}</p>
        `;

        console.log({
            name,
            email,
            age,
            gender,
            about
        });

        form.reset();
    }

});