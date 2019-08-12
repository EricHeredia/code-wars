// The function you are going to write is not actually going to help you with 
// your piano playing, but just explore one of the patterns you're 
// experiencing: Given the number you stopped on, was it on a black key or a white 
// key? For example, in the description of your piano exercise above, if you stopped 
// at 5, your left thumb would be on the fifth key of the piano, which is black. Or if 
// you stopped at 92, you would have gone all the way from keys 1 to 88 and then 
// wrapped around, so that you would be on the fourth key, which is white.

// Your function will receive an integer between 1 and 10000 (maybe you think that in 
// principle it would be cool to count up to, say, a billion, but considering how 
// many years it would take it is just not possible) and return the string "black" or "white"

// First attempt - 7-8 minutes        -- Look into why reversed output didn't work.

function blackOrWhiteKey(keyPressCount) {
    switch ((keyPressCount - 1) % 88 % 12) {
      case 0:
      case 2:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
        return 'white';
      default:
        return 'black';
    }
}