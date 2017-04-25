var Wordy = {
  WordProblem: function(question) {
    this.question = question;
    this.compare = function(a,b) {
      if (a.idx < b.idx)
        return -1;
      if (a.idx > b.idx)
        return 1;
      return 0;
    }
  },
  ArgumentError: function() {}
}

Wordy.WordProblem.prototype.answer = function () {
  var q = this.question,
      posNumbers = q.match(/ \d{1,}/g) || [],
      negNumbers = q.match(/-\d{1,}/g) || [],
      operations = q.match(/plus|minus|multiplied|divided/gi) || [];

  if (operations.length === 0) { throw new Error(); }

  var indices = posNumbers.concat(negNumbers).map(function(n) {
    return { number: parseInt(n), idx: q.indexOf(n) };
  }).sort(this.compare);
  var numbers = indices.map(function(o) { return o.number; });
  var total = numbers[0];
  for(var i = 1; i < numbers.length; i++) {
    var operation = operations[i-1];
    if (operation === 'plus') {
      total += numbers[i];
    } else if (operation === 'minus') {
      total -= numbers[i];
    } else if (operation === 'multiplied') {
      total *= numbers[i];
    } else if (operation === 'divided') {
      total /= numbers[i];
    }
  }
  return total;
}

module.exports = Wordy;