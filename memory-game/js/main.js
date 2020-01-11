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

function checkForMatch(){
    

    if(cardsInPlay.rank === cardsInPlay.rank){
        console.log("You found a match!");
        alert("Winner!");
    } else {
        console.log("Sorry, try again.");
        alert("Sorry, try again");
    }
};

function flipCard(){
    var cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);

    console.log('User flipped ' + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    if (cardsInPlay.length === 2){ 
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
