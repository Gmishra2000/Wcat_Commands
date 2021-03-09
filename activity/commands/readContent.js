let fs = require('fs');
let path = require("path");



function ReadFile(path){
    fs.readFile(path.join(path), { encoding: 'utf-8' }, function (err, data) {
            if (!err) {
                
                console.log(data);
            } else {
                console.log("Wrong input for file");
            }
    });
}



function contentRead(src){
    // console.log("This is called");
    if(src == undefined){
        src = process.cwd();

    }
ReadFile(src);
}

module.exports = {
    fs: contentRead
}