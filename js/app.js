import Player from "./classes/players.js";
import Shoe from "./classes/shoe.js";
import Dealer from "./classes/dealer.js";

const shoe = new Shoe(5);
shoe.addDecks();
shoe.shuffleDecks();

const player1 = new Player('Jeff', 100);
const dealer = new Dealer();

// initial deal - still need to find best spot for this
for ( let i = 1; i <= 2; i++ ) {
    player1.hand.push(shoe.cardsInShoe.pop());
    dealer.hand.push(shoe.cardsInShoe.pop());
}

player1.getHandValue();

console.log(player1)