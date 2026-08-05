// ==========================================
// Course Management System
// ==========================================

// Add Course Button

const addCourseBtn = document.getElementById("addCourseBtn");

addCourseBtn.addEventListener("click", function () {

    window.location.href = "add-course.html";

});


// ==========================================
// Search Course
// ==========================================

const searchInput = document.getElementById("searchCourse");


// ==========================================
// Table Body
// ==========================================

const tableBody = document.getElementById("courseTableBody");


// ==========================================
// Load Courses
// ==========================================

let courseList = JSON.parse(localStorage.getItem("courseList")) || [];


// ==========================================
// Display Courses
// ==========================================

displayCourses();

function displayCourses(){

    tableBody.innerHTML = "";

    if(courseList.length === 0){

        tableBody.innerHTML = `

        <tr>

            <td colspan="8">

                No Courses Available

            </td>

        </tr>

        `;

        updateCards();

        return;

    }

    courseList.forEach(function(course,index){

        tableBody.innerHTML += `

        <tr>

            <td>${course.courseCode}</td>

            <td>${course.courseName}</td>

            <td>${course.department}</td>

            <td>${course.semester}</td>

            <td>${course.faculty}</td>

            <td>${course.credits}</td>

            <td>

                <span class="status">

                    Active

                </span>

            </td>

            <td>

                <button
                    class="view-btn"
                    onclick="viewCourse(${index})">

                    <i class="fa-solid fa-eye"></i>

                    <span>View</span>

                </button>

            </td>

        </tr>

        `;

    });

    updateCards();

}


// ==========================================
// Search Course
// ==========================================

searchInput.addEventListener("keyup",function(){

    const value = this.value.toLowerCase();

    const rows = tableBody.getElementsByTagName("tr");

    for(let i=0;i<rows.length;i++){

        const rowText = rows[i].innerText.toLowerCase();

        rows[i].style.display = rowText.includes(value)
        ? ""
        : "none";

    }

});


// ==========================================
// View Course
// ==========================================

function viewCourse(index){

    localStorage.setItem(

        "selectedCourse",

        JSON.stringify(courseList[index])

    );

    alert(

        "Course Details page will be created in the next module."

    );

}


// ==========================================
// Dashboard Cards
// ==========================================

function updateCards(){

    const cards = document.querySelectorAll(".card h2");

    if(cards.length < 4) return;

    let cse = 0;
    let ece = 0;
    let it = 0;

    courseList.forEach(function(course){

        switch(course.department.toUpperCase()){

            case "CSE":
                cse++;
                break;

            case "ECE":
                ece++;
                break;

            case "IT":
                it++;
                break;

        }

    });

    cards[0].innerText = courseList.length;
    cards[1].innerText = cse;
    cards[2].innerText = ece;
    cards[3].innerText = it;

}