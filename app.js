function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 5 + 1);
  switch (computerChoice) {
    case 1:
      return 'Rock'
      break;
    case 2:
      return 'Paper'
      break;
    case 3: 
    return 'Scissors'
    break;
    case 4:
    return 'Lizard'
    break;
    case 5:
    return 'Spock'
    break;
    default:
      break;
  }
}

function playerSelection(){
  const playerChoice = prompt('Rock, Paper, Scissors, Lizard or Spock?').toUpperCase();
    switch (playerChoice) {
    case 'ROCK':
      return 'Rock'
      break;
    case 'PAPER':
      return 'Paper'
      break;
    case 'SCISSORS': 
    return 'Scissors'
    break;
    case 'LIZARD':
    return 'Lizard'
    break;
    case 'SPOCK':
    return 'Spock'
    break;
    default:
      prompt('Please enter either rock, paper, scissors, lizard or spock.')
      break;
  }
}

function playGame(userPick, aiPick) {
  console.log(userPick,aiPick);
  switch (userPick, aiPick) {
    case 'Rock' && 'Lizard':
    return 'You Win! Rock crushes lizard'
      break;
    case 'Paper' && 'Rock':
    return 'You Win! Paper covers rock!'
      break;
    case 'Scissors' && 'Paper':
    return 'You Win! Scissors cuts paper'
      break; 
    case 'Lizard' && 'Spock':
      return 'You Win! Lizard poisons Spock'
        break;
    case 'Spock' && 'Scissors':
      return 'You Win! Spock smashes scissors'
        break;
    case 'Scissors' && 'Lizard':
      return 'You Win! Scissors decapitates lizard'
    case 'Lizard' && 'Paper':
      return 'You Win! Lizard eats paper'
    case 'Paper' && 'Spock':
      return 'You Win! Paper disproves spock'
    case 'Spock' && 'Rock':
      return 'You Win! Spock vaporizes rock'
    case 'Rock' && 'Scissors':
      return 'You Win! Rock crushes scissors'
    default:
      break;
  }
  
}