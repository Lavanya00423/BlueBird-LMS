// ===============================
// Mark Attendance JavaScript
// ===============================

// Set today's date automatically
document.addEventListener("DOMContentLoaded", () => {

    const today = new Date().toISOString().split("T")[0];
    document.getElementById("date").value = today;

});



// ===============================
// Mark Present
// ===============================

function markPresent(button){

    const row = button.closest("tr");

    const presentBtn = row.querySelector(".present-btn");
    const absentBtn = row.querySelector(".absent-btn");

    presentBtn.classList.add("selected-present");
    absentBtn.classList.remove("selected-absent");

    row.dataset.status = "Present";

}



// ===============================
// Mark Absent
// ===============================

function markAbsent(button){

    const row = button.closest("tr");

    const presentBtn = row.querySelector(".present-btn");
    const absentBtn = row.querySelector(".absent-btn");

    absentBtn.classList.add("selected-absent");
    presentBtn.classList.remove("selected-present");

    row.dataset.status = "Absent";

}



// ===============================
// Save Attendance
// ===============================

function saveAttendance(){

    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const subject = document.getElementById("subject").value;
    const date = document.getElementById("date").value;

    const rows = document.querySelectorAll("#studentList tr");

    let attendanceData = [];

    rows.forEach((row)=>{

        const regNo = row.cells[1].innerText;
        const studentName = row.cells[2].innerText;

        const status = row.dataset.status || "Not Marked";

        attendanceData.push({
            regNo,
            studentName,
            status
        });

    });


    const attendanceRecord = {

        department,
        year,
        subject,
        date,
        attendance: attendanceData

    };


    // Store in browser
    localStorage.setItem(
        "attendanceRecord",
        JSON.stringify(attendanceRecord)
    );

    alert("Attendance saved successfully!");

}



// ===============================
// View Saved Attendance
// ===============================

function loadAttendance(){

    const savedData =
    localStorage.getItem("attendanceRecord");

    if(savedData){

        console.log(JSON.parse(savedData));

    }

}

loadAttendance();