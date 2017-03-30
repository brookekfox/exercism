var Words = function() {};

Words.prototype.count = function(words) {
  var counts = {};
  words = words.replace(/[,\t\n]/g, ' ').split(' ').map(function(w) {
    w = w.replace(/[-.,:()&$%^*@#!?\[\]{}"¿¡]/g, '');
    if (w.length) {
      if (w.charAt(w.length - 1) == "'" || w.charAt(0) == "'") {
        w = w.replace(/[']/, '').replace(/[']/, '');
      }
    }
    return w.toLowerCase();
  }).join(' ');

  words.split(' ').filter(onlyUnique).forEach(function(w) {
    if (w !== '') {
      var re = new RegExp('\\b' + w + '\\b', 'gi');
      counts[w] = (words.match(re) || []).length;
    }
  });
  return counts;
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

module.exports = Words;
