// Make array with rock, paper, scissors
// Get random number between 0-2 inclusive
// getComputerChoice returns random rock, paper, scissors

const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let humanChoice;

let getComputerChoice = () => {
    let index = Math.floor(Math.random() * 3);
    return options[index];
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

const body = document.querySelector("body");
const score = document.createElement("span");

score.textContent = `human: ${humanScore}, computer: ${computerScore}`;

body.appendChild(score);

function playRound(humanChoice, getComputerChoice) {
    let computerChoice = getComputerChoice();

    const div = document.createElement("div");
    const span = document.createElement("span");

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            span.textContent = "Tie...";
            console.log("Tie...")
        } else if (computerChoice === "paper") {
            span.textContent = "You lose! Paper beats rock.";
            console.log("You lose! Paper beats rock.")
            computerScore++;
        } else {
            span.textContent = "You win! Rock beats Scissors.";
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            span.textContent = "Tie...";
            console.log("Tie...")
        } else if (computerChoice === "scissors") {
            span.textContent = "You lose! Scissors beats Paper.";
            console.log("You lose! Scissors beats Paper.")
            computerScore++;
        } else {
            span.textContent = "You win! Paper beats Rock.";
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "scissors") {
            span.textContent = "Tie...";
            console.log("Tie...")
        } else if (computerChoice === "rock") {
            span.textContent = "You lose! Rock beats Scissors";
            console.log("You lose! Rock beats scissors.")
            computerScore++;
        } else {
            span.textContent = "You win! Scissors beats Paper.";
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
    }

    score.textContent = `human: ${humanScore}, computer: ${computerScore}`;
    div.appendChild(span);
    body.appendChild(div);
}

// Iterate through 5 rounds with for loop.
// After last round, if humanScore > computerScore, human wins.
// if humanScore < computerScore, computer wins.
// if humanScore === computerScore, tie.

const gameWinMessage = document.createElement("h2");
gameWinMessage.textContent = "You Won!";

const gameLoseMessage = document.createElement("h2");
gameLoseMessage.textContent = "You Lost!";

function playGame() {

    const div = document.querySelector("#menu");

    if (humanScore < 5 && computerScore < 5) {
        div.addEventListener("click", function selectAndPlay(event) {
            let target = event.target;
    
            switch (target.id) {
                case "rock":
                    playRound("rock", getComputerChoice);
                    break;
                case "paper":
                    playRound("paper", getComputerChoice);
                    break;
                case "scissors":
                    playRound("scissors", getComputerChoice);
                    break;
            }
            
            if (humanScore >= 5) {
                console.log("You Won the Game!!!");
                body.appendChild(gameWinMessage);
                div.removeEventListener("click", selectAndPlay);
            } else if (computerScore >= 5) {
                body.appendChild(gameLoseMessage);
                console.log("You Lost the Game... Sorry.");
                div.removeEventListener("click", selectAndPlay);
            }
        });
    }
}

playGame();