var express=require("express")
var route =  express.Router()
var dbcrud= require('../db/dbcrud')

route.get("/people",function(request,response){
    dbcrud.read(function(err,data){
        if(err)
          response.status(500).send("Server error")
        else
          response.json(data)
    })
})

module.exports = route