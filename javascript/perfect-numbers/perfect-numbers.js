var PerfectNumbers = function() {
  this.perfect = 'perfect';
  this.abundant = 'abundant';
  this.deficient = 'deficient';
  this.invalid = 'Classification is only possible for natural numbers.';
};

PerfectNumbers.prototype.classify = function(value) {
  if (value <= 0) {
    return this.invalid;
  } else {
    var sum = aliquotSum(value);
    if (sum === value) {
      return this.perfect;
    } else if (sum > value) {
      return this.abundant;
    } else {
      return this.deficient;
    }
  }
}

function aliquotSum(value) {
  var sum = 0;
  for (var i = 1; i < value; i++) {
    if (value % i === 0) {
      sum += i;
    }
  }
  return sum;
}

module.exports = PerfectNumbers;
