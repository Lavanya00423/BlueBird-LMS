// Show / Hide Password

const togglePassword =
document.getElementById("toggleStudentPassword");

const password =
document.getElementById("studentPassword");

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

// Form Validation

const form = document.getElementById("studentForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const username =
    document.getElementById("studentUsername").value.trim();

    const pass = password.value;

    const pattern =
    /^[A-Za-z0-9@#$%^&*!._-]{3,20}$/;

    if (!pattern.test(username)) {

        alert("Invalid Student Username");

        return;

    }

    if (pass.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;

    }

    alert("Student Login Successful!");

     window.location.href = "student-dashboard.html";

});