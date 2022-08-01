const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorButton = document.querySelector('.scissor-button');
const winnerMessage = document.querySelector('.winner-message');
const userScoreNumber = document.querySelector('.user-score-number');
const computerScoreNumber = document.querySelector('.computer-score-number');

let userScore = 0;
let computerScore = 0;

userScoreNumber.textContent = userScore;
computerScoreNumber.textContent = computerScore;

const rules = {
    rock:'scissors',
    paper: 'rock',
    scissors: 'paper',
}



function playRound(userChoice, computerChoice){
    const winMessage = 'You Won';
    const loseMessage = 'You Lost';
    const drawMessage = 'Its a Draw';



    if(userChoice.toLowerCase() === rules[computerChoice]){
        winnerMessage.textContent = winMessage
        console.log(winMessage)
        userScore++;
        userScoreNumber.textContent = userScore
    } else if (userChoice.toLowerCase() === computerChoice){
        winnerMessage.textContent = drawMessage
        console.log(drawMessage);
    } else{
        winnerMessage.textContent = loseMessage
        console.log(loseMessage)
        computerScore++
        computerScoreNumber.textContent = computerScore
    }

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

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'scissors';
        case 2:
            return 'paper';
        default:
            break;
    }
}

winnerMessage.textContent = ''

rockButton.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});
paperButton.addEventListener('click', function(){
    playRound('paper', getComputerChoice())
})
scissorButton.addEventListener('click', function(){
    playRound('scissors', getComputerChoice())
});

