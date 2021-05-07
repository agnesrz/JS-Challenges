'use strict';

class Scrabble {
  static allLetters = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ';

  static letterValues = [
    ['AEIOULNRST', 1],
    ['DG', 2],
    ['BCMP', 3],
    ['FHVWY', 4],
    ['K', 5],
    ['JX', 8],
    ['QZ', 10]
  ];

  static score(word) {
    let total = 0;
    let updateTotal = char => {
      total += Scrabble.charScore(char.toUpperCase());
    };

    if (Scrabble.invalidWord(word)) return total;

    [].forEach.call(word, updateTotal);

    return total;
  }

  static invalidWord(word) {
    let containsInvalidLetters = () => [].some.call(word, letter => {
      return !Scrabble.allLetters.includes(letter.toUpperCase());
    });

    return (typeof word !== 'string') || containsInvalidLetters();
  }

  static charScore(char) {
    return Scrabble.letterValues.find(element => element[0].includes(char))[1];
  }

  constructor(word) {
    this.word = word;
  }

  score() {
    return Scrabble.score(this.word);
  }
}

module.exports = Scrabble;