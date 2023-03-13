const mobile_nav = document.querySelector(".mobile-navbar-btn");
const navHeader = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("hi");
  navHeader.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());