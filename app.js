gsap.from(".stag", {
  opacity: 0,
  delay: 1,
  duration: 2,
  y: 30,
  stagger:0.2
});

const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("show-mobile-menu");
});
closeBtn.addEventListener("click", () => {
  menuBtn.click();
});
