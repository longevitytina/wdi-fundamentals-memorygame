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
var playerOne = {
    name: 'Player 1',
    score: 0,
    scoreDisplay: document.querySelector('#player-1-score'),
};
var playerTwo = {
    name: 'Player 2',
    score: 0,
    scoreDisplay: document.querySelector('#player-2-score'),
};
var activePlayer = playerOne;
var computerPlayer;
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
};

function checkForMatch() {
    var lastSelected = cardsInPlay[cardsInPlay.length - 1];
    var penultimate = cardsInPlay[cardsInPlay.length - 2];


    if (cards[lastSelected].rank === cards[penultimate].rank) {
        incrementScore();
        if (activePlayer === computerPlayer) {
            computerTurn();
        }
        console.log("You found a match!");
    } else {
        var lastCard = document.querySelector(`[data-id="${lastSelected}"]`)
        var penultimateCard = document.querySelector(`[data-id="${penultimate}"]`)
        lastCard.setAttribute('src', cardBack);
        penultimateCard.setAttribute('src', cardBack);
        cardsInPlay.pop(lastCard);
        cardsInPlay.pop(penultimateCard);
        console.log("no match");
        nextPlayer();
    }
};

function incrementScore() {
    activePlayer.score++
    activePlayer.scoreDisplay.innerHTML = activePlayer.score
};

function flipCard() {
    var cardId = this.getAttribute('data-id');
    if (this.getAttribute('src') === cardBack) {
        this.setAttribute('src', cards[cardId].cardImage);
        cardsInPlay.push(cardId);
        console.log('User flipped ' + cards[cardId].rank);
        console.log(cards[cardId].cardImage);
        console.log(cards[cardId].suit);
        if (cardsInPlay.length % 2 === 0) {
            setTimeout(checkForMatch, 500);
        }
    }
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    const gameBoard = document.getElementById('game-board');
    activePlayer = playerOne;
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    }
    computerPlayer = null;
    playerOne.score = 0;
    playerTwo.score = 0;
    playerOne.scoreDisplay.innerHTML = playerOne.score;
    playerTwo.scoreDisplay.innerHTML = playerTwo.score;
    cardsInPlay.length = 0;
    createBoard();
    document.querySelector('#player-1-label').classList.remove('active');
    document.querySelector('#player-2-label').classList.remove('active');
    document.querySelector('#player-1-label').classList.add('active');

};

function createBoard() {
    shuffle(cards);

    for (let i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', cardBack);
        cardElement.setAttribute('data-id', i);
        document.getElementById('game-board').appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);
    }
};

function nextPlayer() {
    if (activePlayer === playerOne) {
        activePlayer = playerTwo
    } else {
        activePlayer = playerOne
        if (playerOne === computerPlayer) {
            computerTurn()
        }
    }

    document.querySelector('#player-1-label').classList.toggle('active')
    document.querySelector('#player-2-label').classList.toggle('active')
};

createBoard();
document.querySelector('.btn-computer').addEventListener('click', function () {
    init();
    computerTurn();
    computerPlayer = playerOne;
});
// var computer = playerOne;
//cards that have been seen but not matched
// var cardsFaceDown = [];
//if no cards flipped, then flip two cards at random if turn is active
// if (activePlayer === computer && cardsInPlay.length === 0){
//click two cards and end turn if no match
// document.getElementById('data-id').click();
// }


function computerTurn() {
    for (var i = 0; i < 2; i++) {
        var randomIndex = Math.floor(Math.random() * cards.length);
        if (cardsInPlay.includes(randomIndex.toString())) {
            i--
            continue
        }
        var randomCard = document.querySelector(`[data-id="${randomIndex}"]`);
        randomCard.click();
    }
};

//animations for cards turning over
//timer
//attempts score

/**
 * computer vs human
 * btn: pick multiplayer
 * or
 * btn: computer
 * computer turn
 * first turn:empty cardArray-two random cards
 * second turn: depending on third card flipped, decide to flip new card or
 * previous card, if
 *
 * how to separate and organize different modes
 * computer mode - easy, med, hard mode?
 * multiplayer -current code
 *
 */
