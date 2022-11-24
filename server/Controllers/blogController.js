

const getAllBlog = (req, res) => {
    res.json({msg: "Got all blogs"})
}

const postBlog = (req, res) => {
    res.json({msg: "A blog has been created"})
}

const getSingleBlog = (req, res) => {
    res.json({msg: "Single Blog has been selected"})
}

const deleteBlog = (req, res) => {
    res.json({msg: "a blog has been deleted"})
}

const updateBlog = (req, res) => {
    res.json({msg: "Blog has been update"})
}


module.exports  = { 
    getAllBlog,
    postBlog,
    getSingleBlog,
    deleteBlog,
    updateBlog
}