import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

export class MenuAppBar extends React.Component{
  render(){
    return(
      <div className="container">
      <div class="container bg-secondary navbar-dark">
        <div class="row">
          <div class="col-8 ">
            <h2 className="myH2">AWT SS2019</h2>
          </div>
          <div class="col-4 ">
          <nav class="navbar navbar-expand-sm bg-secondary justify-content-center">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to={'/about'} activeStyle={{color:'red'}} className="nav-link"> About </NavLink>
              </li>
              <li class="nav-item">
                <Link to={'/contact'} className="nav-link"> Contact </Link>
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
