const express = require('express');
const router = express.Router();
const contoller = require('../Controllers/blogController');
const requireAuth = require('../middleware/requireAuth')

// Require Authorzation first 
router.use(requireAuth);

// Get all the blogs
router.get('/', contoller.getAllBlog);

// Get only my blogs
router.get('/myBlogs', contoller.getMyBlogs);

// Add a single blog
router.post('/', contoller.postBlog)

// Get a single blog
router.get('/:id', contoller.getSingleBlog )

// Delete a single blog
router.delete('/:id', contoller.deleteBlog )

// Update a single blog
router.patch('/:id', contoller.updateBlog)


module.exports = router;