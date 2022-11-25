

const signUpBlog = (req, res) => {
    res.status(200).json({msg: "Signup is successful"})
}

const loginBlog = (req, res) => {
    res.status(200).json({ msg: "Login is succesful" });
}

module.exports = {
    signUpBlog,
    loginBlog
}