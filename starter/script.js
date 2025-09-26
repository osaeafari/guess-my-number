'use strict'
// # for ID
// . for class
/*
console.log(displayMessage.textContent);
displayMessage.textContent = `🎉 Correct Number!`;

displayNumber.textContent = 18;
document.querySelector('.score').textContent = 40;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// createing a random number between 0 - 20.
// math.tunc is used to concart the decimals 
// and the + 1, takes it from 19 to 20 (because the numbers starts from 0-19 making it 20 numbers and so the +1 adds up to make it 20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// the score of the player which owuld be decressed as the player guesses.
let score = 20;

// highscore of the player
let highscore = 0;

const displayMessage = function(message){
   document.querySelector('.message').textContent = message;
}
const displayNumber = function(number){
   document.querySelector('.number').textContent = number;
}


// by clicking on the check button to check the correct o wrong number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // when there is not input
  if(!guess) {
    displayMessage(`⛔️ No Number!`);
  // when player wins

  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    // changing the body background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    // displaying the secret number in the ? box
    displayNumber(secretNumber);
    // changing the size of the box
    document.querySelector('.number').style.width = '30rem';

    // highscore
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if(guess !== secretNumber) {
    if (score > 1 ){
      displayMessage(guess > secretNumber ? `📈 Too High!` : `📉 Too Low!`);
      score--;
      document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game');
        document.querySelector('body').style.backgroundColor = '#ca0505ff';
        // displaying the secret number in the ? box
        displayNumber(secretNumber);
      }
  }
});

// Reset the game when the again button is clicked
document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // reset the message
  displayMessage(`Start guessing...`);
  // reset the score
  document.querySelector('.score').textContent = score;
  // reset the background color
  document.querySelector('body').style.backgroundColor = '#222';
  // reset the size of the guess box
  document.querySelector('.number').style.width = '15rem';
  // reset the input box
  document.querySelector('.guess').value = '';
  // reset the guess box
  displayNumber('?');
});