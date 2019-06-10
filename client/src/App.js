import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import { render } from 'react-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import About from './components/About';
import Topic1 from './components/Topic1';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HorBar from './components/HorBar';
import VertMenu from './components/VertMenu';
import MenuAppBar from './components/MenuAppBar';
import Category1 from './components/Category1';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  state={
    fields: {},
  };

  onSubmit = (fields) =>{
    this.setState({fields});
  };
  render() {
    return (

      <Router>
      <MenuAppBar/>
      <div className="container">
        <div className="row">
          <div class="col-sm-2 mine">
            <VertMenu />
          </div>
          <div class="col-sm-8">
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/category1' component={Category1} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/topic1' component={Topic1} />
              <Route exact path='/register' component={Register} />
          </Switch>
          </div>
          <div class="col-sm-2 mine">
            <HorBar/>
          </div>
        </div>
      </div>
      <Footer/>
      </Router>
    );
  }
}

export default App;
