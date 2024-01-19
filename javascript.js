// random choice for computer
// 1-33 34-66 67-100
// var for random number
// match 1-33 to rock, 34-66 paper, 67-100 scissors
// var for computer choice
// 
// 
// 
// 

function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*100);
    console.log(randomNum);
    let computerInput;
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

getComputerChoice();