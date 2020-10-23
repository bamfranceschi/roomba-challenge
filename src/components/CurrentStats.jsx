import React, {useEffect, useState} from "react"
import {validInstruction} from "../helpers/validInstruction"
import {newLocation} from "../helpers/newLocation"
import { validMove } from "../helpers/validMove"
import { dirtFinder } from "../helpers/dirtFinder"

function CurrentStats({roombaLocation, dirtCount, wallHits, ticker, instructions, dimensions, setRoombaLocation, setWallHits, setDirtCount, dirtLocations}){
    useEffect(() => {
        //call pure functions here
        let instruction = validInstruction(ticker, instructions)
        
        if (instruction){
            let nextLocation = newLocation(roombaLocation, instruction)
            
            if(validMove(nextLocation, dimensions)){
                setRoombaLocation(nextLocation)

                if(dirtFinder(roombaLocation, dirtLocations)){
                    setDirtCount(dirtCount + 1)
                    
                }

            } else {
                setWallHits(wallHits + 1)
            }
        }

        if(displayCount <= instructions.length){

            setDisplayCount(displayCount + 1)
        }
            
    }, [ticker])

    const [displayCount, setDisplayCount] = useState(ticker + 1)

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
