import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class VertMenu extends Component {
  render() {
    return (
          <div>
            <Link to={'/'} className="nav-link"> Home </Link>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <Link to={'/category1'} className="nav-link"> Category 1 </Link>
                  <ul class="nav flex-column ml-3">
                    <li class="nav-item">
                      <Link to={'/topic1'} className="nav-link"> Topic 1 </Link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Topic 2</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Topic 3</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Category 2</a>
                    <ul class="nav flex-column ml-3">
                      <li class="nav-item">
                        <a class="nav-link" href="#">Topic 1</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Topic 2</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Topic 3</a>
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
