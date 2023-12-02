let selections = ["rock", "paper", "scissors"];

let points = document.querySelector(".points");
let rounds = document.querySelector(".score .rounds");
let inputRounds = document.querySelector(".input-rounds");
let roundOptions = document.querySelectorAll(".round-options span");
let playBtn = document.querySelector(".playBtn");
let rulesBtn = document.querySelector(".rulesBtn");

points.innerText = 0;
rounds.innerText = 0;

let roundInputHolder = 0;
let playedRounds = 0;
let wonRoundsLimit = 0;
let userChoice = '';
let computerChoice = '';
let randomNum = 0;



//Enter no. of rounds
/****************************************************************************************/
roundOptions.forEach(item => {
    item.addEventListener("click", ()=>{
        roundInputHolder = item.id;
        roundOptions.forEach(item => {
            if(item.classList.contains("selected"))
                item.classList.remove("selected")
            });
        item.classList.add("selected");
    });

});




//FUNCTIONS
/****************************************************************************************/
function generateComputerChoice(userChoice){
    do{
         randomNum = Math.floor(Math.random() * 3);
    }while(selections[randomNum] === userChoice);
    
    return selections[randomNum];
}


function removeOptions(){
    let options = document.querySelector(".options");
    options.classList.add("fade-out");
    setTimeout(()=>{options.remove()}, 490);
}


function won(){
    if((userChoice == "rock" && computerChoice == "scissors") || 
    (userChoice == "paper" && computerChoice == "rock") || 
    (userChoice == "scissors" && computerChoice == "paper")){
        return true;
    }

    return false;
}


function createResultDisplay(){
    let userChoiceDisplay = createOption(userChoice);
    let computerChoiceDisplay = createOption(computerChoice);
    if(won()) points.innerText++;
    let nextRoundBtn;
    

    let resultsDisplay = document.createElement("div");
    resultsDisplay.classList.add("result-div");


    let userChoiceDiv = document.createElement("div");
    userChoiceDiv.classList.add("you");
    let pUser = document.createElement("p");
    pUser.innerText = "YOU PICKED";
    userChoiceDiv.appendChild(pUser);
    userChoiceDiv.appendChild(userChoiceDisplay);

    let result = document.createElement("div");
    result.classList.add("result");
    let resultP = document.createElement("p");
        if(playedRounds == roundInputHolder){
            if(points.innerText < wonRoundsLimit){
                resultP.innerText = "YOU LOST GAME";
            }else{
                resultP.innerText = "YOU WON GAME";
            }
            nextRoundBtn = document.createElement("button");
            nextRoundBtn.classList.add("nextRoundBtn");
            nextRoundBtn.type = "button";
            nextRoundBtn.innerText = "PLAY AGAIN";
            nextRoundBtn.onclick = () => location.reload();
        } else{
            if(won()){
                resultP.innerText = "YOU WON";
            }else{
                resultP.innerText = "YOU LOST";
            }
            nextRoundBtn = document.createElement("button");
            nextRoundBtn.classList.add("nextRoundBtn");
            nextRoundBtn.type = "button";
            nextRoundBtn.innerText = "NEXT ROUND";
            nextRoundBtn.addEventListener("click", ()=>{
                resultsDisplay.remove();
                displayOptions();
            });
        }

    result.appendChild(resultP);
    if(typeof nextRoundBtn != "undefined"){
        result.appendChild(nextRoundBtn);
    }


    let computerChoiceDiv = document.createElement("div");
    computerChoiceDiv.classList.add("house");
    let pComputer = document.createElement("p");
    pComputer.innerText = "HOUSE PICKED";
    computerChoiceDiv.appendChild(pComputer);
    computerChoiceDiv.appendChild(computerChoiceDisplay);

    resultsDisplay.appendChild(userChoiceDiv);
    resultsDisplay.appendChild(result);
    resultsDisplay.appendChild(computerChoiceDiv);

    document.body.appendChild(resultsDisplay);
}


function displayResult(){
    removeOptions();
    setTimeout(()=>{
        createResultDisplay(); 
    }, 490);
    playedRounds++;
}


function createOption(optionName){
    let option = document.createElement("div");
    option.classList.add("option");
    option.id = `${optionName}`;
    let optionCircle = document.createElement("div");
    optionCircle.classList.add("option-circle");
    let optionImg = document.createElement("img");
    optionImg.src = `images/icon-${optionName}.svg`;
    optionImg.alt = `${optionName}`;
    option.addEventListener("click", e => {
        userChoice = option.id;
        computerChoice = generateComputerChoice(userChoice);
        displayResult();
        e.stopPropagation();
    });
    optionCircle.appendChild(optionImg);
    option.appendChild(optionCircle);
    return option;
}


function displayOptions(){
    let options = document.createElement("div");
    options.classList.add("options");
    let optionNames = ['paper', 'scissors', 'rock'];

    optionNames.forEach(item => options.appendChild(createOption(item)));

    document.body.appendChild(options);
}

/*PLAY GAME*/
/****************************************************************************************/
playBtn.addEventListener("click", ()=>{
    if(roundInputHolder == 0){
        inputRounds.classList.add("shake");
        setTimeout(()=>{inputRounds.classList.remove("shake")}, 500);
    }else{
        rounds.innerText = roundInputHolder;
        switch(rounds.innerText){
            case '1': wonRoundsLimit += 1; break;
            case '3': wonRoundsLimit += 2; break;
            case '5': wonRoundsLimit += 3; break;
        }
        inputRounds.remove();
        playBtn.remove();
        displayOptions();
    }
});


// Open and close rules
/****************************************************************************************/
rulesBtn.addEventListener("click", () =>{
    let rulesDiv = document.createElement("div");
    rulesDiv.classList.add("rules-div");

    let rules = document.createElement("div");
    rules.classList.add("rules");

    let rulesHeader = document.createElement("div");
    rulesHeader.classList.add("rules-header");
    let span = document.createElement("span");
    span.innerText = "RULES";
    let closeRules = document.createElement("img");
    closeRules.src = "images/icon-close.svg";
    closeRules.alt = "close";
    closeRules.classList.add("close-rules");
    closeRules.onclick = () => document.body.removeChild(rulesDiv);
    rulesHeader.appendChild(span);
    rulesHeader.appendChild(closeRules);

    let rulesImg = document.createElement("img");
    rulesImg.src = "images/image-rules.svg";
    rulesImg.alt = "rock beats paper, paper beats scissors, scissors beat rock";
    
    rules.appendChild(rulesHeader);
    rules.appendChild(rulesImg);

    rulesDiv.appendChild(rules);
    document.body.appendChild(rulesDiv);

});