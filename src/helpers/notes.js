// const driveRoomba = () => {
//     // setDriveStarted(true)
//     while(stepCount <= (drivingInstructions.length - 1)){

//       let x = roombaLocation[0]
//       let y = roombaLocation[1]
        
//       let currInstruction = drivingInstructions[stepCount]

//       console.log(`step count: ${stepCount}, instruction: ${drivingInstructions[stepCount]}`)

//       if (currInstruction === "N"){
//         newRoombaLocation = [x, y + 1]
//         // setRoombaLocation([x, y + 1])
//       }
//       if (currInstruction === "S"){
//         newRoombaLocation = [x, y - 1]
//         // setRoombaLocation([x, y - 1])
//       }
//       if (currInstruction === "E"){
//         newRoombaLocation = [x + 1, y]
//         // setRoombaLocation([x + 1, y]) 
//       }
//       if (currInstruction === "W"){
//         newRoombaLocation = [x - 1, y]
//         // setRoombaLocation([x - 1, y])
//       }

//       if (newRoombaLocation[0] >= 0 && newRoombaLocation[0] <=roomDimensions[0] && newRoombaLocation[1] >= 0 && newRoombaLocation[1] <= roomDimensions[1]){
//           setRoombaLocation(newRoombaLocation)
          
//           if (dirtLocations.includes(roombaLocation)){
//             setDirtCount(dirtCount + 1)
//           }
//           setDisplayCount(displayCount + 1)
//       }
//       else{
//         setWallHits(wallHits + 1)
//         console.log('ive been hit')
//         setDisplayCount(displayCount + 1) 
//                 // console.log(displayCount, roombaLocation, dirtCount, wallHits)
//         continue
//       }
//       console.log(displayCount, roombaLocation, drivingInstructions[stepCount], dirtCount, wallHits )
//     }


//   }
