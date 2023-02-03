/* index.js

ROCK PAPER SCISSORS EXCERCISE
https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

I designed a different version on my own after reading the first couple prompts. That file is MyWay.js.

I then went back and wrote it how they wanted me to with the specified variables and structure. 

That is this file.

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


