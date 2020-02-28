const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Import Roiutes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) =>{
    res.send('we are on home');
});

//DB connection
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser: true },
 () => {
    console.log('connected to db');
});

//how to we start listening
app.listen(4000);
