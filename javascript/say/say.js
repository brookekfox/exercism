var Say = {
  lessThanTen: ['','one','two','three','four','five','six','seven','eight','nine'],
  multiplesOfTen: ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
  teens: ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
  inEnglish: function(num) {
    if (num < 0 || num > 999999999999) { throw new Error('Number must be between 0 and 999,999,999,999.'); }
    if (num === 0) { return 'zero'; }

    return this.billions(num);
  },
  tens: function(num) {
    if (num < 10) {
      return this.lessThanTen[num].trim();
    } else if (num >= 10 && num < 20) {
      return this.teens[num - 10].trim();
    } else if (num % 10 === 0) {
      return this.multiplesOfTen[Math.floor(num / 10)];
    } else {
      return this.multiplesOfTen[Math.floor(num / 10)] + '-' + this.lessThanTen[num % 10];
    }
  },
  hundreds: function(num) {
    if (num >= 100) {
      return (this.lessThanTen[Math.floor(num / 100)] + ' hundred ' + this.tens(num % 100)).trim();
    } else {
      return this.tens(num);
    }
  },
  thousands: function(num) {
    if (num >= 1000) {
      return (this.hundreds(Math.floor(num / 1000)) + ' thousand ' + this.hundreds(num % 1000)).trim();
    } else {
      return this.hundreds(num);
    }
  },
  millions: function(num) {
    if (num >= 1000000) {
      return (this.thousands(Math.floor(num / 1000000)) + ' million ' + this.thousands(num % 1000000)).trim();
    } else {
      return this.thousands(num);
    }
  },
  billions: function(num) {
    if (num >= 1000000000) {
      return (this.millions(Math.floor(num / 1000000000)) + ' billion ' + this.millions(num % 1000000000)).trim();
    } else {
      return this.millions(num);
    }
  }
};

module.exports = Say;