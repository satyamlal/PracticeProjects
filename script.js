//Logic of the game goes here
let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started!");
    h2.innerHTML = "Game Started!!!";
    started = true;
  }
});
