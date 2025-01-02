class Gameboard {
  constructor() {
    this.ships = [];
    this.board = {};
  }

  placeShip(newShip, coord) {
    if (coord.length !== newShip.length) {
      return false;
    } else {
      for (const element of coord) {
        const letter = element.slice(0, 1).toLowerCase();
        const charCode = letter.charCodeAt(0);
        const number = element.slice(1, 2);
        if (charCode < 97 || charCode > 106 || number < 1 || number > 10) {
          return false;
        }
      }
      return true;
    }
  }
}
module.exports = Gameboard;
