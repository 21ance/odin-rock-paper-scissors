const choices = ["rock", "paper", 'scissors']
let human = 0
let computer = 0
let draw = 0

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        draw++
        return "Draw"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        human++
        return `Player won, ${playerSelection} defeats ${computerSelection}`
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        human++
        return `Player won, ${playerSelection} defeats ${computerSelection}`
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        human++
        return `Player won, ${playerSelection} defeats ${computerSelection}`
    } else {
        computer++
        return `Computer won, ${computerSelection} defeats ${playerSelection}`
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay()
        let playerSelection = prompt(`Round ${i + 1}! Rock, Paper, Scissors?`).toLowerCase()

        if(choices.includes(playerSelection)){
            console.log(playRound(playerSelection, computerSelection));
        } else{
            alert("Please enter a valid input: 'Rock', 'Paper', or 'Scissors'")
            i-- //feels like cheesing it :< in my defense I will remove this anyway after giving this code a UI
        }

    }
    alert(`Player ${human}\nComputer ${computer}\nDraw ${draw}`)
}

game()