var express=require("express")
var app=express()

app.get("/",function(request,response){
    response.send("Node JS App is running")
})

app.listen("8000",function(){
    console.log("the server is running")
})