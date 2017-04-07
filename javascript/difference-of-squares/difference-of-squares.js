var DifferenceOfSquares = function(num) {
  this.squareOfSums = arraySum(firstN(num)) ** 2;
  this.sumOfSquares = arraySum(firstN(num).map(function(n) { return n ** 2 }));
  this.difference   = this.squareOfSums - this.sumOfSquares;
};

function arraySum(array) {
  var sum = 0;
  array.forEach(function(e) { sum += e });
  return sum;
}

function firstN(val) {
  var firstNNumbers = [];
  for (var i = 1; i <= val; i++) {
    firstNNumbers.push(i);
  }
  return firstNNumbers;
}

module.exports = DifferenceOfSquares;