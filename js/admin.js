// ==============================
// Show / Hide Password
// ==============================

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");

    } else {

        password.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");

    }

});


// ==============================
// Login Form Validation
// ==============================

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const passwordValue = document.getElementById("password").value;

    // ==============================
    // Username Validation
    // ==============================

    const usernamePattern = /^[A-Za-z0-9@#$%^&*!._-]{3,20}$/;

    if (!usernamePattern.test(username)) {

        alert(
            "Invalid Username!\n\n" +
            "Username must contain:\n" +
            "• Alphabets\n" +
            "• Numbers\n" +
            "• Special Characters (@ # $ % ^ & * ! . _ -)\n" +
            "• Minimum 3 characters\n" +
            "• Maximum 20 characters"
        );

        return;
    }

    // ==============================
    // Password Validation
    // ==============================

    if (passwordValue.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;

    }

    // ==============================
    // Admin Login Credentials
    // ==============================

    const adminUsername = "admin";
    const adminPassword = "admin123";

    if (username === adminUsername && passwordValue === adminPassword) {

        alert("Login Successful!");

        // Redirect to Admin Dashboard
        window.location.href = "admin-dashboard.html";

    } else {

        alert("Invalid Username or Password!");

    }

});