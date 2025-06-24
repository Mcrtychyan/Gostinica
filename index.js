document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("menu--open");
        menuBtn.classList.toggle("menu__btn_active");
    });


    const menuLinks = document.querySelectorAll(".menu__list");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("menu--open");
            menuBtn.classList.remove("menu__btn_active");
        });
    });
});