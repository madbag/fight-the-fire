class Game {
    constructor() {
      this.scoreH2 = document.getElementById('score');
      this.timeLeftH2 = document.getElementById('timeLeft');
      this.squares = document.querySelectorAll('.square');
      this.score = 0;
      this.timeLeft = 0;
      this.hitPosition = null;
      this.timerId = null;
      this.randomBurnId = null;
      this.splashWater = new Audio('../images/sound effect/Splash.mp3')
      this.gameMusic = new Audio('../images/sound effect/FIREBG.m4a')
      this.gameOverMusic = new Audio('../images/sound effect/gameover.mp3')
      this.gameScreen = document.querySelector('.game-screen');
      this.gameOverScreen = document.getElementById('gameOverScreen');
      this.finalScore = document.getElementById('finalScore');
      this.squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
          if (this.timerId !== null) {
            if (square.id === this.hitPosition) {
              this.splashWater.play();
              this.score++;
              this.scoreH2.innerText = `Your Score: ${this.score}`;
              this.hitPosition = null;
            }
          }
        });
      });
    }

      randomBurning() {
      this.squares.forEach((square) => {
        square.classList.remove('burn');
      });
  
      let randomSquare = this.squares[Math.floor(Math.random() * this.squares.length)];
      randomSquare.classList.add('burn');
      this.hitPosition = randomSquare.id;
    }
  
    countDown() {
      this.timeLeft--;
      this.timeLeftH2.innerHTML = `Time Left: ${this.timeLeft}`;
  
      if (this.timeLeft === 0) {
        clearInterval(this.timerId);
        clearInterval(this.randomBurnId);
        this.showGameOverScreen();
      }
    }
      
    startGame() {
      this.score = 0;
      this.timeLeft = 30;
      this.gameMusic.play();
      setTimeout(()=>{this.gameMusic.pause()}, 19000)
      this.timerId = setInterval(() => this.randomBurning(), 650);
      this.randomBurnId = setInterval(() => this.countDown(), 650);
    }
  
    showGameOverScreen() {
      this.gameOverMusic.play();
      this.finalScore.textContent = this.score;
      this.gameScreen.style.display = 'none';
      this.gameOverScreen.style.display = 'block';
    }
}
