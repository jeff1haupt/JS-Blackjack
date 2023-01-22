import Player from "./classes/players.js";
import Deck from "./classes/deck.js";

const newDeck = new Deck();
newDeck.createDeck();
console.log(newDeck.cards);