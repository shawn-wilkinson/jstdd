const BigInt = require('./big-integer')

function Grains () {


};

Grains.prototype.square = function (x) {
  // base
  let biggieb = BigInt(x);
  console.log('~~~~~~~~~~~~~~~~~~~~~current test case is', biggieb, 'typeof', typeof biggieb);
  console.log('recursive square is', this.recursiveSquare(biggieb).toString());
  return this.recursiveSquare(biggieb).toString();
};

Grains.prototype.recursiveSquare = function (x) {
  // base
  //console.log('recursive square is called with x of', x);
  let one = new BigInt(1)
  let zero = new BigInt(0)
  if (x === one ) return zero;

  if ( x=== 0 || x === 1) return one;

  // recursive
  return (this.recursiveSquare(x - 1)).multiply(2);
};

Grains.prototype.total = function () {
  let array = Array(64).fill(0).map((v,i) => (value = this.recursiveSquare(i+1)));
  let result = array.reduce((agg, value) => {
    return agg.add(value);
  }, new BigInt(0))

  console.log('return value is!!!!!!!!!', result.toString())
  return result.toString();
}

module.exports = Grains;
