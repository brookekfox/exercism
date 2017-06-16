function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) { return false; }
  }
  return true;
}

function pandigitalPrimeNumbers(digits) {
  return allPermutations(digits).filter(isPrime);
}

var permArr = [],
    usedChars = [];

function allPermutations(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    allPermutations(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr.map((perm) => {
    return parseInt(perm.join(''));
  });
}

console.log(pandigitalPrimeNumbers([1,2,3,4,5,6]));
