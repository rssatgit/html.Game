'use strict';
/*
console.log(document.querySelector('.message').textContent); // Reading the content

document.querySelector('.message').textContent = 'Correct Number!'; // changing the content

console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
*/

//Handling clicks

let secret = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';

    // When player Wins
    } else if (guess === secret) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secret;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When player enters Too High Value
    } else if(guess > secret) {
        if(score > 1){
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost the game'; 
            document.querySelector('.score').textContent = 0; 
            
        }
    
    // When Player enters too low value

    }else if (guess < secret) {
       if (score > 1){
        document.querySelector('.message').textContent = 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
       } else {
            document.querySelector('.message').textContent = 'You Lost the game'; 
            document.querySelector('.score').textContent = 0; 
       }
    
    }
});

document.querySelector('.again').addEventListener('click', function () {
score = 20;
secret = Math.trunc(Math.random()*20) + 1;
document.querySelector('.message').textContent = 'Start guessing.....';
document.querySelector('.score').textContent = '20';
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
});
