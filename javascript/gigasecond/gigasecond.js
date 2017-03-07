var Gigasecond = function(originalDate) {
  this.originalDate = originalDate.getTime();
};

Gigasecond.prototype.date = function() {
  return new Date(this.originalDate + 1000000000000);
};

module.exports = Gigasecond;