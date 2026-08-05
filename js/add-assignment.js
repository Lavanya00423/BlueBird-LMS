// ======================================
// Add Assignment System
// ======================================

// Form

const assignmentForm = document.getElementById("assignmentForm");

// Dropdowns

const facultyDropdown = document.getElementById("faculty");
const courseDropdown = document.getElementById("course");

// ======================================
// Load Faculty
// ======================================

let facultyList =
JSON.parse(localStorage.getItem("facultyList")) || [];

facultyList.forEach(function(faculty){

    const option = document.createElement("option");

    option.value = faculty.facultyName;

    option.textContent = faculty.facultyName;

    facultyDropdown.appendChild(option);

});

// ======================================
// Load Courses
// ======================================

let courseList =
JSON.parse(localStorage.getItem("courseList")) || [];

courseList.forEach(function(course){

    const option = document.createElement("option");

    option.value = course.courseName;

    option.textContent = course.courseName;

    courseDropdown.appendChild(option);

});

// ======================================
// Save Assignment
// ======================================

assignmentForm.addEventListener("submit",function(e){

    e.preventDefault();

    const assignmentId =
    document.getElementById("assignmentId").value.trim();

    const assignmentTitle =
    document.getElementById("assignmentTitle").value.trim();

    const course =
    document.getElementById("course").value;

    const faculty =
    document.getElementById("faculty").value;

    const semester =
    document.getElementById("semester").value;

    const totalMarks =
    document.getElementById("totalMarks").value;

    const dueDate =
    document.getElementById("dueDate").value;

    const status =
    document.getElementById("status").value;

    const description =
    document.getElementById("description").value.trim();

    // ==========================
    // Validation
    // ==========================

    if(assignmentId===""){

        alert("Please enter Assignment ID.");

        return;

    }

    if(assignmentTitle===""){

        alert("Please enter Assignment Title.");

        return;

    }

    if(course===""){

        alert("Please select Course.");

        return;

    }

    if(faculty===""){

        alert("Please select Faculty.");

        return;

    }

    if(semester===""){

        alert("Please select Semester.");

        return;

    }

    if(totalMarks===""){

        alert("Please enter Total Marks.");

        return;

    }

    if(dueDate===""){

        alert("Please select Due Date.");

        return;

    }

    // ==========================
    // Assignment Object
    // ==========================

    const assignment={

        assignmentId,

        assignmentTitle,

        course,

        faculty,

        semester,

        totalMarks,

        dueDate,

        status,

        description

    };

    // ==========================
    // Local Storage
    // ==========================

    let assignmentList =
    JSON.parse(localStorage.getItem("assignmentList")) || [];

    // Duplicate Assignment ID

    const exists = assignmentList.find(function(item){

        return item.assignmentId === assignmentId;

    });

    if(exists){

        alert("Assignment ID already exists.");

        return;

    }

    assignmentList.push(assignment);

    localStorage.setItem(

        "assignmentList",

        JSON.stringify(assignmentList)

    );

    // ==========================
    // Success
    // ==========================

    alert("Assignment Added Successfully!");

    window.location.href="assignment-management.html";

});