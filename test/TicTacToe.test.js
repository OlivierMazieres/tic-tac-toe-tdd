const TicTacToe = require('../src/TicTacToe');

describe('TicTacToe', () => {
  it('X should be first player', () => {
    const game = new TicTacToe();
    expect(game.currentPlayer).toBe('X');
  });
});
