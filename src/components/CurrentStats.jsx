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
          {displayCount >= instructions.length + 1 ? (
            <div>
              <h3>Final Stats:</h3>
              <div>
                <h5>{`Total steps: ${displayCount}`}</h5>
                <h5>{`Final location:(${jsonUpload.initialRoombaLocation[0]}, ${jsonUpload.initialRoombaLocation[1]})`}</h5>
                <h5>{`Total dirt collected: ${dirtCount}`}</h5>
                <h5>{`Total number of wall hits: ${wallHits}`}</h5>
              </div>
            </div>
          ) : (
            <div>
              <h3>Current stats per step</h3>
              <h5>{`Current step: ${displayCount}`}</h5>
              {jsonUpload.initialRoombaLocation[0] !== undefined ? (
                <h5>{`Current location: (${jsonUpload.initialRoombaLocation[0]}, ${jsonUpload.initialRoombaLocation[1]})`}</h5>
              ) : (
                <> </>
              )}

              {instructions[ticker] === undefined ||
              displayCount >= instructions.length + 1 ? (
                <></>
              ) : (
                <h5>{`Current instruction: ${instructions[ticker]}`}</h5>
              )}
              <h5>{`Total dirt collected: ${dirtCount}`}</h5>
              <h5>{`Wall hits: ${wallHits}`}</h5>
            </div>
          )}
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
}

export default CurrentStats;
