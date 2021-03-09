#!/usr/bin/env node
let fs = require('fs');
let path = require("path");


let nonEmpty = require("./commands/nonEmptyLine.js");
let emptyLine = require("./commands/numberEmptyLine.js");
let linespace = require("./commands/lineBreak.js");
let readLine = require("./commands/readContent.js");
let helperFile = require("./commands/help.js");

let input = process.argv.slice(2);



            let commands = input[0];
            if(commands == '-s')
            {
                linespace.fn(input[1]);
            }
            else if(commands == '-b')
            {

                nonEmpty.fn(input[1]);
            }
            else if(commands == '-n')
            {
                emptyLine.fn(input[1]);
            }
            else if(path.extname(commands).length > 0)
            {

                readLine.fs(input);
            }
            else
            {
                console.log("Command does not exist");
            }
