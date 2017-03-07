var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  if (dna.match(/[^GCTA]/gi)) { throw new Error('Invalid input'); }
  
  var dnaArray = dna.split('');
  for (var i = 0; i < dnaArray.length; i++) {
    if (dnaArray[i] === 'G') {
      dnaArray[i] = 'C';
    } else if (dnaArray[i] === 'C') {
      dnaArray[i] = 'G';
    } else if (dnaArray[i] === 'T') {
      dnaArray[i] = 'A';
    } else if (dnaArray[i] === 'A') {
      dnaArray[i] = 'U';
    }
  }

  return dnaArray.join('');
};

module.exports = DnaTranscriber;