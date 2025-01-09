// Game logic
let gameSeq = [];
let userSeq = [];

const btns = ["pink", "orange", "cyan", "blue"];
const h2 = document.querySelector("h2");

let started = false;
let level = 0;
let gameOver = false;

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("Game Started!");
    started = true;
    level = 0;
    gameSeq = [];
    userSeq = [];
    gameOver = false;
    levelUp();
  }
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (started && !gameOver) {
      let clickedColor = this.classList[1];
      userSeq.push(clickedColor);
      btnFlash(this);
      checkAnswer(userSeq.length - 1);
    }
  });
});

function btnFlash(btn) {
  if (started && !gameOver) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 300);
  }
}

function levelUp() {
  level++;
  h2.textContent = `Level ${level}`;

  const randIdx = Math.floor(Math.random() * btns.length);
  const randColor = btns[randIdx];
  const randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  btnFlash(randBtn);
}

function checkAnswer(currentLevel) {
  if (userSeq[currentLevel] === gameSeq[currentLevel]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
      userSeq = [];
    }
  } else {
    h2.textContent = "Game Over! Press any key to Restart.";
    started = false;
    gameOver = true;
  }
}
