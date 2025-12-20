const form = document.getElementById("loginForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const userError = document.getElementById("userError");
    const passError = document.getElementById("passError");

    userError.innerText = "";
    passError.innerText = "";
    successMsg.innerText = "";

    usernameInput.style.border = "1px solid #ccc";
    passwordInput.style.border = "1px solid #ccc";

    let isValid = true;

    if (username === "") {
        userError.innerText = "Username is required";
        usernameInput.style.border = "2px solid red";
        isValid = false;
    } 
    else if (username.length < 4) {
        userError.innerText = "Username must be at least 4 characters";
        usernameInput.style.border = "2px solid red";
        isValid = false;
    }
    else if (!/^[a-zA-Z0-9]+$/.test(username)) {
        userError.innerText = "Username can contain only letters and numbers";
        usernameInput.style.border = "2px solid red";
        isValid = false;
    }

    if (password === "") {
        passError.innerText = "Password is required";
        passwordInput.style.border = "2px solid red";
        isValid = false;
    } 
    else if (password.length < 6) {
        passError.innerText = "Password must be at least 6 characters";
        passwordInput.style.border = "2px solid red";
        isValid = false;
    }
    else if (!/\d/.test(password)) {
        passError.innerText = "Password must contain at least one number";
        passwordInput.style.border = "2px solid red";
        isValid = false;
    }

    if (isValid) {
        successMsg.innerText = "Login successful!";
        successMsg.style.color = "green";
        form.reset();
    }
});