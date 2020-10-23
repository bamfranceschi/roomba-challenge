import React, {useEffect} from "react"
import {validInstruction} from "../helpers/validInstruction"
import {newLocation} from "../helpers/newLocation"
import { validMove } from "../helpers/validMove"
import { dirtFinder } from "../helpers/dirtFinder"

function CurrentStats({roombaLocation, dirtCount, wallHits, ticker, instructions, dimensions, setRoombaLocation, setWallHits, setDirtCount, dirtLocations}){
    useEffect(() => {
        //call pure functions here

        console.log(dirtLocations)
        let instruction = validInstruction(ticker, instructions)
        
        if (instruction){
            console.log(`here's the instruction: ${instruction}`)
            let nextLocation = newLocation(roombaLocation, instruction)
            
            if(validMove(nextLocation, dimensions)){
                setRoombaLocation(nextLocation)
                console.log(`here's the next location: ${roombaLocation}`)

                //not working yet

                if(dirtFinder(roombaLocation, dirtLocations)){
                    setDirtCount(dirtCount + 1)
                    
                }

            } else {
                setWallHits(wallHits + 1)
                console.log('ive been hit- inside use effect')
            }
        }
            
    }, [ticker])
    return(
        <div>
            <h3>Current stats per step</h3>
        <div>
          <h6>Current step: {ticker}</h6>
        <h6>{`Current location: (${roombaLocation[0]}, ${roombaLocation[1]})`}</h6>
          <h6>{`Current instruction: ${instructions[ticker]}`}</h6>
          <h6>{`Total dirt collected: ${dirtCount}`}</h6>
          <h6>{`Wall hits: ${wallHits}`}</h6>
        </div>
        </div>
    )
}

export default CurrentStats
