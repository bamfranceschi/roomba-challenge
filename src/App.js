import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./data/practice_data.json";
import CurrentStats from "./components/CurrentStats";
import { validInstruction } from "./helpers/validInstruction";
import { newLocation } from "./helpers/newLocation";
import { validMove } from "./helpers/validMove";
import { dirtFinder } from "./helpers/dirtFinder";
import Uploader from "./components/Uploader";

function App() {
  const [jsonUpload, setJsonUpload] = useState({
    roomDimensions: [],
    initialRoombaLocation: [],
    dirtLocations: [],
    drivingInstructions: [],
  });
  console.log(jsonUpload.roomDimensions);
  const [roombaLocation, setRoombaLocation] = useState(
    jsonUpload.initialRoombaLocation
  );
  const roomDimensions = jsonUpload.roomDimensions;
  const dirtLocations = jsonUpload.dirtLocations;
  const drivingInstructions = jsonUpload.drivingInstructions;

  const [ticker, setTicker] = useState(0);
  const [wallHits, setWallHits] = useState(0);
  const [dirtCount, setDirtCount] = useState(0);
  const [driveStart, setDriveStart] = useState(false);
  // const displayCount = ticker + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (ticker <= drivingInstructions.length - 1 && driveStart) {
        setTicker(ticker + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [driveStart, ticker, drivingInstructions]);

  useEffect(() => {
    //call pure functions here
    let instruction = validInstruction(ticker, drivingInstructions);

    if (instruction) {
      let nextLocation = newLocation(roombaLocation, instruction);

      if (validMove(nextLocation, roomDimensions)) {
        setRoombaLocation(nextLocation);

        if (dirtFinder(roombaLocation, dirtLocations)) {
          setDirtCount(dirtCount + 1);
        }
      } else {
        setWallHits(wallHits + 1);
      }
    }
  }, [ticker]);

  const nextDirection = (e) => {
    e.preventDefault();
    setDriveStart(!driveStart);
  };

  return (
    <div className="App">
      <h1>Roomba Challenge- accepted!</h1>
      <Uploader jsonUpload={jsonUpload} setJsonUpload={setJsonUpload} />
      {driveStart === false ? (
        <button onClick={nextDirection}>Run Roomba!</button>
      ) : (
        <button onClick={nextDirection}>Pause Roomba!</button>
      )}

      <div>
        <CurrentStats
          roombaLocation={roombaLocation}
          instructions={drivingInstructions}
          ticker={ticker}
          dirtCount={dirtCount}
          wallHits={wallHits}
        />
      </div>
    </div>
  );
}

export default App;
