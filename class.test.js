const Ship = require("./class");
const ship = new Ship(5, 5, false);

test("Test isSunk function", () => {
  expect(ship.isSunk()).toBeTruthy();
});
