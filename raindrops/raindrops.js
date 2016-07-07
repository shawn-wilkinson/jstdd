function primeFactors(){};

primeFactors.for = function(num){
  let factorArray = []
  if(num === 1 || num === 2){return [num]}
  for(i = 2; i <= num; i++){
    if(num % i == 0){
      numTimes = this.howManyTimes(num,i)
      factorArray = factorArray.concat([i]);
      num = (num / (i * numTimes));
    };
  };
  return factorArray;
}

primeFactors.howManyTimes = function(num,factor){
	times = 0;
	while( num / factor === Math.floor(num/factor)){
		num = num / factor
		times++;
	}
	return times;
}

function Raindrops(){}

Raindrops.prototype.convert = function(number){
  const filterArray = [3,5,7]
  const dictionary = {3: 'Pling', 5: 'Plang', 7: 'Plong'};
  const primeArray = primeFactors.for(number);
  let output = primeArray.filter((num) => filterArray.includes(num)).map((num) => dictionary[num]);
  if(output.length === 0){ output.push(number.toString())};
  return output.join('');
}

module.exports = Raindrops;
