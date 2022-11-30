const jwt = require('jsonwebtoken');
const Blogs = require('../Models/blogModels');

const requireAuth = async (req, res, next) => 
{
    const { authorization } = req.headers;

    if (!authorization)
    {
        return res.status(401).json({message : "Authorization token required"})
    }
    
    const token = authorization.split(' ')[1]

    try {
        const { _id } = jwt.verify(token, process.env.SECRETE)

        // This user can be anythng
        req.user = await Blogs.findOne({ _id }).select('_id')
        next();
    } catch (error)
    {
        console.log(error)
        res.status(401).json({ error: "Request is not authorised"})
    }

}

module.exports = requireAuth; 