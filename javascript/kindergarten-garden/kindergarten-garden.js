var Garden = function(garden, students) {
  var rowOne = garden.split('\n')[0],
      rowTwo = garden.split('\n')[1],
      students = students ? students.map(function(s) { return s.toLowerCase(); }).sort() : ['alice', 'bob', 'charlie', 'david', 'eve', 'fred', 'ginny', 'harriet', 'ileana', 'joseph', 'kincaid', 'larry'],
      plantNames = { 'V': 'violets', 'R': 'radishes', 'C': 'clover', 'G': 'grass'};

  function plants(child) {
   var firstIdx = students.indexOf(child) * 2;
   return [plantNames[rowOne[firstIdx]],
           plantNames[rowOne[firstIdx+1]],
           plantNames[rowTwo[firstIdx]],
           plantNames[rowTwo[firstIdx+1]]
          ];
  };
  
  for (var i = 0; i < students.length; i++) {
    this[students[i]] = plants(students[i]);
  }
};

module.exports = Garden;