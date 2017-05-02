var Robot = function() {
  this.directions = ['north','east','south','west'];
  this.bearing = 'north';
  this.coordinates = [0,0];
  this.instructionNames = {
    'L': 'turnLeft',
    'R': 'turnRight',
    'A': 'advance'
  };
};

Robot.prototype.orient = function (direction) {
  if (this.directions.indexOf(direction) < 0) { throw new Error('Invalid Robot Bearing'); }
  this.bearing = direction;
}

Robot.prototype.turnRight = function () {
  this.bearing = this.directions[(this.directions.indexOf(this.bearing) + 1) % this.directions.length];
}

Robot.prototype.turnLeft = function () {
  var dir = this.directions.indexOf(this.bearing),
      newDir = dir - 1 < 0 ? this.directions.length - 1 : (dir - 1) % this.directions.length;
  this.bearing = this.directions[newDir];
}

Robot.prototype.at = function (x, y) {
  this.coordinates = [x,y];
}

Robot.prototype.advance = function () {
  if (this.bearing === 'north') { this.coordinates[1] += 1; }
  if (this.bearing === 'south') { this.coordinates[1] -= 1; }
  if (this.bearing === 'east') { this.coordinates[0] += 1; }
  if (this.bearing === 'west') { this.coordinates[0] -= 1; }
}

Robot.prototype.instructions = function (instructions) {
  return instructions.split('').map((item) => {
    return this.instructionNames[item];
  });
}

Robot.prototype.place = function (placement) {
  this.orient(placement.direction);
  this.at(placement.x, placement.y);
}

Robot.prototype.evaluate = function (instructions) {
  this.instructions(instructions).forEach((fn) => {
    this[fn]();
  });
}

module.exports = Robot;