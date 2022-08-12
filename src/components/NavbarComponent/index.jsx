import React from 'react'

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
              <font size="+1">Home</font> <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              <font size="+1">Tribes</font>
            </a>
            <a className="nav-item nav-link" href="#">
              <font size="+1">Employees</font>
            </a>
            <li id="search-bar" className="pull-right toomas">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
          </div>
        </div>
      </nav>
    )
}

export default NavbarComponent;