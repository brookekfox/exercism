var PhoneNumber = function(num) {
  this.phoneNumber = num;
};

PhoneNumber.prototype.number = function() {
  var digits = this.phoneNumber.match(/[0-9]/g);
  if (digits.length == 11 && digits[0] == 1) {
    digits.shift();
  } else if ((digits.length == 11 && digits[0] != 1) || (digits.length != 11 && digits.length != 10)) {
    digits = Array(10).fill('0');
  }
  return digits.join('');
};

PhoneNumber.prototype.areaCode = function() {
  return this.number().slice(0,3);
};

PhoneNumber.prototype.toString = function() {
  var areaCode  = this.areaCode(),
      nextThree = this.number().slice(3,6),
      lastFour  = this.number().slice(6,10);
  return "(" + areaCode + ") " + nextThree + "-" + lastFour;
};

module.exports = PhoneNumber;