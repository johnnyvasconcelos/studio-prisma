const btnMob = document.querySelector(".mob-btn");
const menuMob = document.querySelector(".menu");
const overlay = document.querySelector(".menu-overlay");
const menuLinks = document.querySelectorAll(".menu li a");

btnMob.addEventListener("click", () => {
  btnMob.classList.toggle("active");
  menuMob.classList.toggle("active");
});

if (overlay) {
  overlay.addEventListener("click", () => {
    btnMob.classList.remove("active");
    menuMob.classList.remove("active");
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    btnMob.classList.remove("active");
    menuMob.classList.remove("active");
  });
});
