var Raindrops = function() {};

Raindrops.prototype.convert = function(num) {
  var rain = '', factors = factorsOf(num);
  if (factors.indexOf(3) !== -1) {
    rain += 'Pling'
  }
  if (factors.indexOf(5) !== -1) {
    rain += 'Plang'
  }
  if (factors.indexOf(7) !== -1) {
    rain += 'Plong'
  }
  if (factors.indexOf(3) === -1 && factors.indexOf(5) === -1 && factors.indexOf(7) === -1) {
    rain += num;
  }
  return rain;
}

function factorsOf(value) {
  var factors = [];
  for (var i = 1; i <= value; i++) {
    if (value % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

module.exports = Raindrops;
