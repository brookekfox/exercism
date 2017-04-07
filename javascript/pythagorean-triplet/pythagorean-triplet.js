var PythagoreanTriplet = function(a, b, c) {
  this.sum = function() {
    return a + b + c;
  }
  
  this.product = function() {
    return a * b * c;
  }
  
  this.isPythagorean = function() {
    if (a ** 2 + b ** 2 === c ** 2 ||
        a ** 2 + c ** 2 === b ** 2 ||
        b ** 2 + c ** 2 === a ** 2 ) {
      return true;
    } else {
      return false;
    }
  }
  
  this.sumsTo = function(sum) {
    return sum === null || sum === undefined || sum === this.sum();
  }
};

PythagoreanTriplet.where = function(limits) {
  var maxFactor = limits.maxFactor || 100,
      minFactor = limits.minFactor || 1,
      triplets  = [];
  for (var a = minFactor; a < maxFactor - 1; a++) {
    for (var b = a + 1; b < maxFactor; b++) {
      var c = Math.sqrt((a * a) + (b * b));
      var trip = new PythagoreanTriplet(a, b, c);
      if (Math.round(c) === c && trip.sumsTo(limits.sum)) {
        triplets.push(trip);
      }
    }
  }
  return triplets;
}

module.exports = PythagoreanTriplet;