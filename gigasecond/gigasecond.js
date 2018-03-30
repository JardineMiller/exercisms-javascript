class Gigasecond {
  constructor(time) {
    this.mSeconds = time.valueOf();
  }

  date() {
    return new Date(this.mSeconds + 1000000000000);
  }
}

module.exports = Gigasecond;