import Game from "./classes/gameRules.js";

const game = new Game();
game.getShoe();
game.addPlayers();
game.addPlayers();
game.dealCards();
console.log(game.players);
console.log(game.dealer);