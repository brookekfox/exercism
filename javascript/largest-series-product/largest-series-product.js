var Series = function(series) {
  this.series = series;
}

Series.prototype.largestProduct = function(size) {
  if (typeof size != 'number' || size < 0) { throw new Error('Invalid input.'); }
  if (size > this.series.length) { throw new Error('Slice size is too big.'); }
  if (size === 0) { return 1; }

  var seriesOfDigits = chunkString(this.series, size),
      products = seriesOfDigits.map(function(chunk) {
        if (chunk.length === size) {
          return chunk.split('').map(function(c) { return parseInt(c); }).reduce(getProd);
        } else {
          return 0;
        }
      }).sort(function(a, b){ return a-b; });
  return products[products.length - 1];
};

function chunkString(str, size) {
  var chunks = [];
  for (var i = 0; i < str.length; i++) {
    chunks.push(str.slice(i, i+size));
  }
  return chunks;
}

function getProd(total, num) {
  return total * num;
}

module.exports = Series;