function Say () {

}

// 0 to 99
Say.inEnglish2 = function (x) {
  this.onesdictionary = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: ''
  }
  this.tensdictionary = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
    0: ''
  }
  this.teendictionary = {
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen',
    0: 'ten'
  }

  if (x=== 0) {
    return 'zero'
  }

  let billions = Math.floor(x/1000000000);
  x = x - (billions * 1000000000);
  let millions = Math.floor(x/1000000);
  x = x - (millions * 1000000);
  let thousands = Math.floor(x/1000);
  x = x - (thousands * 1000);
  let hundreds = Math.floor(x/100);
  x = x - (hundreds * 100);
  let tens = Math.floor(x/10);
  let ones = x%10;

  console.log('x', x, 'thousands', thousands, 'hundreds', hundreds, 'tens', tens, 'ones', ones);

  let r = '';

  if (billions > 0) r +=  this.onesdictionary[billions] + ' billion '; //if millions exist

  if (millions > 0) r +=  this.onesdictionary[millions] + ' million '; //if millions exist

  if (thousands > 0) r +=  this.onesdictionary[thousands] + ' thousand '; //if thousands exist

  if (hundreds > 0) r +=  this.onesdictionary[hundreds] + ' hundred '; //if hundreds exist

  if (tens === 1) r += this.teendictionary[ones]; //handle 10-19

  if (tens > 1 )  r += this.tensdictionary[tens]; // 20-99

  if (tens > 1 && ones > 0 )  r += '-'; // 20-99

  if (ones > 0 && tens !== 1 ) r += this.onesdictionary[ones]; // 0-9

  return r.trim() // add ones place

}

// 0 to 99
Say.inEnglish = function (x) {

  console.log('x is', x)

  if (x === 0) {
    return 'zero'
  }

  if (x < 0 || x > 999999999999) {
    throw "Number must be between 0 and 999,999,999,999."
  }

  let billions = Math.floor(x/1000000000);
  x = x - (billions * 1000000000);
  let millions = Math.floor(x/1000000);
  x = x - (millions * 1000000);
  let thousands = Math.floor(x/1000);
  x = x - (thousands * 1000);
  let hundreds = x;

  let r = '';

  if (billions > 0) {
    r += this.getHundreds(billions) + ' billion '
  }
  if (millions > 0) {
    r += this.getHundreds(millions) + ' million '
  }
  if (thousands > 0) {
    r += this.getHundreds(thousands) + ' thousand '
  }
  if (hundreds > 0) {
    r += this.getHundreds(hundreds)
  }

  return r.trim() // add ones place

}

Say.getHundreds = function (x) {
  this.onesdictionary = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: ''
  }
  this.tensdictionary = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
    0: ''
  }
  this.teendictionary = {
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen',
    0: 'ten'
  }

  let strHundreds = '';

  let hundreds = Math.floor(x/100);
  x = x - (hundreds * 100);
  let tens = Math.floor(x/10);
  let ones = x%10;

  if (hundreds > 0) strHundreds +=  this.onesdictionary[hundreds] + ' hundred '; //if hundreds exist

  if (tens === 1) strHundreds += this.teendictionary[ones]; //handle 10-19

  if (tens > 1 )  strHundreds += this.tensdictionary[tens]; // 20-99

  if (tens > 1 && ones > 0 )  strHundreds += '-'; // 20-99

  if (ones > 0 && tens !== 1 ) strHundreds += this.onesdictionary[ones]; // 0-9

  return strHundreds;
}

module.exports = Say;
