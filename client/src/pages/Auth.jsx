import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Auth() {
  return (
    <>
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
    <div className="card border-0 rounded-3 shadow " style={{ maxWidth: "800px" , width: "90%", maxHeight: "80%" }} data-bs-theme='dark'>
        <div className="card-header bg-dark-subtle text-center" >
            <h5 className="card-title mb-0">Welcome</h5>
        </div>
        <div className="card-body p-4">
            <ul className="nav nav-pills nav-fill fs-5">
                <li className="nav-item">
                    <Link className="nav-link btn btn-outline-secondary" to="/signin">SIGN IN</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn btn-outline-secondary" to="/signup">SIGN UP</Link>
                </li>
            </ul>
            <div className="text-center mt-4">
                <Outlet />
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Auth

        