import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/netflixhome">
                Netflix Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/netflixMovies">
              Movies 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FunctionDemo1">
                Function
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/UseStateDemo1">
                UseStateDemo1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/UseStateDemo2">
                UseStateDemo2
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/UseStateDemo3">
                UseStateDemo3
              </Link>
            </li> */}
             <li className="nav-item">
              <Link className="nav-link" to="/employees">
                Employees
              </Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link" to="/inputdemo1">
                InputDemo1
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/inputdemo2">
                InputDemo2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo1">
                FormDemo1
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
