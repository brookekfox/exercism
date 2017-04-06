var atbashCipher = {
  encode: function(string) {
    return string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '').split('').map(function(c) {
      c = c.toLowerCase();
      return encoding[c] || c;
    }).join('').match(/.{1,5}/g).join(' ');
  }
};

var encoding = {
  a: 'z',
  b: 'y',
  c: 'x',
  d: 'w',
  e: 'v',
  f: 'u',
  g: 't',
  h: 's',
  i: 'r',
  j: 'q',
  k: 'p',
  l: 'o',
  m: 'n',
  n: 'm',
  o: 'l',
  p: 'k',
  q: 'j',
  r: 'i',
  s: 'h',
  t: 'g',
  u: 'f',
  v: 'e',
  w: 'd',
  x: 'c',
  y: 'b',
  z: 'a'
}

module.exports = atbashCipher;
