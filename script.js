const playerScoreEL = document.getElementById('playerScore');
const playerChoiceEL = document.getElementById('playerChoice');
const computerScoreEL = document.getElementById('computerScore');
const computerChoiceEL = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.fa-regular');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

const computerRandomChoice = () => {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2){
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4){
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.6){
    computerChoice = 'scissors';
  } else if (computerChoiceNumber <= 0.8){
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
}

const displayComputerChoice = () => {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEL.textContent = ' -- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEL.textContent = ' -- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEL.textContent = ' -- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEL.textContent = ' -- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEL.textContent = ' -- Spock';
      break;
    default:
      break;
  }
}

const resetSelected = () => {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
  import('./confetti.js')
    .then((module) => module.removeConfetti());
}

const updateScore = (playerChoice) => {
  if (playerChoice === computerChoice) {
    resultText.textContent = 'It is a tie!';
  } else {
    if (choices[playerChoice].defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = 'You won!';
      playerScoreNumber += 1;
      playerScoreEL.textContent = playerScoreNumber;
      import('./confetti.js')
        .then((module) => module.startConfetti());
    } else {
      resultText.textContent = 'Computer won!';
      computerScoreNumber += 1;
      computerScoreEL.textContent = computerScoreNumber;
    }
  }
}

const checkResult = (playerChoice) => {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice)
}

const select = (playerChoice) => {
  checkResult(playerChoice);
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEL.textContent = ' -- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEL.textContent = ' -- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEL.textContent = ' -- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEL.textContent = ' -- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEL.textContent = ' -- Spock';
      break;
    default:
      break;
  }
}
window.select = select;

const resetAll = () => {
  resetSelected();
  playerScoreEL.textContent = 0;
  playerChoiceEL.textContent = '';
  computerScoreEL.textContent = 0;
  computerChoiceEL.textContent = '';
  resultText.textContent = '';
}
window.resetAll = resetAll;

resetAll();

