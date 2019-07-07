import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class VertMenu extends Component {
  render() {
    return (
          <div>
            <Link to={'/'} className="nav-link"> Home </Link>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <Link to={'/category1'} className="nav-link"> Category 1 </Link>
                  <ul className="nav flex-column ml-3">
                    <li className="nav-item">
                      <Link to={'/topic1'} className="nav-link"> Topic 1 </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Topic 3</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Category 2</a>
                    <ul className="nav flex-column ml-3">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Topic 1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Topic 2</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Topic 3</a>
                      </li>
                    </ul>
                  </li>
                <li class="nav-item">
                  <Link to={'/about'} className="nav-link"> Category 3 </Link>
                </li>
                <li class="nav-item">
                  <Link to={'/category1'} className="nav-link"> Category 4 </Link>
                </li>
              </ul>
          </div>
    );
  }
}

export default VertMenu;
