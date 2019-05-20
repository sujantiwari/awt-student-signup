import React, { Component } from 'react';
import './App.css';
import AdminTable from './admin-dashboard-table'


class Admin extends Component {
  render() {
    return (
      <div className="Admin">
            <h1>ADMIN PANEL</h1>
        <AdminTable />

      </div>
    );
  }
}
  

export default Admin;
