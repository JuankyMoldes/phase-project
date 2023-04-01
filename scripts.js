"use strict";

const addBook = document.querySelector(".add-book");
const addBookModal = document.querySelector(".add-book-modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const body = document.querySelector("body");
const scienceJoinBtn = document.getElementById("science");
const historyJoinBtn = document.getElementById("history");
const mysteryJoinBtn = document.getElementById("mystery");
const scienceGroup = document.querySelector("science-group");
const historyGroup = document.getElementById("history-group");
const mysteryGroup = document.querySelector("mystery-group");

const openModal = function () {
  addBookModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden";
};

const closeModal = function () {
  addBookModal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "visible";
};

const HasJoined = function () {
  this.style.backgroundColor = "#b6650c";
  this.style.color = "#e2e2e2";
  this.style.backgroundColor = "#e2e2e2";
  this.style.color = "#333";
  this.textContent = "Joined";
};

const hasLeft = function () {
  this.style.backgroundColor = "#f0e0ce";
  this.style.color = "#333";
  this.style.backgroundColor = "#b6650c";
  this.style.color = "#e2e2e2";
  this.textContent = "Join";
};

addBook.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
document.querySelector(".cancel").addEventListener("click", closeModal);

scienceJoinBtn.addEventListener("click", function () {
  if (scienceJoinBtn.textContent === "Join") {
    hasJoined();
  } else {
    hasLeft();
  }
});
historyJoinBtn.addEventListener("click", function () {
  if (historyJoinBtn.textContent === "Join") {
    hasJoined();
  } else {
    hasLeft();
  }
});
mysteryJoinBtn.addEventListener("click", function () {
  if (mysteryJoinBtn.textContent === "Join") {
    hasJoined();
  } else {
    hasLeft();
  }
});
