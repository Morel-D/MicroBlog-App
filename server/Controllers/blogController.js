const Blogs = require('../Models/blogModels');
const mongoose = require('mongoose');
const { type } = require('os');

const getAllBlog = (req, res) => {
    Blogs.find().sort({ createdAt: -1 })
        .then((results) => {
            res.status(200).json(results);
        }).catch((error) => {
        res.status(400).json(error.message())
    })
}

const postBlog = (req, res) => {
    const blog = new Blogs(req.body)
    blog.save()
    Blogs.find()
        .then((results) => {
        res.status(200).json(results)
        }).catch((error) => {
        res.status(400).json(error.message())
    })
}

const getSingleBlog = (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);

    Blogs.findById(id)
        .then((results) => {
        res.status(200).json(results)
        }).catch((error) => {
        res.status(400).json(error.message())
    })
}


const deleteBlog = (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);

    Blogs.findByIdAndRemove(id)
        .then((results) => {
        res.status(200).json(results)
        }).catch((error) => {
        res.status(400).json(error.message())
    })
}

const updateBlog = (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id)

    const editBlog = {
        bloggerName: req.body.bloggerName,
        text: req.body.text
    }

    Blogs.findByIdAndUpdate(id, editBlog)
    .then((results) => {
        res.status(200).json(results)
    }).catch((error) => {
        res.status(400).json(error.message())
    })
}


module.exports  = { 
    getAllBlog,
    postBlog,
    getSingleBlog,
    deleteBlog,
    updateBlog
}