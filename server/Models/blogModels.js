const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BlogSchema = new schema(
    {
        bloggerName: String,

        text: {
            type: String,
            require: true
        }
    }, { timestamps: true }
);

const blogs = mongoose.models(bloggerName, "Blogs");

module.exports = blogs;