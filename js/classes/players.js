export default class Player {
    constructor(name, bank) {
        this.name = name;
        this.bank = bank;
        this.hand = [];
        this.handValue = 0;
        this.stand = false; 
    }
}