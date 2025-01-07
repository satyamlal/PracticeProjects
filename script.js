//Logic of the game goes here
let gameSeq = [];
let userSeq = [];

let btns = ["pink", "orange", "cyan", "blue"];

let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("Game Started!");
    started = true;
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 1000);
}

function levelUp() {
  level++;
  h2.textContent = `Level ${level}`;

  const randIdx = Math.floor(Math.random() * btns.length);
  const randColor = btns[randIdx];
  const randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log(randIdx);
  console.log(randColor);
  console.log(randBtn);

  btnFlash(randBtn);
}
