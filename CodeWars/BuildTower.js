//Build Tower by the following given argument:
//number of floors (integer and always greater than 0).

//Tower block is represented as *

//for example, a tower of 3 floors looks like below

//[
//  '  *  ', 
//  ' *** ', 
//  '*****'
//]

// First attempt - 7-8 minutes

function towerBuilder(nFloors) {
  let blueprint = []
  let paddingLR = ""
  
  for (let i = nFloors; i > 0; i--) {
    let addBlocks = '*'
    for (let block = i-1; block > 0; block--) {
      addBlocks += "**"
    }
    
    addBlocks = paddingLR + addBlocks + paddingLR
    blueprint.unshift(addBlocks)
    paddingLR += " "
  }
  
  return blueprint
}
