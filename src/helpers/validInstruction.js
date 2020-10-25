//function returns a valid instruction for Roomba
//inputs: ticker, instruction array
//output: instruction element or undefined

export function validInstruction(ticker, instructions) {
  if (ticker <= instructions.length - 1) {
    return instructions[ticker];
  } else {
    //maybe some code here to say we've finished the process?
    return undefined;
  }
}
