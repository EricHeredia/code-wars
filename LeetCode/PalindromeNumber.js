//Determine whether an integer is a palindrome. An integer is a palindrome
//when it reads the same backward as forward.

//First attempt - 2 minutes

var isPalindrome = function(x) {
  x = x.toString()
  let first = 0
  let last = x.length-1
  
  while (first < last) {
    if (x[first] !== x[last]) {
      return false
    } else {
      first++
      last--
    }
  }
  return true
};