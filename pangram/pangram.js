const Pangram = function(string) {
  this.string = string;
}

Pangram.prototype.isPangram = function() {
  if(this.string == '') return false;
  let regex = /([a-z])(?!.*\1)/g;
  return (this.string.toLowerCase().match(regex) || []).length === 26;
};

module.exports = Pangram;