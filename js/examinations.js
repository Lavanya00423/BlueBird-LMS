// ======================================
// Examinations Module
// Bluebird LMS
// ======================================



// ===============================
// Open Create Exam Page
// ===============================

function goToCreateExam(){

    window.location.href = "create-exam.html";

}



// ===============================
// Search Examination
// ===============================

const searchBox = document.getElementById("searchExam");

searchBox.addEventListener("keyup", function(){

    const filter = this.value.toLowerCase();

    const rows = document.querySelectorAll("#examTable tr");

    rows.forEach(function(row){

        const examName = row.cells[1].innerText.toLowerCase();
        const subject = row.cells[2].innerText.toLowerCase();

        if(examName.includes(filter) || subject.includes(filter)){

            row.style.display = "";

        }

        else{

            row.style.display = "none";

        }

    });

});




// ===============================
// Load Created Exams
// ===============================

function loadCreatedExams(){

    const table = document.getElementById("examTable");

    const savedExams =
    JSON.parse(localStorage.getItem("examList")) || [];

    savedExams.forEach(function(exam,index){

        const row = table.insertRow();

        row.innerHTML = `

            <td>${table.rows.length}</td>

            <td>${exam.examName}</td>

            <td>${exam.subject}</td>

            <td>${exam.department}</td>

            <td>${exam.date}</td>

            <td>${exam.time}</td>

            <td>${exam.duration}</td>

            <td>
                <span class="status upcoming">
                    Upcoming
                </span>
            </td>

        `;

    });

}




// ===============================
// Update Dashboard Cards
// ===============================

function updateCards(){

    const totalRows =
    document.querySelectorAll("#examTable tr").length;

    document.getElementById("totalExams").innerText =
    totalRows;

    let upcoming = 0;
    let completed = 0;

    document.querySelectorAll(".status").forEach(function(status){

        if(status.innerText.trim() === "Upcoming"){

            upcoming++;

        }

        else if(status.innerText.trim() === "Completed"){

            completed++;

        }

    });

    document.getElementById("upcomingExams").innerText =
    upcoming;

    document.getElementById("completedExams").innerText =
    completed;

}



// ===============================
// Automatically Change Status
// ===============================

function updateExamStatus(){

    const today = new Date();

    const rows =
    document.querySelectorAll("#examTable tr");

    rows.forEach(function(row){

        const dateText = row.cells[4].innerText;

        const parts = dateText.split("-");

        if(parts.length !== 3) return;

        const examDate =
        new Date(parts[2], parts[1]-1, parts[0]);

        const badge =
        row.querySelector(".status");

        if(examDate < today){

            badge.innerText = "Completed";
            badge.className = "status completed";

        }

        else{

            badge.innerText = "Upcoming";
            badge.className = "status upcoming";

        }

    });

}



// ===============================
// Page Load
// ===============================

document.addEventListener("DOMContentLoaded",function(){

    loadCreatedExams();

    updateExamStatus();

    updateCards();

});