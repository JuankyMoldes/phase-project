"use strict";

let BookArray = [];

const addBook = document.querySelector(".add-book");
const addBookModal = document.querySelector(".add-book-modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const closeConfirmBtn = document.querySelector(".close-confirm");
const body = document.querySelector("body");
const plusSign = document.querySelector(".add-circle");
// const newBookBtn = document.querySelector(".intro-content--left-lower");
const submitBtn = document.querySelector(".submit");

const confirmLeft = document.querySelector(".confirmation-left");

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
const fantasyJoinBtn = document.getElementById("fantasy");
const poetryJoinBtn = document.getElementById("poetry");
const thrillerJoinBtn = document.getElementById("thriller");

const scienceGroup = document.getElementById("science-group");
const historyGroup = document.getElementById("history-group");
const mysteryGroup = document.getElementById("mystery-group");
const fantasyGroup = document.getElementById("fantasy-group");
const poetryGroup = document.getElementById("poetry-group");
const thrillerGroup = document.getElementById("thriller-group");

const confirmDetails = function (Book) {
  confirmLeft.innerHTML = "";
  const html = `<span class="confirm-labels">Title:  ${Book.title}</span>
      <span class="confirm-labels">Author:  ${Book.author}</span>
      <span class="confirm-labels">Publisher:  ${Book.publisher}</span>
      <span class="confirm-labels">ISBN:  ${Book.isbn}</span>
      <span class="confirm-labels">Copies:  ${Book.copies}</span>
      <span class="confirm-labels">Price: $${Book.price}</span>`;

  confirmLeft.insertAdjacentHTML("afterbegin", html);
};

const openModal = function () {
  clearInputs();
  addBookModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden";
};

const closeModal = function () {
  clearInputs();
  addBookModal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "visible";
};

const closeConfirm = function () {
  clearInputs();
  if (document.URL.includes("bookshelf.html")) {
    window.location.reload();
  }
  confirmModal.classList.add("hidden");
  addBookModal.classList.add("hidden");
  overlay.classList.add("hidden");
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

const fantasyHasJoined = function () {
  fantasyGroup.style.backgroundColor = "#b6650c";
  fantasyGroup.style.color = "#e2e2e2";
  fantasyJoinBtn.style.backgroundColor = "#e2e2e2";
  mysteryJoinBtn.style.color = "#333";
  fantasyJoinBtn.textContent = "Joined";
};

const fantasyHasLeft = function () {
  fantasyGroup.style.backgroundColor = "#f0e0ce";
  fantasyGroup.style.color = "#333";
  fantasyJoinBtn.style.backgroundColor = "#b6650c";
  fantasyJoinBtn.style.color = "#e2e2e2";
  fantasyJoinBtn.textContent = "Join";
};

const poetryHasJoined = function () {
  poetryGroup.style.backgroundColor = "#b6650c";
  poetryGroup.style.color = "#e2e2e2";
  poetryJoinBtn.style.backgroundColor = "#e2e2e2";
  poetryJoinBtn.style.color = "#333";
  poetryJoinBtn.textContent = "Joined";
};

const poetryHasLeft = function () {
  poetryGroup.style.backgroundColor = "#f0e0ce";
  poetryGroup.style.color = "#333";
  poetryJoinBtn.style.backgroundColor = "#b6650c";
  poetryJoinBtn.style.color = "#e2e2e2";
  poetryJoinBtn.textContent = "Join";
};

const thrillerHasJoined = function () {
  thrillerGroup.style.backgroundColor = "#b6650c";
  thrillerGroup.style.color = "#e2e2e2";
  thrillerJoinBtn.style.backgroundColor = "#e2e2e2";
  thrillerJoinBtn.style.color = "#333";
  thrillerJoinBtn.textContent = "Joined";
};

const thrillerHasLeft = function () {
  thrillerGroup.style.backgroundColor = "#f0e0ce";
  thrillerGroup.style.color = "#333";
  thrillerJoinBtn.style.backgroundColor = "#b6650c";
  thrillerJoinBtn.style.color = "#e2e2e2";
  thrillerJoinBtn.textContent = "Join";
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

function gotoBooks() {
  window.location.href = "./bookshelf.html";
}

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

    confirmDetails(Book);

    BookArray.push(Book);
    console.log(BookArray);
    if (
      !localStorage.getItem("books") ||
      JSON.parse(localStorage.getItem("books")).length === 0
    ) {
      window.localStorage.setItem("books", JSON.stringify(BookArray));
    } else {
      let tempStore = JSON.parse(localStorage.getItem("books"));
      window.localStorage.removeItem("books");
      Array.prototype.push.apply(BookArray, tempStore);
      window.localStorage.setItem("books", JSON.stringify(BookArray));
      tempStore = [];
    }
    BookArray = [];

    // clearInputs();
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
// submitBtn.addEventListener("click", validForm);

// Put newBookBtn into another scripts file (Non-home
// pages have problems accessing other scripts functions)

// newBookBtn.addEventListener("click", openModal);
// newBookBtn.addEventListener("mouseover", newBookHover);
// newBookBtn.addEventListener("mouseout", BookUnhover);

// logoIcon.addEventListener("mouseover", logoHover);
// logoIcon.addEventListener("mouseout", logoUnhover);

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

fantasyJoinBtn.addEventListener("click", function () {
  if (fantasyJoinBtn.textContent === "Join") {
    fantasyHasJoined();
  } else {
    fantasyHasLeft();
  }
});

poetryJoinBtn.addEventListener("click", function () {
  if (poetryJoinBtn.textContent === "Join") {
    poetryHasJoined();
  } else {
    poetryHasLeft();
  }
});

thrillerJoinBtn.addEventListener("click", function () {
  if (thrillerJoinBtn.textContent === "Join") {
    thrillerHasJoined();
  } else {
    thrillerHasLeft();
  }
});
