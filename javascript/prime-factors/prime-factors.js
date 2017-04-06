var primeFactors = {
  for: function (num) {
    var factors = [],
        primes = primesLessThan(num);
    while (num > 1) {
      primes.forEach(function(prime) {
        if (num % prime === 0) {
          factors.push(prime);
          num = num / prime;
        }
      });
    }
    return factors.sort();
  }
}

function primesLessThan(num) {
  if (num < 2) { return []; }
  var primes = [2];
  for (var i = 3; i <= num; i+=2) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = primeFactors;
