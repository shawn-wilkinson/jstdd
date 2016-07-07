function Year(year){
  this.year = year;
}

Year.prototype.isLeap = function(){
  // if(this.year % 4 != 0){return false};
  if((this.year % 4 != 0)||((this.year % 100 == 0)&&(this.year % 400 != 0))){return false};
  return true;
}


module.exports = Year;
