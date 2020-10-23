import React, {useState, useEffect} from 'react';
import './App.css';
import data from "./data/practice_data.json"
import CurrentStats from "./components/CurrentStats"
// import { validInstruction } from './helpers/validInstruction';
// import { newLocation } from './helpers/newLocation';
// import useInterval from "./helpers/useInterval"


function App() {

  const [roombaLocation, setRoombaLocation] = useState(
 data.initialRoombaLocation
  )

  // let roombaLocation = data.initialRoombaLocation
  
  const roomDimensions = data.roomDimensions

  const dirtLocations = data.dirtLocations

  const drivingInstructions = data.drivingInstructions
  
  const [stepCount, setStepCount] = useState(0)

  let newRoombaLocation
  const [ticker, setTicker] = useState(0)

  const [driveStarted, setDriveStarted] = useState(false)
  const [wallHits, setWallHits] = useState(0)
  const [dirtCount, setDirtCount] = useState(0)

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setStepCount(stepCount + 1)
  //   }, 4000);
  //   return () => clearTimeout(timeout)
  // }, [roombaLocation])
  
  // pass that direction in as a parameter to a move function that sets the location state of the roomba, checks for dirt, checks for wall hits
  
  // need to be able to isolate the incrementing of the direction array with an on click
  const nextDirection = (e) => {
    e.preventDefault()
    setDriveStarted(true)
    setTicker(ticker + 1)
    console.log(`drive: ${driveStarted}, ticker: ${ticker}`)
  }

  // console.log(moveRoomba(ticker, roombaLocation, drivingInstructions, roomDimensions, driveStarted, setDriveStarted))
  

  return (
    <div className="App">
      <h1>Roomba Challenge- accepted!</h1>
      <button onClick={nextDirection}>Run Roomba!</button>
      {/* <button onClick={() => setDriveStarted(false)}>stop Roomba</button> */}
      <div>
        <CurrentStats roombaLocation={roombaLocation} instructions={drivingInstructions} dirtCount={dirtCount} wallHits={wallHits} ticker={ticker} dimensions={roomDimensions} setRoombaLocation={setRoombaLocation} setWallHits={setWallHits} dirtLocations={dirtLocations} setDirtCount={setDirtCount}/>
        
      </div>
    </div>
  );
}

export default App;
