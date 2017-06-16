var PascalsTriangle = function (rows) {
  this.rows = computeRows(rows);
  this.lastRow = this.rows[this.rows.length - 1];
}

function cellValue (n, k) {
  return factorial(n) / factorial(k) / factorial(n - k);
}

function computeRows(numberOfRows) {
  rows = [];
  for (var ii = 0; ii < numberOfRows; ii++) {
    var row = [];
    for (var jj = 0; jj < ii + 1; jj++) {
      row.push(cellValue(ii, jj));
    }
    rows.push(row);
  }
  return rows;
}

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}

module.exports = PascalsTriangle;