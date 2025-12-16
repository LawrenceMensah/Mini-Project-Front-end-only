let scoreNumber = JSON.parse(localStorage.getItem('scoreNumber')) || {win: 0, lose: 0, tie: 0};

      updateScoreElment();

      /*
      if(scoreNumber === null) {
        scoreNumber = {
          win: 0,
          lose: 0,
          tie: 0
        };
      }
      OR
      if(!scoreNumber) {
        scoreNumber = {
          win: 0,
          lose: 0,
          tie: 0
        };
      }
      */

      let isAutoPlaying = false;
      let intervalId;

      function autoPlay() {
        if(!isAutoPlaying) {
          intervalId = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
        } else{
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
        
      }

      document.querySelector('.js-rock-button').addEventListener('click', () => {
        playGame('Rock');
      });

      document.querySelector('.js-paper-button').addEventListener('click', () => {
        playGame('Paper');
      });

      document.querySelector('.js-scissor-button').addEventListener('click', () => {
        playGame('Scissors');
      });

      document.body.addEventListener('keydown', (event) => {
        if(event.key === 'r'){
          playGame('Rock');
        }else if(event.key === 'p'){
          playGame('Paper');
        }else if(event.key === 's'){
          playGame('Scissors');
        }else{alert('p = Paper, s = Scissors, r = Rock')}
      });

      function playGame(playerMove) {

        const computerMove = pickComputerMove();
        let result = '';
        

        if(playerMove === 'Rock'){

          if (computerMove === 'Rock') {
            result = 'Tie';
          } else if(computerMove === 'Paper') {
            result = 'You lose!';
          } else if(computerMove === 'Scissors') {
            result = 'You win';
          }

        } else if(playerMove === 'Paper') {

          if (computerMove === 'Rock') {
            result = 'You win';
          } else if(computerMove === 'Paper') {
            result = 'Tie';
          } else if(computerMove === 'Scissors') {
            result = 'You lose!';
          }

        } else if(playerMove === 'Scissors') {

          if (computerMove === 'Rock') {
            result = 'You lose!';
          } else if(computerMove === 'Paper') {
            result = 'You win';
          } else if(computerMove === 'Scissors') {
            result = 'Tie';
          }
          
        }

        document.querySelector('.js-result').innerHTML = `Results: ${result}`;
        document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="" class="move-icon"> Computer <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">`;

        if(result === 'Tie'){
          scoreNumber.tie +=1;
        } else if(result === 'You lose!'){
          scoreNumber.lose +=1;
        } else if(result === 'You win'){
          scoreNumber.win +=1;
        }

        localStorage.setItem('scoreNumber', JSON.stringify(scoreNumber));

        updateScoreElment();
        
        // console.log(result);
//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
// Wins: ${scoreNumber.win}, Loses: ${scoreNumber.lose}, Ties: ${scoreNumber.tie}`);
      }

      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';
        if(randomNumber >= 0 && randomNumber < 1/3) {
          computerMove = 'Rock';
        } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'Paper';
        } else if(randomNumber >= 2/3 && randomNumber < 1) {
          computerMove = 'Scissors';
        }

        return computerMove;
      }

      function updateScoreElment() {
        document.querySelector('.js-score').innerHTML = `Wins: ${scoreNumber.win}, Loses: ${scoreNumber.lose}, Ties: ${scoreNumber.tie}`;
      }
      