/**
 * @jest-environment jsdom
 */
const Game = require("./Game");

describe("Game.randomBurning", () => {
  let game;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="score"></div>
      <div id="timeLeft"></div>
      <div class="game-screen"></div>
      <div id="gameOverScreen"></div>
      <div id="finalScore"></div>
      <button id="startGame"></button>
      <div class="square" id="sq1"></div>
      <div class="square" id="sq2"></div>
      <div class="square" id="sq3"></div>
    `;

    game = new Game();
  });

  test("should add 'burn' to exactly one square", () => {
    game.squares.forEach(square => {
      expect(square.classList.contains("burn")).toBe(false);
    });

    game.randomBurning();

    const burningSquares = [...game.squares].filter(square =>
      square.classList.contains("burn")
    );
    expect(burningSquares.length).toBe(1);
    expect(burningSquares[0].id).toBe(game.hitPosition);
  });
});
