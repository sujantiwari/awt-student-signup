import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import '../App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {  Link } from 'react-router-dom';

class VertMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:9000/category')
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  }
  render() {
    const { categories } = this.state;
    return (
          <div><br />
            <button className={"heidi_3"}><Link to={'/'} > Home </Link></button>
          {categories.map((category, index) =>
          <div key={index}>
                <Link to={'/category/'+category.CategoryId} className="nav-link" >{category.CategoryName}</Link>
                <br/>
          </div>
          )}
          </div>
    );
  }
}

export default VertMenu;
