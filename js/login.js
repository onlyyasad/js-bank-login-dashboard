const loginButton = document.getElementById('btn-login');
loginButton.addEventListener('click', function () {
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;
    if (inputEmail === "user@email.com" && inputPassword === "mypassword") {
        window.location.href = "inside.html"
    }
    else {
        alert("Wrong email or password");
    }
})