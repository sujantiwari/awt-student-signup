import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class HorBar extends Component {
  render() {
    return (
          <div>
            <br />
            <Link to={'/'} className="nav-link"> News </Link>
            <Link to={'/'} className="nav-link"> Resources </Link>
          </div>
    );
  }
}

export default HorBar;
