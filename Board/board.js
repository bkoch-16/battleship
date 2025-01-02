export class Gameboard {
  constructor() {
    this.ships = [];
    this.board = {};
    this.shotHit = {};
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
      for (const element of coord) {
        this.board[element] = newShip;
      }
      this.ships.push(newShip);
      return true;
    }
  }

  receiveAttack(target) {
    if (this.shotHit[target] === undefined) {
      if (this.board[target]) {
        this.board[target].hit();
        this.shotHit[target] = true;
        return true;
      } else {
        this.shotHit[target] = false;
        return false;
      }
    } else return "repeat";
  }

  checkSink() {
    for (const ship of this.ships) {
      if (ship.sunk === false) {
        return false;
      }
    }
    return true;
  }

  renderBoard() {
    for (const tile in this.board) {
      const activeTile = document.querySelector("#" + tile);
      activeTile.color = red;
    }
  }
}
module.exports = Gameboard;
