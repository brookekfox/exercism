var Matrix = require('./matrix');

describe('Matrix', function () {

  it('can extract a row', function () {
    expect(new Matrix('1 2\n10 20').rows[0]).toEqual([1, 2]);
  });

  it('can extract the other row', function () {
    expect(new Matrix('9 8 7\n19 18 17').rows[1]).toEqual([19, 18, 17]);
  });

  it('can extract a column', function () {
    expect(new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1])
      .toEqual([1903, 3, 4]);
  });

  it('can extract a row', function () {
    expect(new Matrix('0 1 2 3 4\n5 6 7 8 9\n10 11 12 13 14\n15 16 17 18 19').rows[3])
      .toEqual([15,16,17,18,19]);
  });

  it('can extract a column', function () {
    expect(new Matrix('0 1 2 3 4\n5 6 7 8 9\n10 11 12 13 14\n15 16 17 18 19').columns[2])
      .toEqual([2,7,12,17]);
  });

});