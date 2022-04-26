class Game {
  constructor() {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.player1 = new Player(1, "🐈‍⬛", 0);
    this.player2 = new Player(2, "🐕", 0);
    this.hasWinner = false;
    this.isDraw = false;
    this.currentPlayer = this.player1;
    this.winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];
  }

  resetGame() {
    this.hasWinner = false;
    this.isDraw = false;
    for (var i = 0; i < this.board.length; i++) {
      this.board[i] = "";
    }
    this.changeTurn();
  }

  changeTurn() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  updateBoard(boxId) {
    this.board[boxId] = this.currentPlayer.id;
    this.checkForWinner();
      if (!this.hasWinner && !this.isDraw) {
        this.changeTurn();
    }
  }

  checkForWinner() {
    for (var i = 0; i < this.winningCombinations.length; i++) {
      if (this.hasWinner) {
        return this.hasWinner;
      } else {
        var winningCombination = this.winningCombinations[i];
        this.checkCombination(winningCombination);
      }
    }
  }

  checkCombination(winningCombination) {
    var counter = 0;
    for (var i = 0; i < winningCombination.length; i++) {
      var wombo = winningCombination[i];
      var isBoardWombo = this.board[wombo] === this.currentPlayer.id;

      if (isBoardWombo && counter <= 2) {
        counter++;
      }

      if (counter === 3) {
        this.hasWinner = true;
        break;
      }

     if (!isBoardWombo) {
        counter = 0;
        break;
      }
    }

    if (!this.board.includes("") && !this.hasWinner) {
      this.isDraw = true;
    }
  }
}
