let playerSelcetion = "rock";
let computerSelection = "";
let selections = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let no = Math.floor(Math.random() * 3);
    computerSelection += selections[no];
};

getComputerChoice();