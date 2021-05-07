'use strict';

class Clock {
  static hoursArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23];

  static minutesArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
    33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59];

  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  constructor(hours, minutes) {
    this.hours = this.rotateToValue(Clock.hoursArr.slice(), hours);
    this.minutes = this.rotateToValue(Clock.minutesArr.slice(), minutes);
  }

  rotateToValue(arr, valueToRotateTo) {
    let rotateToIndex = arr.indexOf(valueToRotateTo);

    return arr.splice(rotateToIndex).concat(arr);
  }

  add(min) {
    let minutesLeft = min;

    while (minutesLeft > 60) {
      this.rotateForward(this.hours);
      minutesLeft -= 60;
    }

    while (minutesLeft > 0) {
      let currentMinute = this.minutes[0];

      if (currentMinute === 59) {
        this.rotateForward(this.hours);
      }

      this.rotateForward(this.minutes);
      minutesLeft -= 1;
    }
    
    return this;
  }

  subtract(min) {
    let minutesLeft = min;

    while (minutesLeft > 60) {
      this.rotateBackward(this.hours);
      minutesLeft -= 60;
    }

    while (minutesLeft > 0) {
      let currentMinute = this.minutes[0];

      if (currentMinute === 0) {
        this.rotateBackward(this.hours);
      }

      this.rotateBackward(this.minutes);
      minutesLeft -= 1;
    }
    
    return this;
  }

  rotateForward(arr) {
    arr.push(arr.shift());
  }

  rotateBackward(arr) {
    arr.unshift(arr.pop());
  }

  toString() {
    let hour = this.pad(this.hours[0]);
    let minute = this.pad(this.minutes[0]);

    return `${hour}:${minute}`;
  }

  pad(num) {
    return String(num).length === 2 ? num : '0' + num;
  }
  
  isEqual(comparisonClock) {
    return this.toString() === comparisonClock.toString();
  }
}

// let myClock = Clock.at(4, 17);
// console.log(myClock.toString());
// // myClock.add(60);
// myClock.subtract(1);

// console.log(myClock.toString());

module.exports = Clock;