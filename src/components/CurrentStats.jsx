import React from "react";

function CurrentStats({
  uploadSuccess,
  jsonUpload,
  instructions,
  ticker,
  dirtCount,
  wallHits,
}) {
  const displayCount = ticker + 2;

  return (
    <div>
      {uploadSuccess ? (
        <div>
          <h3>Current stats per step</h3>
          <h6>{`Current step: ${displayCount}`}</h6>
          {jsonUpload.initialRoombaLocation[0] !== undefined ? (
            <h6>{`Current location: (${jsonUpload.initialRoombaLocation[0]}, ${jsonUpload.initialRoombaLocation[1]})`}</h6>
          ) : (
            <> </>
          )}

          {instructions[ticker] === undefined ||
          displayCount >= instructions.length + 1 ? (
            <></>
          ) : (
            <h6>{`Current instruction: ${instructions[ticker]}`}</h6>
          )}
          <h6>{`Total dirt collected: ${dirtCount}`}</h6>
          <h6>{`Wall hits: ${wallHits}`}</h6>
        </div>
      ) : (
        <> </>
      )}
      {uploadSuccess && displayCount >= instructions.length + 1 ? (
        <div>
          <h5>Final Stats:</h5>
          <h6>{`Total steps: ${displayCount}`}</h6>
          <h6>{`Total dirt collected: ${dirtCount}`}</h6>
          <h6>{`Total number of wall hits: ${wallHits}`}</h6>
          <h6>{`Final location:(${jsonUpload.initialRoombaLocation[0]}, ${jsonUpload.initialRoombaLocation[1]})`}</h6>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
}

export default CurrentStats;
