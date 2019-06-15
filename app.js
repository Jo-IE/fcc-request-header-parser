const express = require("express");
const app = express();
var index = require('./index.js')


app.use("/", index)

// listen for requests 
var listener = app.listen(process.env.PORT, function(){
    console.log("Your app is now listening on " + listener.address().port)
    
})