import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from '../contexts/AuthContexts';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    number: '',
    confirmpassword: '',
    gender: '',
    bloggertype: ''
  });
  const [message, setMessage] = useState('')
  const navigate = useNavigate();
  const { setActiveUser } = useAuth();
  const submit = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/users/signup', formData);
      const { newUser } = response.data;
      localStorage.setItem('user', JSON.stringify(newUser)); 
      setActiveUser(newUser); // Set user data in context
      setMessage('User created successfully');
      setTimeout(() => {
        navigate('/blogs');
      }, 2000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      
      } else {
        console.error('Failed to create user', error);
        setMessage('Failed to create user');
      }
    }

  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <>
      <form onSubmit={submit} >

        <div className="form-floating mb-3">
          <input type="text" className="form-control" name='name' placeholder="fullname" onChange={handleChange} required />
          <label for="floatingInput">Full Name </label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" name='username' placeholder="username" onChange={handleChange} required />
          <label for="floatingInput">User Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" name='email' placeholder="name@example.com" onChange={handleChange} required />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" name='number' placeholder="Number" onChange={handleChange} required />
          <label for="floatingInput">Contact No.</label>
        </div>
        <div className="form-floating mb-3">
          <select name="gender" className="form-select" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label for="floatingInput">Select Gender</label>
        </div>
        <div className="form-floating mb-3 p-2">
          <select className="form-select p-1" name="bloggertype" onChange={handleChange} required>
            <option value="" >Select Blogger Type</option>
            <option value="personal">Personal Blogger</option>
            <option value="corporate">Corporate Blogger</option>
            <option value="travel">Travel Blogger</option>
            <option value="daily">Daily Blogger</option>
          </select>
          <label htmlFor="floatingInput">Type of Blogger</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" name='password' placeholder="Password" onChange={handleChange} required />
          <label for="floatingInput">Password</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" name='confirmpassword' placeholder="Confirm Password" onChange={handleChange} required />
          <label for="floatingPassword">Confirm Password</label>
        </div>
        {message ?
        <>
            <div class="spinner-border spinner-border-sm p-2 text-light" role="status">
          </div>   {message}
          
        </>
            : ""}

        <p></p>
        <button type="submit" className="btn btn-outline-light mt-5 p-2 w-75">Sign In</button>
      </form>

    </>
  )
}

export default SignUp