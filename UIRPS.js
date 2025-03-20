const resultsDiv = document.getElementById("results");
const scoreBoard = document.getElementById("score");

let humanScore = 0;
let computerScore = 0;
let gameOver = false; 

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() *3)];
}

function playRound(humanChoice) {
    if (gameOver) return; 

    const computerChoice = getComputerChoice();
    let resultMessage = `You chose: ${humanChoice} <br> Computer chose: ${computerChoice} <br>`;

    if (humanChoice === computerChoice) {
        resultMessage += "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage += `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultMessage += `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    updateScore(resultMessage);
}

// Function to update score and check winner
function updateScore(message) {
    resultsDiv.innerHTML = `<p>${message}</p>`;
    scoreBoard.textContent = `Score: You - ${humanScore} | Computer - ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        gameOver = true; 
        setTimeout(() => {
            resultsDiv.innerHTML = `<h2>${humanScore === 5 ? " You won!" : "You lost!"}</h2>`;
        }, 500);
    }
}

// Event Listeners for Buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
