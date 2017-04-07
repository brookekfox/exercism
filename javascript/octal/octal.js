var Octal = function(octal) {
  this.octal = octal.split('').map(function(v) { return parseInt(v); });
};

Octal.prototype.toDecimal = function() {
  var decimal = 0;
  for (var i = 0; i < this.octal.length; i++) {
    if (isNaN(this.octal[i]) || this.octal[i] > 7 || this.octal[i] < 0) { return 0; }
    decimal += this.octal[i] * (8 ** (this.octal.length - (i+1)));
  }
  return decimal;
}

module.exports = Octal;
