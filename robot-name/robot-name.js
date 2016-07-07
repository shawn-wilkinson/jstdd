let usedNames = [];

function Robot(){
  this.name = '';
  this.reset();
  console.log('my robot is', this.name, 'and i have completed', usedNames.length, 'out of 1 million robots!' );
}

Robot.prototype.generateName = function(){
  let letterOptions = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  let number = Array(3).fill(0).map(num => Math.floor(Math.random() * 10)).join('');
  let letters = Array(3).fill('taco').map(letter => letterOptions[Math.floor(Math.random() * letterOptions.length)]).join('');
  return letters + number;
}

Robot.prototype.reset = function(){
  this.name = this.generateName();
  while(usedNames.includes(this.name)){
    console.log('the name ', this.name, ' is taken!!');
   this.name = this.generateName();
  }
  usedNames.push(this.name);
}

module.exports = Robot;
