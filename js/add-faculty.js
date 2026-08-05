// =======================================
// Show / Hide Password
// =======================================

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


// =======================================
// Faculty Form
// =======================================

const facultyForm = document.getElementById("facultyForm");

facultyForm.addEventListener("submit", function(e){

    e.preventDefault();

    // Get Form Values

    const facultyId = document.getElementById("facultyId").value.trim();

    const facultyName = document.getElementById("facultyName").value.trim();

    const department = document.getElementById("department").value;

    const designation = document.getElementById("designation").value;

    const subject = document.getElementById("subject").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const qualification = document.getElementById("qualification").value.trim();

    const username = document.getElementById("username").value.trim();

    const passwordValue = password.value;


    // =======================================
    // Validation
    // =======================================

    const usernamePattern =
    /^[A-Za-z0-9@#$%^&*!._-]{3,20}$/;

    if(!usernamePattern.test(username)){

        alert(
            "Username must contain 3-20 characters.\n\nLetters, numbers and special characters are allowed."
        );

        return;

    }

    if(passwordValue.length < 6){

        alert("Password must contain at least 6 characters.");

        return;

    }

    if(phone.length !== 10){

        alert("Phone Number must contain exactly 10 digits.");

        return;

    }


    // =======================================
    // Faculty Object
    // =======================================

    const faculty = {

        facultyId,

        facultyName,

        department,

        designation,

        subject,

        email,

        phone,

        qualification,

        username,

        password: passwordValue

    };


    // =======================================
    // Local Storage
    // =======================================

    let facultyList = JSON.parse(

        localStorage.getItem("facultyList")

    ) || [];


    // Check Duplicate Faculty ID

    const alreadyExists = facultyList.find(function(item){

        return item.facultyId === facultyId;

    });

    if(alreadyExists){

        alert("Faculty ID already exists!");

        return;

    }


    facultyList.push(faculty);

    localStorage.setItem(

        "facultyList",

        JSON.stringify(facultyList)

    );


    // =======================================
    // Success
    // =======================================

    alert("Faculty Added Successfully!");

    window.location.href = "faculty-management.html";

});