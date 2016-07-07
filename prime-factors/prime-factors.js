function primeFactors(){};

primeFactors.for = function(num){
  let factorArray = []
  for(i = 2; i <= num; i++){
    if(num % i == 0){
      numTimes = this.howManyTimes(num,i)
      factorArray = factorArray.concat(Array(numTimes).fill(i));
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

module.exports = primeFactors;
