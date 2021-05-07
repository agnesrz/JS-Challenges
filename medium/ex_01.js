'use strict';

class Diamond {
  static makeDiamond(letter) {
    let letters = this.getLetters(letter);
    let numOfRows = letters.length;
    let template = [];

    for (let idx = 0; idx < letters.length; idx += 1) {
      let currLetter = letters[idx];
      let currRow = idx + 1;

      template.push(this.getLine(currLetter, currRow, numOfRows));
    }

    template = template.concat(template.slice(0, template.length - 1)
      .reverse());

    return template.join('')
  }

  static getLetters(letter) {
    const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let endIndex = ALL_LETTERS.indexOf(letter.toUpperCase()) + 1;

    return ALL_LETTERS.slice(0, endIndex);
  }

  static getLine(letter, row, lastRow) {
    let spacesBetween = ' '.repeat(Diamond.getSpacesBetween(row));
    let spacesEdges = ' '.repeat(lastRow - row);

    return row === 1 ? (spacesEdges + letter + spacesEdges + '\n') :
      (spacesEdges + letter + spacesBetween + letter + spacesEdges + '\n');
  }

  static getSpacesBetween(row) {
    switch (row) {
      case 1:
        return 0;
      case 2:
        return 1;
      default:
        return 3 + ((row - 3) * 2);
    }
  }
}

module.exports = Diamond;

// let myDiamond = Diamond.makeDiamond('A');
// console.log(myDiamond);