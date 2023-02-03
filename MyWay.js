/* index.js

ROCK PAPER SCISSORS EXCERCISE
https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

I designed this version on my own after reading the first couple prompts. 

I then went back and wrote it how they wanted me to with the specified variables and structure. 

That file is TheirWay.js

*/



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
let input = document.querySelector("input")
let result = document.getElementById('result')
let playerSelection = " "
let computerSelection = " "


//GET PLAYER'S CHOICE AND OUTPUT RESULT WHEN PLAY BUTTON IS CLICKED
button.addEventListener("click", function(){

    playerSelection = (input.value).toUpperCase();
    console.log('The user selected: ' + playerSelection);

    computerSelection = getComputerChoice()
    console.log('The computer selected: ' + computerSelection)

        if(playerSelection === computerSelection){
            console.log('TIE')
            result.innerHTML = `TIE! You and the computer both chose <strong>${computerSelection}</strong>. Please try again.`
            return
        }

        else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
                (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
                (playerSelection === 'PAPER' && computerSelection === 'ROCK') ) {
                    console.log('YOU WIN')
                    result.innerHTML = `You WIN! The computer chose <strong>${computerSelection}</strong>`
                    return
        }

        else {
            console.log('YOU LOSE')

            //IF ANYTHING OTHER THAN ROCK, PAPER, OR SCISSORS IS ENTERED, THIS ALSO RESULTS IN A LOSS
            result.innerHTML = `Sorry, you lose. The computer chose <strong>${computerSelection}</strong>`;
            return
        }

  })
