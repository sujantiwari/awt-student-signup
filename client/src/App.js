import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import { render } from 'react-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HorBar from './components/HorBar';
import VertMenu from './components/VertMenu';
import MenuAppBar from './components/MenuAppBar';
import Category from './components/Category';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch, Route,withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <MenuAppBar/>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 mine">
              <VertMenu />
            </div>
            <div className="col-sm-8">
            <hr />
            <Switch>
                <Route exact path='/' component={withRouter(Home)} />
                <Route exact path='/about' component={withRouter(About)} />
                <Route exact path='/category/:id' component={withRouter(Category)} />
                <Route exact path='/contact' component={withRouter(Contact)} />
                <Route exact path='/project/:id' component={withRouter(Project)} />
                <Route exact path='/register' component={withRouter(Register)} />
            </Switch>
            </div>
            <div className="col-sm-2 mine">
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
