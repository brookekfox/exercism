var RobotName = function() {
  this.name = String.fromCharCode(Math.floor((Math.random() * 26) + 65), Math.floor((Math.random() * 26) + 65)) + 
              Math.floor((Math.random() * 999) + 1).toString();
};

RobotName.prototype.reset = function() {
  this.name = String.fromCharCode(Math.floor((Math.random() * 26) + 65), Math.floor((Math.random() * 26) + 65)) + 
              Math.floor((Math.random() * 999) + 1).toString();
}

module.exports = RobotName;
