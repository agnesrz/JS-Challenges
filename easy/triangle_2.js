'use strict';

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [...arguments].sort((a, b) => a - b);
    
    if (this.sidesInvalid()) {
      throw new Error('Invalid triangle.');
    }
  }

  kind() {
    if (this.isEquilateral()) {
      return 'equilateral';
    } else if (this.isIsosceles()) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  sidesInvalid() {
    let sides = this.sides;
    let sideTooSmall = sides.some(side => side <= 0);
    let triangleInequality = (sides[0] + sides[1]) <= sides[2];

    return sideTooSmall || triangleInequality;
  }

  isEquilateral() {
    let [side1, side2, side3] = this.sides;
    return (side1 === side2) && (side2 === side3);
  }

  isIsosceles() {
    let [side1, side2, side3] = this.sides;

    return (side1 === side2) || (side1 === side3) || (side2 === side3);
  }
}

module.exports = Triangle;