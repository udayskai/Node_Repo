

const express= require('express') //import express module after install from "npm i express" 
const app =express();             //know we create app by calling express as a function .
const port = process.env.NODE_ENV|| 4700;
app.use(express.json());
  
const songsNames=[ 
             {id:1,Name:"  Lagdi Lahore di",Movie:"Street Dancer 3D (2019)",duration:"3.5min",Description:"Street Dancer 3D Mp3 Song by Guru Randhawa."},
             {id:2,Name:" Old Skool - Sidhu Moose Wala",Movie:" New Punjabi ",duration:"3min",Description:"- Sidhu Moose Wala Mp3 Song by Prem Dhillon."} , 
             {id:3,Name:"  Maay Bhavani - Tanhaji",Movie:" Tanhaji ",duration:"4min",Description:"Song by Sukhwinder Singh, Shreya Ghoshal, Ajay ."} , 
             {id:4,Name:" story of my life",Movie:" oneD ",duration:"4min",Description:"5 d"} , 
          ]
 // we use get method to send send data from api to clint side 
// this take two para meter (1:request link ,2: callback function (req,res)=>  
// { req IS request from the clint side to api , res Is the response given on the 
// req by api to client side})


// array of songslist - fetch
app.get("/songlist",(req,res)=>{

     return new Promise((resolve,reject)=>{
           
        resolve( res.send(songsNames));

     })
     
});


// single Object of songs  - fetch
app.get("/songlist/:id",(req,res)=>{
         let data=songsNames.find(item=>item.id==req.params.id);
         if(!data){
           return res.status(404).send({message:"invalid request"})
         }
      res.send(data);
});

 
//push data  to api                -- make sure the coming data in json format and to hundle that json in express we have to allow the exoress first by -- app.use(express.json())
app.post("/addSong",(req,res)=>{
    let songNew = {
         id:songsNames.length+1,
         Name:req.body.Name,
         Movie:req.body.Movie,
         duration:req.body.duration,
         Description:req.body.Description
   }
   songsNames.push(songNew);
   res.send(songsNames);
})


// update data
app.put("/updateSong/:id",(req,res)=>{
   let upSong=songsNames.find((data)=>data.id==req.params.id);
      upSong.Name=req.body.Name;
       upSong.Movie=req.body.Movie,
            upSong.duration=req.body.duration,
            upSong.Description=req.body.Description
          
  
   res.send(songsNames);
})

//remove songs
app.delete("/songDelete/:id",((req,res)=>{
   // let data=songsNames.find(item=>item.id==req.params.id);
   // let index=songsNames.indexOf(data);
   // console.log(index);
   songsNames.splice(req.params.id,1)
   res.send(songsNames)
}))


var server = require('http').createServer(app);
server.listen(8080);

// app.listen(port,()=>{
//       console.log(`server working on ${port}`)});
//app.listen is app method to create local host by giving  2  para (1:portNumber, 2:callbackFunction !! )


//we send json data from the frontend
// we use middele ware because express dont allow the Json data ( inbulid , coustom , 3 rd party )
//app.use(express.json())  this in build middleware