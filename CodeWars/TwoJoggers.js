//Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

//The function takes two arguments:

//The length of Bob's lap (larger than 0)
//The length of Charles' lap (larger than 0)

//The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

//The first number is the number of laps that Bob has to run
//The second number is the number of laps that Charles has to run

//Examples:

//nbrOfLaps(5, 3); // returns [3, 5]
//nbrOfLaps(4, 6); // returns [3, 2]


// First attempt 2-3 minutes

//var nbrOfLaps = function (x, y) {
  //let edit = [x, y]
  //let first = edit[0]
  //let last = edit[1]
  //let multF = edit[0]
  //let multL = edit[1]
  //let laps = [1, 1]
  //let unsolved = true
  //while (unsolved) {
    //if (multF < multL) {
      //multF += first
      //laps[0] = laps[0] + 1
    //} else if (multF > multL) {
      //multL += last
      //laps[1] = laps[1] + 1
    //} else {
      //unsolved = false
    //}
  //}
  //return laps;
//}

// Second attempt 8-10 minutes

var nbrOfLaps = function(x, y) {
  let lowestCommonMultiple = x
  while(lowestCommonMultiple % y != 0) {
    lowestCommonMultiple += x
  }
  return [lowestCommonMultiple / x, lowestCommonMultiple / y]
}