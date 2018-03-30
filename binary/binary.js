class Binary {
  constructor(binaryString) {
    this.binary = binaryString;
  }

  toDecimal() {
    if(this.binary.match(/[^01]/)) return 0;
    if(this.binary == 1) return 1;
    let length = this.binary.length - 1;
    return this.binary
      .split("")
      .map((each, index) => {
        return each * Math.pow(2, length - index);
      })
      .reduce((acc, currentVal) => {
        return acc + currentVal;
      })
  }

}

module.exports = Binary;