let fs = require('fs');
let path = require("path");

function isFileorNot(src) {
    return fs.lstatSync(src).isFile();
}



let str =``;
let names = [];
function checkFile(path){
    let isFile = isFileorNot(path);
    if(isFile == true){
        
      str += fs.readFileSync(path).toString();
    
    str = str.split("\n");
    
    let data = BreakSpace(str);
    
    
    data = names.join("\n");
    // console.log(data);
      
      console.log(data);
    }else{
      console.log("Invalid file");
      return;
    }
}

function BreakSpace(str){
    for (var i in str) {
        var trimmed = str[i].trim();
        if (trimmed .length !== 0) {
            names.push(trimmed);
        }

    }
    return names;

}

// checkFile(process.argv[2]);

function whiteSpace(src) {
// console.log(`organize was called`);

if(src == undefined){
    src = process.cwd();
}
checkFile(src);
}



module.exports = {
    fn: whiteSpace
}