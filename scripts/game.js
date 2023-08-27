class Game {
    constructor() {
      this.scoreH2 = document.getElementById('score');
      this.timeLeftH2 = document.getElementById('timeLeft');
      this.squares = document.querySelectorAll('.square');
      this.gameBegin = document.getElementById('startGame');
      this.gameScreen = document.querySelector('.game-screen');
      this.gameOverScreen = document.getElementById('gameOverScreen');
      this.finalScore = document.getElementById('finalScore');

      this.score = 0;
      this.timeLeft = 0;
      this.hitPosition = null;
      this.timerId = null;
      this.randomBurnId = null;
//sound
      this.splashWater = new Audio('./images/sound/Splash.mp3')
      this.gameMusic = new Audio('./images/sound/FIREBG.m4a')
      this.gameOverMusic = new Audio('./images/sound/gameover.mp3')
      
      this.squares.forEach((square) => {// if outside the Class - then need to manually call the loop. 
        square.addEventListener('mousedown', () => { //The mousedown event is fired whenever the cursor or pointer is inside the selected element and the button is clicked down i.e. pressed and not released.
          if (this.timerId !== null) {
            if (square.id === this.hitPosition) {
              this.splashWater.play();
              this.score++;
              this.scoreH2.innerText = `Your Score: ${this.score}`;
              this.hitPosition = null;//empty or unknown value
            }
          }
        });
      });
    }

    randomBurning() {
      this.squares.forEach((square) => { //this class seems to be used to visually represent a "burned" square, and this step ensures that no square is currently marked as burned before selecting a new one.
        square.classList.remove('burn');//takes a single element as an argument and removes it from the list. 
      });
  
      let randomSquare = this.squares[Math.floor(Math.random() * this.squares.length)];
      randomSquare.classList.add('burn'); //the code adds the 'burn' class to that square using the classList.add method. This class is associated with CSS rules that visually indicate that the square is "burned."
      this.hitPosition = randomSquare.id; //the hitPosition property of the game is updated with the id of the randomly selected square. This is used to track which square the player should target.
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
      setTimeout(()=>{this.gameMusic.pause()}, 30000)
      this.timerId = setInterval(() => this.randomBurning(), 650);//calls a function or executes a code snippet, with a fixed time delay between each call.
      this.randomBurnId = setInterval(() => this.countDown(), 1000);
    }
  
    showGameOverScreen() {
      this.gameOverMusic.play();
      this.finalScore.textContent = this.score;//.textContent is to access and modify the text content of HTML
      this.gameScreen.style.display = 'none';
      this.gameOverScreen.style.display = 'block';
    }

    onStart(){
      this.gameBegin.style.display = 'none';
      this.gameScreen.style.display ='block';
      // this.gameOverScreen.style.display = 'block'
    }
}
