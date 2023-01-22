export default class Card {
    constructor(value, suit, cardName) {
        this.value = value;
        this.suit = suit;
        this.cardName = cardName;
    }
    getCardInfo () {
        return [this.value, this.suit, this.cardName];
    }
}