//Global Variables:
var game;

// Query Selectors:
var playerEmojiHeader = document.getElementById('currentPlayerEmoji');
var gameBoard = document.getElementById('gameBoard');
var gameHeader = document.getElementById('headerText');
var player1Wins = document.getElementById('player1Wins');
var player2Wins = document.getElementById('player2Wins');
var boxes = document.querySelectorAll('.box');

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
    game.checkForWinner()
    game.changeTurn();
  }
}

function updateTurn() {
  //do I need the entire header element html here?
    playerEmojiHeader.innerText = `${game.currentPlayer.token}`;
}

function declareWinner() {
    gameHeader.innerText = `${game.currentPlayer.token} wins!`;
    // gameHeader.innerHTML = `<h1><span class="player-emoji" id="currentPlayerEmoji">${game.currentPlayer.token}</span> wins!</h1>
    updateWins();
    clearBoard();
    instantiateGame();
    // game.changeTurn();
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

// function clearBoard() {
//   gameBoard.innerHTML = "";
//   for (var i = 0; i < game.board.length; i++) {
//     gameBoard.innerHTML +=
//     `<article class="box${game.board[i]} box" id=${game.board[i]}></article>`;
//   }
// }
