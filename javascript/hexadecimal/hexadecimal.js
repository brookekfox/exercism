var Hexadecimal = function(hexadecimal) {
  this.hexadecimal = hexadecimal;
}

Hexadecimal.prototype.toDecimal = function() {
  return this.hexadecimal.split('').reverse().map(hexToDec).reduce(function(total, digit, power) {
    return total + digit * Math.pow(16, power);
  }, 0) || 0;
};

function hexToDec(digit) {
  if (digit.match(/[0-9]/)) {
    return parseInt(digit);
  } else if (digit.match(/[a-f]/)) {
    return digit.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
  } else {
    return NaN;
  }
}

module.exports = Hexadecimal;