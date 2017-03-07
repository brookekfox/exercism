var FoodChain = function() {};

FoodChain.prototype.matches = function(possibilities) {
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

module.exports = FoodChain;