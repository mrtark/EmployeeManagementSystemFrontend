import React from 'react'

export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light" style={{"backgroundColor":"red"}}>
          <div className="container">
          <a className="navbar-brand" href="#"><i className={props.icon}></i> E</a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" aria-current="page">Ana Sayfa <span className="visually-hidden">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Employee</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" >Create</a>
                  <a className="dropdown-item" >List</a>
                </div>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
    </>
  )
}
