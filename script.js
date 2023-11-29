let playerSelcetion = "rOcK";
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
    console.log(`You Win! ${player} beats ${opponent}`);
}
function loseState(player, opponent){
    console.log(`You Lose! ${opponent} beats ${player}`);
}

/*Play a round of the game*/
function playRound(player, opponent){
    player = player.toLowerCase();
    if(player === opponent){
        getComputerChoice();
        playRound(playerSelcetion, computerSelection);
    }else{
        switch(player){
            case "rock": opponent === "scissors" ? winState(player, opponent) : loseState(player, opponent); break;
            case "scissors": opponent === "paper" ? winState(player, opponent) : loseState(player, opponent); break;
            case "paper": opponent == "rock" ? winState(player, opponent) : loseState(player, opponent); break;
        }
    }
}

playRound(playerSelcetion, computerSelection);