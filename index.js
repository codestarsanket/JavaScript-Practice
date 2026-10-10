let random = parseInt(Math.random() * 100);
//let value = document.querySelector('.lowersuggestvalue')
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#userInput')
const guessSlot = document.querySelector('.guessSlot')
const remaining = document.querySelector('.lastResult')
const lowerOrHeigh = document.querySelector('.lowerOrHeigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //validat guess
    if (guess === '') {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a valid number')
    } else if (guess > 100) {
        alert('plese enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // check the value are bigger or longer
    if(guess === random){
        displayMessage(' Congratulation Your guessed it Right');
         lowerOrHeigh.style.color = 'green'
        endGame()
    }else if(guess < random){
        displayMessage('Your number is low')
         lowerOrHeigh.style.color = 'red'
    }else if(guess > random){
        displayMessage('Your number is High')
         lowerOrHeigh.style.color = 'yellow'
    }

}

function displayGuess(guess) {
    // clean the box guess the array  update and or
    userInput.value = ' ';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    // message are display 
    lowerOrHeigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    // Your game 
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h1 id="newGame">Start New game</h1>`;
    startOver.appendChild(p); 
    playGame = false;
    newGame()
}

function newGame() {
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click', (e)=>{
    random = random = parseInt(Math.random() * 100);
    prevGuess = []
    numGuess = 1;
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
   })
}



