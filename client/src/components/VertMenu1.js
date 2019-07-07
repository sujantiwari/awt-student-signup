import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class VertMenu1 extends Component {
  render() {
    return (
          <div><br />
            <button className="heidi_3"><Link to={'/'} > Home </Link></button>
            <div className="my_dropdown">
              <button className="my_dropbtn">
                <Link to={'/category1'}> Category 1 </Link>
              </button>
              <div className="my_dropdown-content">
              <Link to={'/topic1'} className="nav-link"> Topic 1 </Link>
              <Link to={'/topic1'} className="nav-link"> Topic 2 </Link>
              <Link to={'/topic1'} className="nav-link"> Topic 3 </Link>
              </div><br />
            </div>
            <div className="my_dropdown">
              <button className="my_dropbtn">
                <Link to={'/category1'}> Category 2 </Link>
              </button>
              <div className="my_dropdown-content">
              <Link to={'/topic1'} className="nav-link"> Topic 1 </Link>
              <Link to={'/topic1'} className="nav-link"> Topic 2 </Link>
              <Link to={'/topic1'} className="nav-link"> Topic 3 </Link>
              </div><br />
            </div>
            <div className="my_dropdown">
              <button className="my_dropbtn">
                <Link to={'/category1'}> Category 3 </Link>
              </button>
              <div className="my_dropdown-content">
              <Link to={'/topic1'} className="nav-link"> Topic 1 </Link>
              <Link to={'/topic1'} className="nav-link"> Topic 2 </Link>
              <Link to={'/topic1'} className="nav-link"> Topic 3 </Link>
              </div><br />
            </div>
            <div className="my_dropdown">
              <button className="my_dropbtn">
                <Link to={'/category1'}> Category 4 </Link>
              </button>
              <div className="my_dropdown-content">
              <Link to={'/topic1'} className="nav-link"> Topic 1 </Link>
              <Link to={'/topic1'} className="nav-link"> Topic 2 </Link>
              <Link to={'/topic1'} className="nav-link"> Topic 3 </Link>
              </div><br />
            </div>
          </div>
    );
  }
}

export default VertMenu1;
