
function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice < .33) {
        return "rock"
    } else if (computerChoice < .66) {
        return "paper"
    } else if (computerChoice < 1) {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = window.prompt("What is your choice?")
    return humanChoice;
}

console.log("Computer Choice: " + getComputerChoice());
console.log("Human Choice: " + getHumanChoice());