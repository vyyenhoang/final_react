import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

function Nav ({user}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">SCMFinal</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          {/* Need the missing links to the tours and new tour */}
        
          {user ? (

        <li className="nav-item dropdown">
        <a href="" className="nav-link dropdown-toggle" id="toursDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tours
        </a>
        
        <div className="dropdown-menu" aria-labelledby="toursDropdown">
          <Link to="/tours" className="dropdown-item">Tours List</Link>

         
            <Fragment>
              <div className="dropdown-divider"></div>
              <Link to="/tours/new" className="dropdown-item">New Tours</Link>
            </Fragment>
          
        </div>
       
      </li>
         
         ) : null}

        </ul>
      
        <ul className="navbar-nav">
          {user ? (
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                <i className="fa fa-sign-out"></i>
                Logout
              </Link>
            </li>
          ) : (
            <Fragment>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  <i className="fa fa-user-plus"></i>
                  Register
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <i className="fa fa-sign-in"></i>
                  Login
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;