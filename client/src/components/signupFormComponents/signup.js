import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import submitForm from "./submitSignupForm";
import SignupForm from "./signupForm";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:9000/project')
      .then(response => response.json())
      .then(data => {
        this.setState({ projects: data.map(x=>({label :x.ProjectName, value: x.ProjectId})) });
    });
  }
  render() {
    var { projects } = this.state;
    var fields =[];
    return(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Register</h2>
      <SignupForm onSubmit={submitForm} projects={projects} fields={fields} />
    </div>
  </Provider>
    );
  }
}
export default Signup;