require('dotenv').config();
const express = require('express');
const blogRouters = require('./Routers/blogRouters');
const mongoose = require('mongoose');

var db_url = process.env.DB_URL
var port = process.env.PORT;

// express setup
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// Database Connection
mongoose.connect(db_url)
    .then(() => {
        app.listen(port, () => {
            console.log("Connection established on port", port)
        })
    }).catch(error => {
    console.log('Something went wrong', error.message())
})



// Router Create 
app.use('/blogs', blogRouters);



