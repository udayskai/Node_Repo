const http = require('http');
const fs = require('fs')



let Data=fs.readFileSync('./data.json',"utf-8");
DataObj=JSON.parse(Data);
console.log(DataObj);
let {name,age,surename}=DataObj;


const server= http.createServer((req,res)=>{
      const pathName= req.url;
      
      
      if(pathName=="/")
           { res.end(`<h1>${name}</h1> </br> <h2>${age}</h2> </br>
                         <p>${age}</p>`) }
               
      else if(pathName==="/Menu")
          {res.end(`<h1>Food</h1> </br> <h2>Prize</h2> </br>
          <p>Veg</p>`)}

       else {
           res.writeHead(404,{"content-typeof":"text/html"})
           res.end(`<h1 style="color:red">Page Not Found</h1>`)}
    })


server.listen(4000,()=>{
    console.log("port 4000 working")
})


