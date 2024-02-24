const Blog = require('../models/blogSchema');

const PostBlog = async (req , res) => {
    try {
        const { title, content, userId } = req.body; // Retrieve user ID from request body
        // Create a new blog instance with user ID
        const newBlog = new Blog({
            title,
            content,
            userId: userId, // Associate the blog with the user who created it
        });
        // Save the new blog
        await newBlog.save();
        res.status(201).json({ message: 'Blog Created!', newBlog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getBlogs =async (req ,res) => {
    try {
        const blogs = await Blog.find().populate('userId', 'username'); // Populate the 'user' field with username
        res.json(blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    };


module.exports = {PostBlog , getBlogs}