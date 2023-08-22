class Game {
   constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.scoreDisplay = document.querySelector("#score");
    this.gameEndScreen = document.querySelector("#game-end");
    this.restartButton = document.querySelector("#restart-button");
    this.score = 0;
    this.gameIsOver = false; 
    this.tiles = [];
    this.intervalBurn = null;
    this.intervalTree = null;
    this.gameDuration = 30;
    this.setFire = null;
    this.setBirds = null;    
   }

   start(){
    this.gameScreen.style.display = "grid";
    this.scoreDisplay.innerText = "Score: 0"; 
    this.startScreen.style.display = "none";
    this.makeGrid();
   }

   makeGrid() {
    for (let i = 0; i < 9; i++){
        const tile = document.createElement("div");
        tile.id = i.toString();
        tile.classList.add("tile");
        tile.addEventListener("click", () => this.selectTile(tile));
        this.tiles.push(tile);
        this.gameScreen.appendChild(tile);
    }
    setInterval(() => this.moveFire(), 500);
    setInterval(() => this.moveBirds(), 500);
    this.randomTile ();}

    randomTile() {
        let num = Math.floor(Math.random() * 9);
        return num.toString();
        this.moveFire ();
    }

    moveFire() {
        if (this.gameIsOver){
            return;
        }
        if (setFire) {
            setFire.innerHTML = "";
        }

        let fire = document.createElement("img");
        fire.src = "../images/fire.png";

        let num = randomTile();
        if(setBirds && setFire.id == num){
            return;
        }
        setFire = document.getElementById(num);
        setFire.appendChild(fire);
    }

    moveBirds(){


    }

   }

