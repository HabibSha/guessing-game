// initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWon = 0;
let totalLost = 0;

// finding elements
const cardArea = document.querySelector('.stuff-area');
const form = cardArea.querySelector('form');
const guessingNumber = form.querySelector('#displayNumber');
const generateButton = form.querySelector('#result');
const resultText = cardArea.querySelector('.resultText');
const lostWonMessage = document.createElement('p');
const remainingAttempts =cardArea.querySelector('.remainingAttempts');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    attempts++;
    if(attempts === 5){
        guessingNumber.disabled = true;
        generateButton.disabled = true;
    }
    if(attempts < 6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts}`;
    }
    guessingNumber.value = "";
})

const checkResult = (guessingNumber) => {
    const randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber){
        resultText.innerHTML = `You have won`;
        totalWon++;
    }else {
        resultText.innerHTML = `You have lost; random number was: ${randomNumber}`;
        totalLost++;
    }
    lostWonMessage.innerHTML = `Won: ${totalWon}.  Lost: ${totalLost}`;
    lostWonMessage.classList.add('large-text');
    cardArea.appendChild(lostWonMessage);
}

const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit) + 1;
}
