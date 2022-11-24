require('dotenv').config();
const express = require('express');
const blogRouters = require('./Routers/blogRouters');


var port = process.env.PORT;

// express setup
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// Router Create 
app.use('/blogs', blogRouters);


app.listen(port, () => {
    console.log("Listening on port", port)
})
