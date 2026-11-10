// Mobile Navigation

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const isExpanded = navbar.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);

    menuToggle.textContent = isExpanded ? "✕" : "☰";

});


// Close Menu After Clicking a Link

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// Automatically Update Copyright Year

document.getElementById("year").textContent = new Date().getFullYear();


// Console Message

console.log("Welcome to Hari Prasath's Portfolio!");
