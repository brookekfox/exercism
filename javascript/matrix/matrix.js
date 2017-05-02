var Matrix = function(elements) {
  this.rows = elements.split('\n').map((r) => { return r.split(' ').map((e) => { return parseInt(e); }); } );
  var height = this.rows.length,
      width = this.rows[0].length;
  this.columns = [];
  for (var w = 0; w < width; w++) {
    var column = [];
    for (var h = 0; h < height; h++) {
      column.push(this.rows[h][w]);
    }
    this.columns.push(column);
  }
};

module.exports = Matrix;