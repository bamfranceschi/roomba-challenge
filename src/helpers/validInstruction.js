//function returns a valid instruction for Roomba
    //inputs: ticker, instruction array
    //output: instruction element or undefined

export function validInstruction(ticker, instructions){
    if(ticker <= instructions.length -1){
        console.log(`valid instruction number`)
        return instructions[ticker]
    } else {
        console.log(`invalid instruction number`)
        //maybe some code here to say we've finished the process?
        return undefined
    }
}
