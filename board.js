class Gameboard {
    constructor() {
        this.ships = []
        this.board = {}
    }

    placeShip(newShip, coord) {
        if (coord.length !== newShip.length) {
            return false
        }
        else return true

    }
}
module.exports = Gameboard