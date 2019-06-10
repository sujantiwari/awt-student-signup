import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import FormContainer from '../formComponents/FormContainer';
import MoreStudents from '../formComponents/MoreStudents';

class Register extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-6"><FormContainer /></div>
          <div className="col-md-6"><MoreStudents /></div>
        </div>
    );
  }
}

export default Register;
