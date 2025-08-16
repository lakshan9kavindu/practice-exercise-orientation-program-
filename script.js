document.addEventListener("DOMContentLoaded", function () {
    // Alert for forms
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("This is not a functional form");
        });
    }

    // list
    const menuIcon = document.querySelector(".menu-icon");
    const menuList = document.querySelector(".nBar .list");

    if (menuIcon && menuList) {
        // Open/close list when clicking the icon
        menuIcon.addEventListener("click", function (event) {
            menuList.classList.toggle("show");
            event.stopPropagation(); // Prevent triggering document click
        });

        // Close list when clicking a link
        menuList.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                menuList.classList.remove("show");
            });
        });

        // Close list when clicking outside the menu
        document.addEventListener("click", function (event) {
            if (menuList.classList.contains("show") &&
                !menuList.contains(event.target) && 
                event.target !== menuIcon) {
                menuList.classList.remove("show");
            }
        });

        // Prevent clicks inside the menu from closing it
        menuList.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }
});
