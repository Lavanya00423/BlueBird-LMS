// ===========================================
// Add Result
// ===========================================

const resultForm = document.getElementById("resultForm");

const registerNo = document.getElementById("registerNo");
const studentName = document.getElementById("studentName");
const department = document.getElementById("department");

const course = document.getElementById("course");
const faculty = document.getElementById("faculty");

const internalMarks = document.getElementById("internalMarks");
const externalMarks = document.getElementById("externalMarks");
const assignmentMarks = document.getElementById("assignmentMarks");
const attendanceMarks = document.getElementById("attendanceMarks");

const totalMarks = document.getElementById("totalMarks");
const percentage = document.getElementById("percentage");
const grade = document.getElementById("grade");
const result = document.getElementById("result");

const remarks = document.getElementById("remarks");

// ===========================================
// Load Students
// ===========================================

let studentList =
JSON.parse(localStorage.getItem("studentList")) || [];

studentList.forEach(function(student){

    let option = document.createElement("option");

    option.value = student.registerNo;

    option.textContent = student.registerNo;

    registerNo.appendChild(option);

});

// ===========================================
// Load Courses
// ===========================================

let courseList =
JSON.parse(localStorage.getItem("courseList")) || [];

courseList.forEach(function(item){

    let option = document.createElement("option");

    option.value = item.courseName;

    option.textContent = item.courseName;

    course.appendChild(option);

});

// ===========================================
// Load Faculty
// ===========================================

let facultyList =
JSON.parse(localStorage.getItem("facultyList")) || [];

facultyList.forEach(function(item){

    let option = document.createElement("option");

    option.value = item.facultyName;

    option.textContent = item.facultyName;

    faculty.appendChild(option);

});

// ===========================================
// Auto Fill Student Details
// ===========================================

registerNo.addEventListener("change",function(){

    let student = studentList.find(function(item){

        return item.registerNo===registerNo.value;

    });

    if(student){

        studentName.value = student.studentName;
        department.value = student.department;

    }

});

// ===========================================
// Auto Calculate
// ===========================================

function calculateResult(){

    let internal =
    Number(internalMarks.value)||0;

    let external =
    Number(externalMarks.value)||0;

    let assignment =
    Number(assignmentMarks.value)||0;

    let attendance =
    Number(attendanceMarks.value)||0;

    let total =
    internal+
    external+
    assignment+
    attendance;

    totalMarks.value = total;

    let percent =
    ((total/125)*100).toFixed(2);

    percentage.value = percent;

    // Grade

    if(percent>=90){

        grade.value="A+";

    }

    else if(percent>=80){

        grade.value="A";

    }

    else if(percent>=70){

        grade.value="B+";

    }

    else if(percent>=60){

        grade.value="B";

    }

    else if(percent>=50){

        grade.value="C";

    }

    else{

        grade.value="F";

    }

    // Result

    if(percent>=50){

        result.value="Pass";

    }

    else{

        result.value="Fail";

    }

}

internalMarks.addEventListener("input",calculateResult);
externalMarks.addEventListener("input",calculateResult);
assignmentMarks.addEventListener("input",calculateResult);
attendanceMarks.addEventListener("input",calculateResult);

// ===========================================
// Save Result
// ===========================================

resultForm.addEventListener("submit",function(e){

    e.preventDefault();

    let resultList =
    JSON.parse(localStorage.getItem("resultList")) || [];

    // Prevent Duplicate Register Number

    const exists = resultList.find(function(item){

        return (
            item.registerNo===registerNo.value &&
            item.course===course.value
        );

    });

    if(exists){

        alert("Result already exists for this student and course.");

        return;

    }

    const newResult={

        registerNo:registerNo.value,

        studentName:studentName.value,

        department:department.value,

        course:course.value,

        faculty:faculty.value,

        internalMarks:internalMarks.value,

        externalMarks:externalMarks.value,

        assignmentMarks:assignmentMarks.value,

        attendanceMarks:attendanceMarks.value,

        totalMarks:totalMarks.value,

        percentage:percentage.value,

        grade:grade.value,

        result:result.value,

        remarks:remarks.value

    };

    resultList.push(newResult);

    localStorage.setItem(

        "resultList",

        JSON.stringify(resultList)

    );

    alert("Result Added Successfully.");

    window.location.href="result-management.html";

});