function Crypto(string){
  this.string = string;
  this.dictionary = '1234567890abcdefghijklmnopqrstuvwxyz'.split('');
  this.cleanedArray = this.string.toLowerCase().split('').filter((char) => this.dictionary.includes(char));

}

Crypto.prototype.normalizePlaintext = function(){
  return this.cleanedArray.join('');
}

Crypto.prototype.size = function(){
  let num =  Math.ceil(Math.sqrt(this.cleanedArray.length))
  return num;
}

Crypto.prototype.plaintextSegments = function(){
  var chunks = [];
  charNum = this.size();
  for (var i = 0, charsLength = this.normalizePlaintext().length; i < charsLength; i += charNum) {
      chunks.push(this.normalizePlaintext().substring(i, i + charNum));

  }
  return chunks;
}

Crypto.prototype.ciphertext = function(){
  let segmentArray = this.plaintextSegments().map((seg) => seg.split(''));
  let returnArray = segmentArray[0].map((column,index) => {
    return segmentArray.map((row) => {
      return row[index];
    })
  })
  return returnArray.map((row) => row.join('')).join('')


}

module.exports = Crypto;
