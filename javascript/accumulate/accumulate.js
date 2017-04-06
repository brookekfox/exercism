function accumulate(array, fn) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result[i] = fn(array[i]);
  }
  return result;
}

module.exports = accumulate;
