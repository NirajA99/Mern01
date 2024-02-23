import React, { useState } from 'react'

function Blogs() {
  const [newBlog , setNewBlog] = useState({
    title : '',
    content : '',

  })
  return (
    <>
    <div className="container-fluid bg-secondary-subtle text-secondary-emphasis">

   <div className="p-5  vh-100">
      {/* Header */}
      <header className="mb-4">
        <h1 className="text-center">My Blog Website</h1>
      </header>

      {/* Blog creation form */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter blog title"
            // value={newBlogTitle}
            // onChange={(e) => setNewBlogTitle(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Enter blog content"
            // value={newBlogContent}
            // onChange={(e) => setNewBlogContent(e.target.value)}
          ></textarea>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Featured Image URL"
            // value={featuredImage}
            // onChange={(e) => setFeaturedImage(e.target.value)}
          />
          <button className="btn btn-primary btn-block"
          //  onClick={createBlog}
           >Create Blog</button>
        </div>
      </div>

      {/* Display user's blogs */}
      <div className="row">
      <h2 className="">All Blogs </h2>
        {/* {blogs.map(blog => (
          <div key={blog.id} className="col-md-6 mb-4">
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
                <p className="card-text">By: {blog.username}</p>
              </div>
            </div>
          </div>
        ))} */}
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