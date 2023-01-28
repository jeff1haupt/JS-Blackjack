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
        // hardcoding this in for now to be able to code the hit functionality
        let dealerHitButton = document.getElementById('dealerHit');
        let player1Hit = document.getElementById('p1Hit');
        let player2Hit = document.getElementById('p2Hit');
        // remove above code into another section later

        for ( let i = 1; i <= 2; i++ ) {
            for ( let p of this.players ) {
                let currentCard = this.shoe.cardsInShoe.pop();
                p.hand.push(currentCard);
                p.handValue += currentCard.value;
            }
            let dealerCard = this.shoe.cardsInShoe.pop();
            this.dealer.hand.push(dealerCard);
            this.dealer.handValue += dealerCard.value;
        }
        dealerHitButton.innerText = `Hit? ${this.dealer.handValue}`;
        player1Hit.innerText = `Hit? ${this.players[0].handValue}`;
        player2Hit.innerText = `Hit? ${this.players[1].handValue}`;
    }
    takeAnotherCard () {

    }
}