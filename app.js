let userSelection = '';
let aiSelection = '';  
let userScore = 0;
let aiScore = 0;
const userSelections = document.querySelectorAll(".selection");  
const resultsDisplay = document.querySelector("#results");
userSelections.forEach(selection =>{
  selection.addEventListener("click", (e)=>{
    userSelection = getUserChoice(e);
  })
  selection.addEventListener("click", (e)=>{
    aiSelection = getComputerChoice();
  })
  selection.addEventListener("click", (e)=>{
    scoreGame();
    displayCurrentScore();
    checkScore();
  })
})

function getUserChoice(e){
  userSelection = e.target.id;
  return userSelection;
}

function getComputerChoice() {
  const selection = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  let computerChoice = Math.floor(Math.random() * 5);
  computerChoice = selection[computerChoice];
  return computerChoice;
};

function playGame(userPick, aiSelection) {
    if(userPick === 'Rock' && aiSelection === 'Rock'){
      return 'Tie!'
    }else if(userPick ==='Rock' && aiSelection === 'Paper'){
      return 'You Lose! Paper covers rock!'
    }else if(userPick ==='Rock' && aiSelection === 'Scissors'){
      return 'You Win! Rock crushes scissors!'
    }else if(userPick ==='Rock' && aiSelection === 'Spock'){
      return 'You Lose! Spock vaporizes rock!'
    }else if(userPick ==='Rock' && aiSelection === 'Lizard'){
      return 'You Win! Rock crushes lizard!'
    }else if(userPick ==='Paper' && aiSelection === 'Paper'){
      return 'Tie!'
    }else if(userPick ==='Paper' && aiSelection === 'Scissors'){
      return 'You Lose! Scissors cuts paper!'
    }else if(userPick ==='Paper' && aiSelection === 'Spock'){
      return 'You Win! Paper disproves spock!'
    }else if(userPick ==='Paper' && aiSelection ===  'Lizard'){
      return 'You Lose! Lizard eats paper!'
    }else if(userPick ==='Scissors' && aiSelection === 'Scissors'){
      return 'Tie!'
    }else if(userPick ==='Scissors' && aiSelection === 'Spock'){
      return 'You Lose! Spock smashes scissors!'
    }else if(userPick ==='Scissors' && aiSelection === 'Lizard'){
      return 'You Win! Scissors decapitates lizard!'
    }else if(userPick ==='Scissors' && aiSelection === 'Rock'){
      return 'You Lose! Rock crushes scissors!'
    }else if(userPick ==='Scissors' && aiSelection ===  'Paper'){
      return 'You Win! Scissors cuts paper!'
    }else if(userPick ==='Spock' && aiSelection === 'Spock'){
      return 'Tie!'
    }else if(userPick === 'Spock' && aiSelection === 'Lizard'){
      return 'You Lose! Lizard poisons spock!'
    }else if(userPick === 'Spock' && aiSelection === 'Scissors'){
      return 'You Win! Spock smashes scissors!'
    }else if(userPick === 'Spock' && aiSelection === 'Paper'){
      return 'You Lose! Paper disproves spock!'
    }else if(userPick === 'Spock' && aiSelection === 'Rock'){
      return 'You Win! Spock vaporizes rock!'
    }else if(userPick === 'Lizard' && aiSelection === 'Lizard'){
      return 'Tie'
    }else if(userPick === 'Lizard' && aiSelection === 'Rock'){
      return 'You Lose! Rock smashes lizard'
    }else if(userPick === 'Lizard' && aiSelection === 'Paper'){
      return 'You Win! Lizard eats Paper'
    }else if(userPick === 'Lizard' && aiSelection === 'Scissors'){
      return 'You Lose! Scissors decapitates lizard!'
    }else{
      return 'You Win! Lizard poisons spock'
    }
}

function scoreGame(){
  while(userScore <= 5 && aiScore <= 5){
    const results = playGame(userSelection, aiSelection);
    resultsDisplay.childNodes[1].textContent = results;
    if(results.slice(4,5) === "W"){
      return userScore++;
    }else if(results.slice(4,5) === "L"){
      return aiScore++;
    }else{
      return "Tie!";
    }
  }
}

function displayCurrentScore(){
  resultsDisplay.childNodes[3].childNodes[1].textContent = `Your Score: ${userScore}`;
  resultsDisplay.childNodes[3].childNodes[3].textContent = `AI Score: ${aiScore}`;
}

function checkScore(){
    if(userScore === 5){
    userSelections.forEach(selection => {
      selection.setAttribute('disabled', true);
      })
      resultsDisplay.textContent = `You Won! 😎\n The final score is ${userScore} to ${aiScore}`;
  }else if(aiScore === 5){
      userSelections.forEach(selection => {
        selection.setAttribute('disabled', true);
      })   
      resultsDisplay.textContent = `You Lost. 😓\n The final score is ${aiScore} to ${userScore}`;
  }
}
