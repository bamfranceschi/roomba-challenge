# Roomba Challenge

This project allows a user to upload a JSON file with instructions to move a Roomba around a given room, and keeps track of how many dirt piles the Roomba cleans up and how many times it hits a wall.

The uploader expects a JSON file with this format:

```
{
    roomDimensions: [x, y],
    initialRoombaLocation: [x, y],
    dirtLocations: [[x, y], [x, y], [x, y], [x, y], [x, y]], 
    drivingInstructions: ["N", "N", "E", "W", "W", "N", "S"], 
}
```
Specifically:

Room dimensions: Array with 2 numerical elements that serve as X and Y

Initial Roomba location: Array with 2 numbered elements that serve as starting X and Y coordinates

Dirt locations: An array with multiple arrays- each with 2 numerical elements that serve as coordinates

Driving instructions: An array consisting of "N" "S" "E" or "W" elements that serve as driving directions for the Roomba


## Available Scripts

### `yarn install`

This project uses the following libraries:
 - react-dropzone
 - styled-components
 - jest

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
Project uses Jest for testing.

### `yarn build`

Builds the app for production to the `build` folder.<br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
