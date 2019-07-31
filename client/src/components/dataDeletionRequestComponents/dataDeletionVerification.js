import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import DataDeletionVerificationForm from "./dataDeletionVerificationForm";
import submitDataDeletionVerification from "./submitDataDeletionVerification";

class DataDeletionVerification extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Data Deletion Request</h2>
      <DataDeletionVerificationForm onSubmit={submitDataDeletionVerification} initialValues={{ Token: ''}} />
    </div>
  </Provider>
    );
  }
}
export default DataDeletionVerification;