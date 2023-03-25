import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../product-logo.png'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" >
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" style={{ width: "60px", height: "35px", marginLeft: "20px" }} />
      </Link>
      <div className="collapse navbar-collapse" id="navbar1">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header