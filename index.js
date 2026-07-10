const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.onclick = function rockMove() {
    console.log('rock')
    console.log(computerMove);
}
paper.onclick = function rockMove() {
    console.log('paper')
    console.log(computerMove);
}
scissors.onclick = function rockMove() {
    console.log('scissors')
    console.log(computerMove);
}

const random = Math.random()
let computerMove = '';
if (random < 1/3) {
    computerMove = "rock";
} else if (random < 2/3) {
    computerMove = "paper";
} else {
    computerMove = "scissors";
}

 