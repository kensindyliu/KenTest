'use stricted';

const guessInput = document.querySelector('.guessNumber');
let ramdomNumber = 0;
getNumber();

guessInput.addEventListener('input', () => {
    const topP = document.querySelector('.tipP');
    if(!isNaN(guessInput.value)){
        let inputNumber = parseInt(guessInput.value);
        if(inputNumber === ramdomNumber){
            topP.innerHTML = 'you got it!';
        } else if (inputNumber > ramdomNumber) {
            topP.innerHTML = 'My number is smaller.';
        } else if (inputNumber < ramdomNumber) {
            topP.innerHTML = 'My number is bigger.';
        }
    } else {
        topP.innerHTML = 'Please enter a number.';
    }
})

const playButton = document.querySelector('.playButton');

playButton.addEventListener('click', () => {
    getNumber();
    guessInput.value = "";
    const topP = document.querySelector('.tipP');
    topP.innerHTML = "Type a number[1-10] in the circle to guess.";
})

function getNumber(){
    ramdomNumber = Math.floor(Math.random() * 10) + 1;
    const guessesP = document.querySelector('.guessesP');
    guessesP.innerHTML = `Guesses: ${ramdomNumber}`;
}