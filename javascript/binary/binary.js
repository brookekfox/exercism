var Binary = function() {
  this.students = {};
};

Binary.prototype.roster = function() {
  return this.students;
}

Binary.prototype.add = function(name, grade) {
  if (this.students[grade]) {
    this.students[grade].push(name);
    this.students[grade].sort();
  } else {
    this.students[grade] = [name];
  }
}

Binary.prototype.grade = function(grade) {
  return this.students[grade] || [];
}

module.exports = Binary;
