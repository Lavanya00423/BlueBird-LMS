// ==========================================
// Show / Hide Password
// ==========================================

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

// ==========================================
// Student Form
// ==========================================

const form = document.getElementById("studentForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const student = {

        registerNo: document.getElementById("registerNo").value.trim(),

        studentName: document.getElementById("studentName").value.trim(),

        department: document.getElementById("department").value,

        year: document.getElementById("year").value,

        semester: document.getElementById("semester").value,

        course: document.getElementById("course").value,

        email: document.getElementById("email").value.trim(),

        phone: document.getElementById("phone").value.trim(),

        username: document.getElementById("username").value.trim(),

        password: document.getElementById("password").value

    };

    // =============================
    // Validation
    // =============================

    if(student.registerNo === ""){

        alert("Please enter Register Number.");
        return;

    }

    if(student.studentName === ""){

        alert("Please enter Student Name.");
        return;

    }

    if(student.department === ""){

        alert("Please select Department.");
        return;

    }

    if(student.year === ""){

        alert("Please select Year.");
        return;

    }

    if(student.semester === ""){

        alert("Please select Semester.");
        return;

    }

    if(student.course === ""){

        alert("Please select Course.");
        return;

    }

    if(student.phone.length != 10){

        alert("Phone Number must contain 10 digits.");
        return;

    }

    if(student.password.length < 6){

        alert("Password must contain at least 6 characters.");
        return;

    }

    // =============================
    // Save Student
    // =============================

    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Check duplicate Register Number

    const exists = students.find(function(s){

        return s.registerNo === student.registerNo;

    });

    if(exists){

        alert("Register Number already exists.");

        return;

    }

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Added Successfully!");

    // Redirect

    window.location.href = "students.html";

});