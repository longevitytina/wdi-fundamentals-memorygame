let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {        
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
cardsInPlay = [];
var score = 0;

var cardBack = 'images/back.png'; 
shuffle(cards);

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }


function checkForMatch(){

    if(cardsInPlay[cardsInPlay.length-1] === cardsInPlay[cardsInPlay.length-2]){
        score += 1;
        // document.querySelector('#scorePanel').style.display = 'block';
        console.log("You found a match!");
    } else {
        console.log("no match");
    }
};

function flipCard(){
    var cardId = this.getAttribute('data-id');
    if (this.getAttribute('src') === cardBack){
        this.setAttribute('src', cards[cardId].cardImage);
        cardsInPlay.push(cards[cardId].rank);
        console.log('User flipped ' + cards[cardId].rank);
        console.log(cards[cardId].cardImage);
        console.log(cards[cardId].suit);
        if (cardsInPlay.length % 2 === 0 ){ 
            checkForMatch();
        }
    }
};

function createBoard(){
    for(let i = 0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', cardBack);
        cardElement.setAttribute('data-id', i);
        document.getElementById('game-board').appendChild(cardElement);
        cardElement.addEventListener('click', flipCard)
    }
}



createBoard();

//when cards are matched, get 1 point accumlated to score panel
//player clicks second card, if matched get 1 point
//in checkForMatch() instead of alert(), add 1 point onto score
//display result..
//empty variable to store score.

//if card has been clicked previously, then do not flip card
//if card is not flipped, turn over.
