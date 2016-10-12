'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('war', []);

var deck = [{"value": 14, "card": "A of Hearts"},
    {"value": 2, "card": "2 of Hearts"},
    {"value": 3, "card": "3 of Hearts"},
    {"value": 4, "card": "4 of Hearts"},
    {"value": 5, "card": "5 of Hearts"},
    {"value": 6, "card": "6 of Hearts"},
    {"value": 7, "card": "7 of Hearts"},
    {"value": 8, "card": "8 of Hearts"},
    {"value": 9, "card": "9 of Hearts"},
    {"value": 10, "card": "10 of Hearts"},
    {"value": 11, "card": "J of Hearts"},
    {"value": 12, "card": "Q of Hearts"},
    {"value": 13, "card": "K of Hearts"},
    {"value": 14, "card": "A of Diamonds"},
    {"value": 2, "card": "2 of Diamonds"},
    {"value": 3, "card": "3 of Diamonds"},
    {"value": 4, "card": "4 of Diamonds"},
    {"value": 5, "card": "5 of Diamonds"},
    {"value": 6, "card": "6 of Diamonds"},
    {"value": 7, "card": "7 of Diamonds"},
    {"value": 8, "card": "8 of Diamonds"},
    {"value": 9, "card": "9 of Diamonds"},
    {"value": 10, "card": "10 of Diamonds"},
    {"value": 11, "card": "J of Diamonds"},
    {"value": 12, "card": "Q of Diamonds"},
    {"value": 13, "card": "K of Diamonds"},
    {"value": 14, "card": "A of Clubs"},
    {"value": 2, "card": "2 of Clubs"},
    {"value": 3, "card": "3 of Clubs"},
    {"value": 4, "card": "4 of Clubs"},
    {"value": 5, "card": "5 of Clubs"},
    {"value": 6, "card": "6 of Clubs"},
    {"value": 7, "card": "7 of Clubs"},
    {"value": 8, "card": "8 of Clubs"},
    {"value": 9, "card": "9 of Clubs"},
    {"value": 10, "card": "10 of Clubs"},
    {"value": 11, "card": "J of Clubs"},
    {"value": 12, "card": "Q of Clubs"},
    {"value": 13, "card": "K of Clubs"},
    {"value": 14, "card": "A of Spades"},
    {"value": 2, "card": "2 of Spades"},
    {"value": 3, "card": "3 of Spades"},
    {"value": 4, "card": "4 of Spades"},
    {"value": 5, "card": "5 of Spades"},
    {"value": 6, "card": "6 of Spades"},
    {"value": 7, "card": "7 of Spades"},
    {"value": 8, "card": "8 of Spades"},
    {"value": 9, "card": "9 of Spades"},
    {"value": 10, "card": "10 of Spades"},
    {"value": 11, "card": "J of Spades"},
    {"value": 12, "card": "Q of Spades"},
    {"value": 13, "card": "K of Spades"}];

function Game() {

}


app.controller("game", ["$scope", function ($scope) {
    $scope.thisGame = new Game();
    $scope.winner = false;
    $scope.players = [
        {name: 'Bob', cardsArr: [], totalCards: 0},
        {name: 'Joyce', cardsArr: [], totalCards: 0}
    ];

    $scope.addPlayer = function () {

    }
    function shuffle(arr) {
        var ci = arr.length;
        var tempValue;
        var randomIndex;
        while (0 !== ci) {
            randomIndex = Math.floor(Math.random() * ci);
            ci -= 1;

            tempValue = arr[ci];
            arr[ci] = arr[randomIndex];
            arr[randomIndex] = tempValue;
        }
        return arr;
    }

    $scope.newDeck = shuffle(deck);

    while ($scope.newDeck.length > 0) {
        $scope.players[0].cardsArr.push($scope.newDeck.pop());
        $scope.players[1].cardsArr.push($scope.newDeck.pop());
    }

    $scope.players[0].totalCards = $scope.players[0].cardsArr.length;
    $scope.players[1].totalCards = $scope.players[1].cardsArr.length;

    $scope.playHand = function () {
        if ($scope.players[0].cardsArr.length > 0) {
            $scope.player1card = $scope.players[0].cardsArr.pop();
        } else {
            console.log("player 2 has won");
            $scope.winner = "Joyce";
        }
        if ($scope.players[1].cardsArr.length > 0) {
            $scope.player2card = $scope.players[1].cardsArr.pop();
        } else {
            console.log("player 1 has won");
            $scope.winner = "Bob";
        }
        if ($scope.player1card.value > $scope.player2card.value) {
            $scope.players[0].cardsArr.unshift($scope.player2card, $scope.player1card);
            $scope.result = "Bob has won this hand";
        } else if ($scope.player1card.value == $scope.player2card.value) {

            console.log("cards are equel in value");

        } else {
            $scope.players[1].cardsArr.unshift($scope.player1card, $scope.player2card);
            $scope.result = "Joyce has won this hand";
        }
        $scope.players[0].totalCards = $scope.players[0].cardsArr.length;
        $scope.players[1].totalCards = $scope.players[1].cardsArr.length;

    }

}]);
