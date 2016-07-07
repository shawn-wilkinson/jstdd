function Anagram(word){
    this.word = word;
}

Anagram.prototype.matches = function(possibleMatches){
  if (!(possibleMatches instanceof Array)){
    possibleMatches = this.convertToArray(arguments);
  }
  return possibleMatches.filter((word) => this.wordMatch(word));
}

Anagram.prototype.wordMatch = function(possibleMatch){
  baseWord = this.word.toLowerCase().split('').sort().join('');
	compWord = possibleMatch.toLowerCase().split('').sort().join('');
	return (baseWord === compWord) && (this.word.toLowerCase() !== possibleMatch.toLowerCase());
}

Anagram.prototype.convertToArray = function(input){
    wordCollector= [];
    for(key in input){
      wordCollector.push(input[key]);
    }
    return wordCollector;
}

module.exports = Anagram;
