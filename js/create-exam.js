// ==========================================
// Bluebird LMS
// Create Examination
// ==========================================


// ===============================
// Set Today's Date
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const today = new Date().toISOString().split("T")[0];
    document.getElementById("date").value = today;

});




// ===============================
// Save Examination
// ===============================

function saveExam() {

    const examName = document.getElementById("examName").value.trim();
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const subject = document.getElementById("subject").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const duration = document.getElementById("duration").value.trim();
    const marks = document.getElementById("marks").value.trim();



    // Validation

    if (
        examName === "" ||
        subject === "" ||
        date === "" ||
        time === "" ||
        duration === "" ||
        marks === ""
    ) {

        alert("Please fill all the fields.");
        return;

    }



    // Get Existing Exams

    let exams = JSON.parse(localStorage.getItem("examList")) || [];



    // Create Object

    const exam = {

        examName,
        department,
        year,
        subject,
        date,
        time,
        duration,
        marks

    };



    // Store

    exams.push(exam);

    localStorage.setItem(
        "examList",
        JSON.stringify(exams)
    );



    alert("Exam created successfully!");



    // Redirect

    window.location.href = "examinations.html";

}






// ===============================
// Reset Form
// ===============================

function resetForm() {

    document.getElementById("examName").value = "";

    document.getElementById("department").selectedIndex = 0;

    document.getElementById("year").selectedIndex = 0;

    document.getElementById("subject").value = "";

    document.getElementById("date").value = "";

    document.getElementById("time").value = "";

    document.getElementById("duration").value = "";

    document.getElementById("marks").value = "";

}






// ===============================
// Format Time
// ===============================

function formatTime(time) {

    const [hour, minute] = time.split(":");

    let h = parseInt(hour);

    const ampm = h >= 12 ? "PM" : "AM";

    h = h % 12;

    h = h ? h : 12;

    return h + ":" + minute + " " + ampm;

}