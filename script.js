const hamburger = document.getElementsByClassName("hamburger")[0];
const navUL = document.getElementsByClassName("navlinks")[0];

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("active");
});

const navbarTopContainer = document.getElementsByClassName("navbar-top")[0];

hamburger.addEventListener("click", () => {
  navbarTopContainer.classList.toggle("active");
});
