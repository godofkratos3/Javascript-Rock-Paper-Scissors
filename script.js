
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
    let input = window.prompt("What is your choice?")
    let humanChoice = input.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++;
            return "Computer wins!"
        } else if (computerChoice == "scissors") {
            humanScore++;
            return "Human wins!"
        } else if (computerChoice == "rock") {
            return "Tie!"
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            return "Tie!"
        } else if (computerChoice == "rock") {
            humanScore++;
            return "Human wins!"
        } else if (computerChoice == "scissors") {
            computerScore++;
            return "Computer wins!"
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "scissors"){
            return "Tie!"
        } else if (computerChoice == "paper") {
            humanScore++;
            return "Human wins!"
        } else if (computerChoice == "rock") {
            computerScore++;
            return "Computer Wins!"
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let ComputerSelection = getComputerChoice();
        let HumanSelection = getHumanChoice();
        console.log("Computer Chose: " + ComputerSelection);
        console.log("Human Chose: " + HumanSelection);
        console.log(playRound(HumanSelection, ComputerSelection));
        console.log("Computer Score: " + computerScore + " | " + "Human Score: " + humanScore);
    }
}

let computerScore = 0;
let humanScore = 0;



playGame();





