function getHumanChoice(){
    let humChoice = prompt("Enter Rock or Paper or Scissors please: ").toLowerCase();

    return humChoice;
}

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];

    return choice[Math.floor(choice.length*Math.random())];
}

function playRound(humanChoise, computerChoise){ 
    if(humanChoise != 'paper' && humanChoise != "rock" && humanChoise != 'scissors'){
        console.log("Please enter: paper or rock or scissors");
    }else if(humanChoise == "paper" && computerChoise == "rock"){
        return "human";
    }else if(humanChoise == "paper" && computerChoise == "scissors"){
        return "computer";
    }else if(humanChoise == "rock" && computerChoise == "paper"){
        return "computer";
    }else if(humanChoise == "rock" && computerChoise == "scissors"){
        return "human";
    }else if(humanChoise == "scissors" && computerChoise == "paper"){
        return "human";
    }else if(humanChoise == "scissors" && computerChoise == "rock"){
        return "computer";
    }else if(humanChoise == computerChoise){
        return "Equality";
    }  
}

function playGame(){
    let toReturn = "";
    let round = 1;
    let humanScore = 0;
    let computerScore = 0;

    while(round < 6){
        let human = getHumanChoice();
        let computer = getComputerChoice();

        if(playRound(human, computer) == "human"){
            humanScore++;
            console.log("You winne in round " + round);
        }else if(playRound(human, computer) == "computer"){
            computerScore++;
            console.log("You lose in round " + round);
        }else if(playRound(human, computer) == "Equality"){
            console.log("Equality");
        }
        round++;
    }

    if(humanScore > computerScore){
        toReturn = `Congratulation, you winne it. Your score is: ${humanScore}`;
    }else if(humanScore < computerScore){
        toReturn = `Sorry, you lose it. You score is: ${humanScore}`;
    }else if(humanScore == computerScore){
        toReturn = "Final score: Equality";
    }

    return toReturn;
}

console.log(playGame());

