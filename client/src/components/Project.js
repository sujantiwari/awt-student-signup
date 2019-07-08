import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import '../App.css';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {
        ProjectRequirements:[],
        Tasks:[]
      },
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.getData(id);
  }
  getData(id){
    var link = 'http://localhost:9000/project/'+id ;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        this.setState({ project: data });
      });
  }
  render() {
    const {project } = this.state;
    return (
        <div className="container">
        <h4>{project.ProjectName}</h4>
        <br />
        <h5>Description</h5>
        <p className="text-justify">
          {project.ProjectDescription}
        </p>
        <hr />
        <h5>Your Tasks:</h5>
        <ul>
        {project.Tasks.map(task =>
          <li>{task}</li>
          )}
        </ul>
        <h5>Required Skills:</h5>
        <ul>
        {project.ProjectRequirements.map(skill =>
          <li>{skill}</li>
          )}
        </ul>
        <h5>Supervisor: {project.ProjectSupervisorId}</h5>
        <hr />
        <div className=" col text-center">
          <Link to={'/register'} className="nav-link text-danger btn btn-info heraw"> Register </Link>
        </div>
      </div>

    );
  }
}

export default Project;
