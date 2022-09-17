const choices = ["rock", "paper", "scissors"];
var playerScore = 0;
var compScore = 0;
const pScore = document.querySelector(".p-score");
const cScore = document.querySelector(".c-score");
const results = document.querySelector(".results");

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, compSelection) {
  if (playerSelection === compSelection) return declareRoundWinner("tie", "None");
  if ((playerSelection === "paper" && compSelection === "rock") ||
     (playerSelection === "rock" && compSelection === "scissors") || 
     (playerSelection === "scissors" && compSelection === "paper")) {
    return declareRoundWinner(true, playerSelection, compSelection);
  } 
  return declareRoundWinner(false, compSelection, playerSelection);
}

function declareRoundWinner(result, winner, loser) {
  if (result === true) {
    playerScore++;
    results.textContent = `Player beats ${loser} with ${winner}!`;
    pScore.textContent = `Player: ${playerScore}`;
    checkGameWinner();
  } else if (result === false) {
    compScore++;
    results.textContent = `Computer beats ${loser} with ${winner}!`;
    cScore.textContent = `Computer: ${compScore}`;
    checkGameWinner();
  } else {
    results.textContent = "It was a tie!";
  }
}

function checkGameWinner() {
  if (playerScore === 5) {
    results.textContent = "Player wins!";
    resetGame();
  } else if (compScore === 5) {
    results.textContent = "Computer wins!";
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  compScore = 0;
  pScore.textContent = `Player: ${playerScore}`;
  cScore.textContent = `Computer: ${compScore}`;
}

const btn = document.querySelectorAll(".rock, .paper, .scissors");

btn.forEach(function (button){
  button.addEventListener("click", () => {
    playRound(button.textContent.toLowerCase(), getComputerChoice())
  });
});
