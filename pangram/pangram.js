function Pangram(sentence){
  this.sentence = sentence;
  this.dictionary = 'abcdefghijklmnopqrstuvwxyz'.split('');
}

Pangram.prototype.isPangram = function(){
  let cleanedArray = this.sentence.split('').filter((char) => this.dictionary.includes(char.toLowerCase())).map((char) => char.toLowerCase());
  for (letter of this.dictionary){
    if (!(cleanedArray).includes(letter)){
      return false
    };
  }
  return true;
}


module.exports = Pangram;
