var numbers = {
  1:    'I',
  5:    'V',
  10:   'X',
  50:   'L',
  100:  'C',
  500:  'D',
  1000: 'M'
};

var toRoman = function(value) {
  return quadDigit(value);
};

function singleDigit(value) {
  if (value === '') { return ''; }
  if (value <= 3) {
    var roman = '';
    for (var i = 1; i <= value; i++) {
      roman += numbers[1];
    }
    return roman;
  } else if (value === 4) {
    return numbers[1] + numbers[5];
  } else if (value >= 5 && value <= 8) {
    var roman = numbers[5];
    for (var i = 6; i <= value; i++) {
      roman += numbers[1];
    }
    return roman;
  } else if (value === 9) {
    return numbers[1] + numbers[10];
  }
}

function doubleDigit(value) {
  if (value === '') { return ''; }
  if (value <= 9) { return singleDigit(value); }
  var ones = parseInt(value.toString()[1]);

  if (value >= 10 && value <= 19) {
    return numbers[10] + singleDigit(ones);
  } else if (value >= 20 && value <= 29) {
    return numbers[10] + numbers[10] + singleDigit(ones);
  } else if (value >= 30 && value <= 39) {
    return numbers[10] + numbers[10] + numbers[10] + singleDigit(ones);
  } else if (value >= 40 && value <= 49) {
    return numbers[10] + numbers[50] + singleDigit(ones);
  } else if (value >= 50 && value <= 59) {
    return numbers[50] + singleDigit(ones);
  } else if (value >= 60 && value <= 69) {
    return numbers[50] + numbers[10] + singleDigit(ones);
  } else if (value >= 70 && value <= 79) {
    return numbers[50] + numbers[10] + numbers[10] + singleDigit(ones);
  } else if (value >= 80 && value <= 89) {
    return numbers[50] + numbers[10] + numbers[10] + numbers[10] + singleDigit(ones);
  } else if (value >= 90 && value <= 99) {
    return numbers[10] + numbers[100] + singleDigit(ones);
  }
}

function tripleDigit(value) {
  if (value === '') { return ''; }
  if (value <= 99) { return doubleDigit(value); }
  var tens = value.toString()[1] + value.toString()[2];
  if (tens[0] === '0') { tens = parseInt(tens.toString()[1]); }
  if (tens[0] === '0' && tens[1] === '0') { tens = ''; }

  if (value >= 100 && value <= 199) {
    return numbers[100] + doubleDigit(tens);
  } else if (value >= 200 && value <= 299) {
    return numbers[100] + numbers[100] + doubleDigit(tens);
  } else if (value >= 300 && value <= 399) {
    return numbers[100] + numbers[100] + numbers[100] + doubleDigit(tens);
  } else if (value >= 400 && value <= 499) {
    return numbers[100] + numbers[500] + doubleDigit(tens);
  } else if (value >= 500 && value <= 599) {
    return numbers[500] + doubleDigit(tens);
  } else if (value >= 600 && value <= 699) {
    return numbers[500] + numbers[100] + doubleDigit(tens);
  } else if (value >= 700 && value <= 799) {
    return numbers[500] + numbers[100] + numbers[100] + doubleDigit(tens);
  } else if (value >= 800 && value <= 899) {
    return numbers[500] + numbers[100] + numbers[100] + numbers[100] + doubleDigit(tens);
  } else if (value >= 900 && value <= 999) {
    return numbers[100] + numbers[1000] + doubleDigit(tens);
  }
}

function quadDigit(value) {
  if (value === '') { return ''; }
  if (value <= 999) { return tripleDigit(value); }
  var hundreds = value.toString()[1] + value.toString()[2] + value.toString()[3];
  if (hundreds[0] === '0') { hundreds = parseInt(hundreds[1] + hundreds[2]); }
  if (hundreds[0] === '0' && hundreds[1] === '0') { hundreds = parseInt(hundreds[2]); }
  if (hundreds[0] === '0' && hundreds[1] === '0' && hundreds[2] === '0') { hundreds = ''; }

  if (value >= 1000 && value <= 1999) {
    return numbers[1000] + tripleDigit(hundreds);
  } else if (value >= 2000 && value <= 2999) {
    return numbers[1000] + numbers[1000] + tripleDigit(hundreds);
  } else if (value >= 3000 && value <= 3999) {
    return numbers[1000] + numbers[1000] + numbers[1000] + tripleDigit(hundreds);
  }
}

module.exports = toRoman;
