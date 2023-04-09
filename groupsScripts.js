"use strict";

const groupSection = document.querySelector(".my-groups");
const groupContainers = document.querySelector(".group");

let scienceJoined = false;
let historyJoined = false;
let mysteryJoined = false;
let fantasyJoined = false;
let poetryJoined = false;
let thrillerJoined = false;

let joinedGroup = [];

const displayGroups = function () {
  if (localStorage.getItem("science")) {
    scienceJoined = true;
    joinedGroup.push("science");
    const scienceJoinBtn = document.getElementById("science");
    const scienceGroup = document.getElementById("science-group");
  }
  if (localStorage.getItem("history")) {
    historyJoined = true;
    joinedGroup.push("history");
    const historyJoinBtn = document.getElementById("history");
    const historyGroup = document.getElementById("history-group");
  }
  if (localStorage.getItem("mystery")) {
    mysteryJoined = true;
    joinedGroup.push("mystery");
    const mysteryJoinBtn = document.getElementById("mystery");
    const mysteryGroup = document.getElementById("mystery-group");
  }
  if (localStorage.getItem("fantasy")) {
    fantasyJoined = true;
    joinedGroup.push("fantasy");
    const fantasyJoinBtn = document.getElementById("fantasy");
    const fantasyGroup = document.getElementById("fantasy-group");
  }
  if (localStorage.getItem("poetry")) {
    poetryJoined = true;
    joinedGroup.push("poetry");
    const poetryJoinBtn = document.getElementById("poetry");
    const poetryGroup = document.getElementById("poetry-group");
  }
  if (localStorage.getItem("thriller")) {
    thrillerJoined = true;
    joinedGroup.push("thriller");
    const thrillerJoinBtn = document.getElementById("thriller");
    const thrillerGroup = document.getElementById("thriller-group");
  }

  joinedGroup.forEach(function (group, i) {
    let html = ``;
    if (joinedGroup[i] === "science") {
      html = `<div id='science-group' class="container group group-joined">
      <h2 class="group-card--heading">Science Fiction</h2>
      <p class="group-card--info">
        We are thrilled to announce the launch of our new science fiction
        club, where we will explore the vast and exciting worlds of science
        fiction literature.
      </p>
      <button id="science" class="btn join group-btn-joined" onclick="removeGroup(this.id)">Joined</button>
    </div>`;
    } else if (joinedGroup[i] === "history") {
      html = `<div id="history-group" class="container group group-joined">
      <h2 class="group-card--heading">History</h2>
      <p class="group-card--info">
        I am pleased to announce the formation of our new History Book Club!
        This club is open to anyone who has an interest in history, whether
        you're a history buff or just looking to learn more about the past.
      </p>
      <button id="history" class="btn join group-btn-joined" onclick="removeGroup(this.id)">Joined</button>
    </div>`;
    } else if (joinedGroup[i] === "mystery") {
      html = `<div id="mystery-group" class="container group group-joined">
      <h2 class="group-card--heading">Mystery</h2>
      <p class="group-card--info">
        This club is open to anyone who loves reading mysteries and
        thrillers, from classic whodunits to modern suspense novels. Our
        goal is to read and discuss a variety of mystery books, covering
        different sub-genres and styles.
      </p>
      <button id="mystery" class="btn join group-btn-joined" onclick="removeGroup(this.id)">Joined</button>
    </div>`;
    } else if (joinedGroup[i] === "fantasy") {
      html = ` <div id="fantasy-group" class="container group group-joined">
      <h2 class="group-card--heading">Fantasy</h2>
      <p class="group-card--info">
        This club is open to anyone who loves reading mysteries and
        thrillers, from classic whodunits to modern suspense novels. Our
        goal is to read and discuss a variety of mystery books, covering
        different sub-genres and styles.
      </p>
      <button id="fantasy" class="btn join group-btn-joined" onclick="removeGroup(this.id)">Joined</button>
    </div>`;
    } else if (joinedGroup[i] === "poetry") {
      html = `<div id="poetry-group" class="container group group-joined">
      <h2 class="group-card--heading">Poetry</h2>
      <p class="group-card--info">
        We are thrilled to announce the launch of our new science fiction
        club, where we will explore the vast and exciting worlds of science
        fiction literature.
      </p>
      <button id="poetry" class="btn join group-btn-joined" onclick="removeGroup(this.id)">Joined</button>
    </div>`;
    } else if (joinedGroup[i] === "thriller") {
      html = `<div id="thriller-group" class="container group group-joined">
      <h2 class="group-card--heading">Thriller</h2>
      <p class="group-card--info">
        I am pleased to announce the formation of our new History Book Club!
        This club is open to anyone who has an interest in history, whether
        you're a history buff or just looking to learn more about the past.
      </p>
      <button id="thriller" class="btn join group-btn-joined" onclick="removeGroup(this.id)">Joined</button>
    </div>`;
    }
    groupSection.insertAdjacentHTML("afterbegin", html);
  });
};

const removeGroup = function (id) {
  let selectedGroupBtn = document.getElementById(id);

  let selectedGroupStr = id + "-group";
  console.log(selectedGroupStr);

  let selectedGroup = document.getElementById(selectedGroupStr);

  selectedGroupBtn.classList.remove("group-btn-joined");
  selectedGroup.classList.remove("group-joined");
  selectedGroup.classList.add("hidden");

  localStorage.removeItem(id);
};

displayGroups();
