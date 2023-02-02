const http = require("http");
const port = 5000;
const myServer = http.createServer((req,res)=>{
res.end('<h1> Hello </h1>')
});

myServer.listen(port,(err)=>{
    if(err){
        console.log("failed")
    }else{
        console.log("server run successfully")
    }
});
