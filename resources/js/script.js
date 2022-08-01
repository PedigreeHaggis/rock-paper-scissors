const rules = {
    rock:'scissors',
    paper: 'rock',
    scissors: 'paper',
}

const playRound = (p1, p2) => p1.toLowerCase() === rules[p2] ? 'Winner' : p1.toLowerCase() === p2 ? 'Draw' : 'Loser'; 

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
        default:
            break;
    }
}

function game(){
    const winMessage = 'You Won';
    const loseMessage = 'You Lost';
    const drawMessage = 'Its a Draw';

    for(let i = 0; i < 5; i++){
        // let userChoice = prompt("enter your choice:\nRock|Paper|Scissors");
        switch(playRound(userChoice, getComputerChoice())){
            case 'Winner':
                alert(winMessage)
                console.log(winMessage);
                break;
            case 'Loser':
                alert(loseMessage)
                console.log(loseMessage)
                break;
            case 'Draw':
                alert(drawMessage);
                console.log(drawMessage);
                break;
            default:
                break;
        }
    }
}

game()