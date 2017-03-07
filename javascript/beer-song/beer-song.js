var BeerSong = function() {};

BeerSong.prototype.verse = function(num) {
  var current = num.toString(), next = num - 1;
  if (num > 2) {
    return current + " bottles of beer on the wall, " + current + " bottles of beer.\nTake one down and pass it around, " + next.toString() + " bottles of beer on the wall.\n";
  } else if (num == 2) {
    return current + " bottles of beer on the wall, " + current + " bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
  } else if (num == 1) {
    return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
  } else if (num == 0) {
    return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
  }
};

BeerSong.prototype.sing = function(start, finish = 0) {
  var verses = this.verse(start) + "\n";
  for (var i = start - 1; i > finish; i--) {
    var thisVerse = this.verse(i) + "\n";
    verses += thisVerse;
  }
  return verses + this.verse(finish);
};

module.exports = BeerSong;