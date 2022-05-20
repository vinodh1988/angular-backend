var express=require("express")
var app=express()
var keypeople= require("./server/routes/keypeople")
var path = require("path")

app.use("/keypeople",keypeople)

app.get("/",function(request,response){
    response.send("Node JS App is running")
})

app.get("/images/:imagename",function(request,response){
    let imagename = request.params.imagename
    response.sendFile(path.join(__dirname,"images/"+imagename))
})

app.listen("8000",function(){
    console.log("the server is running")
})