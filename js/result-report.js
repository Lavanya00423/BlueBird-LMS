// ===========================================
// Bluebird LMS
// Result Report
// ===========================================

// Load Result Data
const resultList =
JSON.parse(localStorage.getItem("resultList")) || [];

const tbody =
document.querySelector("#resultTable tbody");

// Dashboard Elements
const totalStudents =
document.getElementById("totalStudents");

const passStudents =
document.getElementById("passStudents");

const failStudents =
document.getElementById("failStudents");

const passPercentage =
document.getElementById("passPercentage");

let passCount = 0;
let failCount = 0;

// ===========================================
// Load Result Table
// ===========================================

function loadResults(){

    tbody.innerHTML = "";

    resultList.forEach(function(student){

        const marks =
        Number(student.marks) || 0;

        let grade = "";
        let result = "";
        let resultClass = "";

        if(marks >= 90){

            grade = "A+";
            result = "PASS";
            resultClass = "pass";
            passCount++;

        }

        else if(marks >= 80){

            grade = "A";
            result = "PASS";
            resultClass = "pass";
            passCount++;

        }

        else if(marks >= 70){

            grade = "B";
            result = "PASS";
            resultClass = "pass";
            passCount++;

        }

        else if(marks >= 60){

            grade = "C";
            result = "PASS";
            resultClass = "pass";
            passCount++;

        }

        else if(marks >= 50){

            grade = "D";
            result = "PASS";
            resultClass = "pass";
            passCount++;

        }

        else{

            grade = "F";
            result = "FAIL";
            resultClass = "fail";
            failCount++;

        }

        const row =
        document.createElement("tr");

        row.innerHTML = `

        <td>${student.registerNo || "-"}</td>

        <td>${student.studentName || "-"}</td>

        <td>${student.department || "-"}</td>

        <td>${student.course || "-"}</td>

        <td>${marks}</td>

        <td class="grade">${grade}</td>

        <td class="${resultClass}">
            ${result}
        </td>

        `;

        tbody.appendChild(row);

    });

    // Dashboard

    totalStudents.innerText =
    resultList.length;

    passStudents.innerText =
    passCount;

    failStudents.innerText =
    failCount;

    if(resultList.length > 0){

        passPercentage.innerText =
        ((passCount / resultList.length) * 100)
        .toFixed(1) + "%";

    }

    else{

        passPercentage.innerText = "0%";

    }

}

loadResults();

// ===========================================
// Search
// ===========================================

document.getElementById("searchResult")

.addEventListener("keyup", function(){

    const value =
    this.value.toLowerCase();

    const rows =
    document.querySelectorAll("#resultTable tbody tr");

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
"Register No,Student Name,Department,Course,Marks,Grade,Result"
    );

    resultList.forEach(function(student){

        const marks =
        Number(student.marks) || 0;

        let grade = "";
        let result = "";

        if(marks >= 90){

            grade = "A+";
            result = "PASS";

        }

        else if(marks >= 80){

            grade = "A";
            result = "PASS";

        }

        else if(marks >= 70){

            grade = "B";
            result = "PASS";

        }

        else if(marks >= 60){

            grade = "C";
            result = "PASS";

        }

        else if(marks >= 50){

            grade = "D";
            result = "PASS";

        }

        else{

            grade = "F";
            result = "FAIL";

        }

        csv.push(

`${student.registerNo || ""},
${student.studentName || ""},
${student.department || ""},
${student.course || ""},
${marks},
${grade},
${result}`

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
    "Result_Report.csv";

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