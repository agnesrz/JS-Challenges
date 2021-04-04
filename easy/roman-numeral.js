"use strict";

class RomanNumeral {
  static ROMAN_EQUIVS = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "XM",
    1000: "M",
    1900: "CM"
  }
  
  constructor(num) {
    this.number = num;
  }

  toRoman() {
    let romanEquivs = Object.keys(RomanNumeral.ROMAN_EQUIVS).sort((a, b) => b - a);
    let leftOver = this.number;
    let romanNum = '';

    for (let idx = 0; idx < romanEquivs.length; idx += 1) {
      let num = romanEquivs[idx];
      while (leftOver - num >= 0) {
        leftOver -= num;
        romanNum += RomanNumeral.ROMAN_EQUIVS[num];
      }
    }

    return romanNum;
  }
}

let newNum = new RomanNumeral(5);
console.log(newNum);

module.export = RomanNumeral;

// class RomanNumeral {
//   static ROMAN_NUMERALS = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   }

//   constructor(number) {
//     this.number = number;
//   }

//   toRoman() {
//     let romanVersion = '';
//     let toConvert = this.number;

//     Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(numeral => {
//       let value = RomanNumeral.ROMAN_NUMERALS[numeral];
//       let multiplier = Math.floor(toConvert / value);
//       let remainder = toConvert % value;

//       if (multiplier > 0) {
//         romanVersion += (numeral.repeat(multiplier));
//       }

//       toConvert = remainder;
//     });

//     return romanVersion;
//   }
// }

// module.exports = RomanNumeral;