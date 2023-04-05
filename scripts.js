"use strict";

const BookArray = [];

const addBook = document.querySelector(".add-book");
const addBookModal = document.querySelector(".add-book-modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const closeConfirmBtn = document.querySelector(".close-confirm");
const body = document.querySelector("body");
const plusSign = document.querySelector(".add-circle");
const newBookBtn = document.querySelector(".intro-content--left-lower");
const submitBtn = document.querySelector(".submit");

/*  EXAMPLE CODE ON HOW TO USE FORM TAB ON SUBMIT TO STORE VARIABLES TO LOCAL STORAGE 
<script>
  document.querySelector('form').onsubmit = function(e) {
    e.preventDefault();
    var name = document.querySelector('#recipe-name').value;
    var description = document.querySelector('#recipe-description').value;
    localStorage["name"] = name;
    localStorage["description"] = description;
    console.log(localStorage);
  }
</script>

*/

const logoIcon = document.querySelector(".logo-icon");

const confirmModal = document.querySelector(".confirmation");

const scienceJoinBtn = document.getElementById("science");
const historyJoinBtn = document.getElementById("history");
const mysteryJoinBtn = document.getElementById("mystery");
const scienceGroup = document.getElementById("science-group");
const historyGroup = document.getElementById("history-group");
const mysteryGroup = document.getElementById("mystery-group");

const openModal = function () {
  addBookModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden";
};

const closeModal = function () {
  addBookModal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "visible";

  clearInputs();
};

const closeConfirm = function () {
  clearInputs();

  confirmModal.classList.add("hidden");
  addBookModal.classList.add("hidden");
  overlay.classList.add("hidden");
  // localStorage.clear();
};

const scienceHasJoined = function () {
  scienceGroup.style.backgroundColor = "#b6650c";
  scienceGroup.style.color = "#e2e2e2";
  scienceJoinBtn.style.backgroundColor = "#e2e2e2";
  scienceJoinBtn.style.color = "#333";
  scienceJoinBtn.textContent = "Joined";
};

const scienceHasLeft = function () {
  scienceGroup.style.backgroundColor = "#f0e0ce";
  scienceGroup.style.color = "#333";
  scienceJoinBtn.style.backgroundColor = "#b6650c";
  scienceJoinBtn.style.color = "#e2e2e2";
  scienceJoinBtn.textContent = "Join";
};

const historyHasJoined = function () {
  historyGroup.style.backgroundColor = "#b6650c";
  historyGroup.style.color = "#e2e2e2";
  historyJoinBtn.style.backgroundColor = "#e2e2e2";
  historyJoinBtn.style.color = "#333";
  historyJoinBtn.textContent = "Joined";
};

const historyHasLeft = function () {
  historyGroup.style.backgroundColor = "#f0e0ce";
  historyGroup.style.color = "#333";
  historyJoinBtn.style.backgroundColor = "#b6650c";
  historyJoinBtn.style.color = "#e2e2e2";
  historyJoinBtn.textContent = "Join";
};

const mysteryHasJoined = function () {
  mysteryGroup.style.backgroundColor = "#b6650c";
  mysteryGroup.style.color = "#e2e2e2";
  mysteryJoinBtn.style.backgroundColor = "#e2e2e2";
  mysteryJoinBtn.style.color = "#333";
  mysteryJoinBtn.textContent = "Joined";
};

const mysteryHasLeft = function () {
  mysteryGroup.style.backgroundColor = "#f0e0ce";
  mysteryGroup.style.color = "#333";
  mysteryJoinBtn.style.backgroundColor = "#b6650c";
  mysteryJoinBtn.style.color = "#e2e2e2";
  mysteryJoinBtn.textContent = "Join";
};

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

function clearInputs() {
  document.getElementById("book-form-author").value = "";
  document.getElementById("book-form-title").value = "";
  document.getElementById("book-form-publisher").value = "";
  document.getElementById("book-form-isbn").value = "";
  document.getElementById("book-form-copies").value = "";
  document.getElementById("book-form-price").value = "";
}

// const logoHover = function () {
//   logoIcon.style.transitionDuration = "0.5s";
//   logoIcon.style.transform = "rotate(45deg)";
// };

// const logoUnhover = function () {
//   logoIcon.style.transitionDuration = "0.5s";
//   logoIcon.style.transform = "rotate(-45deg)";
// };

function validForm() {
  let formTitle = document.getElementById("book-form-title").value;
  let formAuthor = document.getElementById("book-form-author").value;
  let formPublish = document.getElementById("book-form-publisher").value;
  let formISBN = document.getElementById("book-form-isbn").value;
  let formPrice = document.getElementById("book-form-price").value;
  let formCopies = document.getElementById("book-form-copies").value;
  if (
    formTitle &&
    formAuthor &&
    formPublish &&
    formISBN &&
    formPrice &&
    formCopies
  ) {
    addBookModal.classList.add("hidden");
    confirmModal.classList.remove("hidden");
    let Title = String(formTitle);
    let Author = String(formAuthor);
    let Publisher = String(formPublish);
    let ISBN = String(formISBN);
    let Copies = String(formPrice);
    let Price = String(formCopies);
    let Book = {
      title: Title,
      author: Author,
      publisher: Publisher,
      isbn: ISBN,
      copies: Copies,
      price: Price,
    };

    let stringBook = JSON.stringify(Book);
    let objectBook = JSON.parse(stringBook);

    BookArray.push(objectBook);

    const bookStringArray = JSON.stringify(BookArray);
    window.localStorage.setItem("books", bookStringArray);

    // console.log(objectBook);
    console.log(BookArray);
    clearInputs();
  } else {
    addBookModal.classList.add("bounce");

    setTimeout(function () {
      addBookModal.classList.remove("bounce");
    }, 1000);
  }
}

addBook.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
closeConfirmBtn.addEventListener("click", closeConfirm);
document.querySelector(".cancel").addEventListener("click", closeModal);
newBookBtn.addEventListener("click", openModal);
newBookBtn.addEventListener("mouseover", newBookHover);
newBookBtn.addEventListener("mouseout", BookUnhover);
// logoIcon.addEventListener("mouseover", logoHover);
// logoIcon.addEventListener("mouseout", logoUnhover);
submitBtn.addEventListener("click", validForm);

scienceJoinBtn.addEventListener("click", function () {
  if (scienceJoinBtn.textContent === "Join") {
    scienceHasJoined();
  } else {
    scienceHasLeft();
  }
});
historyJoinBtn.addEventListener("click", function () {
  if (historyJoinBtn.textContent === "Join") {
    historyHasJoined();
  } else {
    historyHasLeft();
  }
});
mysteryJoinBtn.addEventListener("click", function () {
  if (mysteryJoinBtn.textContent === "Join") {
    mysteryHasJoined();
  } else {
    mysteryHasLeft();
  }
});
