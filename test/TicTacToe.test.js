const TicTacToe = require('../src/TicTacToe');

describe('TicTacToe', () => {
  it('X should be first player', () => {
    const game = new TicTacToe();
    expect(game.currentPlayer).toBe('X');
  });
});
it('Players alternate turns', () => {
  const game = new TicTacToe();
  game.makeMove(0, 0); // X moves
  expect(game.currentPlayer).toBe('O');
});
