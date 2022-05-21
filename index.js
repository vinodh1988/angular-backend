var express=require("express")
var app=express()
var keypeople= require("./server/routes/keypeople")
var path = require("path")
var cors= require("cors")

app.use(cors())

app.use(express.json())
const fileUpload = require('express-fileupload');

app.use(fileUpload());

app.use("/keypeople",keypeople)

app.get("/",function(request,response){
    response.send("Node JS App is running")
})

app.post("/services/excel",function(request,response){
    let file= request.files.excel;
    let regex=/.+\.xlsx$/
    if(regex.test(file.name)) {
    file.mv(path.join(__dirname,"excelsheets/"+file.name))
      response.json({message:"file uploaded"})
    }
    else
      response.json({message: "file Must be in excel format"})
    }
)

app.get("/images/:imagename",function(request,response){
    let imagename = request.params.imagename
    response.sendFile(path.join(__dirname,"images/"+imagename))
})

app.listen("8000",function(){
    console.log("the server is running")
})