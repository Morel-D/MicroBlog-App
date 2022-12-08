const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
    {
        bloggerName: String,
        text: { type: String, required: true },
        profile: { type: String },
        user_id: { type: String, required: true }
        
    }, { timestamps: true }
);

const Blogs = mongoose.model('Blogs', BlogSchema);

module.exports = Blogs;