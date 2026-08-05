
// ===============================
// Attendance Management JavaScript
// ===============================


// Go to Mark Attendance Page

function goToMarkAttendance(){

    window.location.href = "mark-attendance.html";

}




// ===============================
// Attendance Percentage Calculation
// ===============================


function calculateAttendance(){

    let totalStudents = 
    document.getElementById("totalStudents").innerText;


    let presentCount = 
    document.getElementById("presentCount").innerText;


    let percentage = 
    (presentCount / totalStudents) * 100;


    document.getElementById("attendancePercentage").innerText =
    Math.round(percentage) + "%";

}




// ===============================
// Student Search Function
// ===============================


document
.getElementById("searchStudent")
.addEventListener("keyup", function(){


    let searchValue = 
    this.value.toLowerCase();


    let rows = 
    document.querySelectorAll("#attendanceTable tr");



    rows.forEach(function(row){


        let studentName =
        row.children[1].innerText.toLowerCase();



        if(studentName.includes(searchValue)){


            row.style.display="";


        }
        else{


            row.style.display="none";


        }


    });



});




// ===============================
// Load Attendance Data
// ===============================


document.addEventListener("DOMContentLoaded",function(){


    calculateAttendance();


});