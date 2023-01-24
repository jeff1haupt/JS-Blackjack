export default class Dealer {
    constructor() {
        this.hand = [];
        this.handValue = 0;
    }
    dealerHits () {
        this.handValue < 17 ? this.drawCards() : false;
    }
}