window.onload = function (){
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    let game = new Game();

    startButton.addEventListener("click", function(){
        startGame();
    });
    function startGame(){
        console.log("start game");
        game.start();
    };

    restartButton.addEventListener("click", function() {
        restartGame();
    });
    function restartGame(){
        location.reload();
    }
}