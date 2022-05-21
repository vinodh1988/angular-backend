var express=require("express")
var app=express()
var keypeople= require("./server/routes/keypeople")
var path = require("path")
var cors= require("cors")
const excelToJson = require('convert-excel-to-json');

app.use(cors())

app.use(express.json())
const fileUpload = require('express-fileupload');

app.use(fileUpload());

app.use("/keypeople",keypeople)

app.get("/",function(request,response){
    response.send("Node JS App is running")
})

app.post("/services/excel",async function(request,response){
    let file= request.files.excel;
    let regex=/.+\.xlsx$/
    if(regex.test(file.name)) {
    await file.mv(path.join(__dirname,"excelsheets/"+file.name))
    const result = excelToJson({
        sourceFile: path.join(__dirname,"excelsheets/"+file.name),
        header:{
            // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
            rows: 1 // 2, 3, 4, etc.
        },
        columnToKey: JSON.parse(request.body.columns)
    });
      response.json(result)
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