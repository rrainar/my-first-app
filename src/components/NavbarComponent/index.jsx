import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import './styles.css'

function NavbarComponent() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src="https://util.bitrixsoft.com/upload/update/f5c/pipedrive_2.png" width="100" height="90"
            className="d-inline-block align-top;" alt=""></img>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
            <Link className="hoho"  to="/">Home <span className="sr-only hoho"></span></Link>
            </a>
            <a className="nav-item nav-link" href="#">
           <Link className="hoho" to="/tribes" size="+1">Tribes</Link>
            </a>
            <a className="nav-item nav-link hoho" href="#">
            <Link className="hoho" to="/employees">Employees</Link>
            </a>
            <li id="search-bar" className="pull-right toomas">
              <form className="d-flex" role="search"method="get" action="search.html">
                <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" class="Search" name="search" />
                <button className="btn btn-outline-success" value="Search" type="submit">Search</button>
              </form>
            </li>
          </div>
        </div>
      </nav>
    )
}

export default NavbarComponent;