let scoreH2 = document.getElementById('score');
let timeLeftH2 = document.getElementById('timeLeft');
let startNewGameButton = document.getElementById('startNewGame');
let restartGameButton = document.getElementById('restart-button');
let squares = document.querySelectorAll('.square');
let gameScreen = document.querySelector('.game-screen');
let score = 0;
let timeLeft = 0;
let hitPosition = null; // where the player needs to hit, it will store the id
let gameOverScreen = document.getElementById('gameOverScreen');
let finalScore = document.getElementById('finalScore');

//randomly place my tile
function randomBurning(){
    squares.forEach(square => { 
        square.classList.remove('burn');
    })

    let randomSquare = squares[Math.floor(Math.random()*squares.length)];
    randomSquare.classList.add('burn');
    hitPosition = randomSquare.id;
}

function countDown(){
    timeLeft--;
    timeLeftH2.innerHTML = `Time Left: ${timeLeft}`;

    if(timeLeft === 0){
        clearInterval(timerId);
        clearInterval(randomBurnId);
        showGameOverScreen();
    }
}
randomBurning()

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
            if (timerId !== null){
                if(square.id === hitPosition){
                    score++;
                    scoreH2.innerText = `Your Score: ${score}` ;
                    hitPosition = null;
            }
        }
    })
});

function startGame(){
    score = 0;
    timeLeft = 30;
    //callback function
    //setinterval call function at regular interval
    timerId = setInterval(randomBurning, 650);
    randomBurnId = setInterval(countDown, 650);
}

function showGameOverScreen(){
    finalScore.textContent = score;
    gameScreen.style.display = "none";
    gameOverScreen.style.display = "block";
}

function restartGame(){
    location.reload();
}

startNewGameButton.addEventListener('click', startGame);
restartGameButton.addEventListener('click', restartGame);
