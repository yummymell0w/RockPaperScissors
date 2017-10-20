const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput = 'rock' || 'paper' || 'scissors') {
        return userInput;
    } else {
        console.log("Incorrect input");
    }
};
function getComputerChoice() {
    var a = Math.floor(Math.random() * 3);
    if (a === 0) {
        return 'rock';
    } else if (a === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "This is a tie. Replay please.";
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'User won!';
        } else {
            return 'Computer won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won!';
        } else {
            return 'User won!';
        }
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'User won!';
        } else {
            return 'Computer won!';
        }
    }
};
function playGame() {
    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();
