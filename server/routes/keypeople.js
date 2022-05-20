var express=require("express")
var route =  express.Router()

route.get("/people",function(request,response){
    response.send("Nothing implemented yet")
})

module.exports = route