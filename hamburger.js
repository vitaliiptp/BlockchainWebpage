// ___________________________________________Hamburger-Start___________________________________________

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-bar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
// ___________________________________________Hamburger-End___________________________________________
