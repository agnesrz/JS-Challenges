'use strict';

class Anagram {
  constructor(word) {
    this.word = word;
  }
  
  match(possibleMatches) {
    let actualMatches = [];

    possibleMatches.forEach(word => {
      if (this.validLength(word) &&
          this.notDuplicate(word, actualMatches) &&
          this.allCharactersMatch(word.split(''))) {
        actualMatches.push(word);
      }
    });
    
    return actualMatches;
  }
  
  validLength(word) {
    return word.length === this.word.length;
  }
    
  notDuplicate(word, existingMatches) {
    word = word.toLowerCase();
    existingMatches = existingMatches.map(word => word.toLowerCase());
    
    return (word !== this.word) && !existingMatches.includes(word);
  }
  
  allCharactersMatch(characters) {
    characters = characters.map(char => char.toLowerCase());
    
    return this.word.toLowerCase().split('').every(char => {
      let idx = characters.indexOf(char);
      
      if (idx === -1) {
        return false;
      } else {
        characters.splice(idx, 1);
        return true;
      }
    });
  }
}

module.exports = Anagram;