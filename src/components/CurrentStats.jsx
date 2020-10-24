import React from "react"


function CurrentStats({roombaLocation, instructions, ticker, dirtCount, wallHits}){
    
   
    const displayCount = ticker + 1;

    return(
        <div>
            <h3>Current stats per step</h3>
            {displayCount >= (instructions.length + 1) ? <h5>Final Stats:</h5> : <> </>}
        <div>
          <h6>{`Current step: ${displayCount}`}</h6>
        <h6>{`Current location: (${roombaLocation[0]}, ${roombaLocation[1]})`}</h6>
          {instructions[ticker] === undefined || (displayCount >= (instructions.length + 1)) ? 
          <></>
          :
          <h6>{`Current instruction: ${instructions[ticker]}`}</h6>
        }  
          <h6>{`Total dirt collected: ${dirtCount}`}</h6>
          <h6>{`Wall hits: ${wallHits}`}</h6>
        </div>
        </div>
    )
}

export default CurrentStats
