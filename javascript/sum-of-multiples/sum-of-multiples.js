function SumOfMultiples(array) {
  array = array || [];
  return {
    to: function(upperLimit) {
      var multiples = allMultiplesUpTo(array, upperLimit);
      multiples = !multiples.length ? 0 : multiples.reduce((a, b) => { return a + b });
      return multiples;
    }
  }
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

function allMultiplesUpTo(array, upperLimit) {
  var multiples = [];
  array.forEach((element) => {
    for (var i = 1; i < Math.ceil(upperLimit / element); i++) { multiples.push(element * i) }
  });
  return multiples.filter(onlyUnique);
}

module.exports = SumOfMultiples;
