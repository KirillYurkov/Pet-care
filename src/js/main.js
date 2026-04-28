"use strict";
let burger = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header-nav__list");
burger.addEventListener("click", function () {
  headerNav.classList.toggle("active");
  burger.classList.toggle("active");
});

let swiper = new Swiper(".feedbackSwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});
