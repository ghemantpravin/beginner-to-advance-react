import React from 'react'

function Practice_navbar(props) {
  return (
    <div className='container'>
        <div className="row">
            {/* <h1>Navbar Practice With Props</h1> */}
            <div className="col-md-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a class="nav-link" href="#">{props.menu1}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">{props.menu2}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">{props.menu3}</a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder={props.place} aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">{props.search}</button>
                  </form>
                </div>
              </div>
            </nav>
            </div>
        </div>


          <div className="row">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.head}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">{props.nav1}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">{props.nav2}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">{props.nav3}</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">{props.nav4}</a></li>
                        <li><a className="dropdown-item" href="#">{props.nav5}</a></li>
                        <li><a className="dropdown-item" href="#">{props.nav6}</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>

    </div>
  )
}

export default Practice_navbar
