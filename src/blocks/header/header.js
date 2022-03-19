import "../header/header.scss";

//Burger menu

const burger = document.querySelector(".burger-menu");
const menuBody = document.querySelector(".header-menu__body");

burger.addEventListener("click", function () {
  if (burger.classList.contains("burger-menu_active")) {
    document.body.style.overflowY = "";
    burger.classList.remove("burger-menu_active");
    menuBody.classList.remove("header-menu__body_active");
  } 
  else {
    document.body.style.overflowY = "hidden";
    burger.classList.toggle("burger-menu_active");
    menuBody.classList.toggle("header-menu__body_active");
  }
})