const express = require('express') //importing express package 

const app = express() // calling express 

app.listen("3000") //listen to what ever client is saying @ localhost:3000
app.use(express.static(/*root directory*/"public")) //use abilility of express file to host static files