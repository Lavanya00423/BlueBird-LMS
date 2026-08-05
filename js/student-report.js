const students =
JSON.parse(localStorage.getItem("studentList")) || [];

const tbody =
document.querySelector("#studentTable tbody");

document.getElementById("studentCount").innerText =
students.length;

document.getElementById("activeCount").innerText =
students.length;

document.getElementById("inactiveCount").innerText =
0;

// Load Table

students.forEach(function(student){

const row=document.createElement("tr");

row.innerHTML=`

<td>${student.registerNo}</td>

<td>${student.studentName}</td>

<td>${student.department}</td>

<td>${student.year}</td>

<td>${student.email}</td>

<td>${student.phone}</td>

`;

tbody.appendChild(row);

});

// Search

document.getElementById("searchStudent")

.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const rows=document.querySelectorAll("#studentTable tbody tr");

rows.forEach(function(row){

row.style.display=

row.innerText.toLowerCase().includes(value)

? ""

: "none";

});

});

// Export CSV

function exportCSV(){

let csv=[];

csv.push("Register No,Name,Department,Year,Email,Phone");

students.forEach(function(student){

csv.push(

`${student.registerNo},

${student.studentName},

${student.department},

${student.year},

${student.email},

${student.phone}`

);

});

const blob=new Blob([csv.join("\n")],{

type:"text/csv"

});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="Student_Report.csv";

link.click();

}