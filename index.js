/* for items on the score board*/
let scores = {
    wins: 0,
    losses: 0,
    ties: 0,
};
const scoreBoard = {
    wins: document.getElementById("wins"),
    losses: document.getElementById("losses"),
    ties: document.getElementById("ties"),
};

/* for the message shown when you win, lose, or tie*/
let message = "";
const heading = document.getElementById("message");
const plays = document.getElementById("plays");
 
/* get buttons for the moves from the html and give them onclick events corresponding to the moves*/
const rock = document.getElementById("rock").onclick = () => {
    makeMove("rock")
};
const paper = document.getElementById("paper").onclick = () => {
    makeMove("paper")
};
const scissors = document.getElementById("scissors").onclick = () => {
    makeMove("scissors")
};
const reset = document.getElementById("reset").onclick = () => {
    scores.wins = 0;
    scores.losses = 0;
    scores.ties = 0;
    heading.textContent = "Choose a move:";
    plays.textContent = "";
    updateScoreBoard();
}

/*a function to update the scores for the game*/
function updateScoreBoard() { 
    scoreBoard.wins.textContent = `Wins: ${scores.wins}`;
    scoreBoard.losses.textContent = `Losses: ${scores.losses}`;
    scoreBoard.ties.textContent = `Ties: ${scores.ties}`;
}

/* a function to pick our move and decide if we win, lose, or tie with the computer*/
function makeMove(playerMove) {
    /*run the pickComputerMove function*/
    const computerMove = pickComputerMove();
    /* if-statement to decide if we win lose or tie*/
    if (playerMove === computerMove) {
        message = "It's a tie";
        console.log(message);
        status = "ties";
        scores.ties++;
    } else if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "scissors" && computerMove === "paper") ||
        (playerMove === "paper" && computerMove === "rock")
    ) {
        message = "You Win!";
        console.log(message);
        status = "wins";
        scores.wins++;
    } else {
        message = "You Lose";
        console.log(message);
        status = "losses";
        scores.losses++;
    }
    plays.textContent = (`You played ${playerMove}, Computer played ${computerMove}`);
    heading.textContent = message;
    updateScoreBoard();
}

/* a function to pick the computer move*/
function pickComputerMove() {
    /* generate a random number between zero and one*/
    const random = Math.random();
    let computerMove; /* variable to store computer's move*/
    /* generate a move depending on where the number falls between zero and one*/
    if (random < (1/3)) {
        computerMove = "rock";
    } else if (random < (2/3)) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    } 
    /* return the value in computerMove*/
    return computerMove;
}