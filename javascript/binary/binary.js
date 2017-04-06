var Binary = function(binary) {
  this.binary = binary.split('').map(function(v) { return parseInt(v); });
};

Binary.prototype.toDecimal = function() {
  var decimal = 0;
  for (var i = 0; i < this.binary.length; i++) {
    if (isNaN(this.binary[i]) || this.binary[i] > 1 || this.binary[i] < 0) { return 0; }
    decimal += this.binary[i] * (2 ** (this.binary.length - (i+1)));
  }
  return decimal;
}

module.exports = Binary;
