const express = require('express') //importing express package 

const app = express() // calling express 

app.listen("3000") //listen to what ever client is saying @ localhost:3000

let urlResponse = []

app.use(express.static("public"))

app.get('/:colorName', function getParameters(req, res) {
    res.send("color used is " + req.params.colorName)
})

