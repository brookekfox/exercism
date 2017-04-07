var Trinary = function(trinary) {
  this.trinary = trinary.split('').map(function(v) { return parseInt(v); });
};

Trinary.prototype.toDecimal = function() {
  var decimal = 0;
  for (var i = 0; i < this.trinary.length; i++) {
    if (isNaN(this.trinary[i]) || this.trinary[i] > 2 || this.trinary[i] < 0) { return 0; }
    decimal += this.trinary[i] * (3 ** (this.trinary.length - (i+1)));
  }
  return decimal;
}

module.exports = Trinary;