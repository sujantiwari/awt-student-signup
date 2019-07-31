import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import DataDeletionForm from "./dataDeletionRequestForm";
import submitDataDeletionRequest from "./submitDataDeletionRequest";

class DataDeletionRequest extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Data Deletion Request</h2>
      <DataDeletionForm onSubmit={submitDataDeletionRequest} initialValues={{ Email: '', MatriculationNumber: '' }} />
    </div>
  </Provider>
    );
  }
}
export default DataDeletionRequest;