// =======================================
// LMS Faculty Dashboard JavaScript
// =======================================

// Welcome Message

window.addEventListener("load", () => {
    console.log("Faculty Dashboard Loaded Successfully");
});

// =======================================
// Sidebar Active Menu
// =======================================

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {

    item.addEventListener("click", function () {

        menuItems.forEach(i => {
            i.classList.remove("active");
        });

        this.classList.add("active");

    });

});

// =======================================
// Search Menu
// =======================================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

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

bell.addEventListener("click", function () {

    alert(
`Notifications

• 5 Assignment submissions

• Attendance due today

• 2 New Student Messages

• Meeting at 3:00 PM`
    );

});

// =======================================
// Dashboard Counter Animation
// =======================================

const counters = document.querySelectorAll(".card h2");

counters.forEach(counter => {

    let target = counter.innerText;

    // Attendance Card
    if(target.includes("%")){

        target = parseInt(target);

        let count = 0;

        const update = setInterval(()=>{

            count++;

            counter.innerText = count + "%";

            if(count >= target){

                clearInterval(update);

            }

        },20);

    }

    else{

        target = parseInt(target);

        let count = 0;

        const update = setInterval(()=>{

            count++;

            counter.innerText = count;

            if(count >= target){

                clearInterval(update);

            }

        },15);

    }

});

// =======================================
// Card Click
// =======================================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        const title = card.querySelector("p").innerText;

        alert(title + " Module Opened");

    });

});

// =======================================
// Table Hover
// =======================================

const rows = document.querySelectorAll("tbody tr");

rows.forEach(row=>{

    row.addEventListener("mouseenter",()=>{

        row.style.background="#f2f4ff";

    });

    row.addEventListener("mouseleave",()=>{

        row.style.background="";

    });

});

// =======================================
// Profile Click
// =======================================

const profile=document.querySelector(".profile");

profile.addEventListener("click",()=>{

    alert("Faculty Profile");

});

// =======================================
// Logout Confirmation
// =======================================

const logout=document.querySelector(".fa-right-from-bracket");

logout.addEventListener("click",(e)=>{

    let confirmLogout=confirm("Are you sure you want to logout?");

    if(!confirmLogout){

        e.preventDefault();

    }

});

// =======================================
// Greeting Message
// =======================================

const heading=document.querySelector(".welcome h1");

const hour=new Date().getHours();

if(hour<12){

    heading.innerHTML="Good Morning, Faculty ☀️";

}

else if(hour<17){

    heading.innerHTML="Good Afternoon, Faculty 🌤️";

}

else{

    heading.innerHTML="Good Evening, Faculty 🌙";

}