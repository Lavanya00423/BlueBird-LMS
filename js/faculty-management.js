// ==========================================
// Faculty Management System
// ==========================================

// Add Faculty Button

const addFacultyBtn = document.getElementById("addFacultyBtn");

addFacultyBtn.addEventListener("click", function () {

    window.location.href = "add-faculty.html";

});


// ==========================================
// Search Box
// ==========================================

const searchInput = document.getElementById("searchFaculty");


// ==========================================
// Table Body
// ==========================================

const tableBody = document.getElementById("facultyTableBody");


// ==========================================
// Load Faculty from Local Storage
// ==========================================

let facultyList = JSON.parse(localStorage.getItem("facultyList")) || [];


// ==========================================
// Display Faculty
// ==========================================

displayFaculty();

function displayFaculty() {

    tableBody.innerHTML = "";

    if (facultyList.length === 0) {

        tableBody.innerHTML = `

        <tr>

            <td colspan="9">

                No Faculty Found

            </td>

        </tr>

        `;

        updateCards();

        return;

    }

    facultyList.forEach(function (faculty, index) {

        tableBody.innerHTML += `

        <tr>

            <td>
                <i class="fa-solid fa-circle-user"></i>
            </td>

            <td>${faculty.facultyId}</td>

            <td>${faculty.facultyName}</td>

            <td>${faculty.department}</td>

            <td>${faculty.subject}</td>

            <td>${faculty.email}</td>

            <td>${faculty.phone}</td>

            <td>

                <span class="status">
                    Active
                </span>

            </td>

            <td>

                <button
                    class="view-btn"
                    onclick="viewFaculty(${index})">

                    <i class="fa-solid fa-eye"></i>

                    View

                </button>

            </td>

        </tr>

        `;

    });

    updateCards();

}


// ==========================================
// Search Faculty
// ==========================================

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const rows = tableBody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        const text = rows[i].innerText.toLowerCase();

        rows[i].style.display =

            text.includes(value)

            ? ""

            : "none";

    }

});


// ==========================================
// View Faculty
// ==========================================

function viewFaculty(index) {

    localStorage.setItem(

        "selectedFaculty",

        JSON.stringify(facultyList[index])

    );

    alert(

        "Faculty Profile page will be created in the next module."

    );

}


// ==========================================
// Dashboard Cards
// ==========================================

function updateCards() {

    const cards = document.querySelectorAll(".card h2");

    if (cards.length < 4) return;

    let cse = 0;
    let ece = 0;
    let it = 0;

    facultyList.forEach(function (faculty) {

        switch (faculty.department.toUpperCase()) {

            case "CSE":
                cse++;
                break;

            case "ECE":
                ece++;
                break;

            case "IT":
                it++;
                break;

        }

    });

    cards[0].innerText = facultyList.length;
    cards[1].innerText = cse;
    cards[2].innerText = ece;
    cards[3].innerText = it;

}