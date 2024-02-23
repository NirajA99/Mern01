import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContexts';
import axios from 'axios';

function SignIn() {
    const [formData, setFormData] = useState({
        identifier : '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { setActiveUser } = useAuth();
    const handleChange = (e) => {
        // let {name , value} = e.target;
        // console.log(name + 'name' ,  'value' + value );
        // console.log(e);
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        console.log(formData);
    }
    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/users/signin', formData);
            const { user } = response.data;

            // Store user data in local storage
            localStorage.setItem('user', JSON.stringify(user));

            // Set user data in context
            setActiveUser(user);
            setMessage('Authentication Successful')
            console.log('Authentication successful', response.data);
            setTimeout(() => {
                // Add navigation logic if needed
                navigate('/blogs');
            }, 2000);

        }catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        // If the error response contains a message from the backend, display it
        setMessage(error.response.data.message);
      } else {
        // If there's no specific message from the backend, display a generic error message
        console.error('Athentication Failed', error);
        setMessage('Athentication Failed');
      }
    }
    }
    return (
        <form onSubmit={submit}  >
            <div class="form-floating mb-2">
                <input type="text"
                    class="form-control"
                    name='identifier'
                    placeholder="Email or Username"
                    onChange={handleChange} />
                <label for="floatingInput">Email or Username</label>
            </div>
            <div class="form-floating">
                <input type="password"
                    class="form-control"
                    name='password'
                    placeholder="Password"
                    onChange={handleChange} />
                <label for="floatingPassword">Password</label>
            </div>
            {message ?
          <p>{message}
            <div class="spinner-border spinner-border-sm p-2 text-light" role="status">
            </div></p> : ""}
            <button type='submit' class="btn btn-outline-light mt-5 p-2 w-75">Sign In</button>
        </form>
    )
}

export default SignIn