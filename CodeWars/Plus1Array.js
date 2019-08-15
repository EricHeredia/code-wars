// Given an array of integers of any length, return an array that has 1 added to the 
// value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// First attempt - 6-7 minutes     --unfinished

function upArray(arr){
    if (/[\W]/.test(arr.join('')) === true) {
      return null
    } else {
      return [...(parseInt(arr.join('')) + 1).toString()].map(x => parseInt(x))
    }
  }