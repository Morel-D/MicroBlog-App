const User = require('../Models/authModels');
const jwt = require('jsonwebtoken');


const createToken = (_id) =>
{
    return jwt.sign({_id}, process.env.SECRETE, { expiresIn: '10d' })
}
 

const signUpBlog = async (req, res) => {

    const { userName, email, password, profile } = req.body
    
    try {
        const user = await User.signUp(userName, email, password, profile);

        const token = createToken(user._id);

        res.status(200).json({ userName, email, token, profile })
    } catch (error)
    {
        res.status(400).json({ error: error.message })
    }
}

const loginBlog = async (req, res) => {
   
    const {email, password} = req.body;

    try {
        const userLog = await User.login(email, password)
        // Create token 
        const token = createToken(userLog._id);

        const userName = userLog.userName
        const emails = userLog.email
        const profile = userLog.profile

        res.status(200).json({userName, emails, token, profile})
    } catch (error)
    {
        res.status(400).json({ error: error.message })
    }

}

module.exports = {
    signUpBlog,
    loginBlog
}