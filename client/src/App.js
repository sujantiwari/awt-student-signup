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
import VertMenu from './components/VertMenu';
import MenuAppBar from './components/MenuAppBar';
import Category from './components/Category';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch, Route,withRouter, Link } from 'react-router-dom';
import Admin_Panel from './components/Admin_Panel';
import AdminPanel from './components/AdminPanel';
import MainAdminPanel from './components/MainAdminPanel';
import AddEditProject from './components/ProjectFormComponents/AddEditProject';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <Router>
        <MenuAppBar/>
        <div className="container" >
          <div className="row">
            <div className="col-sm-2 mine">
              <VertMenu />
            </div>
            <div className="col-sm-10" style={{padding:'10px 10px 10px 10px'}}>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/category/:id' component={Category} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/project/:id' component={Project} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/adminpanel' component={AdminPanel} />
                <Route exact path='/admin_panel' component={Admin_Panel} />
                <Route exact path='/main_admin_panel' component={MainAdminPanel} />
                <Route exact path='/projectEdit' component={AddEditProject} />
                <Route exact path='/projectEdit/:id' component={AddEditProject} />
                <Route exact path="/login"  component={Login} />
            </Switch>
            </div>
          </div>
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;
