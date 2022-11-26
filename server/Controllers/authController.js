const User = require('../Models/authModels');
const jwt = require('jsonwebtoken');


const createToken = (_id) =>
{
    return jwt.sign({_id}, process.env.SECRETE, { expiresIn: '3d' })
}
 

const signUpBlog = async (req, res) => {

    const { userName, email, password } = req.body
    
    try {
        const user = await User.signUp(userName, email, password);

        const token = createToken(user._id);

        res.status(200).json({ userName, email, token })
    } catch (error)
    {
        res.status(400).json({ error: error.message })
    }
}

const loginBlog = (req, res) => {
    res.status(200).json({ msg: "Login is succesful" });
}

module.exports = {
    signUpBlog,
    loginBlog
}