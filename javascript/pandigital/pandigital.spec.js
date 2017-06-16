var sequenceOf47SmoothTriangularNumbers = require('./47-smooth');

describe('47-smooth', function() {

  xit('can determine if a number is p-smooth', function() {
    expect(isPSmooth(12, 2)).toEqual(false);
    expect(isPSmooth(1620, 5)).toEqual(true);
  });

  it('can find a sequence of 47-smooth triangular numbers', function() {
    // var smoothTriangularNumbers = [ 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325, 351, 378, 406, 435, 465, 496, 528, 561, 595, 630, 666, 703, 741, 780, 820, 861, 903, 946, 990, 1035, 1081, 1128, 1176, 1225, 1275, 1326, 1485, 1540, 1596, 1653, 1953, 2016, 2080, 2145, 2346, 2415, 2775, 2850, 2926, 3003, 3240, 3321, 3570, 3655, 3741, 3828, 4095, 4186, 4278, 4371, 4465, 4560, 4851, 4950, 5050 ]; // n = 100
    // expect(sequenceOf47SmoothTriangularNumbers(100)).toEqual(116369);
    // expect(sequenceOf47SmoothTriangularNumbers(200)).toEqual(1033014);
    // expect(sequenceOf47SmoothTriangularNumbers(300)).toEqual(3321561);
    // expect(sequenceOf47SmoothTriangularNumbers(400)).toEqual(7235192);
    expect(sequenceOf47SmoothTriangularNumbers(500)).toEqual(13425177);
  });

});
