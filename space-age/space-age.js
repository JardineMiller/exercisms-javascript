class SpaceAge {

  constructor(seconds) {
    this.seconds = seconds;
  }

  onEarth() {
    return parseFloat((this.seconds / 60 / 60 / 24 / 365.25).toFixed(2));
  }

  onMercury() {
    return parseFloat((this.onEarth() * (1 / 0.2408467)).toFixed(2));
  }

  onVenus() {
    return parseFloat((this.onEarth() * (1 / 0.61529725)).toFixed(2));
  }

  onMars() {
    return parseFloat((this.onEarth() / 1.8808158).toFixed(2));
  }

  onJupiter() {
    return parseFloat((this.onEarth() / 11.862615).toFixed(2));
  }

  onSaturn() {
    return parseFloat((this.onEarth() / 29.447498).toFixed(2));
  }

  onUranus() {
    return parseFloat((this.onEarth() / 84.016846).toFixed(2));
  }
  onNeptune() {
    return parseFloat((this.onEarth() / 164.79132).toFixed(2));
  }

}

module.exports = SpaceAge;