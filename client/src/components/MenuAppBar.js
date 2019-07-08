import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

export class MenuAppBar extends React.Component{
  render(){
    return(
      <div className="container">
      <div className="container bg-secondary navbar-dark">
        <div className="row">
          <div className="col-8 ">
            <h2 className="myH2">AWT SS2019</h2>
          </div>
          <div className="col-4 ">
          <nav className="navbar navbar-expand-sm bg-secondary justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={'/about'} activeStyle={{color:'red'}} className="nav-link"> About </NavLink>
              </li>
              <li className="nav-item">
                <Link to={'/contact'} className="nav-link"> Contact </Link>
                </li>
              <li class="nav-item">
                <Link to={'/adminpanel'} className="nav-link"> Contact </Link>
              </li>
              <li class="nav-item">
                <Link to={'/admin'} className="nav-link"> Admin </Link>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default MenuAppBar;
