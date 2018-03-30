const reverseString = function(string) {
  if (string == '') return '';
  return string.split('').reverse().join('');
}

module.exports = reverseString;