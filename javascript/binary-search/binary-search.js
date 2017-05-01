var BinarySearch = function(array) {
  var valid = true;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      valid = false;
      return;
    }
  }
  this.array = valid ? array : null;
};

BinarySearch.prototype.indexOf = function(target, lower, upper){
  upper = upper || this.array.length - 1;
  lower = lower || 0;
  var currentPos = lower + Math.ceil((upper - lower) / 2),
      currentElement = this.array[currentPos];
  
  if (currentElement === target) {
    return currentPos;
  } else if (upper === lower && currentElement !== target) {
    return -1;
  }

  currentElement > target ? upper = currentPos : lower = currentPos;
  return this.indexOf(target, lower, upper);
};

module.exports = BinarySearch;