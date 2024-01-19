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
    console.log(userInput);
}