import React from 'react'
import { useAuth } from '../contexts/AuthContexts'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { activeUser, clearUser } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setTimeout(() => {
      clearUser(null)
      navigate('/')
    }, 3000);
  }

  return (
    <>
      <nav className="navbar navbar-expand d-flex justify-content-center " data-bs-theme='dark'>
        <div className="navbar ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <>
                {
                  !activeUser ?
                    <>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">HOME</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/about">ABOUT</a>
                      </li>
                    </> :
                    <>
                    <li className="nav-item">
                        <a className="nav-link" href="/home">HOME</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/blogs">BLOGS</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/myblogs">MY BLOGS</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          PROFILE
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href='/profile' >{activeUser?.username}</a></li>
                          <li><button class="dropdown-item bg-danger" onClick={logout}>logout</button></li>
                        </ul>
                      </li>
                    </>
                }
              </>
            </ul>


          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar