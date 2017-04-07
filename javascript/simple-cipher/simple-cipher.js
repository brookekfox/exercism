var LETTERS = 'abcdefghijklmnopqrstuvwxyz';

function SimpleCipher(key) {
  if (key === '') {
    throw new Error('Bad key');
  }
  if (key && (key.toUpperCase() === key || /[0-9]/g.test(key))) {
    throw new Error('Bad key');
  }
  this.key = key || generateRandomKey();
};

function generateRandomKey() {
  var randomKey = '';
  for (i = 0; i < 50; i++) {
    var idx = Math.floor(Math.random() * LETTERS.length);
    randomKey += LETTERS[idx];
  }
  return randomKey;
}

SimpleCipher.prototype.encode = function(string) {
  var characters   = string.split(''),
      encodedChars = [],
      self         = this;
  characters.forEach(function(character, idx) {
    var newIndex = LETTERS.indexOf(character) + LETTERS.indexOf(self.key[idx]);
    if (newIndex >= LETTERS.length) {
      newIndex -= LETTERS.length;
    }
    encodedChars.push(LETTERS[newIndex]);
  });
  return encodedChars.join('');
}

SimpleCipher.prototype.decode = function(string) {
  var characters   = string.split(''),
      encodedChars = [],
      self         = this;
  characters.forEach(function(character, idx) {
    var newIndex = LETTERS.indexOf(character) - LETTERS.indexOf(self.key[idx]);
    if (newIndex < 0) {
      newIndex += LETTERS.length;
    }
    encodedChars.push(LETTERS[newIndex]);
  });
  return encodedChars.join('');
}

module.exports = SimpleCipher;