//Start a game
/****************************************************************************************/
let playBtn = document.querySelector(".playBtn");

function createOption(optionName){
    option = document.createElement("div");
    option.classList.add("option");
    option.id = `${optionName}`;
    let optionCircle = document.createElement("div");
    optionCircle.classList.add("option-circle");
    let optionImg = document.createElement("img");
    optionImg.src = `images/icon-${optionName}.svg`;
    optionImg.alt = `${optionName}`;
    optionCircle.appendChild(optionImg);
    option.appendChild(optionCircle);

    return option;
}

playBtn.addEventListener("click", ()=>{
    playBtn.remove();
    
    let options = document.createElement("div");
    options.classList.add("options");
    let optionNames = ['paper', 'scissors', 'rock'];

    optionNames.forEach(item => options.appendChild(createOption(item)));

    document.body.appendChild(options);
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