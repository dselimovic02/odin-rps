let playerSelection = '';
let computerSelection = "";
let selections = ["rock", "paper", "scissors"];
let score = 0;

/*Check input*/
function checkInput(input){
    if(selections.includes(input))
        return true;

    return false;
}


/*Get input*/ 
do{
    playerSelection = prompt("Pick Rock, Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();
}
while(!checkInput(playerSelection));


/*Get choice from opponent*/ 
function getComputerChoice(){
    let no = Math.floor(Math.random() * 3);
    computerSelection = selections[no];
}


/*Round results*/ 
function winState(player, opponent){
    score++;
    return `You Win! ${player} beats ${opponent}`;
}
function loseState(player, opponent){
    return `You Lose! ${opponent} beats ${player}`;
}


/*Play a round of the game*/
function playRound(player, opponent){
    let message = '';
    if(player === opponent){
        getComputerChoice();
        return playRound(playerSelection, computerSelection);
    }else{
        switch(player){
            case "rock": opponent === "scissors" ? message = winState(player, opponent) : message = loseState(player, opponent); break;
            case "scissors": opponent === "paper" ? message = winState(player, opponent) : message = loseState(player, opponent); break;
            case "paper": opponent == "rock" ? message = winState(player, opponent) : message = loseState(player, opponent); break;
        }
        return message;
    }
}


/*Best of five*/
function game(){
    for(let i = 0; i < 5; i++){
        getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
    if(score < 3){
        return "You lose the game.";
    }

    return "You win the game.";
}

console.log(game());