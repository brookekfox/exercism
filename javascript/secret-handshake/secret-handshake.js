var SecretHandshake = function(people) {
  if (typeof people === 'string') {
    throw new Error('Handshake must be a number');
  }
  this.numberOfPeople = people;
  this.handshakes = {
    1:    'wink',
    10:   'double blink',
    100:  'close your eyes',
    1000: 'jump'
  }
};

SecretHandshake.prototype.commands = function () {
  var handshakeCommands = [],
      binary            = decimalToBinary(this.numberOfPeople),
      isReverse         = true,
      values            = [10000, 1000, 100, 10, 1];
  while (binary > 0) {
    if (binary >= 10000) {
      isReverse = false;
      binary -= 10000;
    } else if (binary >= 1000) {
      handshakeCommands.push(this.handshakes[1000]);
      binary -= 1000;
    } else if (binary >= 100) {
      handshakeCommands.push(this.handshakes[100]);
      binary -= 100;
    } else if (binary >= 10) {
      handshakeCommands.push(this.handshakes[10]);
      binary -= 10;
    } else if (binary >= 1) {
      handshakeCommands.push(this.handshakes[1]);
      binary -= 1;
    }
  }
  if (isReverse) { handshakeCommands = handshakeCommands.reverse(); }
  return handshakeCommands;
}

function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}

module.exports = SecretHandshake;