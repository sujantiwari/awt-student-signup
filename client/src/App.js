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
import VertMenu1 from './components/VertMenu1';
import MenuAppBar from './components/MenuAppBar';
import Category1 from './components/Category1';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Admin from './components/Admin';
import Admin_Panel from './components/Admin_Panel';
import AdminPanel from './components/AdminPanel';
import MainAdminPanel from './components/MainAdminPanel';
import ProjectForm from './components/ProjectForm';

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
            <VertMenu1 />
          </div>
          <div class="col-sm-8">
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/category1' component={Category1} />
              <Route exact path='/adminpanel' component={AdminPanel} />
              <Route exact path='/admin' component={Admin} />
              <Route exact path='/topic1' component={Topic1} />
              <Route exact path='/admin_panel' component={Admin_Panel} />
              <Route exact path='/main_admin_panel' component={MainAdminPanel} />
              <Route exact path='/add_new_project' component={ProjectForm} />
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
