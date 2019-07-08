import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import FormContainer from '../formComponents/FormContainer';
import MoreStudents from '../formComponents/MoreStudents';
import  Signup  from "./signupFormComponents/signup";
class Register extends Component {
  render() {
    return (
        <div className={"row"}>
          <div className={"col-md-12"}>
              <Signup className={"col-md-12"}/>
          </div>
        </div>
    );
  }
}

export default Register;
