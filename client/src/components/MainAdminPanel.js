import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(group_no, student_name, email, matric, topic1, topic2, topic3) {
  return { group_no, student_name, email, matric, topic1, topic2, topic3 };
}

const rows = [
  createData(123,'Tochukwu Okorie', 't.okorie@live.com', '123456', 'Cloud Computing', 'Machine Learning', 'Computer Vision'),
];

export default function AdminPanel() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
        <h2 align="center">Students View</h2>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <TableCell align="right">Group Number</TableCell>
            <TableCell align="right">Student Name</TableCell>
            <TableCell align="right">Email Address</TableCell>
            <TableCell align="right">Matric No.</TableCell>
            <TableCell align="right">Topic1</TableCell>
            <TableCell align="right">Topic 2</TableCell>
            <TableCell align="right">Topic 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row}>
              <TableCell align="right">{row.group_no}</TableCell>
              <TableCell align="right">{row.student_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.matric}</TableCell>
              <TableCell align="right">{row.topic1}</TableCell>
              <TableCell align="right">{row.topic2}</TableCell>
              <TableCell align="right">{row.topic3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <hr />
      <div align="center"><button>Download CSV</button></div>
    </Paper>
  );
}