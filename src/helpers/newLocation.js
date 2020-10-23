//function calculates new location for roomba
    //inputs: current location, given instruction
    //outputs: new location

export function newLocation(location, instruction){
    let x = location[0]
    let y = location[1]

    if (instruction === "N"){
      location = [x, y + 1]
      return location
    }
    if (instruction === "S"){
      location = [x, y - 1]
      return location
    }
    if (instruction === "E"){
      location = [x + 1, y]
      return location
    }
    if (instruction === "W"){
      location = [x - 1, y]
      return location
    }
}
