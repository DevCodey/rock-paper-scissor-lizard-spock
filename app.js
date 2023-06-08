const selection = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 5);
  computerChoice = selection[computerChoice];
  console.log(`AI: ${computerChoice}`);
  return computerChoice;
};

function getPlayerSelection(){
  let playerChoice = prompt('Rock, Paper, Scissors, Lizard or Spock?').toLowerCase();
  let char = playerChoice.charAt(0).toUpperCase();
  playerChoice = char + playerChoice.slice(1);
  console.log(`User: ${playerChoice}`);
  return playerChoice;
}

function playGame(userPick, aiPick) {

    if(userPick === 'Rock' && aiPick === 'Rock'){
      return 'Tie!'
    }else if(userPick ==='Rock' && aiPick === 'Paper'){
      return 'You Lose! Paper covers rock!'
    }else if(userPick ==='Rock' && aiPick === 'Scissors'){
      return 'You Win! Rock crushes scissors!'
    }else if(userPick ==='Rock' && aiPick === 'Spock'){
      return 'You Lose! Spock vaporizes rock!'
    }else if(userPick ==='Rock' && aiPick === 'Lizard'){
      'You Win! Rock crushes lizard!'
    }else if(userPick ==='Paper' && aiPick === 'Paper'){
      return 'Tie!'
    }else if(userPick ==='Paper' && aiPick === 'Scissors'){
      return 'You Lose! Scissors cuts paper!'
    }else if(userPick ==='Paper' && aiPick === 'Spock'){
      return 'You Win! Paper disproves spock!'
    }else if(userPick ==='Paper' && aiPick ===  'Lizard'){
      return 'You Lose! Lizard eats paper!'
    }else if(userPick ==='Scissors' && aiPick === 'Scissors'){
      return 'Tie!'
    }else if(userPick ==='Scissors' && aiPick === 'Spock'){
      return 'You Lose! Spock smashes scissors!'
    }else if(userPick ==='Scissors' && aiPick === 'Lizard'){
      return 'You Win! Scissors decapitates lizard!'
    }else if(userPick ==='Scissors' && aiPick === 'Rock'){
      return 'You Lose! Rock crushes scissors!'
    }else if(userPick ==='Scissors' && aiPick ===  'Paper'){
      return 'You Win! Scissors cuts paper!'
    }else if(userPick ==='Spock' && aiPick === 'Spock'){
      return 'Tie!'
    }else if(userPick === 'Spock' && aiPick === 'Lizard'){
      return 'You Lose! Lizard poisons spock!'
    }else if(userPick === 'Spock' && aiPick === 'Scissors'){
      return 'You Win! Spock smashes scissors!'
    }else if(userPick === 'Spock' && aiPick === 'Paper'){
      return 'You Lose! Paper disproves spock!'
    }else if(userPick === 'Spock' && aiPick === 'Rock'){
      return 'You Win! Spock vaporizes rock!'
    }else if(userPick === 'Lizard' && aiPick === 'Lizard'){
      return 'Tie'
    }else if(userPick === 'Lizard' && aiPick === 'Rock'){
      return 'You Lose! Rock smashes lizard'
    }else if(userPick === 'Lizard' && aiPick === 'Paper'){
      return 'You Win! Lizard eats Paper'
    }else if(userPick === 'Lizard' && aiPick === 'Scissors'){
      return 'You Lose! Scissors decapitates lizard!'
    }else{
      return 'You Win! Lizard poisons spock'
    }
}

function game(){
  for (let i = 0; i < 5; i++) {
  console.log(playGame(getPlayerSelection(), getComputerChoice()));
  }
}

game();