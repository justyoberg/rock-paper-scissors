function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, compSelection) {
  
  if (playerSelection.toLowerCase() === "rock") {
    if (compSelection === "scissors") {
      return "You win! Rock beats Scissors!";
    } else if (compSelection === "paper") {
      return "You lose! Paper beats Rock!";
    } else {
      return "It was a tie!";
    }
  } else if (playerSelection.toLowerCase() === "paper") {
    if (compSelection === "rock") {
      return "You win! Paper beats Rock!";
    } else if (compSelection === "scissors") {
        return "You lose! Scissors beats Paper!";
    } else {
      return "It was a tie!";
    } 
  } else if (playerSelection.toLowerCase() === "scissors") {
    if (compSelection === "paper") {
      return "You win! Scissors beats Paper!";
    } else if (compSelection === "rock") {
      return "You lose! Rock beats Scissors!";
    } else {
      return "It was a tie!";
    }
  } else {
      return "Please enter a valid move."
  }

}

const playerMove = prompt("Enter a move: ");
console.log(playRound(playerMove, getComputerChoice()));