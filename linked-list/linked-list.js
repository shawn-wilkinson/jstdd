function LinkedList() {
  this.list = [];
}

LinkedList.prototype.push = function (x) {
  this.list.push(x);
};

LinkedList.prototype.pop = function () {
  return this.list.pop();
};

LinkedList.prototype.shift = function () {
  return this.list.shift();
};

LinkedList.prototype.unshift = function (x) {
  return this.list.unshift(x);
};

LinkedList.prototype.count = function () {
  return this.list.length;
};


LinkedList.prototype.delete = function (x) {
  let index = this.list.indexOf(x);

  if (index > -1) {
    this.list.splice(index, 1);
  }
};



module.exports = LinkedList;
