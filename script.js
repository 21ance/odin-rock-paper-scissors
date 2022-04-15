const choices = ["rock", "paper", 'scissors']
const buttons = document.querySelectorAll('button');
const gameScore = document.querySelector('#gameScore')
const reset = document.querySelector('#reset')
const computerHand = document.querySelector('#computerHand')
const computerIcon = document.querySelector('#computerIcon')
const toggle = document.querySelector('#toggle')
let computer
let counterPlayer = 0
let counterComputer = 0
let counterDraw = 0
let computerChoice

//accepts player and computer choices
function playRound(player, computer) {
    computer = computerPlay()
    if (player == computer) {
        counterDraw++
    } else if (player == 'rock' && computer == 'scissors') {
        counterPlayer++
    } else if (player == 'paper' && computer == 'rock') {
        counterPlayer++
    } else if (player == 'scissors' && computer == 'paper') {
        counterPlayer++
    } else {
        counterComputer++
    }
    gameScore.textContent = `Player: ${counterPlayer} Computer: ${counterComputer} Draw: ${counterDraw}`
    endGame(counterPlayer, counterComputer)
}

//computer choice randomizer
function computerPlay() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
    computerSelect(computerChoice)
    return computerChoice
}

//shows computer choice on a div,, useful for UI later
function computerSelect(select) {
    switch (select) {
        case 'rock':
            computerHand.textContent = 'Rock'
            computerIcon.textContent = '✊'
            break;
        case 'paper':
            computerHand.textContent = 'Paper'
            computerIcon.textContent = '✋'
            break;
        case 'scissors':
            computerHand.textContent = 'Scissors'
            computerIcon.textContent = '✌️'
    }
    toggle.classList.add('computerToggle')
}

//reset values to default / restart game
function resetGame() {
    reset.addEventListener('click', () => {
        counterPlayer = 0
        counterComputer = 0
        counterDraw = 0
        gameScore.textContent = `Game Start!`
        computerIcon.textContent = "?"
        computerHand.textContent = "?"
        toggle.classList.remove('computerToggle')
        reset.textContent = "Reset"
        buttons.forEach((button) => {
            button.disabled = false
        })
    })
}

//
function startGame() {
    //access buttons with id rps only
    buttons.forEach((button) => {
        if (button.id == 'rock' || button.id == 'paper' || button.id == 'scissors') {
            button.addEventListener('click', () => playRound(button.id, computerPlay));
        }
    });
}

//
function endGame() {
    if (counterPlayer == 5 || counterComputer == 5) {
        buttons.forEach((button) => {
            if (button.id == 'rock' || button.id == 'paper' || button.id == 'scissors') {
                button.disabled = true
                reset.textContent = 'Play Again?'
                if(counterPlayer == 5){
                    gameScore.textContent = `You Won! ${counterPlayer} : ${counterComputer}`
                } else{
                    gameScore.textContent = `You Lost... ${counterPlayer} : ${counterComputer}`
                }
            }
        });
    }
}

//game...
function game() {
    startGame()
    resetGame()
}

game()