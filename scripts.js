function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, compSelection) {
  if (playerSelection === "paper" && compSelection === "rock") {
    return true;
  } else if (playerSelection === "rock" && compSelection === "scissors") {
    return true;
  } else if (playerSelection === "scissors" && compSelection === "paper") {
    return true;
  } 
  return false;
}


function game() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Enter a move: (rock paper scissors)");
    if (playRound(playerChoice, getComputerChoice())) {
      score++;
      console.log(`Gained a point! Score: ${score}`)
    } else {
      console.log("You either lost, or it was a tie! No points!")
    }
  }
  if (score >= 3) {
    console.log(`You won with a score of ${score}!`)
  } else {
    console.log(`You lost with a score of ${score}!`)
  }
}

game();