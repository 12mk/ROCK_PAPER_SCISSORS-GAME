const choices =['rock','paper','scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerscoreDisplay = document.getElementById('playerscoreDisplay');
const computerscoreDisplay = document.getElementById('computerscoreDisplay');
let playerScore = 0;
let computerScore = 0;
function playGame(element){
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];

     let result = "";
    if(element === computerChoice){
          result = "IT'S A TIE";  
          }
    else{
        switch(element){
           case "rock":
            result= (computerChoice === "scissors")  ? "YOU WIN!" : "YOU LOSE!";
           
            break;
        }
        switch(element){
          case "paper":
           result= (computerChoice === "rock")  ? "YOU WIN!" : "YOU LOSE!";
           break;
         }
         switch(element){
            case "scissors":
             result= (computerChoice === "paper")  ? "YOU WIN!" : "YOU LOSE!";
             break;
           }
    }
    resultDisplay.classList.remove('greenDisplay', 'redDisplay');
    playerDisplay.textContent = `PLAYER: ${element}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    
    

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add('greenDisplay');
            playerScore++;
            playerscoreDisplay.textContent = playerScore;
            break;
    }
    switch(result){
        case "YOU LOSE!":
            resultDisplay.classList.add('redDisplay');
            computerScore++;
            computerscoreDisplay.textContent = computerScore;
            break;
    }
}