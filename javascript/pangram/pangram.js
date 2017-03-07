var Pangram = function(string) {
  this.pangram = string;
};

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

Pangram.prototype.isPangram = function() {
  var pangram = this.pangram.toLowerCase();
  var matches = pangram.match(/[a-z]/gi) ? pangram.match(/[a-z]/gi).filter(onlyUnique) : [];
  if (matches.length == 26) {
    return true;
  } else {
    return false;
  }
};

module.exports = Pangram;