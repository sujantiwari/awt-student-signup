import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <h1>Student Projects and Theses</h1>
          <p className="text-justify">You get the possibility to learn about interactive media,
          improve coding skills and establish contacts to prominent
          companies of the media industry. Additionally, we provide
          support for your bachelor or master thesis.

          The menu to the left sorts project themes by working areas.
          Catch up on open projects. We are looking forward to your
          apply!</p>
          <hr />
          <h3>Search by Categories</h3>
          <ul className="text-dark">
            <Link to={'/category1'} className="nav-link text-danger"> Category 1 </Link>
            <li>Category 2</li>
            <li>Category 3</li>
            <li>Category 4</li>
            <li>Category 5</li>
          </ul>

        </div>
    );
  }
}

export default Home;
