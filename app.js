const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser');

app.use(bodyParser.json())

//IMPORT ROUTES
const postsRoute= require('./routes/posts')
app.use('/posts', postsRoute)


//Routes
app.get('/', (req,res) =>{
    res.send('We are on home')
})

    
//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log('Connected To DB!')
)

//How to start listening to server
app.listen(3000);

