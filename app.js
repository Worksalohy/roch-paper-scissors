function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];

    return choice[Math.floor(choice.length*Math.random())];
}

console.log(getComputerChoice());