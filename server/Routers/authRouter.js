const express = require('express');
const router = express.Router();
const contoller = require('../Controllers/authController');



// SignUp
router.post('/Signup', contoller.signUpBlog);

// Login
router.post('/Login', contoller.loginBlog);

router.get('/Users', contoller.getUsers);


module.exports = router;