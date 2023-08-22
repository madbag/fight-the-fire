let scoreH1 = document.getElementById('score');
let timeLeftH2 = document.getElementById('timeLeft');
let startNewGameButton = document.getElementById('startNewGame');
let squares = document.querySelectorAll('.square');
let score = 0;
let timeLeft = 0;

//randomly place my tile
function randomBurning(){
    squares.forEach(square => { 
        square.classList.remove('burn');
    })

    let hitPosition = Math.floor(Math.random()*squares.length);
    squares[hitPosition].classList.add('burn')
}
randomBurning()

squares.forEach(square => {
    square.addEventListener.apply('mousedown', () => {

    })
});

function startGame() {
    score = 0;
    timeLeft = 30;
    //callback function
    //setinterval call function at regular interval
    setInterval(randomBurning, 500);
}

startNewGameButton.addEventListener('click', startGame)