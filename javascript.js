console.log("haha");

function computerPlay() {
    // get a random integer among 0, 1 and 2
    let number = Math.floor(Math.random() * 3);
    // console.log(number);
    // 1->rock
    // 2->paper
    // 3->scissors
    return number === 0 ? "rock" : number === 1 ? "paper" : "scissors";
}

// console.log(computerPlay());

// let computerSelection = computerPlay();
// let playerSelection = 'Rock';
// let result = playRound(playerSelection, computerSelection);

// console.log('playerSelection: ' + playerSelection);
// console.log('computerSelection: ' + computerSelection);
// console.log(result);

game();

function playRound(playerSelection, computerSelection) {
    // transform to lower case
    playerSelection = playerSelection.toLowerCase();

    // illegal input
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        return 'Illegal player selection';
    }

    // tie
    if (playerSelection == computerSelection) {
        return "That's a tie!";
    }

   
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'You lose! Paper beats Rock';
        } else {
            return 'You win! Rock beats Scissors';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You win! Paper beats Rock';
        } else {
            return 'You lose! Scissors beats Paper';
        }
    } else {
        if (computerSelection == 'rock') {
            return 'You lose! Rock beats Scissors';
        } else {
            return 'You win! Scissors beats Paper';
        }
    }
}

function game() {
    // play 5 times
    for (let i = 0; i < 5; i++) {
        // use prompt to get user input
        let playerSelection = prompt("What's your choice?");
        // play
        let result = playRound(playerSelection, computerPlay());
        // output the result
        console.log("Round: " + i);
        console.log(result);
    }
}

