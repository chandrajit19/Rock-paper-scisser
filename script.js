// converting back to an object using JSON.parse
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    console.log(computerMove);
    let result = '';
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.'
        }
        else if (computerMove === 'paper') {
            result = 'You lose.';
        }
        else if (computerMove === 'scissers') {
            result = 'You win.';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.'
        }
        else if (computerMove === 'paper') {
            result = 'Tie.';
        }
        else if (computerMove === 'scissers') {
            result = 'You lose.';
        }
    }
    else if (playerMove === 'scissers') {
        if (computerMove === 'rock') {
            result = 'You lose.'
        }
        else if (computerMove === 'paper') {
            result = 'You win.';
        }
        else if (computerMove === 'scissers') {
            result = 'Tie.';
        }
    }
    if (result === 'You win.') {
        score.wins += 1;
    }
    else if (result === 'You lose.') {
        score.losses += 1;
    }
    else if (result === 'Tie.') {
        score.ties += 1;
    }
    // Here storing the data  into localStorage
    //  localStorage always support string so we converted using JSON.stringify
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js_result').innerHTML = result;
    document.querySelector('.js_move1').innerHTML = `You picked ${playerMove}  And Computer picked ${computerMove}`;
    
}

function updateScoreElement() {
    document.querySelector('.js_score')
        .innerHTML = `Wins: ${score.wins},  Losses: ${score.losses},  Ties: ${score.ties}`;
}
function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else {
        computerMove = 'scissers';
    }
    return computerMove;
}