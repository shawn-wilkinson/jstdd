function Garden(mygarden, students){
  this.mygarden = mygarden.split('\n');
  this.students = students ? students.sort() : ['Alice', 'Bob', 'Charlie', 'David', 'Eve',
    'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
  this.seeds = { R:'radishes', C:'clover', G:'grass', V:'violets' };
  this.studentLoop();
}

Garden.prototype.studentLoop = function () {
  for (i in this.students) {
    let plants = (this.mygarden[0].substring(i*2,i*2+2) +
     this.mygarden[1].substring(i*2,i*2+2))
     this.setProperty(this.students[i], plants);
  }
};

Garden.prototype.studentLoop2 = function () {
  this.students.map((name,i) => {
    let plants = (this.mygarden[0].substring(i*2,i*2+2) +
     this.mygarden[1].substring(i*2,i*2+2))
     this.setProperty(name, plants);
  })
};

Garden.prototype.setProperty = function (name, plants) {
  myPlants = plants.split('').map((seed) => this.seeds[seed]);
  myName = name.toLowerCase();
  this[myName] = myPlants;
}




module.exports = Garden;
