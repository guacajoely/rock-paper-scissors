/* index.js

ROCK PAPER SCISSORS EXCERCISE
https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

I designed a different version on my own after reading the first couple prompts. That file is MyWay.js

I then went back and wrote it how they wanted me to with the specified variables and structure. 

This is that file.

*/


// 3. GET COMPUTERS CHOICE
function getComputerChoice() {

    randomSelection = Math.floor((Math.random() * 3) +1);
    
        if (randomSelection === 1){
            return 'rock';
        }
    
        else if (randomSelection === 2){
            return 'paper';
        }
    
        else {
            return 'scissors'
        }
    
     }

     let playerSelection 
     let computerSelection 
     let wins = 0
     let losses = 0
     let winOrLoss

     // 4. Write a function that plays a single round of Rock Paper Scissors

     function playRound(playerSelection, computerSelection) {

        // your code here!

        playerSelection = prompt("Let's play rock, paper, or scissors! (best of 5 wins)");
        computerSelection = getComputerChoice();

        if(playerSelection === computerSelection){
            winOrLoss = 'tie' 
            return 'TIE! You and the computer both chose ' + computerSelection 
            
        }

        else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
                (playerSelection === 'scissors' && computerSelection === 'paper') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ) {

            winOrLoss = 'win'        
            return 'You WIN! The computer chose ' + computerSelection
                    
        }

        else {
            winOrLoss = 'loss'   
            return 'Sorry, you lose. The computer chose ' + computerSelection;
           
        }


      }
       

      
// 6. Write a NEW function called game that plays a 5 round game, keeps score, and reports a winner or loser at the end.

function game() {

    for (let i = 0; i < 5; i++) {
        
        result = playRound(playerSelection, computerSelection)

            if (winOrLoss === 'win') {
                wins += 1
            }

            else if (winOrLoss === 'loss') {
                losses += 1
            }
        
        console.log(result)
        console.log('The current score is  you:' + wins + '  computer:' + losses)

     }

     if (wins > losses) {
        console.log('You WON the best of 5!')
     }

     else if(losses > wins) {
        console.log('Sorry, you lost the best of 5.')
     }

     else {
        console.log('You and the computer TIED in the best of 5.')
     }
    
}

game()
