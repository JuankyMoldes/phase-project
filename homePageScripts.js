"use strict";

const newBookBtn = document.querySelector(".intro-content--left-lower");

const newBookHover = function () {
  plusSign.style.color = "#f0e0ce";
  plusSign.style.backgroundColor = "#b6650c";
  plusSign.style.transitionDuration = "0.5s";
  plusSign.style.transform = "rotate(-90deg)";
  newBookBtn.style.backgroundColor = "#b6650c";
  newBookBtn.style.color = "#f0e0ce";
};

const BookUnhover = function () {
  plusSign.style.color = "#b6650c";
  plusSign.style.backgroundColor = "#f0e0ce";
  plusSign.style.transitionDuration = "0.5s";
  plusSign.style.transform = "rotate(90deg)";
  newBookBtn.style.backgroundColor = "#f0e0ce";
  newBookBtn.style.color = "#333";
  newBookBtn.style.transitionDuration = "0.5s";
};

newBookBtn.addEventListener("click", openModal);
newBookBtn.addEventListener("mouseover", newBookHover);
newBookBtn.addEventListener("mouseout", BookUnhover);
