class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  increaseWins() {
    this.wins+=1;
  }
}
