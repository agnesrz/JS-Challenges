'use strict';

class RomanNumeral {
  static romanEquivalents = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
  
  constructor(number) {
    this.number = number;
  }
  
  toRoman() {
    let roman = '';
    let workingNum = this.number;
    let conversionArr = Object.keys(RomanNumeral.romanEquivalents)
                              .map(num => Number(num))
                              .sort((a, b) => b - a);
    
    while (workingNum > 0) {
      let closestRomanNum = conversionArr.find(num => num <= workingNum);
      roman += RomanNumeral.romanEquivalents[(String(closestRomanNum))];
      workingNum -= closestRomanNum;
    } 
    
    return roman;
  }
}

module.exports = RomanNumeral;