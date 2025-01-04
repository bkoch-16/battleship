const Player = require("./Player/player");
const Gameboard = require("./Board/board");
const Ship = require("./Ship/ship");
const css = require("./styles.css");

const board1 = new Gameboard();
const player1 = new Player("real", board1);
const ship1 = new Ship(3, 0, false);
board1.placeShip(ship1, ["A1", "A2", "A3"]);

const board2 = new Gameboard();
const player2 = new Player("real", board2);
const ship2 = new Ship(3, 0, false);
board2.placeShip(ship2, ["C1", "C2", "C3"]);


const playerOneTiles = document.querySelectorAll("#playerOne .tile")
playerOneTiles.forEach(tile => {
    tile.addEventListener("click", () => {
        if (board1.checkSink()) {
            alert("Player 2 wins!")
        } else if (board2.checkSink()) {
            alert("Player 1 wins!")
        } else {
            board1.receiveAttack(tile.id)
            board1.renderBoard("red", "playerOne")
            if (board1.checkSink()) {
                alert("Game over, player 2 wins!")
            }
        }
    })
})

const playerTwoTiles = document.querySelectorAll("#playerTwo .tile")
playerTwoTiles.forEach(tile => {
    tile.addEventListener("click", () => {
        if (board1.checkSink()) {
            alert("Player 2 wins!")
        } else if (board2.checkSink()) {
            alert("Player 1 wins!")
        } else {
            board2.receiveAttack(tile.id)
            board2.renderBoard("lightblue", "playerTwo")
            if (board2.checkSink()) {
                alert("Game over, player 1 wins!")
            }
        }
    })
})
