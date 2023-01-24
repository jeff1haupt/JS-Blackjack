export default class Dealer {
    constructor() {
        this.hand = [];
        this.handValue = 0;
    }
    getHandValue () {
        for ( let card of this.hand ) {
            this.handValue += card.value;
        }
    }
}