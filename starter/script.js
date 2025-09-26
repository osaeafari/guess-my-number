'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct secretNumber!';

document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value;
document.querySelector('.guess').value = 26;
*/

// Generating a secret number
let secretNumber = Math.trunc(Math.random()* 20) + 1;

// Setting a score
let score = 20;

// Higher Score
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

// Checking if there is a number in the inout field
let play = document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if(!guess){
        displayMessage('⛔ No Number!');

    // When player wins
    } else if (guess === secretNumber){
        displayMessage('🎉 Correct Number!');

        // Changing the page color to green
        document.querySelector('body').style.backgroundColor = '#60b347'; 

        // Changing the number size (making it bigger)
        document.querySelector('.number').style.width = '30rem';

        // Setting the highscore
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // Displaying the secret number
        document.querySelector('.number').textContent = secretNumber;

    // When guess is wrong
    } else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '📉 Too High!' : '📈 Too low!');
            score--;
            document.querySelector('.score').textContent = score;

        //when score is zero and player looses
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.highscore').textContent = highscore;
});


    // else if (guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈 Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;

    //     //when score is zero and player looses
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // // When guess is too low
    // } else if (guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;

    //     //when score is zero and player looses
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } 


