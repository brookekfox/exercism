var Crypto = function(text) {
  this.text = text;
};

Crypto.prototype.normalizePlaintext = function() {
  return this.text.replace(/[,.!#$%^&\s]/g, '').toLowerCase();
}

Crypto.prototype.size = function() {
  var numOfCharacters = this.normalizePlaintext().length,
      root = Math.sqrt(numOfCharacters);
  return root === Math.floor(root) ? root : Math.sqrt(nextPerfectSquare(numOfCharacters));
}

Crypto.prototype.plaintextSegments = function() {
  var result = [], string = this.normalizePlaintext();
  for (var i = 0; i < string.length; i += this.size()) {
    result.push(string.substring(i, i + this.size()));
  }
  return result;
}

Crypto.prototype.ciphertext = function() {
  var result = '';
  for (var i = 0; i < this.size(); i++) {
    this.plaintextSegments().forEach(function(segment) { result += segment[i] || '' });
  }
  return result;
}

function nextPerfectSquare(value) {
  var perfectSquare = Math.sqrt(value) === Math.floor(Math.sqrt(value));
  while (!perfectSquare) {
    value++;
    perfectSquare = Math.sqrt(value) === Math.floor(Math.sqrt(value));
  }
  return value;
}

module.exports = Crypto;