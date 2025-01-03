/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Board/board.js":
/*!****************************!*\
  !*** ./src/Board/board.js ***!
  \****************************/
/***/ ((module) => {

eval("class Gameboard {\n  constructor() {\n    this.ships = [];\n    this.board = {};\n    this.shotHit = {};\n  }\n\n  placeShip(newShip, coord) {\n    if (coord.length !== newShip.length) {\n      return false;\n    } else {\n      for (const element of coord) {\n        const letter = element.slice(0, 1).toLowerCase();\n        const charCode = letter.charCodeAt(0);\n        const number = element.slice(1, 2);\n        if (charCode < 97 || charCode > 106 || number < 1 || number > 10) {\n          return false;\n        }\n      }\n      for (const element of coord) {\n        this.board[element] = newShip;\n      }\n      this.ships.push(newShip);\n      return true;\n    }\n  }\n\n  receiveAttack(target) {\n    if (this.shotHit[target] === undefined) {\n      if (this.board[target]) {\n        this.board[target].hit();\n        this.shotHit[target] = true;\n        return true;\n      } else {\n        this.shotHit[target] = false;\n        return false;\n      }\n    } else return \"repeat\";\n  }\n\n  checkSink() {\n    for (const ship of this.ships) {\n      if (ship.sunk === false) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  renderBoard() {\n    for (const tile in this.board) {\n      const activeTile = document.querySelector(\"#\" + tile);\n      activeTile.color = red;\n    }\n  }\n}\nmodule.exports = Gameboard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQm9hcmQvYm9hcmQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0JvYXJkL2JvYXJkLmpzPzE4ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMuYm9hcmQgPSB7fTtcbiAgICB0aGlzLnNob3RIaXQgPSB7fTtcbiAgfVxuXG4gIHBsYWNlU2hpcChuZXdTaGlwLCBjb29yZCkge1xuICAgIGlmIChjb29yZC5sZW5ndGggIT09IG5ld1NoaXAubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjb29yZCkge1xuICAgICAgICBjb25zdCBsZXR0ZXIgPSBlbGVtZW50LnNsaWNlKDAsIDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gbGV0dGVyLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IGVsZW1lbnQuc2xpY2UoMSwgMik7XG4gICAgICAgIGlmIChjaGFyQ29kZSA8IDk3IHx8IGNoYXJDb2RlID4gMTA2IHx8IG51bWJlciA8IDEgfHwgbnVtYmVyID4gMTApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjb29yZCkge1xuICAgICAgICB0aGlzLmJvYXJkW2VsZW1lbnRdID0gbmV3U2hpcDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2sodGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuc2hvdEhpdFt0YXJnZXRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkW3RhcmdldF0pIHtcbiAgICAgICAgdGhpcy5ib2FyZFt0YXJnZXRdLmhpdCgpO1xuICAgICAgICB0aGlzLnNob3RIaXRbdGFyZ2V0XSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG90SGl0W3RhcmdldF0gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSByZXR1cm4gXCJyZXBlYXRcIjtcbiAgfVxuXG4gIGNoZWNrU2luaygpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgaWYgKHNoaXAuc3VuayA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlckJvYXJkKCkge1xuICAgIGZvciAoY29uc3QgdGlsZSBpbiB0aGlzLmJvYXJkKSB7XG4gICAgICBjb25zdCBhY3RpdmVUaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIHRpbGUpO1xuICAgICAgYWN0aXZlVGlsZS5jb2xvciA9IHJlZDtcbiAgICB9XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Board/board.js\n");

/***/ }),

/***/ "./src/Player/player.js":
/*!******************************!*\
  !*** ./src/Player/player.js ***!
  \******************************/
/***/ ((module) => {

eval("class Player {\n  constructor(type, board) {\n    this.type = type;\n    this.board = board;\n  }\n}\n\nmodule.exports = Player;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGxheWVyL3BsYXllci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci9wbGF5ZXIuanM/MDgzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBib2FyZCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Player/player.js\n");

/***/ }),

/***/ "./src/Ship/ship.js":
/*!**************************!*\
  !*** ./src/Ship/ship.js ***!
  \**************************/
/***/ ((module) => {

eval("class Ship {\n  constructor(length, hits = 0, sunk = false) {\n    this.length = length;\n    this.hits = hits;\n    this.sunk = sunk;\n  }\n\n  hit() {\n    this.hits += 1;\n    this.isSunk();\n  }\n\n  isSunk() {\n    if (this.hits === this.length) {\n      this.sunk = true;\n    }\n    return this.sunk;\n  }\n}\n\nmodule.exports = Ship;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hpcC9zaGlwLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC9zaGlwLmpzPzYxMTciXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgaGl0cyA9IDAsIHN1bmsgPSBmYWxzZSkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IGhpdHM7XG4gICAgdGhpcy5zdW5rID0gc3VuaztcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICB0aGlzLmlzU3VuaygpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdW5rO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Ship/ship.js\n");

/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Player = __webpack_require__(/*! ./Player/player */ \"./src/Player/player.js\");\nconst Gameboard = __webpack_require__(/*! ./Board/board */ \"./src/Board/board.js\");\nconst Ship = __webpack_require__(/*! ./Ship/ship */ \"./src/Ship/ship.js\");\n\nconst board1 = new Gameboard();\nconst player1 = new Player(\"real\", board1);\nconst ship1 = new Ship(3, 0, false);\nboard1.placeShip(ship1, [A1, A2, A3]);\nboard1.renderGame();\nconsole.log(\"yes\");\n\nconst board2 = new Gameboard();\nconst player2 = new Player(\"real\", board2);\nconst ship2 = new Ship(3, 0, false);\nboard2.placeShip(ship2, [C1, C2, C3]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3MuanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxtQkFBTyxDQUFDLCtDQUFpQjtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUN6QyxhQUFhLG1CQUFPLENBQUMsdUNBQWE7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2xhc3MuanM/YmJiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKFwiLi9QbGF5ZXIvcGxheWVyXCIpO1xuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZShcIi4vQm9hcmQvYm9hcmRcIik7XG5jb25zdCBTaGlwID0gcmVxdWlyZShcIi4vU2hpcC9zaGlwXCIpO1xuXG5jb25zdCBib2FyZDEgPSBuZXcgR2FtZWJvYXJkKCk7XG5jb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcihcInJlYWxcIiwgYm9hcmQxKTtcbmNvbnN0IHNoaXAxID0gbmV3IFNoaXAoMywgMCwgZmFsc2UpO1xuYm9hcmQxLnBsYWNlU2hpcChzaGlwMSwgW0ExLCBBMiwgQTNdKTtcbmJvYXJkMS5yZW5kZXJHYW1lKCk7XG5jb25zb2xlLmxvZyhcInllc1wiKTtcblxuY29uc3QgYm9hcmQyID0gbmV3IEdhbWVib2FyZCgpO1xuY29uc3QgcGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJyZWFsXCIsIGJvYXJkMik7XG5jb25zdCBzaGlwMiA9IG5ldyBTaGlwKDMsIDAsIGZhbHNlKTtcbmJvYXJkMi5wbGFjZVNoaXAoc2hpcDIsIFtDMSwgQzIsIEMzXSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/class.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/class.js");
/******/ 	
/******/ })()
;