const Gameboard = require("./board")
const Ship = require("./ship")

const board = new Gameboard()
const ship = new Ship(5, 0, false)

board.placeShip(ship)
test("Test ship placement on board", () => {
    expect(board.ships.length).toBeGreaterThan(0);
});