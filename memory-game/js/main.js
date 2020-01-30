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
        cardImage: "images/ace-heartsy.png"
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
var player1Score = 0;
var player2Score = 0
var gamePlaying;
var score_div = document.getElementById('scorePanel')

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
        cardsInPlay.pop(lastCard);
        cardsInPlay.pop(penultimateCard);
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

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    const gameBoard = document.getElementById('game-board')
    while (gameBoard.firstChild){
        gameBoard.removeChild(gameBoard.firstChild);
    }
    score = 0;
    document.getElementById('scorePanel').textContent = '0';
    cardsInPlay.length = 0;
    createBoard();
}

function createBoard(){
    shuffle(cards);
    
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

//new game button:
//reset scores, flip cards back over, and  shuffle cards.

//multiplayer: game begins with player 1. name is highlighted
//player attempts to find match, two possibilities:
//finds a match, gains a point, goes again, logic repeats.
//if cards don't match, cards flip back over, second player goes
//second player name is highlighted and turn starts
//active player
