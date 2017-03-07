var Bob = function() {};

Bob.prototype.hey = function(string) {
  if (string.match(/[\\?]$/g) && !string.match(/[A-Z]{3,}/g)) {
    return 'Sure.';
  } else if (string == '' || string.match(/[ ]{3,}/g)) {
    return 'Fine. Be that way!';
  } else if ((string.match(/[!]/g) && string.match(/[A-Z]{4,}/g)) || string.match(/[A-Z]{4,}/g)) {
    return 'Whoa, chill out!';
  } else {
    return 'Whatever.'
  }
};

module.exports = Bob;