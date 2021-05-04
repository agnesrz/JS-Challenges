class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(comparisonStrand) {
    let strand1 = this.strand;
    let strand2 = comparisonStrand;

    let distance = 0;
    let stopIdx = strand1.length > strand2.length ? 
      strand2.length : strand1.length;

    for (let idx = 0; idx < stopIdx; idx += 1) {
      if (strand1[idx] !== strand2[idx]) {
        distance += 1;
      }
    }

    return distance;
  }
}

module.exports = DNA;