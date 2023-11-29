let playerSelection = "rOcK";
let computerSelection = "";
let selections = ["rock", "paper", "scissors"];


/*Get choice from opponent*/ 
function getComputerChoice(){
    let no = Math.floor(Math.random() * 3);
    computerSelection = selections[no];
};

getComputerChoice();

/*Round results*/ 
function winState(player, opponent){
    return `You Win! ${player} beats ${opponent}`;
}
function loseState(player, opponent){
    return `You Lose! ${opponent} beats ${player}`;
}

/*Play a round of the game*/
function playRound(player, opponent){
    let message = '';
    player = player.toLowerCase();
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

console.log(playRound(playerSelection, computerSelection));