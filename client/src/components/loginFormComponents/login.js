import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import submitLoginForm from "./submitLoginForm";
import LoginForm from "./loginForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return(
  <Provider store={store}>
    <div >
      <LoginForm onSubmit={submitLoginForm} initialValues={{ UserName: '', Password: '' }} />
    </div>
  </Provider>
    );
  }
}
export default Login;