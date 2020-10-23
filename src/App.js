import React, {useEffect, useState} from 'react';
import './App.css';
import data from "./data/practice_data.json"
import CurrentStats from "./components/CurrentStats"


function App() {

  const [roombaLocation, setRoombaLocation] = useState(
 data.initialRoombaLocation
  )
  const roomDimensions = data.roomDimensions
  const dirtLocations = data.dirtLocations
  const drivingInstructions = data.drivingInstructions

  const [ticker, setTicker] = useState(-1)
  const [wallHits, setWallHits] = useState(0)
  const [dirtCount, setDirtCount] = useState(0)
  const [driveStart, setDriveStart] = useState(false)

  useEffect(() => {

    const interval = setInterval(() => {
      if(ticker <= drivingInstructions.length - 1 && driveStart){

        setTicker(ticker + 1)
      }

    }, 1000);

    return () => clearInterval(interval)

  }, [driveStart, ticker])

  const nextDirection = (e) => {
    e.preventDefault()
    setDriveStart(true)
  }

  
  return (
    <div className="App">
      <h1>Roomba Challenge- accepted!</h1>
      <button onClick={nextDirection}>Run Roomba!</button>
      <div>
        <CurrentStats roombaLocation={roombaLocation} instructions={drivingInstructions} dirtCount={dirtCount} wallHits={wallHits} ticker={ticker} dimensions={roomDimensions} setRoombaLocation={setRoombaLocation} setWallHits={setWallHits} dirtLocations={dirtLocations} setDirtCount={setDirtCount}/>
        
      </div>
    </div>
  );
}

export default App;
