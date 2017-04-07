var Series = function(series) {
  this.digits = series.split('').map(function(d) { return parseInt(d) });
  
  this.slices = function(size) {
    var sliced = [], singleSlice = [];
    if (this.digits.length < size) { throw new Error('Slice size is too big.') }
    for (var i = 0; i < this.digits.length; i++) {
      singleSlice = [];
      for (var j = 0; j < size; j++) {
        if (this.digits[i + j] != undefined || this.digits[i + j] != null) {
          singleSlice.push(this.digits[i + j]);
        }
      }
      sliced.push(singleSlice);
    }
    sliced.forEach(function(slice) {
      if (slice.length !== size) {
        sliced.splice(sliced.indexOf(slice));
      }
    });
    return sliced;
  }
};

module.exports = Series;