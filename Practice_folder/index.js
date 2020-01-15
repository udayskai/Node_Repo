let name = ["angular","react","vue" ,"ampber"];
let importModuleName=require('./Practice.js')

importModuleName(name);

let os = require("os");
let freememory = os.freemem();
console.log(freememory);


const path =require('path');
const pathname = path.parse(__filename);
console.log(pathname);

const fs = require('fs');
console.log(fs);

const http = require('http');

let server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("i am uday");
        res.end();
    }
    if(req.url=="/api"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write( "ular" );
        res.end();
        
    }

})

server.listen(4700);
