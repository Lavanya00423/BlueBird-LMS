// =====================================
// Assignment Management
// =====================================

// Add Assignment Button

const addAssignmentBtn = document.getElementById("addAssignmentBtn");

addAssignmentBtn.addEventListener("click", function () {

    window.location.href = "add-assignment.html";

});

// =====================================
// Search Box
// =====================================

const searchInput = document.getElementById("searchAssignment");

// =====================================
// Table Body
// =====================================

const tableBody = document.getElementById("assignmentTableBody");

// =====================================
// Load Assignments
// =====================================

let assignmentList =
JSON.parse(localStorage.getItem("assignmentList")) || [];

// =====================================
// Display Assignments
// =====================================

displayAssignments();

function displayAssignments(){

    tableBody.innerHTML = "";

    if(assignmentList.length === 0){

        tableBody.innerHTML = `

        <tr>

            <td colspan="8">

                No Assignments Found

            </td>

        </tr>

        `;

        updateCards();

        return;

    }

    assignmentList.forEach(function(assignment,index){

        let statusClass="";

        if(assignment.status==="Pending"){

            statusClass="pending";

        }

        else if(assignment.status==="Submitted"){

            statusClass="submitted";

        }

        else{

            statusClass="completed";

        }

        tableBody.innerHTML += `

        <tr>

            <td>${assignment.assignmentId}</td>

            <td>${assignment.assignmentTitle}</td>

            <td>${assignment.course}</td>

            <td>${assignment.faculty}</td>

            <td>${assignment.dueDate}</td>

            <td>${assignment.totalMarks}</td>

            <td>

                <span class="status ${statusClass}">

                    ${assignment.status}

                </span>

            </td>

            <td>

                <button
                class="view-btn"
                onclick="viewAssignment(${index})">

                    <i class="fa-solid fa-eye"></i>

                    View

                </button>

            </td>

        </tr>

        `;

    });

    updateCards();

}

// =====================================
// Search Assignment
// =====================================

searchInput.addEventListener("keyup", function(){

    const value=this.value.toLowerCase();

    const rows=tableBody.getElementsByTagName("tr");

    for(let i=0;i<rows.length;i++){

        const rowText=rows[i].innerText.toLowerCase();

        rows[i].style.display=rowText.includes(value)
        ? ""
        : "none";

    }

});

// =====================================
// View Assignment
// =====================================

function viewAssignment(index){

    localStorage.setItem(

        "selectedAssignment",

        JSON.stringify(assignmentList[index])

    );

    alert("Assignment Details page will be created later.");

}

// =====================================
// Dashboard Cards
// =====================================

function updateCards(){

    const cards=document.querySelectorAll(".card h2");

    if(cards.length<4) return;

    let pending=0;
    let submitted=0;
    let completed=0;

    assignmentList.forEach(function(item){

        if(item.status==="Pending"){

            pending++;

        }

        else if(item.status==="Submitted"){

            submitted++;

        }

        else{

            completed++;

        }

    });

    cards[0].innerText=assignmentList.length;

    cards[1].innerText=pending;

    cards[2].innerText=submitted;

    cards[3].innerText=completed;

}