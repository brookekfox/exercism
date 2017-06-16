function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) { return false; }
  }
  return true;
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

function primeFactors(num) {
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

function isPSmooth(num, p) {
  // prime factors of num
  var factors = primeFactors(num);
  // has no prime factors larger than p
  return factors[factors.length - 1] <= p;
}

function getSum(total, num) {
  return total + num;
}

function sequenceOf47SmoothTriangularNumbers(upperLim) {
  var seq = [];
  for (var n = 0; n <= upperLim; n++) {
    var triNum = (n * (n + 1)) / 2;
    if (isPSmooth(triNum, 47)) {
      seq.push(triNum);
    }
  }
  return seq.reduce(getSum);
}

module.exports = sequenceOf47SmoothTriangularNumbers;