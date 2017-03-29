var Clock = function() {};

Clock.prototype.at = function(hour, minute) {
  var hourOffset = 0;
  if (minute === undefined || (minute >= 0 && minute <= 59)) {
    minute = (minute !== undefined) ? minute.toString() : '0';
  } else if (minute >= 60) {
    for (var i = minute; i >= 60; i = i - 60) {
      hourOffset++;
    }
    minute = minute % 60;
    minute = minute < 0 ? (minute + 60).toString() : minute.toString();
  } else if (minute < 0) {
    for (var i = minute; i < 0; i = i + 60) {
      hourOffset--;
    }
    minute = minute % 60;
    minute = minute < 0 ? (minute + 60).toString() : minute.toString();
  }
  var minutes = '',
      hours = (hour + hourOffset) % 24;
  hour = hours < 0 ? (hours + 24).toString() : hours.toString();
  minutes = (minute.length === 1) ? '0' + minute : minute;
  hours = (hour.length === 1) ? '0' + hour : hour;

  return hours + ':' + minutes;
}

Clock.prototype.plus = function(minute) {
  
}

module.exports = Clock;
