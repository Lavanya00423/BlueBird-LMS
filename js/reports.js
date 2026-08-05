// Search Reports

const searchInput = document.getElementById("searchReport");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const rows = document.querySelectorAll("#reportTable tbody tr");

    rows.forEach(function(row){

        const text = row.innerText.toLowerCase();

        row.style.display =
        text.includes(value) ? "" : "none";

    });

});

// Dashboard Cards

const students =
JSON.parse(localStorage.getItem("studentList")) || [];

const faculty =
JSON.parse(localStorage.getItem("facultyList")) || [];

const courses =
JSON.parse(localStorage.getItem("courseList")) || [];

const results =
JSON.parse(localStorage.getItem("resultList")) || [];

document.getElementById("totalStudents").innerText =
students.length;

document.getElementById("totalFaculty").innerText =
faculty.length;

document.getElementById("totalCourses").innerText =
courses.length;

let pass = 0;

results.forEach(function(item){

    if(item.result === "Pass"){

        pass++;

    }

});

let percentage = 0;

if(results.length > 0){

    percentage =
    ((pass / results.length) * 100).toFixed(1);

}

document.getElementById("passRate").innerText =
percentage + "%";