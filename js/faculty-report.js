// ============================================
// Faculty Report
// Bluebird LMS
// ============================================

// Get Faculty Data

const facultyList =
JSON.parse(localStorage.getItem("facultyList")) || [];

const tbody =
document.querySelector("#facultyTable tbody");

// ===============================
// Statistics
// ===============================

document.getElementById("facultyCount").innerText =
facultyList.length;

document.getElementById("activeFaculty").innerText =
facultyList.length;

// Count Departments

const departments = new Set();

facultyList.forEach(function(faculty){

    if(faculty.department){

        departments.add(faculty.department);

    }

});

document.getElementById("departmentCount").innerText =
departments.size;

// ===============================
// Load Faculty Table
// ===============================

function loadFacultyTable(){

    tbody.innerHTML = "";

    facultyList.forEach(function(faculty){

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${faculty.facultyId || "-"}</td>

            <td>${faculty.facultyName || "-"}</td>

            <td>${faculty.department || "-"}</td>

            <td>${faculty.qualification || "-"}</td>

            <td>${faculty.email || "-"}</td>

            <td>${faculty.phone || "-"}</td>

        `;

        tbody.appendChild(row);

    });

}

loadFacultyTable();

// ===============================
// Search Faculty
// ===============================

const searchBox =
document.getElementById("searchFaculty");

searchBox.addEventListener("keyup", function(){

    const value =
    this.value.toLowerCase();

    const rows =
    document.querySelectorAll("#facultyTable tbody tr");

    rows.forEach(function(row){

        const text =
        row.innerText.toLowerCase();

        row.style.display =
        text.includes(value) ? "" : "none";

    });

});

// ===============================
// Export CSV
// ===============================

function exportCSV(){

    let csv = [];

    csv.push(
"Faculty ID,Faculty Name,Department,Qualification,Email,Phone"
);

    facultyList.forEach(function(faculty){

        csv.push(

`${faculty.facultyId || ""},
${faculty.facultyName || ""},
${faculty.department || ""},
${faculty.qualification || ""},
${faculty.email || ""},
${faculty.phone || ""}`

        );

    });

    const blob =
    new Blob([csv.join("\n")],{

        type:"text/csv"

    });

    const link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    "Faculty_Report.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}

// ===============================
// Print Report
// ===============================

function printReport(){

    window.print();

}

// ===============================
// Refresh Report
// ===============================

function refreshReport(){

    location.reload();

}