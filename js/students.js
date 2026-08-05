// ===========================================
// Student Management - JavaScript
// ===========================================

// Search Student
const searchInput = document.getElementById("searchStudent");
const table = document.getElementById("studentTable");
const rows = table.getElementsByTagName("tr");

searchInput.addEventListener("keyup", function () {

    const filter = this.value.toLowerCase();

    for (let i = 1; i < rows.length; i++) {

        const rowText = rows[i].textContent.toLowerCase();

        if (rowText.includes(filter)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }

    }

});

// ===========================================
// Add Student
// ===========================================

const addBtn = document.getElementById("addStudentBtn");

addBtn.addEventListener("click", function () {

    // Redirect to Add Student Page
    window.location.href = "add-student.html";

});

// ===========================================
// View Student
// ===========================================

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const row = this.parentElement.parentElement;

        const studentName = row.cells[2].innerText;

        alert("Opening profile of " + studentName);

        // Future
        // window.location.href="student-profile.html";

    });

});

// ===========================================
// Edit Student
// ===========================================

const editButtons = document.querySelectorAll(".edit-btn");

editButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const row = this.parentElement.parentElement;

        const studentName = row.cells[2].innerText;

        alert("Edit details of " + studentName);

        // Future
        // window.location.href="edit-student.html";

    });

});

// ===========================================
// Delete Student
// ===========================================

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const answer = confirm("Are you sure you want to delete this student?");

        if(answer){

            this.parentElement.parentElement.remove();

            alert("Student deleted successfully.");

        }

    });

});

// ===========================================
// Row Hover Effect
// ===========================================

const bodyRows = document.querySelectorAll("#studentTable tbody tr");

bodyRows.forEach(function(row){

    row.addEventListener("mouseenter", function(){

        this.style.background = "#eef3ff";

    });

    row.addEventListener("mouseleave", function(){

        this.style.background = "";

    });

});

// ===========================================
// Dashboard Cards Animation
// ===========================================

const cards = document.querySelectorAll(".card h2");

cards.forEach(function(card){

    const target = parseInt(card.innerText);

    let count = 0;

    const speed = Math.max(10, Math.floor(1000 / target));

    const timer = setInterval(function(){

        count++;

        card.innerText = count;

        if(count >= target){

            clearInterval(timer);

        }

    }, speed);

});

// ===========================================
// Welcome Message
// ===========================================

window.addEventListener("load", function(){

    console.log("Student Management Module Loaded Successfully");

});