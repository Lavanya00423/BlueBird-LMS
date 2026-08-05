// ==============================
// Show / Hide Password
// ==============================

const togglePassword = document.getElementById("toggleFacultyPassword");
const password = document.getElementById("facultyPassword");

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
// Faculty Accounts
// ==============================

const facultyUsers = [

    {
        username: "thenu",
        password: "Lavanya123"
    },

    {
        username: "priya",
        password: "priya123"
    },

    {
        username: "arun",
        password: "arun123"
    },

    {
        username: "lavanya",
        password: "lava123"
    },

    {
        username: "john",
        password: "john123"
    }

];

// ==============================
// Login Form
// ==============================

const form = document.getElementById("facultyForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("facultyUsername").value.trim();

    const passwordValue = document.getElementById("facultyPassword").value;

    const validUser = facultyUsers.find(user =>

        user.username === username &&
        user.password === passwordValue

    );

    if(validUser){

        alert("Faculty Login Successful!");

        window.location.href = "faculty-dashboard.html";

    }else{

        alert("Invalid Username or Password!");

    }

});