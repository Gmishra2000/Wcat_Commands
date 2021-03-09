let fs = require('fs');
let path = require("path");

function isFileorNot(src) {
    return fs.lstatSync(src).isFile();
}



let str =``;
function checkFile(path){
    let isFile = isFileorNot(path);
    if(isFile == true){
        //console.log('path is a File');
      // let data = readContent(isFile).toString();
      str += fs.readFileSync(path).toString();
      str = str.split("\n");
      let data = nonEmptyLine(str);
      data = data.join("\n");
      console.log(data);
    }else{
      console.log("Invalid file");
      return;
    }
}


function nonEmptyLine(arr){
  let number = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "" && arr[i] !== "\r") {
      arr[i] = number + " " + arr[i];
      number++;
    }
  }
  return arr;
}

function nonEmptyLinefn(src) {
// console.log(`organize was called`);

if(src == undefined){
    src = process.cwd();
}
checkFile(src);
}



module.exports = {
    fn: nonEmptyLinefn
}
