import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import '../App.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';

export default function AdminPanel() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Topic', field: 'topic_name' },
      { title: 'Description', field: 'description' },
      { title: 'Tasks', field: 'tasks' },
      //{ title: 'Skills', field: 'skills' },
      { title: 'Related Technologies', field: 'rel_tech' },
    ],
    data: [
      { 
        topic_name: 'Cloud Computing',
        description: 'Elements of Cloud Computing',
        tasks: 'Design a cloud computing application',
        //skills: 'Python',
        rel_tech: 'Cloud' },

      {
        topic_name: 'Zerya Betül',
        description: 'Baran',
        tasks: 2017,
      //  skills: 34,
        rel_tech: 'Something',
      },
    ],
  });

  return (
    <AdminPanel
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
