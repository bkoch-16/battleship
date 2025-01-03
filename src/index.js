const Player = require("./Player/player");
const Gameboard = require("./Board/board");
const Ship = require("./Ship/ship");
const css = require("./styles.css");

const board1 = new Gameboard();
const player1 = new Player("real", board1);
const ship1 = new Ship(3, 0, false);
board1.placeShip(ship1, ["A1", "A2", "A3"]);
board1.renderBoard("red", "playerOne");


const board2 = new Gameboard();
const player2 = new Player("real", board2);
const ship2 = new Ship(3, 0, false);
board2.placeShip(ship2, ["C1", "C2", "C3"]);
board2.renderBoard("blue", "playerTwo")
