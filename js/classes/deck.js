import Card from "./card.js";

export default class Deck {
    constructor () {
        this.cards = [];
    }
    createDeck () {
        const suits = ['Clubs', 'Hearts', 'Diamonds', "Spades"];
        const cardValues = [
            [2, 'Two'],
            [3, 'Three'],
            [4, 'Four'],
            [5, 'Five'],
            [6, 'Six'],
            [7, 'Seven'],
            [8, 'Eight'],
            [9, 'Nine'],
            [10, 'Ten'],
            [10, 'Jack'],
            [10, 'Queen'],
            [10, 'King'],
            [11, 'Ace'] // Will have to consider different ways to handle ace value (1 or 11)
        ]
        for (let suit of suits) {
            for ( let value of cardValues ) {
                const card = new Card(value[0], suit, value[1], `../img/${suit}/${value[1]}.png`);
                this.cards.push(card);
            }
        }
    }

    // need to decide how to pass cards from Deck to shoe
    // need to decide how to shuffle cards 
}