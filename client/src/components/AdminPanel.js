import React , { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class AdminPanel extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      classes : this.useStyles()
    };
  }
  useStyles (){ return makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      minWidth: 650,
    },
  }));
}
handleDelete (e){
  e.preventDefault();
  if (window.confirm("The project will be deleted. Are you sure?")) { 
    fetch('http://localhost:9000/project/'+e.target.value, {
      method: 'DELETE'
    }).then( response => response.json())
    .then(result =>{
    if(result)
    {
      var message = 'Project deleted successfully';
      window.alert(message);
      window.location.reload();
    }
    else{
      window.alert('An error has occured. Please try again later.');
    }
  });
  }
}
  componentDidMount() {
    fetch('http://localhost:9000/project')
      .then(response => response.json())
      .then(data => {
        data.forEach(project=>{
          if(project.ProjectDescription && project.ProjectDescription.length >50)
            project.Description = project.ProjectDescription.substring(0, 47) +'...';
          else
            project.Description = project.ProjectDescription;
          var tasks = project.Tasks ?project.Tasks.toString():'';
          if(tasks.length >50)
            project.Task = tasks.substring(0, 47) +'...';
            else
              project.Task = tasks;
          var skills = project.ProjectRequirements?project.ProjectRequirements.toString(): '';
          if(skills.length >50)
            project.Skill = skills.substring(0, 47) +'...';
          else
              project.Skill = skills;
        });
        this.setState({ projects: data });
  });
  }
  render() {
    const { projects, classes } = this.state;
  return (
    <Paper className={classes.root}>
        <h2 align="center">Projects</h2>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Topics</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Tasks</TableCell>
            <TableCell align="left">Skills</TableCell>
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index}>
              <TableCell align="left">{project.ProjectName}</TableCell>
              <TableCell align="left">{project.CategoryInfo.CategoryName}</TableCell>
              <TableCell align="left">{project.Description}</TableCell>
              <TableCell align="left">{project.Task}</TableCell>
              <TableCell align="left">{project.Skill}</TableCell>
              <TableCell align="left">
                <Link to={'/projectEdit/'+project.ProjectId}>
                <button className="btn btn-primary" >Edit</button>
                </Link></TableCell>
              <TableCell align="left"><button className="btn btn-primary" value={project.ProjectId} onClick={this.handleDelete} >Del</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <hr />
      <div align="center"><button><Link to={'/projectEdit'} className="link"> Add New Project </Link></button>
            &nbsp;&nbsp;<button>
            <Link to={'/main_admin_panel'} className="link"> View Students </Link></button>
    </div>
    </Paper>
  );
}
}
export default AdminPanel;