"use strict";
const bookSection = document.querySelector(".my-books");
const bookContainers = document.querySelector(".container-books");
const bookDetails = document.querySelector(".details");

const displayBooks = function () {
  let BookObject = JSON.parse(window.localStorage.getItem("books"));
  bookSection.innerHTML = "";
  // console.log(BookObject);
  // const storageObj = {...localStorage}
  // const parsedBookArray = Object.values(storageObj).map((book) => JSON.parse(book)
  BookObject.forEach(function (book, i) {
    const html = `
    <div id="book-${
      i + 1
    }" class="container-books" onclick="checkerID(this.id)">
    <h1 class="book-detail-title">${JSON.stringify(book.title).replaceAll(
      '"',
      ""
    )}
    </h1>
    <span class="book-detail-author">By: ${JSON.stringify(
      book.author
    ).replaceAll('"', "")}</span>
    <div class="container-books details hidden">

              <div class="publisher">
                <h3 class="detail-publisher-heading">Publisher: </h3>
                <span class="detail-publisher-input">${JSON.stringify(
                  book.publisher
                ).replaceAll('"', "")}</span>
              </div>


              <div class="isbn-detail">
                <h3 class="detail-ISBN-heading">ISBN: </h3>
                <span class="detail-ISBN-input">${JSON.stringify(
                  book.isbn
                ).replaceAll('"', "")}</span>
              </div>
              <div class="price-detail">
                <h3 class="detail-price-heading">Price: </h3>
                  <span class="detail-price-input">$${JSON.stringify(
                    book.price
                  ).replaceAll('"', "")}</span>

              </div>
              <div class="copies-details">
                <h3 class="detail-copies-heading">Copies: </h3>
                  <span class="detail-copies-input">${JSON.stringify(
                    book.copies
                  ).replaceAll('"', "")}</span>

              </div>
            </div>
    </div>`;

    bookSection.insertAdjacentHTML("beforeend", html);
  });
};

const checkerID = function (clicked_id) {
  let selectedEl = document.getElementById(clicked_id);
  console.log(selectedEl);

  // selectedEl.style.animation = "mymove 3s forwards";
  let selectedId = selectedEl.querySelector(".details");

  if (selectedId.classList.contains("hidden")) {
    selectedId.classList.remove("hidden");
    selectedId.style.animation = "mymove 1s forwards";
  } else {
    selectedId.style.animation = "mymove 1s reverse";
    selectedId.classList.add("hidden");
  }
};

displayBooks();
