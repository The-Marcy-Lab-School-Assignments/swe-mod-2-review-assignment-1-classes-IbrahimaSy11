// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

class Player {

    constructor(name, position, jerseyNumber){
        this.name = name;
        this.position = position;
        this.jerseyNumber = jerseyNumber;
    }

}

class Team {
  #starters = [];
  #bench = [];

  constructor(name) {
    this.name = name;
  }

  getStarters() {
    return this.#starters;
  }

  getBench() {
    return this.#bench;
  }

  addBenchPlayer(player) {
    this.#bench.push(player);
  }

  getPlayerCount() {
    return this.#starters.length + this.#bench.length;
  }

  moveToBench(name) {
    const currentPlayer = this.#starters.find(
      player => player.name === name
    );

    if (!currentPlayer) return false;

    const index = this.#starters.indexOf(currentPlayer);
    this.#starters.splice(index, 1);
    this.#bench.push(currentPlayer);

    return true;
  }

  moveToStarters(name) {
  const currentPlayer = this.#bench.find(
    player => player.name === name
  );

  if (!currentPlayer) return false;

  const index = this.#bench.indexOf(currentPlayer);
  this.#bench.splice(index, 1);
  this.#starters.push(currentPlayer);

  return true;
}

};

module.exports = { Player, Team };

