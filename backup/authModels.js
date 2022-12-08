const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bycrypt = require('bcrypt');
const validator = require('validator');


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
        },

        profile: {
            type: String,
            required: true
        }
    }, { timestamps: true }
)




// Creating a function for signUp conditions
SchemaUsers.statics.signUp = async function (userName, email, password, profile)
{

    if (!userName || !email || !password)
    {
        throw Error('Fill all the infromations')
    }

    if (!profile)
    {
        throw Error('Insert a profile picture')
    }
    
    
    if (!validator.isEmail(email))
    {
        throw Error('Invalide email')
    }
    
    if (!validator.isStrongPassword(password))
    {
        throw Error('Password is too weak')
    }
    


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
    const user = await this.create({userName, email, profile, password: hash })
    
    return user;

    
}



// Create a condition for login procedures

SchemaUsers.statics.login = async function (email, password)
{
    // Check if the fields are empty
    if (!email || !password)
    {
        throw Error('Fill in all the informations')
        
    }
    
    // Search for similar email
    const user = await this.findOne({ email })
    
    // Incase no similar email is found
    if (!user)
    {
        throw Error('Invalide Email')
    }
    
    // Search for similar password
    const match = await bycrypt.compare(password, user.password)

    // In case no similar password is found
    if (!match)
    {
        throw Error('Invalide Password')
    }
    

    return user
    }


    const Users = mongoose.model('user', SchemaUsers);
module.exports = Users