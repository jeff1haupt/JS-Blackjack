import Dealer from "./dealer.js";
import Player from "./players.js";
import Shoe from "./shoe.js";

export default class Game {
    constructor() {
        this.gameInPlay = true;
        this.players = [];
        this.shoe = [];
        this.dealer = new Dealer();
    }
    getShoe () {
        if ( this.shoe.length < 1 ) {
            let numDecks = document.getElementById('decks').value;
            numDecks = parseInt(numDecks);
            const shoe = new Shoe(numDecks);
            shoe.addDecks();
            shoe.shuffleDecks();
            this.shoe = shoe;
        } 
    }
    addPlayers () {
        const player = new Player(prompt('Enter player name: '));
        this.players.push(player);
    }
    dealCards () {
        for ( let i = 1; i <= 2; i++ ) {
            for ( let p of this.players ) {
                p.hand.push(this.shoe.cardsInShoe.pop());
            }
            this.dealer.hand.push(this.shoe.cardsInShoe.pop());
        }
    }
}