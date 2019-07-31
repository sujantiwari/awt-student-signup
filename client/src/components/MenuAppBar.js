import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

export class MenuAppBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      ShowAdminTabs : false
    };
  }
  componentDidMount() {
    var authToken = localStorage.getItem("x-auth-token");
    if(authToken)
    {
      fetch('http://localhost:9000/auth/verify', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': authToken
        }
      }).then( response => response.json())
        .then(response => {
          if(response && response.success == "true"){
          this.setState({ ShowAdminTabs: true });
        }
      else{
        this.setState({ ShowAdminTabs:false  });
      }}).catch(error=>{
          this.setState({ ShowAdminTabs:false  });
        });

    }
    else{
      this.setState({ ShowAdminTabs:false  });
    }
  }
  render(){
    const { ShowAdminTabs } = this.state;
    const handleLogOut = function(e){
      e.preventDefault();
      if (window.confirm("Do you want to log out?")) { 
        localStorage.clear();
        window.location = '/';
      }
    };
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
              <li className="nav-item" style={{ display: (ShowAdminTabs ? 'block' : 'none') }}>
                <Link to={'/adminpanel'} className="nav-link" > Projects </Link>
              </li>
              <li className="nav-item" style={{ display: (ShowAdminTabs ? 'block' : 'none') }}>
                <Link to={'/studentprojects'} className="nav-link" > Students </Link>
              </li>
              <li className="nav-item">
                <NavLink to={'/about'} activeStyle={{color:'red'}} className="nav-link"> About </NavLink>
              </li>
              <li className="nav-item">
                <Link to={'/contact'} className="nav-link"> Contact </Link>
                </li>
              <li className="nav-item" style={{ display: (!ShowAdminTabs ? 'block' : 'none') }}>
                <Link to={'/login'} className="nav-link"> Admin </Link>
              </li>
              <li className="nav-item" style={{ display: (!ShowAdminTabs ? 'block' : 'none') }}>
                <Link to={'/datadeletionrequest'} className="nav-link"> Request Personal Data Deletion </Link>
              </li>
              <li className="nav-item" style={{ display: (ShowAdminTabs ? 'block' : 'none') }}>
                <a href='#' className="nav-link" onClick={e => handleLogOut(e)}>LogOut</a>
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
