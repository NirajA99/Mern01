import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth';
import Blogs from './pages/Blogs';
import MyBlogs from './pages/MyBlogs';
import Profile from './pages/Profile';
import About from './pages/About';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AuthProvider from './contexts/AuthContexts';
import Navbar from './components/Navbar';

function App() {


  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<Auth />}
            >
              <Route
                path='/signup'
                element={<SignUp />} />
              <Route
                path='/signin'
                element={<SignIn />} />
            </Route>
            <Route
              path='/blogs'
              element={<Blogs />}
            />
            <Route
              path='/myblogs'
              element={<MyBlogs />}
            />
            <Route
              path='/profile'
              element={<Profile />}
            />
            <Route
              path='/about'
              element={<About />}
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
