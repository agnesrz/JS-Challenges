'use strict';

class Octal {
  constructor(numAsString) {
    this.octalString = this.validOctal(numAsString) ? numAsString : '0';
  }
  
  validOctal(numAsString) {
    return numAsString.search(/[^0-7]/) === -1;
  }

  toDecimal() {
    let octalDigitsArr = this.octalString.split('').reverse();

    return octalDigitsArr.reduce((total, digit, digitIdx) => {
      total += Number(digit) * Math.pow(8, digitIdx);
      return total;
    }, 0);
  }
}

module.exports = Octal;

// console.log(new Octal('1').toDecimal());
