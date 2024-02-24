import axios from "axios";
import { createContext, useContext } from "react";

const BlogContext = createContext()

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
    const createBlog = async (newblog) => {
        let response = await axios.post('http://localhost:4000/blogs/newBlog', newblog)
        // let { newBlog } = response.data;
        console.log(response);
        
    

    }

    return (
        <BlogContext.Provider value={{createBlog}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;