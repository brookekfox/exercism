var Proverb = function(words) {
  this.words = Object.values(arguments);
  this.qualifier = '';
  for (var i = 0; i < this.words.length; i++) {
    if (typeof this.words[i] === 'object') {
      this.qualifier = this.words[i].qualifier + ' ';
      this.words.splice(i, 1);
    }
  }
};

Proverb.prototype.toString = function() {
  var lines = "";
  for(var i = 0; i < this.words.length - 1; i++) {
    lines += "For want of a " + this.words[i] + " the " + this.words[i+1] + " was lost." + "\n";
  }
  return lines + "And all for the want of a " + this.qualifier + this.words[0] + ".";
};

module.exports = Proverb;