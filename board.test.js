const Gameboard = require("./board");
const Ship = require("./ship");

const board = new Gameboard();
const ship = new Ship(5, 0, false);

test("Test failed ship placement on board missing values", () => {
  expect(board.placeShip(ship, ["C3", "C4"])).toBe(false);
});

test("Test failed ship placement on board out of bounds", () => {
  expect(board.placeShip(ship, ["A0", "A1", "A2", "A3", "A4"])).toBe(false);
});

test("Test succeeded ship placement on board", () => {
  expect(board.placeShip(ship, ["C3", "C4", "C5", "C6", "C7"])).toBe(true);
});

test("Test ship placement storage", () => {
  expect(board.board).toEqual({
    C3: ship,
    C4: ship,
    C5: ship,
    C6: ship,
    C7: ship,
  });
});
console.log(board.ships);
test("Test ship placement list", () => {
  expect(board.ships).toEqual([ship]);
});

test("Test shot that hits a ship", () => {
  board.receiveAttack("C4");
  expect(board.ships[0].hits).toBe(1);
});

test("Test shot that misses a ship", () => {
  board.receiveAttack("A1");
  expect(board.shotHit).toEqual({ A1: false, C4: true });
});

test("Test repeated shot that hits a ship", () => {
  expect(board.receiveAttack("C4")).toBe("repeat");
});

test("Check if all ships are sunk", () => {
  expect(board.checkSink()).toBeFalsy();
});

test("Shink ships then check if they're sunk", () => {
  board.receiveAttack("C3");
  board.receiveAttack("C5");
  board.receiveAttack("C6");
  board.receiveAttack("C7");
  expect(board.checkSink()).toBeTruthy();
});
