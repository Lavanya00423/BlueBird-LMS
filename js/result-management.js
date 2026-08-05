// =====================================
// Result Management
// =====================================

// Add Result Button

const addResultBtn = document.getElementById("addResultBtn");

addResultBtn.addEventListener("click", function () {

    window.location.href = "add-result.html";

});

// =====================================
// Search Box
// =====================================

const searchInput = document.getElementById("searchResult");

// =====================================
// Table Body
// =====================================

const tableBody = document.getElementById("resultTableBody");

// =====================================
// Load Results
// =====================================

let resultList =
JSON.parse(localStorage.getItem("resultList")) || [];

// =====================================
// Display Results
// =====================================

displayResults();

function displayResults(){

    tableBody.innerHTML = "";

    if(resultList.length === 0){

        tableBody.innerHTML = `

        <tr>

            <td colspan="9">

                No Results Found

            </td>

        </tr>

        `;

        updateCards();

        return;

    }

    resultList.forEach(function(result,index){

        let resultClass="";

        if(result.result==="Pass"){

            resultClass="pass";

        }

        else{

            resultClass="fail";

        }

        tableBody.innerHTML += `

        <tr>

            <td>${result.registerNo}</td>

            <td>${result.studentName}</td>

            <td>${result.course}</td>

            <td>${result.faculty}</td>

            <td>${result.totalMarks}</td>

            <td>${result.percentage}%</td>

            <td>${result.grade}</td>

            <td>

                <span class="${resultClass}">

                    ${result.result}

                </span>

            </td>

            <td>

                <button
                class="view-btn"
                onclick="viewResult(${index})">

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
// Search Result
// =====================================

searchInput.addEventListener("keyup",function(){

    const value=this.value.toLowerCase();

    const rows=tableBody.getElementsByTagName("tr");

    for(let i=0;i<rows.length;i++){

        const text=rows[i].innerText.toLowerCase();

        rows[i].style.display=
        text.includes(value) ? "" : "none";

    }

});

// =====================================
// View Result
// =====================================

function viewResult(index){

    localStorage.setItem(

        "selectedResult",

        JSON.stringify(resultList[index])

    );

    window.location.href="view-result.html";

}

// =====================================
// Dashboard Cards
// =====================================

function updateCards(){

    const cards=document.querySelectorAll(".card h2");

    if(cards.length<4) return;

    let pass=0;
    let fail=0;
    let totalPercentage=0;

    resultList.forEach(function(item){

        if(item.result==="Pass"){

            pass++;

        }

        else{

            fail++;

        }

        totalPercentage+=Number(item.percentage);

    });

    let average=0;

    if(resultList.length>0){

        average=(totalPercentage/resultList.length).toFixed(1);

    }

    cards[0].innerText=resultList.length;

    cards[1].innerText=pass;

    cards[2].innerText=fail;

    cards[3].innerText=average+"%";

}