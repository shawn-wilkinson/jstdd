function Allergies(number){
  this.number = number;
  this.dictionary = {
    1: 'eggs',
    2: 'peanuts',
    4: 'shellfish',
    8: 'strawberries',
    16: 'tomatoes',
    32: 'chocolate',
    64: 'pollen',
    128: 'cats',
  },
  this.allergenNums = [128,64,32,16,8,4,2,1];
}

Allergies.prototype.list = function(){
  let allergens = [];
  for(allergenNum of this.allergenNums){
    if(this.number - allergenNum >= 0){
      allergens.push(allergenNum);
      this.number = this.number - allergenNum;
    }
  }
  return allergens.sort((a, b) => a - b).map((num) => this.dictionary[num]);
}

Allergies.prototype.allergicTo = function(thing){
  return this.list().includes(thing);
}

module.exports =  Allergies;
