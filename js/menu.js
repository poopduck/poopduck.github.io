//source:
//open menu
window.onload = function () {
    const menu_icon = document.querySelector(".menu-icon");
    const nav_items = document.querySelector(".nav-items");

    menu_icon.onclick = mobileMenu;

    function mobileMenu() {
        menu_icon.classList.toggle("active");
        nav_items.classList.toggle("active");
    }
}



//close menu upon clicking a link
const nav_link = document.querySelectorAll(".nav-link");

nav_link.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    menu_icon.classList.remove("active");
    nav_items.classList.remove("active");
}