var express=require("express")
var route =  express.Router()
var dbcrud= require('../db/dbcrud')
var path=require("path")
var BASE_PATH =require('../../config')

route.get("/people",function(request,response){
    dbcrud.read(function(err,data){
        if(err)
          response.status(500).send("Server error")
        else
          response.json(data)
    })
})

route.post("/people",function(request,response){
    let file= request.files.photo;
    file.mv(path.join(BASE_PATH,"images/"+file.name));

   let people={
       name:request.body.name,
       designation:request.body.designation,
       place:request.body.place,
       photo: file.name
   }

   dbcrud.add(people,function(err,data){
       if(err)
           response.status(500).send("Data not stored")

        else{
            response.send("Data successfully upladed")
        }   

   })
})

module.exports = route