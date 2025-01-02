class Ship {
  constructor(length, hits = 0, isSunk = false) {
    this.length = length;
    this.hits = hits;
    this.isSunk = isSunk;
  }

  isSunk() {
    return true;
  }
}

module.exports = Ship;
