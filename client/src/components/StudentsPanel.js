import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class StudentsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signups: [],
      classes : this.getStyles()
    };
  }
  handleDelete (e){
    e.preventDefault();
    if (window.confirm("The signup will be deleted. Are you sure?")) { 
      fetch('http://localhost:9000/signup/delete/'+e.target.value, {
        headers: {
          'x-auth-token': localStorage.getItem("x-auth-token")
        },    
        method: 'DELETE'
      }).then( response => response.json())
      .then(result =>{
      if(result)
      {
        if(result.message && result.success == false)
        {
          window.alert('An error has occured. Please try again later.');
        }
        else{
        var message = 'Project deleted successfully';
        window.alert(message);
        window.location.reload();
        }
      }
      else{
        window.alert('An error has occured. Please try again later.');
      }
    });
    }
  }
  componentDidMount() {
    fetch('http://localhost:9000/signup/all/report', {
      headers: {
        'x-auth-token': localStorage.getItem("x-auth-token")
      }
    })
      .then(response => response.json())
      .then(data =>{ 
        if(data.message && data.success == false)
        {
            window.location = '/login';
        }
        else{
        this.setState({ signups: data });
        }
      });
  }
  getStyles (){ return makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }));
}
  render() {
    const { signups, classes } = this.state;
    console.log(signups);
    const DownloadFile =function(e){
      e.preventDefault();
      fetch('http://localhost:9000/signup/all/report/file',{
        headers: {
          'x-auth-token': localStorage.getItem("x-auth-token")
        }
      })
    .then(resp => resp.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      // the filename you want
      a.download = 'Student Signup Report.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
  })
  .catch(() => alert('oh no!'));
    }
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
            <TableCell align="right">Delete Signup</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {signups.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="right">{row.GroupName}</TableCell>
              <TableCell align="right">{row.StudentName}</TableCell>
              <TableCell align="right">{row.EmailAddress}</TableCell>
              <TableCell align="right">{row.MatriculationNumber}</TableCell>
              <TableCell align="right">{row.FirstProject}</TableCell>
              <TableCell align="right">{row.SecondProject}</TableCell>
              <TableCell align="right">{row.ThirdProject}</TableCell> 
              <TableCell align="left"><button className="btn btn-primary" value={row.SignupId} onClick={this.handleDelete} >Delete</button></TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <hr />
      <div align="center" >
        <a href='#' className="nav-link" onClick={e => DownloadFile(e)}><button  className="nav-link btn btn-info" >Download CSV</button></a></div>
    </Paper>
  );
          }
}
export default StudentsPanel;