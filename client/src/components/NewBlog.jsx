import React, { useState } from 'react'
import { useBlog } from '../contexts/BlogContext';
import { useAuth } from '../contexts/AuthContexts';

function NewBlog() {
    const [newBlog, setNewBlog] = useState({
        title : '',
        content : '',
    });
    const {activeUser} = useAuth();
    const { createBlog} = useBlog();
    const create = (e) => {
        e.preventDefault();
        createBlog({ ...newBlog, userId: activeUser._id }); 
        setNewBlog({
            title: '',
            content: '',
        });
    }
    
  return (
    <>
     {/* Blog creation form */}
     
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter blog title"
            name='title'
            onChange={(e)=> setNewBlog( {...newBlog , [e.target.name] : e.target.value } )}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Enter blog content"
            name='content'
            onChange={(e)=> setNewBlog( {...newBlog , [e.target.name] : e.target.value } )}
          ></textarea>
          <button className="btn btn-primary btn-block"
           onClick={create}
           >Create Blog</button>
        </div>
    </>
  )
}

export default NewBlog