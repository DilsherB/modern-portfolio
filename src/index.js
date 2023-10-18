// JavaScript code to toggle the mobile menu and icons
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("active");
    closeIcon.classList.remove("active");
});
