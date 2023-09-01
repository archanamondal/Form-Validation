const form = document.querySelector("#userform");
const username = document.querySelector("#Username"); // Corrected the id selector
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#Confirmpassword"); // Corrected the id selector
const outputDiv = document.getElementById("output");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
        username.value &&
        email.value &&
        phone.value &&
        password.value &&
        confirmPassword.value
    ) {
        const userData = `Name: ${username.value}<br>Email: ${email.value}<br>Phone Number: ${phone.value}<br>Password: ${password.value}<br>Confirm Password: ${confirmPassword.value}`;
        outputDiv.innerHTML = userData;
    } else {
        outputDiv.innerHTML = "Please fill out all fields.";
    }
});