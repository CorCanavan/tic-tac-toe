//Global Variables:
var game;

// Query Selectors:
var gameBoard = document.getElementById("gameBoard");
var gameHeader = document.getElementById("gameHeader");
var player1Wins = document.getElementById("player1Wins");
var player2Wins = document.getElementById("player2Wins");
var boxes = document.querySelectorAll(".box");

// Event Listeners:
window.addEventListener("load", instantiateGame);
gameBoard.addEventListener("click", selectBox);

// Functions and Event Handlers:
function instantiateGame() {
  game = new Game();
}

function selectBox(e) {
  var boxId = e.target.id;
  if (e.target.innerHTML === "") {
    e.target.innerHTML =
    `<span class="game-emoji">${game.currentPlayer.token}</span>`;
    game.updateBoard(boxId);
  }
}

function updateTurn() {
  gameHeader.innerHTML =
  `<h1>It's <span class="player-emoji">${game.currentPlayer.token}</span>'s turn</h1>`;
}

function declareWinner() {
  gameHeader.innerHTML =
  `<h1><span class="player-emoji">${game.currentPlayer.token}</span> wins!</h1>`;
  updateWins();
  resetDom();
}

function declareDraw() {
  gameHeader.innerHTML =
  `<h1><span class="player-emoji"></span>It's a draw!</h1>`;
  resetDom();
}

function resetDom() {
  setTimeout(() => {
    clearBoard();
    game.resetGame();
    gameHeader.innerHTML =
    `<h1>It's <span class="player-emoji">${game.currentPlayer.token}</span>'s turn</h1>`;
  }, 2000);
}

function updateWins() {
  game.currentPlayer.increaseWins();
  player1Wins.innerText = `${game.player1.wins} wins`;
  player2Wins.innerText = `${game.player2.wins} wins`;
}

function clearBoard() {
  for (var i = 0;  i < boxes.length; i++) {
    boxes[i].innerHTML = "";
  }
}
