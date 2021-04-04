"use strict";

class DNA {
  constructor(dna) {
    this.strand = dna;
  }

  hammingDistance(comparisonStrand) {
    let pointMutations = 0;
    let endIdx = this.strand.length <= comparisonStrand.length ?
      this.strand.length : comparisonStrand.length;

    for (let idx = 0; idx < endIdx; idx += 1) {
      if (this.strand[idx] !== comparisonStrand[idx]) {
        pointMutations += 1;
      }
    }
    return pointMutations;
  }
}

module.exports = DNA;