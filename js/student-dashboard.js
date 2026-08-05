// =======================================
// LMS Student Dashboard JavaScript
// =======================================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Student Dashboard Loaded Successfully");
});

// =======================================
// Active Sidebar Menu
// =======================================

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {

    item.addEventListener("click", function () {

        menuItems.forEach(i => i.classList.remove("active"));

        this.classList.add("active");

    });

});

// =======================================
// Search Menu
// =======================================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    menuItems.forEach(item => {

        const text = item.innerText.toLowerCase();

        if (text.includes(value)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

});

// =======================================
// Notification Bell
// =======================================

const bell = document.querySelector(".fa-bell");

bell.addEventListener("click", () => {

    alert(`Notifications

📢 Assignment 3 due tomorrow.

📅 Java Internal Exam on Monday.

📚 New Study Material Uploaded.

🏆 Semester Results Published.`);

});

// =======================================
// Dashboard Counter Animation
// =======================================

const counters = document.querySelectorAll(".card h2");

counters.forEach(counter => {

    let target = counter.innerText;

    // Attendance Percentage
    if(target.includes("%")){

        target = parseInt(target);

        let count = 0;

        const timer = setInterval(() => {

            count++;

            counter.innerText = count + "%";

            if(count >= target){

                clearInterval(timer);

            }

        },20);

    }

    // CGPA
    else if(target.includes(".")){

        const value = parseFloat(target);

        let count = 0;

        const timer = setInterval(()=>{

            count += 0.1;

            counter.innerText = count.toFixed(1);

            if(count >= value){

                counter.innerText = value.toFixed(1);

                clearInterval(timer);

            }

        },50);

    }

    // Numbers
    else{

        target = parseInt(target);

        let count = 0;

        const timer = setInterval(()=>{

            count++;

            counter.innerText = count;

            if(count >= target){

                clearInterval(timer);

            }

        },40);

    }

});

// =======================================
// Card Click Event
// =======================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const module = card.querySelector("p").innerText;

        alert(module + " Opened");

    });

});

// =======================================
// Table Row Hover
// =======================================

const rows = document.querySelectorAll("tbody tr");

rows.forEach(row => {

    row.addEventListener("mouseenter", () => {

        row.style.background = "#eef3ff";

    });

    row.addEventListener("mouseleave", () => {

        row.style.background = "";

    });

});

// =======================================
// Greeting Message
// =======================================

const heading = document.querySelector(".welcome h1");

const hour = new Date().getHours();

if(hour < 12){

    heading.innerHTML = "Good Morning, Student ☀️";

}
else if(hour < 17){

    heading.innerHTML = "Good Afternoon, Student 🌤️";

}
else{

    heading.innerHTML = "Good Evening, Student 🌙";

}

// =======================================
// Profile Click
// =======================================

const profile = document.querySelector(".profile");

profile.addEventListener("click", () => {

    alert("Student Profile");

});

// =======================================
// Logout Confirmation
// =======================================

const logout = document.querySelector(".fa-right-from-bracket");

logout.addEventListener("click", function(e){

    const answer = confirm("Are you sure you want to logout?");

    if(!answer){

        e.preventDefault();

    }

});

// =======================================
// Live Date in Browser Title
// =======================================

function updateTitle(){

    const now = new Date();

    document.title = "Student Dashboard | " +
        now.toLocaleDateString();

}

updateTitle();