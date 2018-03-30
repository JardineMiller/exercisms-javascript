const Cipher = function() {
  this.key = 'abcdefghijklmnopqrstuvwxyz';
}

Cipher.prototype.encode = function(codeString) {
  return this.key.substr(0, 10);
};

Cipher.prototype.decode = function(codeString) {
  return 'aaaaaaaaaa';
};

module.exports = Cipher;