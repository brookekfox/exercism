var Sieve = function(limit) {
   var numbers = [], allNumbers = [];
   for (var i = 2; i <= limit; i++) {
     numbers.push(i);
     allNumbers.push(i);
   }
   numbers.forEach(function(val) {
     if (isPrime(val)) {
       var multiples = allNumbers.map(function(e) { return val * e });
       multiples.forEach(function(m) {
         if (numbers.indexOf(m) !== -1) {
           numbers.splice(numbers.indexOf(m), 1);
         }
       });
     }
   });
   this.primes = numbers;
};

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = Sieve;