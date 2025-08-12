console.log("Hello, let's play a game of Rock Paper Scissors");

function getHumanChoice() {
  return prompt("What would you like to play?", "Rock");
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

var humanScore = 0 , computerScore = 0 ;

function playRound(humanChoice,computerChoice) {
  // 1 is rock, 2 is paper, 3 is scissors
  humanChoice = humanChoice.toLowerCase();

  var human_int = 0;
  switch (humanChoice) {
    case "rock":
      human_int= 1;
      break;
    
    case "paper":
      human_int = 2;
      break;

    case "scissors":
      human_int = 3;
      break;

    default:
      console.log("Invalid Input")
      return
  }

  console.log(human_int);
  console.log(computerChoice);

  const diff =  human_int - computerChoice;
  switch (diff) {
    case 1:
      console.log("You Won!")
      humanScore++;
      break;
    case -1: 
      console.log("Computer won")
      computerScore++;
      break;
    case 2: 
      console.log("Computer won")
      computerScore++;
      break;
    case -2:
      console.log("You Won!")
      humanScore++;
      break;
    default:
      console.log("It's a draw")
  }
  var score_text = ` Current Score \n
    You \t= ${humanScore}
    Computer \t= ${computerScore}
`
    console.log(score_text)
}

for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection)
}


