const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bycrypt = require('bcrypt');
const { exists } = require('./blogModels');


const SchemaUsers = new Schema(
    {
        userName: {
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




// Creating a function for signUp conditions
SchemaUsers.statics.signUp = async function (userName, email, password)
{

    // create a variable which coantains an existing email 
    const exist = await this.findOne({ email })

    // Create condition in case this email already exist
    if (exist) 
    {
        throw Error('This email already exxist')

    }
    
    // In case it doesn't exist

    // Password hasing
    const salt = await bycrypt.genSalt(10);
    const hash = await bycrypt.hash(password, salt);

    // save them in a created variable
    const user = await this.create({userName, email, password: hash })
    
    return user;

    
    }


    const Users = mongoose.model('user', SchemaUsers);
module.exports = Users