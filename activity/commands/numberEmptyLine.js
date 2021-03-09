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
      let data = addNumber(str);
      data = data.join("\n");
      console.log(data);
    }else{
      console.log("Invalid file");
      return;
    }
}


function addNumber(arr) {
   for (let i = 1; i <= arr.length; i++) {
     arr[i - 1] = i + " " + arr[i - 1];
   }
   return arr;
}

function numberEmptyLinefn(src) {
// console.log(`organize was called`);

if(src == undefined){
    src = process.cwd();
}
checkFile(src);
}



module.exports = {
    fn: numberEmptyLinefn
}
