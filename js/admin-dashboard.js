// ===============================
// Admin Dashboard JavaScript
// ===============================

// Welcome Message

window.addEventListener("load", () => {
    console.log("Welcome to LMS Admin Dashboard");
});


// ===============================
// Search Function
// ===============================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        const menuItems = document.querySelectorAll(".menu li");

        menuItems.forEach(item => {

            const text = item.innerText.toLowerCase();

            if (text.includes(value)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

}


// ===============================
// Active Sidebar Menu
// ===============================

const menuLinks = document.querySelectorAll(".menu li");

menuLinks.forEach(item => {

    item.addEventListener("click", function () {

        menuLinks.forEach(link => {
            link.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ===============================
// Notification Bell
// ===============================

const bell = document.querySelector(".fa-bell");

if (bell) {

    bell.addEventListener("click", () => {

        alert(
            "Notifications\n\n" +
            "• 3 New Student Registrations\n" +
            "• 1 Faculty Request Pending\n" +
            "• 2 Assignments Submitted"
        );

    });

}


// ===============================
// Dashboard Cards Animation
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// ===============================
// Card Click Events
// ===============================

cards.forEach(card => {

    card.addEventListener("click", () => {

        const title = card.querySelector("p").innerText;

        alert(title + " Module");

    });

});


// ===============================
// Recent Activity Table Hover
// ===============================

const rows = document.querySelectorAll("tbody tr");

rows.forEach(row => {

    row.addEventListener("mouseenter", () => {

        row.style.background = "#f4f6ff";

    });

    row.addEventListener("mouseleave", () => {

        row.style.background = "";

    });

});


// ===============================
// Live Date & Time
// ===============================

function updateTime() {

    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const date = now.toLocaleDateString("en-US", options);

    document.title = "Admin Dashboard | " + date;

}

updateTime();


// ===============================
// Logout Confirmation
// ===============================

const logout = document.querySelector(
".fa-right-from-bracket"
);

if (logout) {

    logout.addEventListener("click", function (e) {

        const confirmLogout =
        confirm("Are you sure you want to logout?");

        if (!confirmLogout) {

            e.preventDefault();

        }

    });

}


// ===============================
// Simple Dashboard Counter
// ===============================

const numbers = document.querySelectorAll(".card h2");

numbers.forEach(number => {

    const target = parseInt(number.innerText);

    let count = 0;

    const speed = target / 50;

    const counter = setInterval(() => {

        count += speed;

        if (count >= target) {

            number.innerText = target;

            clearInterval(counter);

        } else {

            number.innerText = Math.floor(count);

        }

    }, 20);

});