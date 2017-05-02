var prime = {
  nth: function(num) {
    if (num < 1) { throw new Error('Prime is not possible'); }
    var nthPrime = 2;
    if (num > 1) {
      for (var prime = 2; 0 < num; prime++) {
        if (prime > 2 && prime % 2 === 0) { prime++; }
        if(this.isPrime(prime)) {
          nthPrime = prime;
          num--;
        }
      }
    }
    return nthPrime;
  },
  isPrime: function(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};

module.exports = prime;