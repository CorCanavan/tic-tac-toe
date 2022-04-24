//Global Variables:
var game;

// Query Selectors:
var playerEmojiHeader = document.getElementById('currentPlayerEmoji');
var gameBoard = document.getElementById('gameBoard');

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
    game.checkForWinner();
    game.changeTurn();
  }



 }
