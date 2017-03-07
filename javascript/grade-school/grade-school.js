var GradeSchool = function() {
  this.students = {};
};

GradeSchool.prototype.roster = function() {
  return this.students;
}

GradeSchool.prototype.add = function(name, grade) {
  if (this.students[grade]) {
    this.students[grade].push(name);
    this.students[grade].sort();
  } else {
    this.students[grade] = [name];
  }
}

GradeSchool.prototype.grade = function(grade) {
  return this.students[grade] || [];
}

module.exports = GradeSchool;
