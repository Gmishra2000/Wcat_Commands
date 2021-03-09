function helperfn() {
    console.log(`List of all the commands:
    wcat [options] [files]


    option to remove big line break (wcat -s filename)
    option to add line number to non empty lines (wcat -b filename)
    option to add line numbers to all lines (wcat -n filename) 
`);
}

// nodejs -> export
module.exports={
    fn:helperfn
}