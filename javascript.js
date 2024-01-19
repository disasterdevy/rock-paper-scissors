// random choice for computer
// 1-33 34-66 67-100
// var for random number
// match 1-33 to rock, 34-66 paper, 67-100 scissors
// var for computer choice
// 
// 
// 
// 

let randomNum = Math.floor(Math.random()*100);
let computerInput;
let userInput;

function getComputerChoice(){
    console.log(randomNum);
    if (randomNum < 34){
        computerInput = "rock";
    }
    else if (randomNum < 67){
        computerInput = "paper";
    }
    else{
        computerInput = "scissors";
    }
    console.log(computerInput);
}

function getUserChoice(){
    userInput = prompt("Enter your choice: ");
    userInput = userInput.toLowerCase();
    console.log(userInput);
}

function chooseWinner(){
    // computer chooses rock
    if (computerInput == "rock"){
        if(userInput == "paper"){
            console.log("You win! Paper beats rock");
        }
        else if(userInput == "scissors"){
            console.log("You lose! Rock beats scissors");
        }
        else{
            console.log("Nobody wins!");
        }
    }
    // computer chooses paper
    if (computerInput == "paper"){
        if(userInput == "scissors"){
            console.log("You win! Scissors beats paper");
        }
        else if(userInput == "rock"){
            console.log("You lose! Paper beats rock");
        }
        else{
            console.log("Nobody wins!");
        }
    }
    // computer chooses scissors
    if (computerInput == "scissors"){
        if(userInput == "rock"){
            console.log("You win! Rock beats scissors");
        }
        else if(userInput == "paper"){
            console.log("You lose! Scissors beats paper");
        }
        else{
            console.log("Nobody wins!");
        }
    }
}

getComputerChoice();
getUserChoice();
chooseWinner();