function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
        if (["rock", "paper", "scissors"].includes(choice)) {
            return choice;
        }
        console.log("Invalid input. Please enter rock, paper, or scissors.");
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "computer";
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let roundWinner = playRound(humanChoice, computerChoice);

        if (roundWinner === "human") {
            humanScore++;
        } else if (roundWinner === "computer") {
            computerScore++;
        }

        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Final Winner Announcement
    if (humanScore > computerScore) {
        console.log(" Congratulations! You won the game! ");
    } else if (humanScore < computerScore) {
        console.log(" Sorry, you lost the game. Better luck next time!");
    } else {
        console.log(" It's a tie game!");
    }
}

game();

