var Strain = {
  keep: function(array, fn) {
    return createObject(array, fn)[true];
  },
  discard: function(array, fn) {
    return createObject(array, fn)[false];
  }
};

function createObject(array, fn) {
  var bools = array.map(fn),
      obj = {true: [], false: []};
  array.forEach(function(e, idx) {
    obj[bools[idx]].push(e);
  });
  return obj;
}

module.exports = Strain;
