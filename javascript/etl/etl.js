var ETL = function() {};

ETL.prototype.transform = function(obj) {
  var points = Object.keys(obj);
  var newObj = {};
  for (var i = 0; i < points.length; i++) {
    var letters = obj[points[i]];
    for (var j = 0; j < letters.length; j++) {
      letters[j] = letters[j].toLowerCase();
      newObj[letters[j]] = parseInt(points[i]);
    }
  }
  return newObj;
}

module.exports = ETL;
