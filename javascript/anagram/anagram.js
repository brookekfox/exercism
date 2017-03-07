var Anagram = function(string) {
  this.string = string;
};

Array.prototype.equals = function(array) {
  if (!array) {
    return false;
  }
  if (this.length != array.length) {
    return false;
  }
  for (var i = 0, l=this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i])) {
        return false;
      }
    } else if (this[i] != array[i]) { 
      return false;
    }
  }
  return true;
}

Anagram.prototype.matches = function(possibilities) {
  if (arguments.length > 1 || typeof possibilities == "string") {
    possibilities = Object.values(arguments);
  }
  var letters = this.string.toLowerCase().match(/[a-z]/g).sort(),
      matches = [];
  for (var i = 0; i < possibilities.length; i++) {
    if ((letters.equals(possibilities[i].toLowerCase().match(/[a-z]/g).sort())) &&
        (this.string.toLowerCase() != possibilities[i].toLowerCase())) {
      matches.push(possibilities[i]);
    }
  }
  return matches;
};

module.exports = Anagram;