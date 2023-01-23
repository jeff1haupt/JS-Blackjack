import Deck from "./deck.js";

export default class Shoe {
    constructor (numDecks) {
        this.numDecks = numDecks;
        this.cardsInShoe = [];
    }
    addDecks () {
        for ( let i = 0; i < this.numDecks; i++ ) {
            const deck = new Deck();
            deck.createDeck();
            this.cardsInShoe.push(...deck.cards);
        }
    }
    shuffleDecks () {
        // will add a more randomized array in the future, but for testing this is fine
        this.cardsInShoe.sort((a, b) => 0.5 - Math.random());
    }
}