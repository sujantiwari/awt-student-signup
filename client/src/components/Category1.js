import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Category1 extends Component {
  render() {
    return (
        <div>
        <h2>Category 1</h2>
        <p className="text-justify">
        <br />
        You get the possibility to learn about interactive media,
        improve coding skills and establish contacts to prominent
        companies of the media industry. Additionally, we provide
        support for your bachelor or master thesis.
        <br />
        The menu to the left sorts project themes by working areas.
        Catch up on open projects. We are looking forward to your
        apply!</p>
        <hr />
        <h3>Topics under this Category</h3>
        <ul className="text-dark">
          <Link to={'/topic1'} className="nav-link text-danger"> Topic 1 </Link>
          <Link to={'/category1'} className="nav-link text-danger"> Topic 1 </Link>
          <Link to={'/category1'} className="nav-link text-danger"> Topic 1 </Link>
          <Link to={'/category1'} className="nav-link text-danger"> Topic 1 </Link>
          <Link to={'/category1'} className="nav-link text-danger"> Topic 1 </Link>
        </ul>
        </div>
    );
  }
}

export default Category1;
