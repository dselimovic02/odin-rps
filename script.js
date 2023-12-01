//Enter no. of rounds
/****************************************************************************************/
let rounds = document.querySelector(".score .rounds");
let inputRounds = document.querySelector(".input-rounds");
let roundInputHolder = 0;
rounds.innerText = 0;

let roundOptions = document.querySelectorAll(".round-options span");
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



//Start a game
/****************************************************************************************/
let playBtn = document.querySelector(".playBtn");
let userChoice = '';


function generateComputerChoice(){
    let selections = ["rock", "paper", "scissors"];
    let no = Math.floor(Math.random() * 3);
    return selections[no];
}
function removeOptions(){
    let options = document.querySelector(".options");
    options.classList.add("fade-out");
    setTimeout(()=>{options.remove()}, 490);
}

function displayResult(){
    removeOptions();
    console.log(userChoice);
    console.log(generateComputerChoice());
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
playBtn.addEventListener("click", ()=>{
    if(roundInputHolder == 0){
        inputRounds.classList.add("shake");
        setTimeout(()=>{inputRounds.classList.remove("shake")}, 500);
    }else{
        rounds.innerText = roundInputHolder;
        inputRounds.remove();
        playBtn.remove();
        displayOptions();
    }
});


// Open and close rules
/****************************************************************************************/
let rulesBtn = document.querySelector(".rulesBtn");

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