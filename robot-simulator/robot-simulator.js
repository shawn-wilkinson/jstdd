function Robot(){
  this.cardinals = ['north', 'east', 'south', 'west'];
  this.bearing = null;
  this.coordinates = [0,0];
  this.dictionary = {
    L: 'turnLeft',
    R: 'turnRight',
    A: 'advance',
    B: 'backwards'
  }
}

Robot.prototype.orient = function(direction){
  if (this.cardinals.includes(direction)){
      this.bearing = direction;
  } else {
    throw "Invalid Robot Bearing";
  }
}

Robot.prototype.turnRight = function(){
  let index = this.cardinals.indexOf(this.bearing);
  let newIndex;
  if (index === 3){
    newIndex = 0 }
  else {
    newIndex = index + 1;
  }
  this.orient(this.cardinals[newIndex]);
}

Robot.prototype.turnLeft = function(){
  let index = this.cardinals.indexOf(this.bearing);
  let newIndex;
  if (index === 0){
    newIndex = 3 }
  else {
    newIndex = index - 1;
  }
  this.orient(this.cardinals[newIndex]);
}

Robot.prototype.at = function(x,y){
  this.coordinates = [x,y];
}

Robot.prototype.advance = function(){
  switch (this.bearing) {
    case 'north':
      this.at(this.coordinates[0],this.coordinates[1] + 1)
      break;
    case 'east':
      this.at(this.coordinates[0] + 1,this.coordinates[1])
      break;
    case 'south':
      this.at(this.coordinates[0],this.coordinates[1] - 1)
      break;
    case 'west':
      this.at(this.coordinates[0] - 1,this.coordinates[1])
      break;
    default:
  }
}

Robot.prototype.backwards = function(){
  switch (this.bearing) {
    case 'north':
      this.at(this.coordinates[0],this.coordinates[1] - 1)
      break;
    case 'east':
      this.at(this.coordinates[0] - 1,this.coordinates[1])
      break;
    case 'south':
      this.at(this.coordinates[0],this.coordinates[1] + 1)
      break;
    case 'west':
      this.at(this.coordinates[0] + 1,this.coordinates[1])
      break;
    default:
  }
}

Robot.prototype.instructions = function(givenInstructions){
  return givenInstructions.split('').map(letter => this.dictionary[letter]);
}

Robot.prototype.place = function(input){
  this.at(input.x,input.y);
  this.orient(input.direction);
}

Robot.prototype.evaluate = function(commands){
  commands = this.instructions(commands)
  for (command of commands){
    switch (command) {
      case 'turnRight':
        this.turnRight();
        break;
      case 'turnLeft':
        this.turnLeft();
        break;
      case 'advance':
        this.advance();
        break;
      case 'backwards':
        this.backwards();
        break;
      default:

    }
  }
}

module.exports = Robot;
