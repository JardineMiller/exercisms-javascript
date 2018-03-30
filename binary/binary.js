class Binary {
  constructor(binaryString) {
    this.binary = binaryString;
  }

  toDecimal() {
    if(this.binary == 1) return 1;
    let length = this.binary.length;
    let thing = this.binary.split("").map((each, index) => {
      return each * Math.pow(2, length - index);
    }).reduce((acc, currentVal) => {
      return acc + currentVal;
    })
    // console.log(thing);
    return thing;
  }

}

module.exports = Binary;