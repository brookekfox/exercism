var LinkedList = function() {
  this.linkedList = [];
}

LinkedList.prototype.pop = function () {
  return this.linkedList.splice(this.linkedList.length - 1, 1)[0];
}

LinkedList.prototype.push = function (value) {
  this.linkedList[this.linkedList.length] = value;
}

LinkedList.prototype.shift = function () {
  return this.linkedList.splice(0, 1)[0];
}

LinkedList.prototype.unshift = function (value) {
  var newArray = [value];
  this.linkedList.forEach(function (e) { newArray[newArray.length] = e; });
  this.linkedList = newArray;
}

LinkedList.prototype.count = function () {
  return this.linkedList.length;
}

LinkedList.prototype.delete = function (value) {
  this.linkedList.splice(this.linkedList.indexOf(value), 1);
}

module.exports = LinkedList;