//function calculates whether there is dirt on a specific location
//inputs: new location, existing dirt locations
//output: boolean whether there is dirt or not

export function dirtFinder(location, dirtLocations) {
  for (let dirtLoc of dirtLocations) {
    if (dirtLoc[0] === location[0] && dirtLoc[1] === location[1]) {
      return true;
    } else {
      return false;
    }
  }
}

// module.exports = dirtFinder;
