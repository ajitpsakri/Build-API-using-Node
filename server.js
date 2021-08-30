const express = require('express') //importing express package 

const fs = require('fs') //file system module inbuilt in node

const data = fs.readFileSync('data.json') //access file 

//Sync in readFileSync job is to stop execution of next line before the data is loaded 

// data is raw we have to convert it to Json

const dataJson = JSON.parse(data)

const app = express() // calling express 

app.listen("3000") //listen to what ever client is saying @ localhost:3000



app.get('/:name/:score', function getParameters(req, res) { //: is to use variables
    let name = req.params.name
    let score = req.params.score;

    dataJson.push({
        name: name,
        score: score
    })

    let scoreBoard = JSON.stringify(dataJson) // fs.writeFile only exepts strings
    fs.writeFile('data.json', scoreBoard, function () {
        res.send("Your Data is stored")
    })
})