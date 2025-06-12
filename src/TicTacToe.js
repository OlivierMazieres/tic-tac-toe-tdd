class TicTacToe {
  constructor() {
    this.currentPlayer = 'X';
  }
}

module.exports = TicTacToe;
makeMove(row, col) {
  this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
}
