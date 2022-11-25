const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SchemaUsers = new Schema(
    {
        Username: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true,
            unique: true
        }
    }, { timestamps: true }
)

const Users = mongoose.model('user', SchemaUsers);

module.exports = Users