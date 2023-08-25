
window.onload = function () {
  const game = new Game();

  const startNewGameButton = document.getElementById('startNewGame');
  const restartGameButton = document.getElementById('restart-button');

  startNewGameButton.addEventListener('click', () => {
    game.startGame();
    game.onStart();
  });

  restartGameButton.addEventListener('click', () =>
    location.reload());
  };
