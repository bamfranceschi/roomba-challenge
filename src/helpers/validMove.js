//function calculates whether the Roomba can move in that direction
    //inputs: new location, room dimension
    //output: boolean if move is valid

export function validMove(location, dimensions){

    if (location[0] >= 0 && location[0] <=dimensions[0] && location[1] >= 0 && location[1] <= dimensions[1]){
      return true
   }
   else{
     return false
     }
 }
