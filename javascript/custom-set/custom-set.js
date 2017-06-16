var CustomSet = function(newSet) {
  this.set = newSet || [];
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

CustomSet.prototype.empty = function() {
  return !this.set.length;
}

CustomSet.prototype.contains = function(val) {
  return this.set.indexOf(val) > -1;
}

CustomSet.prototype.subset = function(subset) {
  var superSet = this.set;
  var isMemberArray = subset.set.map(function (element) {
    return superSet.indexOf(element);
  });
  return isMemberArray.indexOf(-1) === -1;
}

CustomSet.prototype.disjoint = function(set) {
  if ((this.set.length === 0 && set.set.length === 0) ||
      (this.set.length !== 0 && set.set.length === 0)) {
    return true;
  }
  var otherSet = this.set;
  var isMemberArray = set.set.map(function (element) {
    return otherSet.indexOf(element);
  });
  var uniqVals = isMemberArray.filter(onlyUnique);
  return uniqVals.length === 1 && uniqVals[0] === -1;
}

CustomSet.prototype.eql = function(set) {
  var otherSet = this.set.sort(),
      thisSet = set.set.sort();
  if (otherSet.length !== thisSet.length) { return false }
  for (var i = 0; i < otherSet.length; i++) {
    if (otherSet[i] !== thisSet[i]) {
      return false;
    }
  }
  return true;
}

CustomSet.prototype.add = function(newVal) {
  this.set.push(newVal);
  this.set = this.set.filter(onlyUnique);
  return new CustomSet(this.set);
}

CustomSet.prototype.intersection = function(set) {
  var otherSet = this.set.sort(),
      thisSet = set.set.sort(),
      intersection = [];
  thisSet.forEach(function(element) {
    if (otherSet.indexOf(element) > -1) {
      intersection.push(element);
    }
  });
  return new CustomSet(intersection);
}

CustomSet.prototype.difference = function(set) {
  var otherSet = this.set.sort(),
      thisSet = set.set.sort(),
      difference = [];
  otherSet.forEach(function(element) {
    if (thisSet.indexOf(element) === -1) {
      difference.push(element);
    }
  });
  return new CustomSet(difference);
}

CustomSet.prototype.union = function(set) {
  var otherSet = this.set.sort(),
      thisSet = set.set.sort();
  var union = otherSet.concat(thisSet).filter(onlyUnique);
  return new CustomSet(union);
}

CustomSet.prototype.clear = function() {
  return new CustomSet();
}

CustomSet.prototype.size = function() {
  return this.set.filter(onlyUnique).length;
}

CustomSet.prototype.toList = function() {
  return this.set.filter(onlyUnique).sort();
}

module.exports = CustomSet;
