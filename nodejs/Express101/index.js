import http from "http";


//Create a server using http
const server= http.createServer((req,res)=>{

if(req.url==="/"){
    res.writeHead(201,"OK",{"content-Type":"text/html"})
    res.write("<h1>Home</h1>")
}else if(req.url==="/about"){
    res.writeHead(201,"OK",{"content-Type":"text/html"})
    res.write("<h1>about</h1>")
}else if(req.url==="/contact"){
    res.writeHead(201,"OK",{"content-Type":"text/html"})
    res.write("<h1>Contact</h1>")
}else{
    res.writeHead(404,"BAD",{"content-Type":"text/html"})
    res.write("<h1>404 page not found</h1>")
}
})

//start server
server.listen(8000,()=> console.log("Server listening on port 8000"))


