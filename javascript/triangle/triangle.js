var Triangle = function(one, two, three) {
  this.one = one || 0;
  this.two = two || 0;
  this.three = three || 0;
};

Triangle.prototype.kind = function() {
  if ((this.one <= 0 || this.two <= 0 || this.three <= 0) ||
      (this.one + this.two <= this.three ||
       this.one + this.three <= this.two ||
       this.two + this.three <= this.one)) {
    throw new Error();
  } else {
    if (this.one === this.two && this.two === this.three) {
      return 'equilateral';
    } else if (this.one === this.two || this.one === this.three || this.two === this.three) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;
