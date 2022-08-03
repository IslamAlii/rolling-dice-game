"use strict";
// Identifying all reusable variables
const players = document.querySelectorAll(".player"),
  score = document.querySelectorAll(".score"),
  currentScore = document.querySelectorAll(".current-score"),
  dice = document.querySelector(".dice"),
  palyerWins = document.querySelector(".player--winner"),
  btnRoll = document.querySelector(".btn--roll"),
  btnHold = document.querySelector(".btn--hold"),
  btnStartNewGame = document.querySelector(".btn--new");

// Seting the active player at the start of the game
let activePlayer = 0;

// Roll button click algorithm
btnRoll.addEventListener("click", () => {
  let randomNumber = Math.ceil(Math.random() * 6);
  dice.classList.remove("hidden");
  dice.src = `images/dice-${randomNumber}.png`;
  if (randomNumber == 1) {
    switchPlayer();
  } else {
    currentScore[activePlayer].textContent =
      +currentScore[activePlayer].textContent + randomNumber;
  }
});

// Hold button click algorithm
btnHold.addEventListener("click", () => {
  score[activePlayer].textContent =
    +score[activePlayer].textContent + +currentScore[activePlayer].textContent;
  if (+score[activePlayer].textContent >= 100) {
    document.querySelector(".player--winner h1").textContent = `Player ${
      activePlayer + 1
    } wins 🎉🎊🎈`;
    palyerWins.classList.add("active");
    btnRoll.classList.add("hidden");
    btnHold.classList.add("hidden");
    dice.classList.add("hidden");
  } else {
    switchPlayer();
  }
});

// Start new game button click algorithm
btnStartNewGame.addEventListener("click", () => {
  palyerWins.classList.remove("active");
  btnRoll.classList.remove("hidden");
  btnHold.classList.remove("hidden");
  dice.classList.add("hidden");
  players[0].classList.add("player--active");
  players[1].classList.remove("player--active");
  score.forEach((score) => {
    score.textContent = 0;
  });
  currentScore.forEach((score) => {
    score.textContent = 0;
  });
  activePlayer = 0;
});

// Function for switchin between players
function switchPlayer() {
  btnRoll.classList.add("hidden");
  currentScore[activePlayer].textContent = 0;
  players[activePlayer].classList.remove("player--active");
  activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
  players[activePlayer].classList.add("player--active");
  setTimeout(function () {
    btnRoll.classList.remove("hidden");
    dice.classList.add("hidden");
  }, 1000);
}
