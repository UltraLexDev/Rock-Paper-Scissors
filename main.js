const getUserChoice = userInput => {userInput = userInput.toLowerCase();
    if (userInput ==='rock' || userInput === 'scissors' || userInput === 'paper' || userInput ==='bomb')
    {return userInput;}
    else {console.log('Error')}}
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    
    if (userChoice === computerChoice) {
        return 'Tie';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'scissors'){
            return 'User won';
        }
            else {
                return 'Computer won';
            }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'paper'){
            return 'User won';
        }
        else {
            return 'Computer won';
        }
    }
    
    if (userChoice === 'paper'){
        if (computerChoice === 'rock'){
            return 'User won';
        }
        else {
            return 'Computer won';
        }
    }
    if (userChoice === 'bomb'){
        return 'ez win';
};
}
const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}`)
    console.log(`Computer chose: ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
};

playGame()
