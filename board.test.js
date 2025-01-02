const Gameboard = require("./board")
const Ship = require("./ship")

const board = new Gameboard()
const ship = new Ship(5, 0, false)


test("Test failed ship placement on board missing values", () => {
    expect(board.placeShip(ship, ["C3", "C4"])).toBe(false);
});

test("Test failed ship placement on board out of bounds", () => {
    expect(board.placeShip(ship, ["A0", "A1", "A2", "A3", "A4"])).toBe(false);
});

test("Test succeeded ship placement on board", () => {
    expect(board.placeShip(ship, ["C3", "C4", "C5", "C6", "C7"])).toBe(true);
});
