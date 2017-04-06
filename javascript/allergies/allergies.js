var Allergies = function(score) {
  this.score = score;
  this.allergyScores = {
    1:   'eggs',
    2:   'peanuts',
    4:   'shellfish',
    8:   'strawberries',
    16:  'tomatoes',
    32:  'chocolate',
    64:  'pollen',
    128: 'cats'
  };
  this.scores = [1, 2, 4, 8, 16, 32, 64, 128];
};

Allergies.prototype.list = function() {
  var listOfAllergies = [],
      validScore      = this.score % 256,
      currentScore    = validScore,
      availableScores = validScore,
      allergy;
  while (currentScore > 0) {
    if ((allergy = this.allergyScores[currentScore]) && availableScores - currentScore >= 0) {
      listOfAllergies.push(allergy);
      availableScores -= currentScore;
    }
    currentScore--;
  }
  return listOfAllergies.reverse();
}

Allergies.prototype.allergicTo = function(allergen) {
  return this.list().indexOf(allergen) !== -1;
}

module.exports = Allergies;
