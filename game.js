// Make array with rock, paper, scissors
// Get random number between 0-2 inclusive
// getComputerChoice returns random rock, paper, scissors

const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

// Prompt user for rock, paper, or scissors.
// Make all letters lowercase
// Return that string

function getHumanChoice() {
    return prompt("rock, paper, or scissors?: ").toLowerCase();
}

