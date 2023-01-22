import Player from "./classes/players.js";
import Deck from "./classes/deck.js";

const newDeck = new Deck();
newDeck.createDeck();
console.log(newDeck.cards[25].image);

let divMain = document.getElementById('main');
let img = document.createElement('img');
img.setAttribute('src', newDeck.cards[25].image)
console.log(img);
divMain.innerHTML = img;