const http = require("http");
const port = 5000;

const myServer = http.createServer((req,res)=>{
    res.writeHead(202,{"Content-Type": "text/html"});
res.end('<h1> Hello </h1>')
res.end();
});


myServer.listen(port,(err)=>{
    if(err){
        console.log("failed")
    }else{
        console.log("server run successfully")
    }
});
