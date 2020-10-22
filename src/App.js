import React, {useState} from 'react';
import './App.css';
import data from "../data/practice_data.json"
import CurrentStats from "./components/CurrentStats"


function App() {

  const [roombaLocation, setRoombaLocation] = useState(
 data.initialRoombaLocation
  )
  
  const roomDimensions = data.roomDimensions

  const dirtLocations = data.dirtLocations

  const drivingInstructions = data.drivingInstructions

  let wallHits = 0
  let stepCount = 0
  let dirtCount = 0
  let displayCount = stepCount + 1

  //loop will start via onClick from button
  //need a loop that iterates over the driving instructions
  //while stepCount is <=len(drivingInstructions):
  //function(drivingInstruction[stepCount])
    //for each direction:
      //if it is "N":
        //increment roombaLocation[1]+1
      //if it is "S":
        //decrement roombaLocation[1]-1
      //if it is "E":
        //increment roombaLocation[0]+1
      //if it is "W":
        //decrement roombaLocation[0]-1
      //returns new roombaLocation

      //need to check that this is a valid roombaLocation. write a function for this.
      //function(new roombaLocation){
          //if(roombaLocation[0] >= 1 && roombaLocation[0] <=roomDimensions[0] && roombaLocation[1] >= 1 && roombaLocation[1] <= roomDimensions[1]){
              //setRoombaLocation(new roombaLocation)
          //}
          //else{
              //increment wallHits count
              //break loop
          //}
      //}
        
    //if roombaLocation === one of the dirt locations:
      //increment dirtCount +=1

    //incrememnt stepCount

  return (
    <div className="App">
      <h1>Roomba Challenge- accepted!</h1>
      <button>Run Roomba!</button>
      <div>
        <CurrentStats displayCount={displayCount} roombaLocation={roombaLocation} dirtCount={dirtCount} wallHits={wallHits}/>
        
      </div>
    </div>
  );
}

export default App;
