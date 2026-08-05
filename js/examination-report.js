// ===========================================
// Bluebird LMS
// Examination Report
// ===========================================

// Get Examination Data

const examinationList =
JSON.parse(localStorage.getItem("examinationList")) || [];

const tbody =
document.querySelector("#examTable tbody");

// Dashboard Elements

const totalExams =
document.getElementById("totalExams");

const totalCourses =
document.getElementById("totalCourses");

const upcomingExams =
document.getElementById("upcomingExams");

const completedExams =
document.getElementById("completedExams");

// ===========================================
// Statistics
// ===========================================

totalExams.innerText =
examinationList.length;

let upcoming = 0;

let completed = 0;

const courseSet = new Set();

// ===========================================
// Load Examination Table
// ===========================================

function loadExaminations(){

    tbody.innerHTML = "";

    examinationList.forEach(function(exam){

        const status =
        exam.status || "Upcoming";

        if(status === "Completed"){

            completed++;

        }

        else{

            upcoming++;

        }

        if(exam.course){

            courseSet.add(exam.course);

        }

        let statusClass = "";

        if(status === "Completed"){

            statusClass = "completed";

        }

        else if(status === "Upcoming"){

            statusClass = "upcoming";

        }

        else{

            statusClass = "cancelled";

        }

        const row =
        document.createElement("tr");

        row.innerHTML = `

            <td>${exam.examId || "-"}</td>

            <td>${exam.course || "-"}</td>

            <td>${exam.department || "-"}</td>

            <td>${exam.faculty || "-"}</td>

            <td>${exam.examDate || "-"}</td>

            <td>${exam.examTime || "-"}</td>

            <td class="${statusClass}">
                ${status}
            </td>

        `;

        tbody.appendChild(row);

    });

    totalCourses.innerText =
    courseSet.size;

    upcomingExams.innerText =
    upcoming;

    completedExams.innerText =
    completed;

}

loadExaminations();

// ===========================================
// Search
// ===========================================

document
.getElementById("searchExam")

.addEventListener("keyup",function(){

    const value =
    this.value.toLowerCase();

    const rows =
    document.querySelectorAll(
        "#examTable tbody tr"
    );

    rows.forEach(function(row){

        row.style.display =

        row.innerText
        .toLowerCase()
        .includes(value)

        ? ""

        : "none";

    });

});

// ===========================================
// Export CSV
// ===========================================

function exportCSV(){

    let csv = [];

    csv.push(
"Exam ID,Course,Department,Faculty,Exam Date,Exam Time,Status"
    );

    examinationList.forEach(function(exam){

        csv.push(

`${exam.examId || ""},
${exam.course || ""},
${exam.department || ""},
${exam.faculty || ""},
${exam.examDate || ""},
${exam.examTime || ""},
${exam.status || ""}`

        );

    });

    const blob =
    new Blob(
        [csv.join("\n")],
        {type:"text/csv"}
    );

    const link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    "Examination_Report.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}

// ===========================================
// Print Report
// ===========================================

function printReport(){

    window.print();

}

// ===========================================
// Refresh Report
// ===========================================

function refreshReport(){

    location.reload();

}