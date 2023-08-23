// // index.js

// const Game = require('./game');

window.onload = function () {
  const game = new Game();

  const startNewGameButton = document.getElementById('startNewGame');
  const restartGameButton = document.getElementById('restart-button');

  startNewGameButton.addEventListener('click', () => {
    game.startGame();
  });

  restartGameButton.addEventListener('click', restartGame);
  function restartGame() {
    location.reload();
  }

//   game.randomBurning();
};
