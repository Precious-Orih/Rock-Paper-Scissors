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

/* a function to pick our move and decide if we win, lose, or tie with the computer*/
function makeMove(playerMove) {
    const computerMove = pickComputerMove();
    /* if-statement to decide if we win lose or tie*/
    if (playerMove === computerMove) {
        console.log('tie');
    } else if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "scissors" && computerMove === "paper") ||
        (playerMove === "paper" && computerMove === "rock")
    ) {
        console.log("You win");
    } else {
        console.log("You lose");
    }
    console.log(`You played ${playerMove}, Computer played ${computerMove}`);
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