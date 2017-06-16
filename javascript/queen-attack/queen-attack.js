function Queens(position) {
  position = position || { white: [0,3], black: [7,3] };
  var whitePosition = new Position(position.white);
      blackPosition = new Position(position.black);

  if (whitePosition.equals(blackPosition)) {
    throw new Error("Queens cannot share the same space");
  }

  var canAttackHorizontally = function() {
    return whitePosition.row === blackPosition.row;
  }
  var canAttackVertically = function() {
    return whitePosition.column === blackPosition.column;
  }
  var canAttackDiagonally = function() {
    var rowDifference = whitePosition.row - blackPosition.row;
    var columnDifference = whitePosition.column - blackPosition.column;
    return Math.abs(rowDifference) === Math.abs(columnDifference);
  }

  var board = new Board(position);

  var canAttack = function() {
    return canAttackHorizontally() || canAttackVertically() || canAttackDiagonally();
  }

  return {
    white: whitePosition.toArray(),
    black: blackPosition.toArray(),
    toString: board.toString,
    canAttack: canAttack
  }
}

function Board(position) {
  var WIDTH = 8, HEIGHT = 8, EMPTY_SQUARE = '_',
      WHITE = 'W', BLACK = 'B';
  var board = [];
  for (var rowNumber = 0; rowNumber < HEIGHT; rowNumber++) {
    board.push(new Array(WIDTH+1).join(EMPTY_SQUARE).split(''));
  }
  board[position.white[0]][position.white[1]] = WHITE;
  board[position.black[0]][position.black[1]] = BLACK;

  this.toString = function() {
    return board.map((row) => { return row.join(' ') }).join('\n') + '\n';
  }
}

function Position(position) {
  this.row = position[0];
  this.column = position[1];
  this.equals = function(otherPosition) {
    return this.row === otherPosition.row && this.column === otherPosition.column;
  }
  this.toArray = function() {
    return [this.row, this.column];
  }
}

module.exports = Queens;