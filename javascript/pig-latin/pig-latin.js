var VOWELS                 = ['a', 'e', 'i', 'o', 'u'],
    CONSONANT_SOUNDS_TWO   = ['ch', 'qu', 'th'],
    CONSONANT_SOUNDS_THREE = ['sch', 'thr', 'squ'];

var PigLatin = {
  translate: function(string) {
    var words = string.split(' ').map(function(w) { return w.toLowerCase() });
    for (var i = 0; i < words.length; i++) {
      var one   = words[i].substring(0,1),
          two   = words[i].substring(0,2),
          three = words[i].substring(0,3);
      if (VOWELS.indexOf(one) !== -1) {
        words[i] = words[i] + 'ay';
      } else if (CONSONANT_SOUNDS_THREE.indexOf(three) !== -1) {
        words[i] = words[i].substring(3) + three + 'ay';
      } else if (CONSONANT_SOUNDS_TWO.indexOf(two) !== -1) {
        words[i] = words[i].substring(2) + two + 'ay';
      } else {
        words[i] = words[i].substring(1) + one + 'ay';
      }
    }
    return words.join(' ');
  }
};

module.exports = PigLatin;