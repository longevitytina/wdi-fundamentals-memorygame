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
    },
    {
        rank: "jack",
        suit: "diamonds",
        cardImage: "images/jack-of-diamonds.png"
    },
    {
        rank: "jack",
        suit: "hearts",
        cardImage: "images/jack-of-hearts.png"
    },
    {
        rank: "ace",
        suit: "hearts",
        cardImage: ""
    },
    {
        rank: "ace",
        suit: "diamond",
        cardImage: "images/ace-diamonds.png"
    },
    {
        rank: "ace",
        suit: "clubs",
        cardImage: "images/ace-clubs.png"
    },
    {
        rank: "ace",
        suit: "spades",
        cardImage: "images/ace-spades.png"
    }




];
cardsInPlay = [];
var score = 0;
var score_div =  document.getElementById("scorePanel");
var scoreBoard_div = document.querySelector(".score-board");
var player1Score_span = document.getElementById("player-1-score");
var player2Score_span = document.getElementById("player-2-score");


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
    var lastSelected = cardsInPlay[cardsInPlay.length-1];
    var penultimate = cardsInPlay[cardsInPlay.length-2];


    if(cards[lastSelected].rank === cards[penultimate].rank){
        incrementScore();
        console.log("You found a match!");
    } else {
        var lastCard = document.querySelector(`[data-id="${lastSelected}"]`)
        var penultimateCard = document.querySelector(`[data-id="${penultimate}"]`)
        lastCard.setAttribute('src', cardBack);
        penultimateCard.setAttribute('src', cardBack);
        console.log("no match");
    }
};
function incrementScore(){
    score += 1;
    score_div.innerHTML = score;
}

function flipCard(){
    var cardId = this.getAttribute('data-id');
    if (this.getAttribute('src') === cardBack){
        this.setAttribute('src', cards[cardId].cardImage);
        cardsInPlay.push(cardId);
        console.log('User flipped ' + cards[cardId].rank);
        console.log(cards[cardId].cardImage);
        console.log(cards[cardId].suit);
        if (cardsInPlay.length % 2 === 0 ){ 
            setTimeout(checkForMatch, 500);
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
//card is not being flipped over correctly: lag in the second card 
//add multiple players
//animations for cards turning over
//timer
//attempts score