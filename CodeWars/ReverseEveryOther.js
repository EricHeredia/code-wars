//Reverse every other word in a given string, then return the string. 
//Throw away any leading or trailing whitespace, while ensuring there is 
//exactly one space between each word. Punctuation marks should be treated 
//as if they are apart of the word in this kata.

// First attempt - 2 minutes

function reverse(str){
    return str.split(' ').map((x, i) => i % 2 === 0 ? x : [...x].reverse().join('')).join(' ')
  }