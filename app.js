const header = document.querySelector("header")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

menuBtn.addEventListener("click", () =>{
    header.classList.toggle("show-mobile-menu")
})
closeBtn.addEventListener("click", () =>{
    menuBtn.click();
})