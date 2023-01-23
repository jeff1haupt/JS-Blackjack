import Player from "./classes/players.js";
import Deck from "./classes/deck.js";
import Shoe from "./classes/shoe.js";

const shoe = new Shoe(5);
shoe.addDecks();
shoe.shuffleDecks();
console.log(shoe.cardsInShoe);