//alternate version of MyWay.js using 3 buttons for each input instead of text

//GET COMPUTERS CHOICE
function getComputerChoice() {

    randomSelection = Math.floor((Math.random() * 3) +1);
    
    if (randomSelection === 1){
        return 'ROCK';
    }

    else if (randomSelection === 2){
        return 'PAPER';
    }

    else {
        return 'SCISSORS'
    }
}
    
    
//DECLARATIONS
let button = document.querySelector("button")
let result = document.getElementById('result')
let playerText = document.getElementById('player-select')
let compText = document.getElementById('comp-select')
let score = document.getElementById('score')
let finalResult = document.getElementById('final-result')
let playerSelection = " "
let computerSelection = " "
let wins = 0
let losses = 0
    

//GET PLAYER'S CHOICE AND OUTPUT RESULT WHEN A BUTTON CORRESPONDING TO THE SELECTION IS CLICKED

const buttons = document.querySelectorAll('.btn'); //and the key variable is wrapped in "array.from()
buttons.forEach(id => id.addEventListener("click",  function(e){

    console.log(e.target.id)

    playerSelection = e.target.id
    playerText.innerHTML = "You've selected: " + playerSelection + "</br>";

    computerSelection = getComputerChoice()
    compText.innerHTML = 'The computer selected: ' + computerSelection + "</br>";

        if(playerSelection === computerSelection){
            console.log('TIE')
            result.innerHTML = `TIE! You both chose <strong>${computerSelection}</strong>.`
            updateScore('tie')
            return
        }

        else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
                (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
                (playerSelection === 'PAPER' && computerSelection === 'ROCK') ) {
                    console.log('YOU WIN')
                    result.innerHTML = `You WIN! <strong>${playerSelection}</strong> beats <strong>${computerSelection}</strong>`
                    updateScore('win')
                    return
        }

        else {
            console.log('YOU LOSE')

            //IF ANYTHING OTHER THAN ROCK, PAPER, OR SCISSORS IS ENTERED, THIS ALSO RESULTS IN A LOSS
            result.innerHTML = `Sorry, you lose. <strong>${computerSelection}</strong> beats <strong>${playerSelection}</strong>`;
            updateScore('loss')
            return
        }

    }))

function updateScore(roundResult){

    if(wins>2 || losses>2){
        wins=0;
        losses=0;
        finalResult.innerHTML = '';
    }

    if (roundResult === 'win'){
        wins += 1
    }

    else if (roundResult === 'loss'){
        losses += 1
    }

console.log(roundResult)
score.innerHTML = 'The current score is </br></br> <strong>You: ' + wins + ' </br> Computer: ' + losses + '</strong>'


if (wins > 2) {
finalResult.innerHTML = 'You WON the best of 5!'
finalResult.setAttribute('style', 'color: darkgreen; font: bolder 22px sans-serif; text-shadow: 0 0 8px lime;');  
}

else if(losses > 2) {
finalResult.innerHTML = 'Sorry, you lost the best of 5.'
finalResult.setAttribute('style', 'color: darkred; font: bolder 22px sans-serif; text-shadow: 0 0 8px red;');  
}

}

