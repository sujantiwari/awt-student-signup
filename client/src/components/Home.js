import React, { Component } from 'react';
import '../App.css';
import {  Link } from 'react-router-dom';

class Home extends Component {
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
          <ul className="thelinks">
          {categories.map((category, index)  =>
            <li key={index}>
              <Link to={'/category/'+category.CategoryId} className="link" > {category.CategoryName} </Link>
            </li>
          )}
          </ul>

        </div>
    );
  }
}

export default Home;
