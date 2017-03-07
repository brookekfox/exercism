var FoodChain = function() {};

FoodChain.prototype.verse = function(num) {
  var song = "",
      bird = "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n",
      cat  = "She swallowed the cat to catch the bird.\n",
      dog  = "She swallowed the dog to catch the cat.\n",
      goat = "She swallowed the goat to catch the dog.\n",
      cow  = "She swallowed the cow to catch the goat.\n",
      last = "She swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n";
  if (num == 1) {
    song = "I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n";
  } else if (num == 2) {
    song += "I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n";
    song += last;
  } else if (num == 3) {
    song += "I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!\n";
    song += bird;
    song += last;
  } else if (num == 4) {
    song += "I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!\n";
    song += cat;
    song += bird;
    song += last;
  } else if (num == 5) {
    song += "I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!\n";
    song += dog;
    song += cat;
    song += bird;
    song += last;
  } else if (num == 6) {
    song += "I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!\n";
    song += goat;
    song += dog;
    song += cat;
    song += bird;
    song += last;
  } else if (num == 7) {
    song += "I know an old lady who swallowed a cow.\nI don\'t know how she swallowed a cow!\n";
    song += cow;
    song += goat;
    song += dog;
    song += cat;
    song += bird;
    song += last;
  } else if (num == 8) {
    song = "I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n";
  }
  return song;
};

FoodChain.prototype.verses = function (start, finish) {
  var song = "";
  for (var i = start; i <= finish; i++) {
    song += this.verse(i);
    song += "\n";
  }
  return song;
}

module.exports = FoodChain;
