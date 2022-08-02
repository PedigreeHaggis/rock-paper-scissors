//////////////////////////////////
// Query Selectors & Variables //
////////////////////////////////

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorButton = document.querySelector('.scissor-button');
const winnerMessage = document.querySelector('.winner-message');
const userScoreNumber = document.querySelector('.user-score-number');
const computerScoreNumber = document.querySelector('.computer-score-number');

let userScore = 0;
let computerScore = 0;

const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
}

///////////////////////////////
// FUNCTIONS                //
/////////////////////////////

function playRound(userChoice, computerChoice){
    const winMessage = `You Chose ${userChoice.toUpperCase()} and the computer chose ${computerChoice.toUpperCase()}\n You Won this Round`;
    const loseMessage = `You Chose ${userChoice.toUpperCase()} and the computer chose ${computerChoice.toUpperCase()}\n You Lost this Round`;
    const drawMessage = `You Chose ${userChoice.toUpperCase()} and the computer chose ${computerChoice.toUpperCase()}\n It's a Draw`;

    if(userChoice.toLowerCase() === rules[computerChoice.toLowerCase()]){
        winnerMessage.textContent = loseMessage
        console.log(winMessage)
        computerScore++;
    } else if (userChoice.toLowerCase() === computerChoice.toLowerCase()){
        winnerMessage.textContent = drawMessage
        console.log(drawMessage);
    } else if(userChoice.toLowerCase() !== rules[computerChoice.toLowerCase()]){
        winnerMessage.textContent = winMessage
        console.log(loseMessage)
        userScore++
    }
}

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            break;
    }
}

function resetGame(){
    if(userScore === 5 ){
        userScore = 0;
        computerScore = 0;
        winnerMessage.textContent = "You won the Game";
    } else if(computerScore === 5){
        userScore = 0;
        computerScore = 0
        winnerMessage.textContent = "The computer won the game!";
    }
}

/////////////////////////////////
// Event Listeners & Main Code//
///////////////////////////////

winnerMessage.style.textAlign = 'center'
winnerMessage.textContent = 'Click any of the above buttons to start'
computerScoreNumber.textContent = userScore;
userScoreNumber.textContent = computerScore;


rockButton.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
    resetGame();
    userScoreNumber.textContent = userScore;
    computerScoreNumber.textContent = computerScore;
});
paperButton.addEventListener('click', function(){
    playRound('paper', getComputerChoice());
    resetGame();
    userScoreNumber.textContent = userScore;
    computerScoreNumber.textContent = computerScore;
})
scissorButton.addEventListener('click', function(){
    playRound('scissors', getComputerChoice());
    resetGame();
    userScoreNumber.textContent = userScore;
    computerScoreNumber.textContent = computerScore;
});
