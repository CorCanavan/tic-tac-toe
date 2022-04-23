

// Game starts, player 1 emoji is displayed in header, both wins for each player are 0
// ^^^^^^^^^^^


// Player 1 clicks a box, their emoji shows up in the box.
// Game switches to PLayer 2's turn, dog emoji shown in header reflecting it is PLayer 2's turn
// Player 2 clicks an open box, the dog emoji appears in the box htey clicked
// Switches back and forth between players until a WINNING COMBO of boxes has been clicked.
      // need a way to track which players turn it is
  // array of winning combinations? way to track winning combos, way to track players current moves
  // way to CHECK winning combos against players current moves

  //winning combos in GAME CLASS
    //put board in game class

//Global Variables:
var game;
var player1 = new Player(1, "🐈‍⬛", 0);
var player2 = new Player(2, "🐕", 0);
var currentPlayer = player1;

// Query Selectors:
var playerEmojiHeader = document.getElementById('currentPlayerEmoji');
var gameBoard = document.getElementById('gameBoard');

// Event Listeners:
window.addEventListener("load", instantiateGame);
gameBoard.addEventListener("click", selectBox);

// Functions and Event Handlers:
function instantiateGame() {
  game = new Game(player1, player2);
  console.log("game", game);
}

function selectBox(event) {
 console.log("clicked", event.target);
 if (game.board[event.target.closest("article").id] === "") {
  game.board[event.target.closest("article").id] = currentPlayer.id;
  event.target.innerHTML = `<span class="game-emoji">${currentPlayer.token}</span>`;
  toggleTurn();
 }
}

function toggleTurn() {
  if (currentPlayer.id === 1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}
