// ==========================================
// Add Course System
// ==========================================

// Form

const courseForm = document.getElementById("courseForm");

// Faculty Dropdown

const facultyDropdown = document.getElementById("faculty");

// ==========================================
// Load Faculty List
// ==========================================

let facultyList = JSON.parse(localStorage.getItem("facultyList")) || [];

// Add faculty names into dropdown

facultyList.forEach(function(faculty){

    const option = document.createElement("option");

    option.value = faculty.facultyName;

    option.textContent = faculty.facultyName;

    facultyDropdown.appendChild(option);

});


// ==========================================
// Save Course
// ==========================================

courseForm.addEventListener("submit",function(e){

    e.preventDefault();

    const courseCode = document.getElementById("courseCode").value.trim();

    const courseName = document.getElementById("courseName").value.trim();

    const department = document.getElementById("department").value;

    const semester = document.getElementById("semester").value;

    const credits = document.getElementById("credits").value;

    const faculty = document.getElementById("faculty").value;

    const academicYear = document.getElementById("academicYear").value;

    const status = document.getElementById("status").value;

    const description = document.getElementById("description").value.trim();



    // =============================
    // Validation
    // =============================

    if(courseCode==""){

        alert("Please enter Course Code.");

        return;

    }

    if(courseName==""){

        alert("Please enter Course Name.");

        return;

    }

    if(department==""){

        alert("Please select Department.");

        return;

    }

    if(semester==""){

        alert("Please select Semester.");

        return;

    }

    if(faculty==""){

        alert("Please select Faculty.");

        return;

    }



    // =============================
    // Course Object
    // =============================

    const course={

        courseCode,

        courseName,

        department,

        semester,

        credits,

        faculty,

        academicYear,

        status,

        description

    };



    // =============================
    // Local Storage
    // =============================

    let courseList = JSON.parse(

        localStorage.getItem("courseList")

    ) || [];



    // Duplicate Course Code

    const exists = courseList.find(function(item){

        return item.courseCode === courseCode;

    });

    if(exists){

        alert("Course Code already exists.");

        return;

    }


    courseList.push(course);



    localStorage.setItem(

        "courseList",

        JSON.stringify(courseList)

    );



    // =============================
    // Success
    // =============================

    alert("Course Added Successfully!");



    window.location.href="course-management.html";

});