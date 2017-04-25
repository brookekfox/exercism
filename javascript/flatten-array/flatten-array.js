var Flattener = function() {
  this.flattenedArray = [];
};

Flattener.prototype.flatten = function (array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == null) {
      continue;
    } else if (typeof array[i] === 'object') {
      this.flatten(array[i]);
    } else {
      this.flattenedArray.push(array[i]);
    }
  }
  return this.flattenedArray;
}

module.exports = Flattener;