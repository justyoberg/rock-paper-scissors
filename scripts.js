const choices = ["rock", "paper", "scissors"]; 

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, compSelection) {
  if (playerSelection === compSelection) return "tie";
  if ((playerSelection === "paper" && compSelection === "rock") ||
     (playerSelection === "rock" && compSelection === "scissors") || 
     (playerSelection === "scissors" && compSelection === "paper")) {
    return true;
  } 
  return false;
}

function checkWin(playerScore, compScore) {
  if (playerScore > compScore) {
    console.log(`You won! Final scores: P:${playerScore} C:${compScore}`);
  } else if (playerScore === compScore) {
    console.log(`It was a tie! Final scores: P:${playerScore} C:${compScore}`);
  } else {
    console.log(`You lost! Final scores: P:${playerScore} C:${compScore}`)
  }
}

// function game() {
//   let score = 0;
//   let compScore = 0;
//   // Main game loop
//   for (let i = 0; i < 5; i++) {
//     let playerChoice = prompt("Enter a move: (rock paper scissors)");
//     if (playRound(playerChoice, getComputerChoice()) === true) {
//       score++;
//       console.log(`You won! Scores: P:${score} C:${compScore}`);
//     } else if (playRound(playerChoice, getComputerChoice()) === "tie") {
//       console.log(`It was a tie! Scores: P:${score} C:${compScore}`)
//     }
//     else {
//       compScore++;
//       console.log(`You lost! Scores: P:${score} C:${compScore}`);
//     }
//   }
//   checkWin(score, compScore);
// }

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.innerText = "Rock";
paper.innerText = "Paper";
scissors.innerText = "Scissors";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

rock.addEventListener("click", () => playRound("rock", getComputerChoice));
paper.addEventListener("click", () => playRound("paper", getComputerChoice));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice));

// game();