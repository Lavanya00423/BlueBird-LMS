// ======================================
// View Student Result
// ======================================

// Load Selected Result

const selectedResult =
JSON.parse(localStorage.getItem("selectedResult"));

if(selectedResult){

    // Student Details

    document.getElementById("registerNo").textContent =
    selectedResult.registerNo;

    document.getElementById("studentName").textContent =
    selectedResult.studentName;

    document.getElementById("department").textContent =
    selectedResult.department;

    document.getElementById("course").textContent =
    selectedResult.course;

    document.getElementById("faculty").textContent =
    selectedResult.faculty;

    // Marks

    document.getElementById("internalMarks").textContent =
    selectedResult.internalMarks + " / 50";

    document.getElementById("externalMarks").textContent =
    selectedResult.externalMarks + " / 50";

    document.getElementById("assignmentMarks").textContent =
    selectedResult.assignmentMarks + " / 20";

    document.getElementById("attendanceMarks").textContent =
    selectedResult.attendanceMarks + " / 5";

    document.getElementById("totalMarks").textContent =
    selectedResult.totalMarks + " / 125";

    document.getElementById("percentage").textContent =
    selectedResult.percentage + "%";

    document.getElementById("grade").textContent =
    selectedResult.grade;

    // Result

    const resultElement =
    document.getElementById("result");

    resultElement.textContent =
    selectedResult.result;

    if(selectedResult.result === "Pass"){

        resultElement.style.color = "green";
        resultElement.style.fontWeight = "bold";

    }

    else{

        resultElement.style.color = "red";
        resultElement.style.fontWeight = "bold";

    }

    // Remarks

    document.getElementById("remarks").textContent =
    selectedResult.remarks || "No Remarks";

}

// ======================================
// Print Result
// ======================================

function printResult(){

    window.print();

}

// ======================================
// Download Result (Future)
// ======================================

function downloadPDF(){

    alert("PDF Download feature will be added in the next version.");

}

// ======================================
// Back to Result Management
// ======================================

function goBack(){

    window.location.href="result-management.html";

}