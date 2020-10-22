import React from "react"

function CurrentStats({displayCount, roombaLocation, dirtCount, wallHits}){
    return(
        <div>
            <h3>Current stats per step</h3>
        <div>
          <h6>`Current step: ${displayCount}`</h6>
          <h6>`Current location: ${roombaLocation}`</h6>
          <h6>`Current instruction: `</h6>
          <h6>`Total dirt collected: ${dirtCount}`</h6>
          <h6>`Wall hits: ${wallHits}`</h6>
        </div>
        </div>
    )
}

export default CurrentStats
