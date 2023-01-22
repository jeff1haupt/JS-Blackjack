export default class Card {
    constructor(value, suit, cardName, image) {
        this.value = value;
        this.suit = suit;
        this.cardName = cardName;
        this.image = image;
    }
    getCardInfo () {
        return [this.value, this.suit, this.cardName];
    }
    getCardImage () {
        return this.image;
    }
}