import React, { useEffect, useState } from 'react'
import NewBlog from '../components/NewBlog'
import axios from 'axios';

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Function to fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:4000/blogs/getBlogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  
  return (
    <>
    <div className="container-fluid bg-secondary-subtle text-secondary-emphasis">

   <div className="p-5 vh-100">
      {/* Header */}
      <header className="mb-4">
        <h1 className="text-center">My Blog Website</h1>
      </header>
      <div className="row mb-4">
        <NewBlog />
      </div>
     

      {/* Display user's blogs */}
      <div className="row">
      <h2 className="">All Blogs </h2>
        {blogs.map(blog => (
          <div key={blog.id} className="col-md-6 mb-4">
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
                <p className="card-text">By: {blog.userId.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-5">
        <p className="text-center">&copy; 2024 My Blog Website</p>
      </footer>
    </div>
        </div>
    </>
  )
}

export default Blogs