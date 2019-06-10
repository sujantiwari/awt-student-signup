import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import '../App.css';

const Topics = ({match}) => {
  return (<h1>Register for: {match.params.theTopics}</h1>)
}
class Topic1 extends Component {
  render() {
    return (
        <div className="container">
        <h4>Topic Title: Topic 1</h4>
        <p className="text-justify">
        <br />
        <h5>Description</h5>
        You get the possibility to learn about interactive media,
        improve coding skills and establish contacts to prominent
        companies of the media industry. Additionally, we provide
        support for your bachelor or master thesis.
        <br />
        The menu to the left sorts project themes by working areas.
        Catch up on open projects. We are looking forward to your
        apply!</p>
        <hr />
        <h5>Your Tasks:</h5>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <h5>Required Skills:</h5>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <h5>Required Technologies:</h5>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <h5>Related Topics:</h5>
        <ul className="text-dark">
          <Link to={'/topic1'} className="nav-link text-danger"> Topic 1 </Link>
          <Link to={'/category1'} className="nav-link text-danger"> Topic 1 </Link>
        </ul>
        <h5>Supervisor:</h5>
        <hr />
        <div className=" col text-center">
          <Link to={'/register'} className="nav-link text-danger btn btn-info heraw"> Register </Link>
        </div>
      </div>

    );
  }
}

export default Topic1;
