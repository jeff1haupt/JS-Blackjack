import Card from "./card.js";

export default class Deck {
    constructor () {
        this.cards = [];
    }
    createDeck () {
        const suits = ['Clubs', 'Hearts', 'Diamonds', "Spades"];
        const cardValues = [
            [2, 'Two'],
            [3, 'Three']
        ]
        for (let suit of suits) {
            for ( let value of cardValues ) {
                const card = new Card(value[0], suit, value[1]);
                this.cards.push(card);
            }
        }
    }

    // need to decide how to pass cards from Deck to shoe
    // need to decide how to shuffle cards 
}