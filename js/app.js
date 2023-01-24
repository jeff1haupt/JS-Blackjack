import Game from "./classes/gameRules.js";

const game = new Game();
game.getShoe();
game.addPlayers();
game.dealCards();
game.dealCards();
console.log(game.players[0]);