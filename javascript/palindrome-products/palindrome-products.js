var Palindrome = function (factors) {
  this.max = factors.maxFactor || 1;
  this.min = factors.minFactor || 0;
  this.palindromes = [];
}

Palindrome.prototype.generate = function () {
  var palindromes = [];
  for (var i = this.min; i < this.max; i++) {
    for (var j = this.min+1; j <= this.max; j++) {
      var product = i*j, factors = [i,j];
      if (isPalindromic(product)) {
        palindromes.push({
          product: product,
          factors: factors
        });
      }
    }
  }
  this.palindromes = palindromes.sort(sortByProduct);
}

Palindrome.prototype.largest = function () {
  var largestPalindrome = this.palindromes[this.palindromes.length - 1].product,
      allLargest = findOtherProducts(this.palindromes, largestPalindrome),
      factors = removeDuplicates(allLargest.map((p) => { return p.factors; }));
  return {
    value: largestPalindrome,
    factors: factors
  }
}

Palindrome.prototype.smallest = function () {
  var smallestPalindrome = this.palindromes[0].product,
      allSmallest = findOtherProducts(this.palindromes, smallestPalindrome),
      factors = removeDuplicates(allSmallest.map((p) => { return p.factors; }));
  return {
    value: smallestPalindrome,
    factors: factors
  }
}

function findOtherProducts(array, target) {
  return array.filter(function(pal) {
    return pal.product === target;
  });
}

function removeDuplicates(array) {
  return array.map((e) => { return e.sort((a,b) => { return a-b; } ); }).unique();
}

Array.prototype.unique = function() {
  var n = {}, r=[];
  for(var i = 0; i < this.length; i++) {
    if (!n[this[i]]) {
      n[this[i]] = true; 
      r.push(this[i]); 
    }
  }
  return r;
}

function sortByProduct(a, b){
  var keyA = a.product,
      keyB = b.product;
  if(keyA < keyB) return -1;
  if(keyA > keyB) return 1;
  return 0;
}

function isPalindromic(num) {
  var forward = num.toString().split(''),
      backward = num.toString().split('').reverse();
  for (var i = 0; i < forward.length; i++) {
    if (forward[i] != backward[i]) {
      return false;
    }
  }
  return true;
}

module.exports = Palindrome;