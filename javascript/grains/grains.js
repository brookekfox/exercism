var BigInt = require('./big-integer');
var Grains = function() {};

Grains.prototype.square = function(pos) {
  var grains = 1;
  if (pos === 1) {
    grains = 1;
  } else if (pos > 1) {
    grains = this.square(pos - 1) * 2;
  }
  grains = grains.toString();
  console.log(grains);
  console.log(BigInt(grains));
  return grains;
}

Grains.prototype.total = function() {
  var total = 0;
  for (var num = 1; num <= 64; num++) {
    total += parseInt(this.square(num));
  }
  return total.toString();
}

module.exports = Grains;
