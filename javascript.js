// random choice for computer
// 1-33 34-66 67-100
// var for random number
// match 1-33 to rock, 34-66 paper, 67-100 scissors
// var for computer choice

let randomNum;
let computerInput;
let userInput;
let computerWins = 0;
let userWins = 0;
let stopItCounter = 0;

function getComputerChoice(){
    randomNum = Math.floor(Math.random()*100);
    if (randomNum < 34){
        computerInput = "rock";
    }
    else if (randomNum < 67){
        computerInput = "paper";
    }
    else{
        computerInput = "scissors";
    }
}

/* function getUserChoice(){
    userInput = prompt("Enter your choice: ");
    userInput = userInput.toLowerCase();
} */

function displayChoice(){
    console.log("Computer choice: ", computerInput,);
    console.log("Your choice: ", userInput);
}

function chooseWinner(){
    displayChoice();
    // computer chooses rock
    if (computerInput == "rock"){
        if(userInput == "paper"){
            console.log("You win! Paper beats rock");
            userWins = ++userWins;
        }
        else if(userInput == "scissors"){
            console.log("You lose! Rock beats scissors");
            computerWins = ++computerWins;
        }
        else{
            console.log("It's a tie! play again");
        }
    }
    // computer chooses paper
    if (computerInput == "paper"){
        if(userInput == "scissors"){
            console.log("You win! Scissors beats paper");
            userWins = ++userWins;
        }
        else if(userInput == "rock"){
            console.log("You lose! Paper beats rock");
            computerWins = ++computerWins;
        }
        else{
            console.log("It's a tie! play again");
        }
    }
    // computer chooses scissors
    if (computerInput == "scissors"){
        if(userInput == "rock"){
            console.log("You win! Rock beats scissors");
            userWins = ++userWins;
        }
        else if(userInput == "paper"){
            console.log("You lose! Scissors beats paper");
            computerWins = ++computerWins;
        }
        else{
            console.log("It's a tie! play again");
        }
    }
}

function game(){
    // while(computerWins < 3 && userWins < 3){
        getComputerChoice();
        // getUserChoice();
        chooseWinner();
        resultDiv.textContent = "Computer wins: " + computerWins + " Your wins: " + userWins;
        // }
    if (computerWins == 3){
        console.log("The machine has bested you!");
        winnerDiv.textContent = "The machine has bested you!";
    }
    else if(userWins == 3){
        console.log("You bested the machine! Congratulations.");
        winnerDiv.textContent = "You bested the machine! Congratulations.";

    }
}

const userButtons = document.querySelectorAll('button');
console.log(userButtons);


userButtons.forEach((button) =>{
    button.addEventListener("click", function storeInput(){
        userInput = button.value;
        userInput = userInput.toLowerCase();
        console.log(userInput);
        if(userWins < 3 && computerWins < 3){
            game();
        }
        else{
            stopDiv.textContent = "Stop it. It's over.", stopItCounter;
            stopItCounter = ++stopItCounter;
        }
    })
 })

 const resultDiv = document.querySelector('.result');
 let resultString = "Computer wins: " + computerWins + " Your wins: " + userWins;
 resultDiv.textContent = "Computer wins: " + computerWins + " Your wins: " + userWins;
 const winnerDiv = document.querySelector('.winner');
 const stopDiv = document.querySelector('.stop');

