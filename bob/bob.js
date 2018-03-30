const Bob = function() {

}

Bob.prototype.hey = function(string) {
  let message = string.trim()
  if (message.endsWith("?") && (message !== message.toUpperCase() || message.match(/[0-9]/g))) return "Sure.";
  if (!message || message.match(/\s{2}/) && !message.match(/\w/)) return "Fine. Be that way!";
  if (message === message.toUpperCase() && message.match(/\w{2}/)) return "Whoa, chill out!";
  else return "Whatever.";
};

module.exports = Bob;