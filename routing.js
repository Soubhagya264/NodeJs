const http=require("http");

function index(req,res){
    res.writeHead(200);

    res.end("Hello World");
}

function about(req,res){
    res.writeHead(200);
    res.end("About Page");
}

http.createServer((req,res)=>{
    if (req.url==="/"){
        return index(req,res);
    }
    else if(req.url==="/about"){
        return about(req,res);
    }
   
}
).listen(8000);