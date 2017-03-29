var Clock = function() {};

Clock.prototype.at = function(hour, minute) {
  hour = hour % 24;
  minute = minute ? minute % 60 : 0;
  minute = minute.length === 1 ? '0' + minute.toString() : minute.toString();
  console.log(hour, minute);
}

module.exports = Clock;
