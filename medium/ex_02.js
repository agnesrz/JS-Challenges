'use strict';
Math.seedrandom = require('seedrandom');

class Robot {
  static previouslyUsedNames = [];

  constructor() {
    this.nameRobot();
  }

  reset() {
    this.nameRobot();
  }

  name() {
    return this.robotName;
  }

  nameRobot() {
    let newName = '';

    do {
      newName = this.generateName();
    } while (Robot.previouslyUsedNames.includes(newName));

    this.robotName = newName;
    Robot.previouslyUsedNames.push(newName);
  }

  generateName() {
    return this.getRandomCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 2) +
           this.getRandomCharacters('0123456789', 3);
  }

  getRandomCharacters(characters, numOfCharsToReturn) {
    let randomCharacters = '';

    for (let round = 0; round < numOfCharsToReturn; round += 1) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      console.log(`Random Index: ${randomIndex}`)
      randomCharacters += characters[randomIndex];
    }

    return randomCharacters;
  }
}

module.exports = Robot;