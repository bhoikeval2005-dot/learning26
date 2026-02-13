import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                Netflix Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/netflixMovies">
              Movies 
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/FunctionDemo1">
                Function
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/UseStateDemo1">
                UseStateDemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/UseStateDemo2">
                UseStateDemo2
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/UseStateDemo3">
                UseStateDemo3
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/employees">
                Employees
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
