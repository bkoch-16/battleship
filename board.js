class Gameboard {
    constructor() {
        this.ships = []
    }

    placeShip(newShip) {
        this.ships.push(newShip)
    }

}

module.exports = Gameboard