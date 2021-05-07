'use strict';

class PerfectNumber {
  static classify(target) {
    
    if (target < 0) throw new Error;
    
    let aliquotSum = this.getDivisibleNumbers(target).reduce((sum, num) => sum += num);
    
    if (aliquotSum > target) {
      return 'abundant';
    } else if (aliquotSum < target) {
      return 'deficient';
    } else {
      return 'perfect';
    }
  }
  
  static getDivisibleNumbers(target) {
    let divisible = [1];
    
    for (let currNum = 2; currNum < target; currNum += 1) {
      if ((target % currNum) === 0) {
        divisible.push(currNum); 
      }
    }
    return divisible;
  }
}

module.exports = PerfectNumber;