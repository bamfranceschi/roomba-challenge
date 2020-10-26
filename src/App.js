import React, { useEffect, useState } from "react";
import "./App.css";
import CurrentStats from "./components/CurrentStats";
import validInstruction from "./helpers/validInstruction";
import newLocation from "./helpers/newLocation";
import validMove from "./helpers/validMove";
import dirtFinder from "./helpers/dirtFinder";
import Uploader from "./components/Uploader";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [jsonUpload, setJsonUpload] = useState({
    roomDimensions: [],
    initialRoombaLocation: [],
    dirtLocations: [[]],
    drivingInstructions: [],
  });

  const roomDimensions = jsonUpload.roomDimensions;
  const dirtLocations = jsonUpload.dirtLocations;
  const drivingInstructions = jsonUpload.drivingInstructions;

  //starting ticker at -1 to account for it being used to traverse the directions array, and traversal obviously starts at position zero.
  const [ticker, setTicker] = useState(-1);
  const [wallHits, setWallHits] = useState(0);
  const [dirtCount, setDirtCount] = useState(0);
  const [driveStart, setDriveStart] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // subtracting 2 from the length of instructions array to make sure the ticker does not continue beyond array, accounting for its starting -1 value.
      if (ticker <= drivingInstructions.length - 2 && driveStart) {
        setTicker(ticker + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [driveStart, ticker, drivingInstructions]);

  useEffect(() => {
    //call pure functions here
    let instruction = validInstruction(ticker, drivingInstructions);

    if (instruction) {
      let nextLocation = newLocation(
        jsonUpload.initialRoombaLocation,
        instruction
      );

      if (validMove(nextLocation, roomDimensions)) {
        setJsonUpload({
          ...jsonUpload,
          initialRoombaLocation: nextLocation,
        });

        if (dirtFinder(jsonUpload.initialRoombaLocation, dirtLocations)) {
          setDirtCount(dirtCount + 1);
        }
      } else {
        setWallHits(wallHits + 1);
      }
    }
  }, [ticker]);

  const drive = (e) => {
    e.preventDefault();
    setDriveStart(!driveStart);
  };

  return (
    <Container>
      <h1>Roomba Challenge</h1>
      <Uploader
        setJsonUpload={setJsonUpload}
        uploadSuccess={uploadSuccess}
        setUploadSuccess={setUploadSuccess}
      />
      {driveStart === false ? (
        <button onClick={drive}>Run Roomba!</button>
      ) : (
        <button onClick={drive}>Pause Roomba!</button>
      )}

      <div>
        <CurrentStats
          uploadSuccess={uploadSuccess}
          jsonUpload={jsonUpload}
          instructions={drivingInstructions}
          ticker={ticker}
          dirtCount={dirtCount}
          wallHits={wallHits}
          driveStart={driveStart}
        />
      </div>
    </Container>
  );
}

export default App;
