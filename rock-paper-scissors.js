let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
//autoPlay function 
let isAutoPlaying = false;
let intrvalId;
function autoPlay(){
  if (!isAutoPlaying){
      intrvalId = setInterval(function (){
      const playerMove = picComputerMove();
      playGame(playerMove);
    }, 500 );
    isAutoPlaying = true;
  }else {
    clearInterval(intrvalId);
    isAutoPlaying = false;
  };
  
}
function playGame(playerMove){
  const computerMove = picComputerMove()
    let result = '';
    /* if for scisser */
    if (playerMove === 'scissors'){
      if (computerMove === 'rock'){
        result = 'You lose';
      } else if (computerMove === 'paper'){
        result = 'You win';
      }else if (computerMove === 'scissors'){
        result = 'Tie'
      }
      /* if for paper */
    }else if (playerMove === 'paper'){
      if (computerMove === 'rock'){
        result = 'You win';
      } else if (computerMove === 'paper'){
        result = 'Tie';
      }else if (computerMove === 'scissors'){
        result = 'You lose'
      }
      /* if for rock */
    }else if (playerMove === 'rock') {
      if (computerMove === 'rock'){
        result = 'Tie';
      } else if (computerMove === 'paper'){
        result = 'You lose';
      }else if (computerMove === 'scissors'){
        result = 'You win'
      }
    }

    if (result === 'You win'){
      score.wins ++;
    }else if (result === 'You lose'){
      score.losses += 1;
    }else if (result === 'Tie'){
      score.ties += 1;
    }
    
    localStorage.setItem('score', JSON.stringify(score));

    /* div */    
    document.getElementById('result-final').innerHTML =`You
    <img src="img/${playerMove}-emoji.png" class="move-icon">
    VS
    <img src="img/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    
    /*
    `You picked ${playerMove}\nComputer picked ${computerMove}\n${result}`*/
    /* div */
    document.getElementById('score').innerText = `All RESULT \n \n Wins = ${score.wins}\nLose = ${score.losses}\nTie = ${score.ties}`; 
    
    /*document.getElementById('result-final1').innerText = score.losses;
    document.getElementById('result-final1').innerText = score.ties;*/
}

/* function for computer move */
function picComputerMove(){
  const randomNumber = Math.random();
    let computerMove = '';
    if ( randomNumber >=0 && randomNumber < 1/3){
      computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber <2/3){
      computerMove = 'paper';
    }else if (randomNumber >=2/3 && randomNumber <3/3){
      computerMove = 'scissors';
    }
    /* return move the computer to comparison */
    return computerMove;
}

function restart(){
  document.getElementById('result-final').innerText = "Let's Play"
  document.getElementById('score').innerText = "Score"
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
}