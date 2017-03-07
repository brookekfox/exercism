var Isogram = function(word) {
  this.word = word;
};

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

Isogram.prototype.isIsogram = function() {
  var letters = this.word.toLowerCase().match(/[a-z\u00C0-\u017F]/gi),
      characters = letters.length || 0,
      uniqueLetters = letters.filter(onlyUnique),
      numberOfLetters = letters.filter(onlyUnique).length || 0;
  if (numberOfLetters === characters) {
    return true;
  } else if (numberOfLetters < characters) {
    return false;
  }
};

module.exports = Isogram;