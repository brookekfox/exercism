var Luhn = function(string) {
  string = string.replace(/[\s]/g, '');
  if (string.length < 2) {
    this.valid = false;
  } else {
    var digits = string.split('').map(function(v) { return parseInt(v) }),
        sum    = 0;
    for (var i = 0; i < digits.length; i++) {
      if (i % 2 !== 0) {
        digits[i] *= 2;
        digits[i] = digits[i] > 9 ? digits[i] - 9 : digits[i];
      }
      sum += digits[i];
    }
    this.valid = sum % 10 === 0;
  }
};

module.exports = Luhn;
