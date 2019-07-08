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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function AdminPanel() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
        <h2 align="center">Projects View</h2>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Topics</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Tasks</TableCell>
            <TableCell align="right">Skills</TableCell>
            <TableCell align="right">Related Technologies</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"><button>Edit</button></TableCell>
              <TableCell align="right"><button title="Delete">Del</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <hr />
      <div align="center"><button><Link to={'/add_new_project'} className="link"> Add New Project </Link></button>
            &nbsp;&nbsp;<button>
            <Link to={'/main_admin_panel'} className="link"> View Students </Link></button>
    </div>
    </Paper>
  );
}