//Given a 32-bit signed integer, reverse digits of an integer.

//Assume we are dealing with an environment which could only store integers
//within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose
//of this problem, assume that your function returns 0 when the reversed
//integer overflows.

//This challenge was buggy and wouldn't accept code
//First attempt - 6-7 minutes

var reverse = function(x) {
  let number = x.toString().split('').reverse()
  if (number[number.length - 1] === '-') {
    number.pop()
    number.unshift('-')
    if (parseInt(number.join('')) < -2147483647) {
      return 0
    }
    return parseInt(number.join(''))
  } else if (number[0] === 0) {
    number.shift()
    if (parseInt(number.join('')) > 2147483647) {
      return 0
    }
    return parseInt(number.join(''))
  } else {
    if (parseInt(number.join('')) > 2147483647) {
      return 0
    }
    return parseInt(number.join(''))
  }
};