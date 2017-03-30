var Acronyms = {
  parse: function(value) {
    var capitals = value.match(/[A-Z]/g);
    var firstLetters = value.replace('-', ' ').split(' ').map(function(w) {
      w = w.toUpperCase();
      return w[0];
    });
    if ((firstLetters.length > capitals.length) || value.match(/[:]/g)) {
      return firstLetters.join('');
    } else {
      return capitals.join('');
    }
  }
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

module.exports = Acronyms;
