"use strict";

const BookForm = {
  Title: "",
  Author: "",
  Publisher: "",
  ISBN: "",
  Price: "",
  Copies: "",
  // Also contains a button
};

const addBook = document.querySelector(".add-book");
const addBookModal = document.querySelector(".add-book-modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const body = document.querySelector("body");
const joinBtn = document.querySelector(".join");
const group = document.querySelector(".group");

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

const hasJoined = function () {
  group.style.backgroundColor = "#b6650c";
  group.style.color = "#e2e2e2";
  joinBtn.style.backgroundColor = "#e2e2e2";
  joinBtn.style.color = "#333";
  joinBtn.textContent = "Joined";
};

const hasLeft = function () {
  group.style.backgroundColor = "#f0e0ce";
  group.style.color = "#333";
  joinBtn.style.backgroundColor = "#b6650c";
  joinBtn.style.color = "#e2e2e2";
  joinBtn.textContent = "Join";
};

addBook.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
document.querySelector(".cancel").addEventListener("click", closeModal);

joinBtn.addEventListener("click", function () {
  if (joinBtn.textContent === "Join") {
    hasJoined();
  } else {
    hasLeft();
  }
});
