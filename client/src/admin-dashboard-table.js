import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Aritificial Intelligence', 159, 6.0, 24, 4.0),
  createData('Machine Learning', 237, 9.0, 37, 4.3),
  createData('Deep Learning', 262, 16.0, 24, 6.0),
  createData('React Signup', 305, 3.7, 67, 4.3),
  //createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function AdminTable(props)  {
  const { classes } = props;

  return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow fontSize="large">
            <TableCell>Project Name </TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Requirements</TableCell>
            <TableCell align="right">Students Enrolled</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
                  <TableCell>
                      <Fab color="secondary" aria-label="Edit" className={classes.fab} size="small">
                          <EditIcon fontSize="small"/>
                      </Fab>
                  </TableCell>
                  <TableCell>
                      <Fab aria-label="Delete" className={classes.fab}size="small">
                          <DeleteIcon />
                      </Fab></TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
  );
};
AdminTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminTable);
