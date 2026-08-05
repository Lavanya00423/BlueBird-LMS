// ======================================
// Bluebird LMS
// Attendance Report
// ======================================

// Get Attendance Data

const attendanceList =
JSON.parse(localStorage.getItem("attendanceList")) || [];

const tbody =
document.querySelector("#attendanceTable tbody");

// Dashboard Elements

const totalStudents =
document.getElementById("totalStudents");

const averageAttendance =
document.getElementById("averageAttendance");

const above75 =
document.getElementById("above75");

const below75 =
document.getElementById("below75");

// Statistics

totalStudents.innerText =
attendanceList.length;

let totalPercentage = 0;
let eligible = 0;
let shortage = 0;

// ======================================
// Load Attendance Table
// ======================================

function loadAttendance(){

    tbody.innerHTML = "";

    attendanceList.forEach(function(student){

        const attendance =
        Number(student.attendance) || 0;

        totalPercentage += attendance;

        let status = "";
        let statusClass = "";

        if(attendance >= 75){

            status = "Eligible";

            statusClass = "present";

            eligible++;

        }

        else if(attendance >= 60){

            status = "Warning";

            statusClass = "warning";

            shortage++;

        }

        else{

            status = "Shortage";

            statusClass = "danger";

            shortage++;

        }

        const row =
        document.createElement("tr");

        row.innerHTML = `

            <td>${student.registerNo || "-"}</td>

            <td>${student.studentName || "-"}</td>

            <td>${student.department || "-"}</td>

            <td>${student.course || "-"}</td>

            <td>${attendance}%</td>

            <td class="${statusClass}">
                ${status}
            </td>

        `;

        tbody.appendChild(row);

    });

    // Dashboard

    if(attendanceList.length > 0){

        averageAttendance.innerText =
        (
            totalPercentage /
            attendanceList.length
        ).toFixed(1) + "%";

    }

    else{

        averageAttendance.innerText = "0%";

    }

    above75.innerText = eligible;

    below75.innerText = shortage;

}

loadAttendance();

// ======================================
// Search
// ======================================

document
.getElementById("searchAttendance")

.addEventListener("keyup", function(){

    const value =
    this.value.toLowerCase();

    const rows =
    document.querySelectorAll(
        "#attendanceTable tbody tr"
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

// ======================================
// Export CSV
// ======================================

function exportCSV(){

    let csv = [];

    csv.push(
"Register No,Student Name,Department,Course,Attendance,Status"
    );

    attendanceList.forEach(function(student){

        const attendance =
        Number(student.attendance) || 0;

        let status = "";

        if(attendance >= 75){

            status = "Eligible";

        }

        else if(attendance >= 60){

            status = "Warning";

        }

        else{

            status = "Shortage";

        }

        csv.push(

`${student.registerNo || ""},
${student.studentName || ""},
${student.department || ""},
${student.course || ""},
${attendance}%,
${status}`

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
    "Attendance_Report.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}

// ======================================
// Print Report
// ======================================

function printReport(){

    window.print();

}

// ======================================
// Refresh Report
// ======================================

function refreshReport(){

    location.reload();

}