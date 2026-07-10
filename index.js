let score = {
    wins: 0,
    losses: 0,
    ties: 0,
};



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
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    console.log(score);
}

/* a function to pick our move and decide if we win, lose, or tie with the computer*/
function makeMove(playerMove) {
    const computerMove = pickComputerMove();
    /* if-statement to decide if we win lose or tie*/
    if (playerMove === computerMove) {
        console.log('tie');
        score.ties++;
    } else if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "scissors" && computerMove === "paper") ||
        (playerMove === "paper" && computerMove === "rock")
    ) {
        console.log("You win");
        score.wins++;
    } else {
        console.log("You lose");
        score.losses++;
    }
    console.log(`You played ${playerMove}, Computer played ${computerMove}`);
    console.log(score);
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