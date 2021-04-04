"use strict";

class Triangle {
  constructor(side1, side2, side3) {
    
    function invalidTriangle() {
      let invalidSideLength = side1 < 0;
      let invalidSumOfLengths = ((side1 + side2) < side3) || ((side1 + side2 + side3) === 0);

      return invalidSideLength || invalidSumOfLengths;
    }

    [side1, side2, side3] = (Array.from(arguments).sort((a, b) => a - b));

    if (invalidTriangle()) {
      throw new Error('Invalid traingle side length(s)');
    }

    this.sides = [side1, side2, side3];
  }

  kind() {
    let matchingSides = this.sides.reduce((sidesInfo, side) => {

      if (sidesInfo.previous === side) {
        sidesInfo.matches += 1;
      }

      sidesInfo.previous = side;
      return sidesInfo;
    }, {previous: null, matches: 1}).matches;

    switch (matchingSides) {
      case 1:
        return 'scalene';
      case 2:
        return 'isosceles';
      case 3:
        return 'equilateral';
      default:
        throw new Error();
    }
  }
}

module.exports = Triangle;