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
  cardsInPlay = [];

function checkForMatch(){
    

    if(cardsInPlay.rank === cardsInPlay.rank){
        alert("Winner!");
        console.log("You found a match!");
    } else {
        alert("Sorry, try again");
        console.log("Sorry, try again.");
    }
};

function flipCard(){
    var cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);

    console.log('User flipped ' + cards[cardId].rank);
    // console.log(cards[cardId].cardImage);
    // console.log(cards[cardId].suit);
    if (cardsInPlay.length % 2 === 0 ){ 
        checkForMatch();
    }
};

function createBoard(){
    for(let i = 0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        document.getElementById('game-board').appendChild(cardElement);
        cardElement.addEventListener('click', flipCard)
    }
}



createBoard();
