function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.style.left === "0px") {
        menu.style.left = "-250px";
    } else {
        menu.style.left = "0px";
    }
}
