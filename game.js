// Make array with rock, paper, scissors
// Get random number between 0-2 inclusive
// getComputerChoice returns random rock, paper, scissors

const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

// Prompt user for rock, paper, or scissors.
// Make all letters lowercase
// Return that string

let getHumanChoice = () => {
    return prompt("rock, paper, or scissors?: ").toLowerCase();
}

// if human picks scissors and comp picks paper, human wins and gets +1.
// if human picks scissors and comp pick rock, comp wins and gets +1.
// if human and comp both pick scissors, tie. no points

// if human picks rock and comp picks scissors, human wins and gets +1.
// if human picks rock and comp pick paper, comp wins and gets +1.
// if human and comp both pick rock, tie. no points

// if human picks paper and comp picks rock, human wins and gets +1.
// if human picks paper and comp pick scissors, comp wins and gets +1.
// if human and comp both pick paper, tie. no points

function playRound(getHumanChoice, getComputerChoice) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Tie...")
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock.")
            computerScore++;
        } else {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            console.log("Tie...")
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.")
            computerScore++;
        } else {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "scissors") {
            console.log("Tie...")
        } else if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors.")
            computerScore++;
        } else {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
    }
}

// Iterate through 5 rounds with for loop.
// After last round, if humanScore > computerScore, human wins.
// if humanScore < computerScore, computer wins.
// if humanScore === computerScore, tie.

