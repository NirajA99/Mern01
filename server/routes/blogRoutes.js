const express = require('express');
const { PostBlog, getBlogs } = require('../controllers/blogController');
const router = express.Router();

router.post('/newBlog' , PostBlog);
router.get('/getBlogs' , getBlogs);

module.exports = router;

