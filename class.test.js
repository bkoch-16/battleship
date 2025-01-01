const classes = require("./class")

test("Test isSunk function", () => {
    expect(Ship.isSunk()).toBeFalsey()
})