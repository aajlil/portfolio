const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
    });
});
