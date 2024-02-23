import React from 'react'

const Menu = () => {
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <div className="container-fluid">
        <a href="/" className="navbar-brand">DotNet Movie</a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-uto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a href="/genres" className="nav-link">Genres</a>
                </li>
            </ul>
        </div>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a href="/register" className="nav-link"><i className="ri-account-box-line text-primary"></i> Register</a>
            </li>
            <li className="nav-item">
                <a href="/login" className="nav-link"><i className="ri-login-box-line text-primary"></i>Login</a>
            </li>
        </ul>
    </div>
</nav>


</>
  )
}

export default Menu