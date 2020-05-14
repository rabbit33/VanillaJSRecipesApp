const navmenu = document.getElementById("navmenu");
const navbarToggle = document.getElementById("navbar-toggle");
const menuButton = document.querySelector(".menu-button");
let menuOpen = false;

menuButton.addEventListener("click", openMenu, false);
menuButton.addEventListener("tapstart", openMenu, false);

const openMenu = () => {
  if (menuOpen) {
    menuOpen = false;
    menuButton.classList.remove("open");
    navmenu.classList.remove("active");
  } else {
    menuOpen = true;
    menuButton.classList.add("open");
    navmenu.classList.add("active");
  }
}
