



const  express =  require('express');
const app = express();
const os = require('os');
console.log(os.freemem());
// console.log(app);

app.get('/name',(req,res)=>{
    res.send('inida_singh');
})

console.log(` MODE:${process.env.NODE_ENV}`);
console.log(` env:${app.get('env')}`);

app.listen(3005,()=>console.log("port 3000 working"))
























// let name = ["angular","react","vue" ,"ampber"];
// let importModuleName=require('./Practice.js')

// importModuleName(name);

// let os = require("os");
// let freememory = os.freemem();
// console.log(freememory);


// const path =require('path');
// const pathname = path.parse(__filename);
// console.log(pathname);

// const fs = require('fs');
// console.log(fs);

// const http = require('http');

// let server=http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.write("i am uday");
//         res.end();
//     }
//     if(req.url=="/api"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.write( "ular" );
//         res.end();
        
//     }

// })

// server.listen(4700);
