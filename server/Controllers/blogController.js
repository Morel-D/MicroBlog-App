const Blogs = require('../Models/blogModels');
const mongoose = require('mongoose');

const getAllBlog = (req, res) => {
    Blogs.find().sort({ createdAt: -1 })
        .then((results) => {
            res.status(200).json(results);
        }).catch((error) => {
        res.status(400).json(error.message())
    })
}

const getMyBlogs = (req, res) => {

    const user_id = req.user._id;
    Blogs.find({ user_id }).sort({ createdAt: -1 })
        .then((results) => {
            res.status(200).json(results);
        }).catch((error) => {
            res.status(400).json(error.message())
    })

}



const postBlog = async (req, res) => {
    const user_id = req.user._id;
    const {bloggerName, text, profile} = req.body
    const blog = new Blogs({bloggerName, text, profile, user_id})
    blog.save();

    Blogs.find()
        .then((results) => {
            res.json(results)
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
    getMyBlogs,
    postBlog,
    getSingleBlog,
    deleteBlog,
    updateBlog
}