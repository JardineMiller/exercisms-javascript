const DnaTranscriber = function() {

  const transcriptions = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }

  DnaTranscriber.prototype.toRna = function(string) {
    let chars = string.split('');
    return chars.map((char) => {
      if(!Object.keys(transcriptions).includes(char)) throw new Error('Invalid input');
      return transcriptions[char]
    }).join('');
  };

}

module.exports = DnaTranscriber;